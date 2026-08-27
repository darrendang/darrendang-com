(() => {
  const PROJECT_URL = 'https://zlpjkixskskfcgmkajyd.supabase.co';
  const PUBLIC_KEY = 'sb_publishable_XBESWMhKrcGK0jMH6d9fnA_u_tuspI5';
  const APPROVED_EMAIL = 'dangphibang@gmail.com';
  const SESSION_ACCESS = 'dang_review_access';
  const SESSION_REFRESH = 'dang_review_refresh';

  const statusLabels = {
    received: 'Received',
    screened: 'Screened',
    under_review: 'Under review',
    selected: 'Selected',
    editing: 'Editing',
    approved: 'Approved',
    ready_to_publish: 'Ready to publish',
    published: 'Published',
    unpublished: 'Removed from public',
    declined: 'Declined',
    archived: 'Archived',
  };

  const editorialStatuses = ['received', 'screened', 'under_review', 'selected', 'editing', 'approved', 'declined', 'archived'];
  const publicationStatuses = new Set(['ready_to_publish', 'published', 'unpublished']);

  let submissions = [];
  let selectedId = null;

  const byId = (id) => document.getElementById(id);
  const loading = byId('review-loading');
  const login = byId('review-login');
  const denied = byId('review-denied');
  const workspace = byId('review-workspace');
  const queue = byId('review-queue');
  const detail = byId('review-detail');
  const metrics = byId('review-metrics');
  const filter = byId('review-status-filter');
  const search = byId('review-search');
  const errorBox = byId('review-error');
  const authMessage = byId('review-auth-message');
  const sessionLabel = byId('review-session-label');

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const decodeJwt = (token) => {
    try {
      const part = token.split('.')[1];
      const normalized = part.replaceAll('-', '+').replaceAll('_', '/');
      const json = decodeURIComponent(atob(normalized).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
      return JSON.parse(json);
    } catch {
      return null;
    }
  };

  const getAccess = () => sessionStorage.getItem(SESSION_ACCESS) || '';
  const getRefresh = () => sessionStorage.getItem(SESSION_REFRESH) || '';
  const clearSession = () => {
    sessionStorage.removeItem(SESSION_ACCESS);
    sessionStorage.removeItem(SESSION_REFRESH);
  };

  const storeCallbackSession = () => {
    if (!window.location.hash) return;
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const access = hash.get('access_token');
    const refresh = hash.get('refresh_token');
    if (access) {
      sessionStorage.setItem(SESSION_ACCESS, access);
      if (refresh) sessionStorage.setItem(SESSION_REFRESH, refresh);
      history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
    }
  };

  async function refreshSession() {
    const refresh = getRefresh();
    if (!refresh) return false;
    const response = await fetch(`${PROJECT_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: {
        apikey: PUBLIC_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh_token: refresh }),
    });
    if (!response.ok) {
      clearSession();
      return false;
    }
    const data = await response.json();
    if (!data.access_token) return false;
    sessionStorage.setItem(SESSION_ACCESS, data.access_token);
    if (data.refresh_token) sessionStorage.setItem(SESSION_REFRESH, data.refresh_token);
    return true;
  }

  async function authenticatedFetch(url, options = {}, allowRefresh = true) {
    const headers = new Headers(options.headers || {});
    headers.set('apikey', PUBLIC_KEY);
    headers.set('Authorization', `Bearer ${getAccess()}`);
    const response = await fetch(url, { ...options, headers });
    if (response.status === 401 && allowRefresh && await refreshSession()) {
      return authenticatedFetch(url, options, false);
    }
    return response;
  }

  const currentClaims = () => decodeJwt(getAccess());
  const isAuthorized = (claims) => Boolean(
    claims &&
    String(claims.email || '').toLowerCase() === APPROVED_EMAIL &&
    claims.app_metadata &&
    claims.app_metadata.provider === 'google'
  );

  function showOnly(section) {
    [loading, login, denied, workspace].forEach((el) => { if (el) el.hidden = el !== section; });
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.hidden = false;
  }

  function clearError() {
    errorBox.hidden = true;
    errorBox.textContent = '';
  }

  function formatDate(value) {
    if (!value) return '—';
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
  }

  function formatBytes(value) {
    const bytes = Number(value || 0);
    if (!bytes) return '';
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function defaultByline(item) {
    if (item.public_byline) return item.public_byline;
    if (item.attribution === 'anonymous') return 'Anonymous';
    if (item.attribution === 'first-name') return String(item.contributor_name || '').trim().split(/\s+/)[0] || 'Anonymous';
    return item.contributor_name || 'Anonymous';
  }

  function filteredSubmissions() {
    const status = filter.value;
    const q = search.value.trim().toLowerCase();
    return submissions.filter((item) => {
      if (status !== 'all' && item.status !== status) return false;
      if (!q) return true;
      const haystack = [item.title, item.contributor_name, item.contribution, item.lesson, item.audience, item.public_title, item.public_contribution, item.public_lesson, item.public_byline]
        .filter(Boolean).join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }

  function renderMetrics() {
    const count = (statuses) => submissions.filter((item) => statuses.includes(item.status)).length;
    const cards = [
      ['Received', count(['received'])],
      ['Editorial review', count(['screened', 'under_review', 'selected', 'editing'])],
      ['Approved', count(['approved'])],
      ['Ready', count(['ready_to_publish'])],
      ['Published', count(['published'])],
      ['Removed', count(['unpublished'])],
    ];
    metrics.innerHTML = cards.map(([label, value]) => `<div class="review-metric"><span>${label}</span><strong>${value}</strong></div>`).join('');
  }

  function renderQueue() {
    const items = filteredSubmissions();
    if (!items.length) {
      queue.innerHTML = '<div class="review-empty-queue">No submissions match this view.</div>';
      return;
    }
    queue.innerHTML = items.map((item) => {
      const title = item.title || item.lesson || 'Untitled contribution';
      return `<button type="button" class="review-queue-item${selectedId === item.id ? ' is-active' : ''}" data-review-id="${escapeHtml(item.id)}">
        <div class="review-queue-kicker"><span>${escapeHtml(statusLabels[item.status] || item.status)}</span><span>${escapeHtml(formatDate(item.created_at).split(',')[0])}</span></div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(item.contributor_name)} · ${escapeHtml(item.contribution_type)}</p>
      </button>`;
    }).join('');
  }

  function permission(label, value) {
    return `<div class="review-permission${value ? ' is-yes' : ''}"><strong>${value ? '✓' : '—'} ${escapeHtml(label)}</strong>${value ? 'Confirmed' : 'Not confirmed'}</div>`;
  }

  function editorialStatusOptions(item) {
    const currentIsPublication = publicationStatuses.has(item.status);
    const current = currentIsPublication
      ? `<option value="${escapeHtml(item.status)}" selected>${escapeHtml(statusLabels[item.status] || item.status)} — managed below</option>`
      : '';
    return current + editorialStatuses
      .map((value) => `<option value="${value}"${item.status === value ? ' selected' : ''}>${escapeHtml(statusLabels[value])}</option>`)
      .join('');
  }

  function checklistItem(name, label, help, checked) {
    return `<label class="publishing-check${checked ? ' is-checked' : ''}">
      <input type="checkbox" name="${name}"${checked ? ' checked' : ''} />
      <span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(help)}</small></span>
    </label>`;
  }

  function renderPublishingGate(item) {
    const eligible = ['approved', 'ready_to_publish', 'published', 'unpublished'].includes(item.status);
    if (!eligible) {
      return `<div class="review-section publishing-gate is-locked">
        <div class="publishing-gate-heading">
          <div><div class="eyebrow bronze">Publishing review</div><h4>Publication is a separate decision.</h4></div>
          <span class="publishing-stage">Waiting for editorial approval</span>
        </div>
        <p class="review-muted">Complete the editorial review and move this submission to <strong>Approved</strong>. The publishing gate will then open with final public copy, attribution, safety checks, and publish/remove controls.</p>
      </div>`;
    }

    const publicTitle = item.public_title ?? item.title ?? '';
    const publicContribution = item.public_contribution ?? item.contribution ?? '';
    const publicLesson = item.public_lesson ?? item.lesson ?? '';
    const publicByline = defaultByline(item);
    const allChecks = Boolean(item.publication_content_final && item.publication_permission_verified && item.publication_privacy_reviewed && item.publication_factual_reviewed && item.publication_attribution_verified && item.publication_presentation_reviewed);

    let stageCopy = 'Approved editorially. Complete the publishing review before release.';
    if (item.status === 'ready_to_publish') stageCopy = `Publishing review passed${item.publication_reviewed_at ? ` · ${formatDate(item.publication_reviewed_at)}` : ''}.`;
    if (item.status === 'published') stageCopy = `Live on DarrenDang.com${item.published_at ? ` · published ${formatDate(item.published_at)}` : ''}.`;
    if (item.status === 'unpublished') stageCopy = `Removed from the public collection${item.unpublished_at ? ` · ${formatDate(item.unpublished_at)}` : ''}. The private record is preserved.`;

    let actionButtons = '';
    if (item.status === 'approved') {
      actionButtons = '<button type="button" class="button button-dark" data-publish-action="ready">Mark ready to publish</button>';
    } else if (item.status === 'ready_to_publish') {
      actionButtons = '<button type="button" class="button button-dark" data-publish-action="publish">Publish now</button>';
    } else if (item.status === 'published') {
      actionButtons = `<a class="button button-outline review-button-small" href="${escapeHtml(item.published_url || `https://darrendang.com/shared-wisdom/#wisdom-${item.id}`)}" target="_blank" rel="noopener noreferrer">View live</a>
        <button type="button" class="button review-danger-button" data-publish-action="unpublish">Remove from public site</button>`;
    } else if (item.status === 'unpublished') {
      actionButtons = '<button type="button" class="button button-dark" data-publish-action="republish">Republish</button>';
    }

    return `<div class="review-section publishing-gate">
      <div class="publishing-gate-heading">
        <div><div class="eyebrow bronze">Publishing review</div><h4>Final public version</h4></div>
        <span class="publishing-stage">${escapeHtml(statusLabels[item.status] || item.status)}</span>
      </div>
      <p class="review-muted">${escapeHtml(stageCopy)}</p>

      <form id="review-publishing-form" class="review-editor publishing-form">
        <div class="publishing-copy-grid">
          <label><span>Public title</span><input name="public_title" type="text" value="${escapeHtml(publicTitle)}" placeholder="Optional public title" /></label>
          <label><span>Public byline</span><input name="public_byline" type="text" value="${escapeHtml(publicByline)}" placeholder="Name shown publicly" required /></label>
        </div>
        <label><span>Public contribution</span><textarea name="public_contribution" rows="7" required>${escapeHtml(publicContribution)}</textarea></label>
        <label><span>Public lesson / takeaway</span><textarea name="public_lesson" rows="4">${escapeHtml(publicLesson)}</textarea></label>
        <label><span>Publishing notes — private</span><textarea name="publication_notes" rows="4" placeholder="Placement, context, edits, concerns, or why this version is ready.">${escapeHtml(item.publication_notes || '')}</textarea></label>

        <div class="publishing-checklist">
          ${checklistItem('publication_content_final', 'Final content', 'This is the exact public version I intend to publish.', item.publication_content_final)}
          ${checklistItem('publication_permission_verified', 'Permission', 'Publication permission and rights have been verified.', item.publication_permission_verified)}
          ${checklistItem('publication_privacy_reviewed', 'Privacy', 'Sensitive or unnecessary personal details have been reviewed.', item.publication_privacy_reviewed)}
          ${checklistItem('publication_factual_reviewed', 'Factual / reputational risk', 'Claims, context, and third-party references are appropriate for public release.', item.publication_factual_reviewed)}
          ${checklistItem('publication_attribution_verified', 'Attribution / provenance', 'The public byline and source are accurate and not inferred from filenames.', item.publication_attribution_verified)}
          ${checklistItem('publication_presentation_reviewed', 'Presentation / placement', 'Title, formatting, context, and placement on Shared Wisdom are ready.', item.publication_presentation_reviewed)}
        </div>

        <div class="publishing-summary${allChecks ? ' is-complete' : ''}">
          <strong>${allChecks ? '✓ Publishing checklist complete' : 'Publishing checklist incomplete'}</strong>
          <span>${allChecks ? 'The database gate can accept Ready to Publish / Published.' : 'All six checks are required before publication.'}</span>
        </div>

        <div class="review-editor-actions publishing-actions">
          <button class="button button-outline" type="submit">Save publishing review</button>
          ${actionButtons}
          <span id="publishing-save-message" class="review-save-message"></span>
        </div>
      </form>
    </div>`;
  }

  function renderDetail() {
    const item = submissions.find((entry) => entry.id === selectedId);
    if (!item) {
      detail.innerHTML = '<div class="review-empty-detail"><div class="eyebrow bronze">Submission detail</div><h3>Select a contribution to review.</h3><p>The full story, permissions, attachment, editorial status, publishing gate, and notes will appear here.</p></div>';
      return;
    }

    const editorialLocked = publicationStatuses.has(item.status);
    const attachment = item.attachment_path ? `<div class="review-section"><h4>Attachment</h4><div class="review-attachment"><div><div class="review-attachment-name">${escapeHtml(item.attachment_name || 'Attached file')}</div><div class="review-attachment-meta">${escapeHtml(item.attachment_mime || '')}${item.attachment_size ? ` · ${escapeHtml(formatBytes(item.attachment_size))}` : ''}</div></div><button type="button" class="button button-outline review-button-small" data-view-attachment="${escapeHtml(item.id)}">Open private attachment</button></div><p class="review-small-note">Private attachments are never published automatically. Public release of media requires a separate intentional publishing decision.</p></div>` : '';

    detail.innerHTML = `<div class="review-detail-header">
      <div><div class="eyebrow bronze">${escapeHtml(item.contribution_type)}</div><h3>${escapeHtml(item.title || 'Untitled contribution')}</h3><p class="review-muted">Submitted by ${escapeHtml(item.contributor_name)} on ${escapeHtml(formatDate(item.created_at))}</p></div>
      <span class="review-status-pill">${escapeHtml(statusLabels[item.status] || item.status)}</span>
    </div>
    <div class="review-meta-grid">
      <div><span>Private contact</span>${escapeHtml(item.contributor_email)}</div>
      <div><span>Requested attribution</span>${escapeHtml(item.attribution)}</div>
      <div><span>Intended audience</span>${escapeHtml(item.audience || 'Not specified')}</div>
      <div><span>Source</span>${escapeHtml(item.source || 'darrendang.com/share')}</div>
    </div>
    <div class="review-section"><h4>Contribution</h4><p>${escapeHtml(item.contribution)}</p></div>
    <div class="review-section"><h4>What they learned</h4><p>${escapeHtml(item.lesson)}</p></div>
    <div class="review-section"><h4>Permissions</h4><div class="review-permissions">${permission('Rights', item.rights_confirmed)}${permission('Private review', item.review_permission)}${permission('Publication', item.publication_permission)}</div></div>
    ${attachment}
    <div class="review-section"><h4>Editorial decision</h4>
      <form id="review-editor-form" class="review-editor">
        <label><span>Status</span><select name="status"${editorialLocked ? ' disabled' : ''}>${editorialStatusOptions(item)}</select></label>
        ${editorialLocked ? '<p class="review-small-note">This item is in the publishing workflow. Publication state is managed in the Publishing Review section below.</p>' : ''}
        <label><span>Internal notes</span><textarea name="internal_notes" rows="7" placeholder="Why is this worth passing forward? What should be clarified, edited, connected, or preserved?">${escapeHtml(item.internal_notes || '')}</textarea></label>
        <div class="review-editor-actions"><button class="button button-dark" type="submit">Save editorial review</button><span id="review-save-message" class="review-save-message"></span></div>
      </form>
    </div>
    ${renderPublishingGate(item)}`;
  }

  function renderAll() {
    renderMetrics();
    renderQueue();
    renderDetail();
  }

  async function loadSubmissions() {
    clearError();
    const url = `${PROJECT_URL}/rest/v1/shared_wisdom_submissions?select=*&order=created_at.desc`;
    const response = await authenticatedFetch(url, { headers: { Accept: 'application/json' } });
    if (response.status === 401 || response.status === 403) {
      clearSession();
      showOnly(login);
      authMessage.textContent = 'Your review session expired. Sign in again with Google.';
      return;
    }
    if (!response.ok) {
      showError(`Unable to load submissions (${response.status}).`);
      return;
    }
    submissions = await response.json();
    if (selectedId && !submissions.some((item) => item.id === selectedId)) selectedId = null;
    if (!selectedId && submissions.length) selectedId = submissions[0].id;
    renderAll();
  }

  async function patchSubmission(item, update, message) {
    const response = await authenticatedFetch(`${PROJECT_URL}/rest/v1/shared_wisdom_submissions?id=eq.${encodeURIComponent(item.id)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(update),
    });

    if (!response.ok) {
      let detailMessage = '';
      try {
        const body = await response.json();
        detailMessage = body && body.message ? ` ${body.message}` : '';
      } catch { }
      if (message) message.textContent = `Save failed (${response.status}).${detailMessage}`;
      return null;
    }

    const rows = await response.json();
    const updated = rows[0] || { ...item, ...update };
    Object.assign(item, updated);
    return item;
  }

  async function saveReview(form) {
    const item = submissions.find((entry) => entry.id === selectedId);
    if (!item) return;
    const message = byId('review-save-message');
    const data = new FormData(form);
    const requestedStatus = publicationStatuses.has(item.status) ? item.status : String(data.get('status') || item.status);
    const update = {
      status: requestedStatus,
      internal_notes: String(data.get('internal_notes') || '').trim() || null,
    };

    message.textContent = 'Saving…';
    const updated = await patchSubmission(item, update, message);
    if (!updated) return;
    message.textContent = 'Saved.';
    renderAll();
  }

  function publishingUpdateFromForm(form) {
    const data = new FormData(form);
    return {
      public_title: String(data.get('public_title') || '').trim() || null,
      public_contribution: String(data.get('public_contribution') || '').trim() || null,
      public_lesson: String(data.get('public_lesson') || '').trim() || null,
      public_byline: String(data.get('public_byline') || '').trim() || null,
      publication_notes: String(data.get('publication_notes') || '').trim() || null,
      publication_content_final: data.get('publication_content_final') === 'on',
      publication_permission_verified: data.get('publication_permission_verified') === 'on',
      publication_privacy_reviewed: data.get('publication_privacy_reviewed') === 'on',
      publication_factual_reviewed: data.get('publication_factual_reviewed') === 'on',
      publication_attribution_verified: data.get('publication_attribution_verified') === 'on',
      publication_presentation_reviewed: data.get('publication_presentation_reviewed') === 'on',
    };
  }

  function publishingGateComplete(update) {
    return Boolean(update.public_contribution && update.public_byline && update.publication_content_final && update.publication_permission_verified && update.publication_privacy_reviewed && update.publication_factual_reviewed && update.publication_attribution_verified && update.publication_presentation_reviewed);
  }

  async function savePublishingReview(form, targetStatus = null) {
    const item = submissions.find((entry) => entry.id === selectedId);
    if (!item) return;
    const message = byId('publishing-save-message');
    const update = publishingUpdateFromForm(form);

    if (['ready_to_publish', 'published'].includes(targetStatus) && !publishingGateComplete(update)) {
      message.textContent = 'Complete all six publishing checks and the required public copy first.';
      return;
    }

    if (targetStatus) update.status = targetStatus;
    if (targetStatus === 'published') update.published_url = `https://darrendang.com/shared-wisdom/#wisdom-${item.id}`;

    message.textContent = targetStatus === 'published' ? 'Publishing…' : 'Saving…';
    const updated = await patchSubmission(item, update, message);
    if (!updated) return;

    message.textContent = targetStatus === 'ready_to_publish' ? 'Publishing review passed. Ready to publish.' : targetStatus === 'published' ? 'Published. The public collection will reflect this immediately.' : 'Publishing review saved.';
    renderAll();
  }

  async function unpublishItem(item) {
    const message = byId('publishing-save-message');
    if (!window.confirm('Remove this contribution from the public Shared Wisdom collection? The private submission and review history will be preserved.')) return;
    message.textContent = 'Removing from public site…';
    const updated = await patchSubmission(item, { status: 'unpublished', published_url: null }, message);
    if (!updated) return;
    message.textContent = 'Removed from public site. Private record preserved.';
    renderAll();
  }

  async function openAttachment(item) {
    if (!item || !item.attachment_path) return;
    clearError();
    const encodedPath = item.attachment_path.split('/').map(encodeURIComponent).join('/');
    const response = await authenticatedFetch(`${PROJECT_URL}/storage/v1/object/authenticated/shared-wisdom-intake/${encodedPath}`);
    if (!response.ok) {
      showError(`Unable to open the private attachment (${response.status}).`);
      return;
    }
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const opened = window.open(objectUrl, '_blank', 'noopener,noreferrer');
    if (!opened) {
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = item.attachment_name || 'attachment';
      link.click();
    }
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 120000);
  }

  async function signOut() {
    const access = getAccess();
    if (access) {
      try {
        await fetch(`${PROJECT_URL}/auth/v1/logout`, {
          method: 'POST',
          headers: { apikey: PUBLIC_KEY, Authorization: `Bearer ${access}` },
        });
      } catch { }
    }
    clearSession();
    submissions = [];
    selectedId = null;
    showOnly(login);
    authMessage.textContent = 'Signed out.';
  }

  queue.addEventListener('click', (event) => {
    const button = event.target.closest('[data-review-id]');
    if (!button) return;
    selectedId = button.getAttribute('data-review-id');
    renderQueue();
    renderDetail();
  });

  detail.addEventListener('click', (event) => {
    const attachmentButton = event.target.closest('[data-view-attachment]');
    if (attachmentButton) {
      openAttachment(submissions.find((item) => item.id === attachmentButton.getAttribute('data-view-attachment')));
      return;
    }

    const actionButton = event.target.closest('[data-publish-action]');
    if (!actionButton) return;
    const item = submissions.find((entry) => entry.id === selectedId);
    const form = byId('review-publishing-form');
    if (!item || !form) return;

    const action = actionButton.getAttribute('data-publish-action');
    if (action === 'ready') savePublishingReview(form, 'ready_to_publish');
    if (action === 'publish' || action === 'republish') savePublishingReview(form, 'published');
    if (action === 'unpublish') unpublishItem(item);
  });

  detail.addEventListener('submit', (event) => {
    if (event.target.id === 'review-editor-form') {
      event.preventDefault();
      saveReview(event.target);
      return;
    }
    if (event.target.id === 'review-publishing-form') {
      event.preventDefault();
      savePublishingReview(event.target);
    }
  });

  detail.addEventListener('change', (event) => {
    const check = event.target.closest('.publishing-check input[type="checkbox"]');
    if (!check) return;
    const label = check.closest('.publishing-check');
    if (label) label.classList.toggle('is-checked', check.checked);
  });

  filter.addEventListener('change', () => {
    selectedId = null;
    renderQueue();
    renderDetail();
  });
  search.addEventListener('input', renderQueue);
  byId('review-refresh').addEventListener('click', loadSubmissions);
  byId('review-signout').addEventListener('click', signOut);
  byId('review-denied-signout').addEventListener('click', signOut);

  async function init() {
    storeCallbackSession();
    const authError = new URLSearchParams(window.location.search).get('auth_error');
    if (authError === 'google_provider_not_ready') {
      showOnly(login);
      authMessage.textContent = 'Google sign-in needs its one-time provider configuration before this button can authenticate.';
      return;
    }

    let claims = currentClaims();
    if (claims && claims.exp && claims.exp * 1000 <= Date.now() && await refreshSession()) claims = currentClaims();
    if (!claims) {
      showOnly(login);
      return;
    }
    if (!isAuthorized(claims)) {
      showOnly(denied);
      return;
    }

    filter.value = 'all';
    search.value = '';
    sessionLabel.textContent = `Authenticated with Google as ${claims.email}. Submission content remains private until you explicitly publish it.`;
    showOnly(workspace);
    await loadSubmissions();
  }

  init();
})();