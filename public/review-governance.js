(() => {
  const PROJECT_URL = 'https://zlpjkixskskfcgmkajyd.supabase.co';
  const PUBLIC_KEY = 'sb_publishable_XBESWMhKrcGK0jMH6d9fnA_u_tuspI5';
  const SESSION_ACCESS = 'dang_review_access';
  const SESSION_REFRESH = 'dang_review_refresh';
  const ENDPOINT = `${PROJECT_URL}/functions/v1/contribution-governance-review`;

  let currentLegacyId = null;
  let governance = null;
  let scheduled = false;

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const getAccess = () => sessionStorage.getItem(SESSION_ACCESS) || '';
  const getRefresh = () => sessionStorage.getItem(SESSION_REFRESH) || '';

  async function refreshSession() {
    const refresh = getRefresh();
    if (!refresh) return false;
    const response = await fetch(`${PROJECT_URL}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: { apikey: PUBLIC_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: refresh }),
    });
    if (!response.ok) return false;
    const data = await response.json();
    if (!data.access_token) return false;
    sessionStorage.setItem(SESSION_ACCESS, data.access_token);
    if (data.refresh_token) sessionStorage.setItem(SESSION_REFRESH, data.refresh_token);
    return true;
  }

  async function governanceFetch(body, allowRefresh = true) {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        apikey: PUBLIC_KEY,
        Authorization: `Bearer ${getAccess()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (response.status === 401 && allowRefresh && await refreshSession()) return governanceFetch(body, false);
    let data = {};
    try { data = await response.json(); } catch { /* no-op */ }
    if (!response.ok) throw new Error(data.error || `Governance request failed (${response.status})`);
    return data;
  }

  const activeLegacyId = () => document.querySelector('.review-queue-item.is-active[data-review-id]')?.getAttribute('data-review-id') || null;

  function option(value, current, label = value) {
    return `<option value="${escapeHtml(value)}"${value === current ? ' selected' : ''}>${escapeHtml(label)}</option>`;
  }

  function boolCheck(name, label, value) {
    return `<label class="governance-check"><input type="checkbox" name="${name}"${value ? ' checked' : ''} /><span>${escapeHtml(label)}</span></label>`;
  }

  function activePermission() {
    return governance?.permission || {};
  }

  function activeHolds() {
    return (governance?.holds || []).filter((h) => h.state === 'active');
  }

  function activeWebsiteAuthorization() {
    const hash = governance?.current_website_content_hash;
    return (governance?.authorizations || []).find((a) => a.surface === 'website' && a.exact_content_hash === hash && !a.revoked_at);
  }

  function render() {
    const detail = document.getElementById('review-detail');
    if (!detail) return;
    let host = document.getElementById('review-governance-panel');
    if (!host) {
      host = document.createElement('section');
      host.id = 'review-governance-panel';
      host.className = 'review-governance-panel';
      detail.appendChild(host);
    }

    if (!currentLegacyId) {
      host.innerHTML = '';
      return;
    }
    if (!governance) {
      host.innerHTML = '<div class="governance-loading">Loading contribution governance…</div>';
      return;
    }
    if (!governance.found) {
      host.innerHTML = '<div class="governance-warning"><strong>No governance subject found.</strong><span>This contribution cannot be published through the governed path.</span></div>';
      return;
    }

    const s = governance.subject || {};
    const p = activePermission();
    const holds = governance.holds || [];
    const active = activeHolds();
    const authorizations = governance.authorizations || [];
    const events = governance.events || [];
    const websiteAuth = activeWebsiteAuthorization();
    const hash = governance.current_website_content_hash || '';

    const holdRows = holds.length ? holds.map((h) => `<div class="governance-hold${h.state === 'active' ? ' is-active' : ''}">
      <div><strong>${escapeHtml(h.hold_type)}</strong><span>${escapeHtml(h.reason)}</span><small>${escapeHtml(h.state)} · ${escapeHtml(new Date(h.opened_at).toLocaleString())}</small></div>
      ${h.state === 'active' ? `<button type="button" class="button button-outline review-button-small" data-release-hold="${escapeHtml(h.id)}">Release</button>` : ''}
    </div>`).join('') : '<p class="review-muted">No holds recorded.</p>';

    const authRows = authorizations.length ? authorizations.map((a) => `<div class="governance-auth-row${a.revoked_at ? ' is-revoked' : ''}">
      <div><strong>${escapeHtml(a.surface)} · ${escapeHtml(a.attribution_mode)}</strong><span class="governance-mono">${escapeHtml(a.exact_content_hash)}</span><small>${a.revoked_at ? `Revoked ${escapeHtml(new Date(a.revoked_at).toLocaleString())}` : `Authorized ${escapeHtml(new Date(a.authorized_at).toLocaleString())}`}</small></div>
      ${!a.revoked_at ? `<button type="button" class="button button-outline review-button-small" data-revoke-auth="${escapeHtml(a.id)}">Revoke</button>` : ''}
    </div>`).join('') : '<p class="review-muted">No publication authorizations.</p>';

    const eventRows = events.slice(0, 12).map((e) => `<div class="governance-event"><strong>${escapeHtml(e.event_type)}</strong><span>${escapeHtml(e.actor_kind)} · ${escapeHtml(new Date(e.created_at).toLocaleString())}</span></div>`).join('');

    host.innerHTML = `<div class="governance-heading">
      <div><div class="eyebrow bronze">Contribution governance</div><h3>Authority, permission, risk, and provenance</h3></div>
      <span class="governance-state${active.length ? ' is-blocked' : ''}">${active.length ? `${active.length} active hold${active.length === 1 ? '' : 's'}` : 'No active holds'}</span>
    </div>
    <p class="review-muted governance-intro">This layer is authoritative for new contribution governance. Legacy fields remain historical evidence and do not imply AI or publication permission.</p>

    <div class="governance-summary-grid">
      <div><span>Governance status</span><strong>${escapeHtml(s.governance_status)}</strong></div>
      <div><span>Supplier role</span><strong>${escapeHtml(s.supplier_role)}</strong></div>
      <div><span>Authority</span><strong>${escapeHtml(s.authority_basis)}</strong></div>
      <div><span>Risk</span><strong>${escapeHtml(s.risk_state)}</strong></div>
      <div><span>Website authorization</span><strong>${websiteAuth ? 'Exact version authorized' : 'Not authorized'}</strong></div>
      <div><span>AI analysis</span><strong>${p.ai_analysis ? 'Permitted' : 'Not permitted'}</strong></div>
    </div>

    <details class="governance-block" open>
      <summary>1. Classification & authority</summary>
      <form id="governance-classify-form" class="governance-form">
        <div class="governance-form-grid">
          <label><span>Supplier role</span><select name="supplier_role">
            ${option('legacy_unresolved',s.supplier_role,'Legacy unresolved')}${option('author_creator',s.supplier_role,'Author / creator')}${option('witness_experiencer',s.supplier_role,'Witness / experiencer')}${option('reflector_interpreter',s.supplier_role,'Reflector / interpreter')}${option('corrector',s.supplier_role,'Corrector')}${option('referrer_discoverer',s.supplier_role,'Referrer / discoverer')}${option('rights_holder_authorized_representative',s.supplier_role,'Rights holder / representative')}${option('joint_contributor',s.supplier_role,'Joint contributor')}${option('collective_organizational',s.supplier_role,'Collective / organization')}
          </select></label>
          <label><span>Authority basis</span><select name="authority_basis">
            ${option('legacy_unresolved',s.authority_basis,'Legacy unresolved')}${option('own_work_own_experience',s.authority_basis,'Own work / own experience')}${option('co_creator_limited',s.authority_basis,'Co-creator — limited authority')}${option('authorized_representative',s.authority_basis,'Authorized representative')}${option('referral_only',s.authority_basis,'Referral only')}${option('uncertain',s.authority_basis,'Uncertain')}
          </select></label>
          <label><span>Contribution type</span><select name="contribution_type_v2"><option value="">Unclassified</option>
            ${['story','reflection','correction','question','practice','counterexample','connection','creation','source_referral'].map((v) => option(v,s.contribution_type_v2)).join('')}
          </select></label>
          <label><span>Age</span><select name="age_state">${option('unknown',s.age_state,'Unknown')}${option('attested_18_plus',s.age_state,'18+ attested')}${option('minor_or_not_eligible',s.age_state,'Minor / not eligible')}</select></label>
          <label><span>Capacity</span><select name="capacity_state">${option('unknown',s.capacity_state,'Unknown')}${option('attested',s.capacity_state,'Attested')}${option('needs_review',s.capacity_state,'Needs review')}</select></label>
          <label><span>Third party</span><select name="third_party_state">${option('unknown',s.third_party_state,'Unknown')}${option('none_declared',s.third_party_state,'None declared')}${option('present',s.third_party_state,'Present')}</select></label>
          <label><span>Living person</span><select name="living_person_state">${option('unknown',s.living_person_state,'Unknown')}${option('none_declared',s.living_person_state,'None declared')}${option('present',s.living_person_state,'Present')}</select></label>
          <label><span>Sensitive data</span><select name="sensitive_data_state">${option('unknown',s.sensitive_data_state,'Unknown')}${option('none_declared',s.sensitive_data_state,'None declared')}${option('present',s.sensitive_data_state,'Present')}</select></label>
          <label><span>Risk state</span><select name="risk_state">${option('legacy_unassessed',s.risk_state,'Legacy unassessed')}${option('unassessed',s.risk_state,'Unassessed')}${option('standard',s.risk_state,'Standard')}${option('heightened',s.risk_state,'Heightened')}${option('quarantined',s.risk_state,'Quarantined')}${option('declined',s.risk_state,'Declined')}</select></label>
          <label><span>Governance status</span><select name="governance_status">${['legacy_linked','restricted','clarifying','classified','connected','under_review','selected','editing','publication_candidate','published','withdrawn_future_use','archived','declined'].map((v) => option(v,s.governance_status)).join('')}</select></label>
        </div>
        <div class="governance-actions"><button class="button button-outline" type="submit">Save classification</button><span class="governance-message"></span></div>
      </form>
    </details>

    <details class="governance-block">
      <summary>2. Permission matrix</summary>
      <form id="governance-permission-form" class="governance-form">
        <div class="governance-check-grid">
          ${boolCheck('private_storage','Private storage',p.private_storage)}${boolCheck('human_review','Human review',p.human_review)}${boolCheck('ai_analysis','AI analysis',p.ai_analysis)}${boolCheck('ai_embedding','AI embedding',p.ai_embedding)}${boolCheck('ai_translation','AI translation',p.ai_translation)}${boolCheck('editorial_rewrite','Editorial rewrite',p.editorial_rewrite)}${boolCheck('named_public_attribution','Named public attribution',p.named_public_attribution)}${boolCheck('anonymous_public_use','Anonymous public use',p.anonymous_public_use)}${boolCheck('website_publication','Website publication',p.website_publication)}${boolCheck('book_publication','Book publication',p.book_publication)}${boolCheck('talk_publication','Talk publication',p.talk_publication)}${boolCheck('social_publication','Social publication',p.social_publication)}${boolCheck('future_reuse','Future reuse',p.future_reuse)}
        </div>
        <div class="governance-form-grid">
          <label><span>Permission source / evidence</span><input name="permission_source" required placeholder="e.g. contributor email dated YYYY-MM-DD" /></label>
          <label><span>Permission language version</span><input name="permission_language_version" value="reviewer-v0.1" /></label>
        </div>
        <div class="governance-actions"><button class="button button-outline" type="submit">Record new permission snapshot</button><span class="governance-message"></span></div>
      </form>
    </details>

    <details class="governance-block" ${active.length ? 'open' : ''}>
      <summary>3. Holds & risk controls</summary>
      <div class="governance-list">${holdRows}</div>
      <form id="governance-hold-form" class="governance-form governance-inline-form">
        <label><span>New hold</span><select name="hold_type">${['legacy_reconciliation','minor_capacity','safety','rights','privacy','legal','ai_permission','representation','withdrawal'].map((v) => `<option value="${v}">${v}</option>`).join('')}</select></label>
        <label><span>Reason</span><input name="reason" required placeholder="Why this must pause" /></label>
        <button class="button button-outline" type="submit">Open hold</button><span class="governance-message"></span>
      </form>
    </details>

    <details class="governance-block">
      <summary>4. Review provenance</summary>
      <form id="governance-review-form" class="governance-form">
        <label class="governance-check"><input type="checkbox" name="ai_used" /><span>AI assisted this review</span></label>
        <div class="governance-form-grid">
          <label><span>Recommendation</span><input name="recommendation" placeholder="accept_private / restrict / clarify / consider_publication" /></label>
          <label><span>Notes</span><input name="notes" placeholder="Review provenance note" /></label>
        </div>
        <div class="governance-actions"><button class="button button-outline" type="submit">Record review event</button><span class="governance-message"></span></div>
      </form>
    </details>

    <details class="governance-block">
      <summary>5. Exact publication authorization</summary>
      <div class="governance-hash"><span>Current website content hash</span><code>${escapeHtml(hash || 'Unavailable')}</code></div>
      <div class="governance-list">${authRows}</div>
      <form id="governance-publish-auth-form" class="governance-form">
        <input type="hidden" name="surface" value="website" />
        <input type="hidden" name="exact_content_hash" value="${escapeHtml(hash)}" />
        <div class="governance-form-grid">
          <label><span>Attribution mode</span><select name="attribution_mode"><option value="full_name">Full name</option><option value="first_name">First name</option><option value="pseudonym">Pseudonym</option><option value="anonymous">Anonymous</option></select></label>
          <label><span>Adopted wording reference</span><input name="adopted_wording_ref" placeholder="Required if materially edited" /></label>
          <label><span>Authorization source</span><input name="authorization_source" value="reviewer_governance_console" /></label>
        </div>
        <p class="review-muted">Authorization will fail closed if any hold is active, the age/capacity/authority/risk gates are incomplete, the surface is not permitted, or attribution is not permitted.</p>
        <div class="governance-actions"><button class="button button-dark" type="submit"${hash ? '' : ' disabled'}>Authorize exact website version</button><span class="governance-message"></span></div>
      </form>
    </details>

    <details class="governance-block">
      <summary>6. Correction, representation & withdrawal</summary>
      <form id="governance-correction-form" class="governance-inline-form"><label><span>Correction</span><input name="correction" required /></label><label><span>Source</span><input name="source" /></label><button class="button button-outline" type="submit">Record correction</button><span class="governance-message"></span></form>
      <form id="governance-challenge-form" class="governance-inline-form"><label><span>Representation concern</span><input name="reason" required /></label><button class="button button-outline" type="submit">Open representation challenge</button><span class="governance-message"></span></form>
      <form id="governance-withdrawal-form" class="governance-inline-form"><label><span>Withdrawal reason</span><input name="reason" required /></label><button class="button review-danger-button" type="submit">Withdraw future controlled use</button><span class="governance-message"></span></form>
    </details>

    <details class="governance-block">
      <summary>7. Governance event history</summary>
      <div class="governance-events">${eventRows || '<p class="review-muted">No events recorded.</p>'}</div>
    </details>`;
  }

  async function loadGovernance(force = false) {
    const legacyId = activeLegacyId();
    if (!legacyId) {
      currentLegacyId = null;
      governance = null;
      render();
      return;
    }
    if (!force && legacyId === currentLegacyId && governance) return;
    currentLegacyId = legacyId;
    governance = null;
    render();
    try {
      const data = await governanceFetch({ operation: 'snapshot', legacy_submission_id: legacyId });
      if (legacyId !== currentLegacyId) return;
      governance = data.governance || { found: false };
      render();
    } catch (error) {
      governance = { found: false };
      render();
      const panel = document.getElementById('review-governance-panel');
      if (panel) panel.innerHTML = `<div class="governance-warning"><strong>Governance unavailable.</strong><span>${escapeHtml(error.message)}</span></div>`;
    }
  }

  async function runAction(action, payload, messageEl) {
    if (!governance?.subject?.id) throw new Error('Governance subject is unavailable.');
    if (messageEl) messageEl.textContent = 'Saving…';
    try {
      await governanceFetch({ operation: 'action', subject_id: governance.subject.id, action, payload });
      if (messageEl) messageEl.textContent = 'Saved.';
      await loadGovernance(true);
    } catch (error) {
      if (messageEl) messageEl.textContent = error.message;
      throw error;
    }
  }

  const formPayload = (form) => Object.fromEntries([...new FormData(form).entries()].map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v]));
  const checkboxPayload = (form, names) => {
    const payload = formPayload(form);
    names.forEach((name) => { payload[name] = Boolean(form.elements[name]?.checked); });
    return payload;
  };

  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.id.startsWith('governance-')) return;
    event.preventDefault();
    const message = form.querySelector('.governance-message');
    try {
      if (form.id === 'governance-classify-form') await runAction('classify', formPayload(form), message);
      else if (form.id === 'governance-permission-form') await runAction('permission_snapshot', checkboxPayload(form, ['private_storage','human_review','ai_analysis','ai_embedding','ai_translation','editorial_rewrite','named_public_attribution','anonymous_public_use','website_publication','book_publication','talk_publication','social_publication','future_reuse']), message);
      else if (form.id === 'governance-hold-form') await runAction('open_hold', formPayload(form), message);
      else if (form.id === 'governance-review-form') await runAction('record_review', { ...formPayload(form), ai_used: Boolean(form.elements.ai_used.checked) }, message);
      else if (form.id === 'governance-publish-auth-form') await runAction('authorize_publication', formPayload(form), message);
      else if (form.id === 'governance-correction-form') await runAction('correction', formPayload(form), message);
      else if (form.id === 'governance-challenge-form') await runAction('representation_challenge', formPayload(form), message);
      else if (form.id === 'governance-withdrawal-form') {
        if (!window.confirm('Withdraw future controlled use and revoke active publication authorizations for this contribution?')) return;
        await runAction('withdrawal', formPayload(form), message);
      }
    } catch { /* message already rendered */ }
  });

  document.addEventListener('click', async (event) => {
    const release = event.target.closest('[data-release-hold]');
    if (release) {
      try { await runAction('release_hold', { hold_id: release.getAttribute('data-release-hold'), resolution_notes: 'Released through governed reviewer console.' }); } catch { /* surfaced by reload */ }
      return;
    }
    const revoke = event.target.closest('[data-revoke-auth]');
    if (revoke) {
      if (!window.confirm('Revoke this publication authorization?')) return;
      try { await runAction('revoke_publication', { authorization_id: revoke.getAttribute('data-revoke-auth'), reason: 'Revoked through governed reviewer console.' }); } catch { /* surfaced by reload */ }
    }
  });

  function scheduleLoad() {
    if (scheduled) return;
    scheduled = true;
    window.setTimeout(() => {
      scheduled = false;
      loadGovernance();
    }, 80);
  }

  const observer = new MutationObserver(scheduleLoad);
  const queue = document.getElementById('review-queue');
  const detail = document.getElementById('review-detail');
  if (queue) observer.observe(queue, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  if (detail) observer.observe(detail, { childList: true });
  document.addEventListener('click', (event) => { if (event.target.closest('[data-review-id]')) scheduleLoad(); });
  window.addEventListener('load', scheduleLoad);
  scheduleLoad();
})();