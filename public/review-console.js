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
    published: 'Published',
    declined: 'Declined',
    archived: 'Archived',
  };

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

  function filteredSubmissions() {
    const status = filter.value;
    const q = search.value.trim().toLowerCase();
    return submissions.filter((item) => {
      if (status !== 'all' && item.status !== status) return false;
      if (!q) return true;
      const haystack = [item.title, item.contributor_name, item.contribution, item.lesson, item.audience]
        .filter(Boolean).join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }

  function renderMetrics() {
    const count = (statuses) => submissions.filter((item) => statuses.includes(item.status)).length;
    const cards = [
      ['Received', count(['received'])],
      ['In review', count(['screened', 'under_review', 'editing'])],
      ['Selected', count(['selected'])],
      ['Approved', count(['approved'])],
      ['Published', count(['published'])],
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

  function renderDetail() {
    const item = submissions.find((entry) => entry.id === selectedId);
    if (!item) {
      detail.innerHTML = '<div class="review-empty-detail"><div class="eyebrow bronze">Submission detail</div><h3>Select a contribution to review.</h3><p>The full story, permissions, attachment, editorial status, and notes will appear here.</p></div>';
      return;
    }

    const statusOptions = Object.entries(statusLabels).map(([value, label]) => `<option value="${value}"${item.status === value ? ' selected' : ''}>${label}</option>`).join('');
    const attachment = item.attachment_path ? `<div class="review-section"><h4>Attachment</h4><div class="review-attachment"><div><div class="review-attachment-name">${escapeHtml(item.attachment_name || 'Attached file')}</div><div class="review-attachment-meta">${escapeHtml(item.attachment_mime || '')}${item.attachment_size ? ` · ${escapeHtml(formatBytes(item.attachment_size))}` : ''}</div></div><button type="button" class="button button-outline review-button-small" data-view-attachment="${escapeHtml(item.id)}">Open private attachment</button></div></div>` : '';

    detail.innerHTML = `<div class="review-detail-header">
      <div><div class="eyebrow bronze">${escapeHtml(item.contribution_type)}</div><h3>${escapeHtml(item.title || 'Untitled contribution')}</h3><p class="review-muted">Submitted by ${escapeHtml(item.contributor_name)} on ${escapeHtml(formatDate(item.created_at))}</p></div>
      <span class="review-status-pill">${escapeHtml(statusLabels[item.status] || item.status)}</span>
    </div>
    <div class="review-meta-grid">
      <div><span>Private contact</span>${escapeHtml(item.contributor_email)}</div>
      <div><span>Public attribution</span>${escapeHtml(item.attribution)}</div>
      <div><span>Intended audience</span>${escapeHtml(item.audience || 'Not specified')}</div>
      <div><span>Source</span>${escapeHtml(item.source || 'darrendang.com/share')}</div>
    </div>
    <div class="review-section"><h4>Contribution</h4><p>${escapeHtml(item.contribution)}</p></div>
    <div class="review-section"><h4>What they learned</h4><p>${escapeHtml(item.lesson)}</p></div>
    <div class="review-section"><h4>Permissions</h4><div class="review-permissions">${permission('Rights', item.rights_confirmed)}${permission('Private review', item.review_permission)}${permission('Publication', item.publication_permission)}</div></div>
    ${attachment}
    <div class="review-section"><h4>Editorial decision</h4>
      <form id="review-editor-form" class="review-editor">
        <label><span>Status</span><select name="status">${statusOptions}</select></label>
        <label><span>Internal notes</span><textarea name="internal_notes" rows="7" placeholder="Why is this worth passing forward? What should be clarified, edited, connected, or preserved?">${escapeHtml(item.internal_notes || '')}</textarea></label>
        <label><span>Published URL</span><input name="published_url" type="url" value="${escapeHtml(item.published_url || '')}" placeholder="https://darrendang.com/shared-wisdom/..." /></label>
        <div class="review-editor-actions"><button class="button button-dark" type="submit">Save review</button><span id="review-save-message" class="review-save-message"></span></div>
      </form>
    </div>`;
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

  async function saveReview(form) {
    const item = submissions.find((entry) => entry.id === selectedId);
    if (!item) return;
    const message = byId('review-save-message');
    const data = new FormData(form);
    const update = {
      status: String(data.get('status') || item.status),
      internal_notes: String(data.get('internal_notes') || '').trim() || null,
      published_url: String(data.get('published_url') || '').trim() || null,
    };
    message.textContent = 'Saving…';
    const response = await authenticatedFetch(`${PROJECT_URL}/rest/v1/shared_wisdom_submissions?id=eq.${encodeURIComponent(item.id)}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(update),
    });
    if (!response.ok) {
      message.textContent = `Save failed (${response.status}).`;
      return;
    }
    Object.assign(item, update);
    message.textContent = 'Saved.';
    renderMetrics();
    renderQueue();
    const pill = detail.querySelector('.review-status-pill');
    if (pill) pill.textContent = statusLabels[item.status] || item.status;
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
      } catch { /* local session is cleared regardless */ }
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
    const button = event.target.closest('[data-view-attachment]');
    if (!button) return;
    openAttachment(submissions.find((item) => item.id === button.getAttribute('data-view-attachment')));
  });

  detail.addEventListener('submit', (event) => {
    if (event.target.id !== 'review-editor-form') return;
    event.preventDefault();
    saveReview(event.target);
  });

  filter.addEventListener('change', renderQueue);
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

    sessionLabel.textContent = `Authenticated with Google as ${claims.email}. Submission content remains private.`;
    showOnly(workspace);
    await loadSubmissions();
  }

  init();
})();
