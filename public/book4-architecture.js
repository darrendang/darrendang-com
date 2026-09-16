(() => {
  const ROOT_ID = 'book4-architecture';
  const PROJECT_URL = 'https://zlpjkixskskfcgmkajyd.supabase.co';
  const PUBLIC_KEY = 'sb_publishable_XBESWMhKrcGK0jMH6d9fnA_u_tuspI5';
  const DATA_ENDPOINT = `${PROJECT_URL}/functions/v1/book4-architecture-data`;
  const SESSION_ACCESS = 'dang_book4_arch_access';
  const SESSION_REFRESH = 'dang_book4_arch_refresh';
  const SVG_NS = 'http://www.w3.org/2000/svg';

  const root = document.getElementById(ROOT_ID);
  if (!root || root.dataset.initialized === 'true') return;
  root.dataset.initialized = 'true';

  const byId = (id) => document.getElementById(id);
  const loading = byId('book4-architecture-loading');
  const login = byId('book4-architecture-login');
  const denied = byId('book4-architecture-denied');
  const workspace = byId('book4-architecture-workspace');
  const authMessage = byId('book4-architecture-auth-message');
  const sessionLabel = byId('book4-architecture-session');
  const stagesNav = byId('book4-architecture-stages');
  const stageTitle = byId('book4-architecture-stage-title');
  const period = byId('book4-architecture-period');
  const thesis = byId('book4-architecture-thesis');
  const narrative = byId('book4-architecture-narrative');
  const provenance = byId('book4-architecture-provenance');
  const canvas = byId('book4-architecture-canvas');
  const detail = byId('book4-architecture-detail');
  const mechanism = byId('book4-architecture-mechanism');
  const title = byId('book4-architecture-title');
  const subtitle = byId('book4-architecture-subtitle');
  const prevButton = byId('book4-architecture-prev');
  const nextButton = byId('book4-architecture-next');
  const signoutButton = byId('book4-architecture-signout');
  const deniedSignoutButton = byId('book4-architecture-denied-signout');
  const errorBox = byId('book4-architecture-error');

  let architecture = null;
  let currentStageIndex = 0;
  let selectedNodeId = null;

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  function showOnly(section) {
    [loading, login, denied, workspace].forEach((el) => {
      if (el) el.hidden = el !== section;
    });
  }

  function showError(message) {
    if (!errorBox) return;
    errorBox.textContent = message;
    errorBox.hidden = false;
  }

  function clearError() {
    if (!errorBox) return;
    errorBox.hidden = true;
    errorBox.textContent = '';
  }

  function decodeJwt(token) {
    try {
      const part = token.split('.')[1];
      const normalized = part.replaceAll('-', '+').replaceAll('_', '/');
      const padded = normalized + '='.repeat((4 - normalized.length % 4) % 4);
      const decoded = atob(padded);
      const bytes = Uint8Array.from(decoded, (char) => char.charCodeAt(0));
      return JSON.parse(new TextDecoder().decode(bytes));
    } catch {
      return null;
    }
  }

  const getAccess = () => sessionStorage.getItem(SESSION_ACCESS) || '';
  const getRefresh = () => sessionStorage.getItem(SESSION_REFRESH) || '';

  function clearSession() {
    sessionStorage.removeItem(SESSION_ACCESS);
    sessionStorage.removeItem(SESSION_REFRESH);
  }

  function storeCallbackSession() {
    if (!window.location.hash) return;
    const hash = new URLSearchParams(window.location.hash.slice(1));
    const access = hash.get('access_token');
    const refresh = hash.get('refresh_token');
    if (!access) return;
    sessionStorage.setItem(SESSION_ACCESS, access);
    if (refresh) sessionStorage.setItem(SESSION_REFRESH, refresh);
    history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
  }

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
    architecture = null;
    showOnly(login);
    if (authMessage) authMessage.textContent = 'Signed out.';
  }

  function layoutFor(stage) {
    const base = { width: 1000, height: 560, nodeWidth: 158, nodeHeight: 76, positions: {} };
    const set = (id, x, y) => { base.positions[id] = { x, y }; };

    if (stage.id === 0) {
      set('life', 60, 80); set('memory', 60, 242); set('documents', 60, 404);
      set('conversation', 420, 242); set('book1', 780, 242);
    } else if (stage.id === 1) {
      set('inputs', 55, 242); set('mining', 390, 242);
      set('books', 760, 80); set('website', 760, 242); set('working', 760, 404);
    } else if (stage.id === 2) {
      set('capture', 45, 130); set('workspace', 245, 130); set('review', 445, 130); set('canon', 645, 130); set('provenance', 345, 390);
    } else if (stage.id === 3) {
      set('sources', 80, 360); set('genome', 350, 170); set('graph', 690, 170);
    } else if (stage.id === 4) {
      set('ai', 70, 95); set('human', 70, 385); set('os', 380, 240); set('genome', 700, 110); set('graph', 700, 370);
    } else if (stage.id === 5) {
      base.height = 640;
      set('inputs', 45, 282); set('core', 410, 282); set('governed', 780, 282);
      set('dots', 260, 65); set('lifecycle', 455, 65); set('governance', 650, 65);
      set('northstar', 260, 510); set('design', 650, 510);
    } else {
      base.width = 1320; base.height = 700; base.nodeWidth = 128; base.nodeHeight = 72;
      const chain = ['book','books','genome','way','architecture','governance','lenses','language','collab'];
      chain.forEach((id, index) => set(id, 30 + index * 142, 90));
      set('ratchet', 720, 365); set('coadapt', 500, 535); set('website', 1030, 420);
    }
    return base;
  }

  function truncateKind(kind) {
    const labels = {
      input: 'Input', process: 'Dialogue', expression: 'Expression', working: 'Working layer', preservation: 'Evidence', governance: 'Governance', authority: 'Authority', core: 'Core', map: 'Map', operating: 'Operating layer', ai: 'AI contribution', constraint: 'Constraint', evolution: 'Evolution', ratchet: 'Recursive layer', evidence: 'Artifact evidence'
    };
    return labels[kind] || kind || 'Node';
  }

  function wrappedLines(text, maxChars = 19, maxLines = 3) {
    const words = String(text).split(/\s+/).filter(Boolean);
    const lines = [];
    let current = '';
    for (const word of words) {
      const candidate = current ? `${current} ${word}` : word;
      if (candidate.length <= maxChars || !current) {
        current = candidate;
      } else {
        lines.push(current);
        current = word;
        if (lines.length === maxLines - 1) break;
      }
    }
    if (current && lines.length < maxLines) lines.push(current);
    const used = lines.join(' ').split(/\s+/).length;
    if (used < words.length && lines.length) {
      lines[lines.length - 1] = `${lines[lines.length - 1].replace(/[.…]+$/,'')}…`;
    }
    return lines;
  }

  function createSvgElement(name, attrs = {}) {
    const el = document.createElementNS(SVG_NS, name);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, String(value)));
    return el;
  }

  function nodeCenter(layout, nodeId) {
    const pos = layout.positions[nodeId];
    return { x: pos.x + layout.nodeWidth / 2, y: pos.y + layout.nodeHeight / 2 };
  }

  function shortenedLine(a, b, offset) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const length = Math.max(Math.hypot(dx, dy), 1);
    const ux = dx / length;
    const uy = dy / length;
    return {
      x1: a.x + ux * offset,
      y1: a.y + uy * offset,
      x2: b.x - ux * offset,
      y2: b.y - uy * offset,
    };
  }

  function edgePath(stage, edge, layout) {
    const a = nodeCenter(layout, edge.from);
    const b = nodeCenter(layout, edge.to);
    if (stage.id === 6 && edge.from === 'coadapt' && edge.to === 'book') {
      const start = { x: a.x - 30, y: a.y - layout.nodeHeight / 2 };
      const end = { x: b.x + 10, y: b.y + layout.nodeHeight / 2 };
      return { d: `M ${start.x} ${start.y} C 280 610, 90 520, ${end.x} ${end.y}`, mx: 210, my: 560 };
    }
    if (stage.id === 5 && edge.from === 'governed' && edge.to === 'inputs') {
      return { d: `M ${a.x} ${a.y + 38} C 760 600, 210 600, ${b.x} ${b.y + 38}`, mx: 505, my: 594 };
    }
    if (stage.id === 2 && edge.from === 'canon' && edge.to === 'workspace') {
      return { d: `M ${a.x} ${a.y + 38} C 650 360, 350 360, ${b.x} ${b.y + 38}`, mx: 500, my: 345 };
    }
    const line = shortenedLine(a, b, Math.min(layout.nodeWidth, layout.nodeHeight) * 0.55);
    return { d: `M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`, mx: (line.x1 + line.x2) / 2, my: (line.y1 + line.y2) / 2 };
  }

  function renderGraph(stage) {
    canvas.replaceChildren();
    const layout = layoutFor(stage);
    const svg = createSvgElement('svg', {
      viewBox: `0 0 ${layout.width} ${layout.height}`,
      role: 'img',
      'aria-label': `${stage.title} architecture diagram`,
      preserveAspectRatio: 'xMidYMid meet',
    });
    if (stage.id === 6) svg.classList.add('b4a-wide');

    const defs = createSvgElement('defs');
    const marker = createSvgElement('marker', { id: 'b4a-arrow', markerWidth: 8, markerHeight: 8, refX: 6, refY: 3, orient: 'auto', markerUnits: 'strokeWidth' });
    marker.appendChild(createSvgElement('path', { d: 'M0,0 L0,6 L6,3 z', fill: '#98A0A6' }));
    defs.appendChild(marker);
    svg.appendChild(defs);

    const edgeLayer = createSvgElement('g', { 'aria-hidden': 'true' });
    stage.edges.forEach((edge, index) => {
      if (!layout.positions[edge.from] || !layout.positions[edge.to]) return;
      const pathInfo = edgePath(stage, edge, layout);
      const path = createSvgElement('path', {
        d: pathInfo.d,
        class: 'b4a-edge',
        'data-edge-index': index,
        'data-from': edge.from,
        'data-to': edge.to,
        'marker-end': 'url(#b4a-arrow)',
      });
      edgeLayer.appendChild(path);
      if (edge.bidirectional) {
        const reverse = createSvgElement('path', {
          d: pathInfo.d,
          class: 'b4a-edge',
          'data-edge-index': index,
          'data-from': edge.from,
          'data-to': edge.to,
          'marker-start': 'url(#b4a-arrow)',
        });
        edgeLayer.appendChild(reverse);
      }
      if (edge.label) {
        const label = createSvgElement('text', { x: pathInfo.mx, y: pathInfo.my - 7, 'text-anchor': 'middle', class: 'b4a-edge-label' });
        label.textContent = edge.label;
        edgeLayer.appendChild(label);
      }
    });
    svg.appendChild(edgeLayer);

    const nodeLayer = createSvgElement('g');
    stage.nodes.forEach((node) => {
      const pos = layout.positions[node.id];
      if (!pos) return;
      const group = createSvgElement('g', {
        class: 'b4a-node',
        transform: `translate(${pos.x} ${pos.y})`,
        tabindex: '0',
        role: 'button',
        'aria-label': `${node.label}. ${node.detail}`,
        'data-node-id': node.id,
        'data-kind': node.kind,
      });
      group.appendChild(createSvgElement('rect', { x: 0, y: 0, width: layout.nodeWidth, height: layout.nodeHeight }));

      const kicker = createSvgElement('text', { x: 12, y: 17, class: 'b4a-node-kicker' });
      kicker.textContent = truncateKind(node.kind);
      group.appendChild(kicker);

      const lines = wrappedLines(node.label, stage.id === 6 ? 16 : 21, stage.id === 6 ? 3 : 2);
      const text = createSvgElement('text', { x: 12, y: 39 });
      lines.forEach((line, lineIndex) => {
        const tspan = createSvgElement('tspan', { x: 12, dy: lineIndex === 0 ? 0 : 17 });
        tspan.textContent = line;
        text.appendChild(tspan);
      });
      group.appendChild(text);

      group.addEventListener('click', () => selectNode(node.id));
      group.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectNode(node.id);
        }
      });
      nodeLayer.appendChild(group);
    });
    svg.appendChild(nodeLayer);
    canvas.appendChild(svg);
  }

  function relatedToNode(stage, nodeId) {
    const items = [];
    stage.edges.forEach((edge) => {
      if (edge.from !== nodeId && edge.to !== nodeId) return;
      const otherId = edge.from === nodeId ? edge.to : edge.from;
      const other = stage.nodes.find((node) => node.id === otherId);
      if (!other) return;
      const direction = edge.bidirectional ? '↔' : edge.from === nodeId ? '→' : '←';
      items.push(`${direction} ${other.label}${edge.label ? ` · ${edge.label}` : ''}`);
    });
    return items;
  }

  function selectNode(nodeId) {
    const stage = architecture.stages[currentStageIndex];
    const node = stage.nodes.find((entry) => entry.id === nodeId);
    if (!node) return;
    selectedNodeId = nodeId;

    const relatedIds = new Set([nodeId]);
    stage.edges.forEach((edge) => {
      if (edge.from === nodeId) relatedIds.add(edge.to);
      if (edge.to === nodeId) relatedIds.add(edge.from);
    });

    canvas.querySelectorAll('.b4a-node').forEach((el) => {
      const id = el.getAttribute('data-node-id');
      el.classList.toggle('is-selected', id === nodeId);
      el.classList.toggle('is-related', id !== nodeId && relatedIds.has(id));
    });
    canvas.querySelectorAll('.b4a-edge').forEach((el) => {
      const from = el.getAttribute('data-from');
      const to = el.getAttribute('data-to');
      el.classList.toggle('is-related', from === nodeId || to === nodeId);
    });

    const relations = relatedToNode(stage, nodeId);
    detail.innerHTML = `
      <div class="eyebrow bronze">Node detail</div>
      <span class="b4a-kind">${escapeHtml(truncateKind(node.kind))}</span>
      <h3>${escapeHtml(node.label)}</h3>
      <p>${escapeHtml(node.detail)}</p>
      ${relations.length ? `<div class="b4a-related-list"><strong>Connected here</strong><ul>${relations.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></div>` : ''}
    `;
  }

  function renderMechanism(stage) {
    if (!stage.mechanism || !stage.mechanism.length) {
      mechanism.hidden = true;
      mechanism.replaceChildren();
      return;
    }
    mechanism.hidden = false;
    mechanism.innerHTML = stage.mechanism.map((item, index) => `${index ? '<b>→</b>' : ''}<span>${escapeHtml(item)}</span>`).join('');
  }

  function renderStage() {
    clearError();
    const stage = architecture.stages[currentStageIndex];
    if (!stage) return;

    stagesNav.querySelectorAll('.b4a-stage-button').forEach((button, index) => {
      const active = index === currentStageIndex;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-current', active ? 'step' : 'false');
    });

    period.textContent = stage.period || `Stage ${stage.label}`;
    stageTitle.textContent = stage.title;
    thesis.textContent = stage.thesis;
    narrative.textContent = stage.narrative;
    provenance.textContent = stage.provenance;
    prevButton.disabled = currentStageIndex === 0;
    nextButton.disabled = currentStageIndex === architecture.stages.length - 1;

    renderGraph(stage);
    renderMechanism(stage);
    selectedNodeId = stage.nodes[0]?.id || null;
    if (selectedNodeId) selectNode(selectedNodeId);
  }

  function renderStageNav() {
    stagesNav.replaceChildren();
    architecture.stages.forEach((stage, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'b4a-stage-button';
      button.innerHTML = `<strong>${escapeHtml(stage.label)}</strong><span>${escapeHtml(stage.title)}</span>`;
      button.addEventListener('click', () => {
        currentStageIndex = index;
        renderStage();
      });
      stagesNav.appendChild(button);
    });
  }

  function renderArchitecture() {
    title.textContent = architecture.title || 'The Architecture We Earned';
    subtitle.textContent = architecture.subtitle || '';
    renderStageNav();
    currentStageIndex = Math.min(Math.max(0, currentStageIndex), architecture.stages.length - 1);
    renderStage();
  }

  async function loadArchitecture() {
    clearError();
    const response = await authenticatedFetch(DATA_ENDPOINT, { method: 'GET', headers: { Accept: 'application/json' } });
    if (response.status === 401) {
      clearSession();
      showOnly(login);
      if (authMessage) authMessage.textContent = 'Your session expired. Sign in again with Google.';
      return;
    }
    if (response.status === 403) {
      showOnly(denied);
      return;
    }
    if (!response.ok) {
      showOnly(workspace);
      showError(`Unable to load the private architecture (${response.status}).`);
      return;
    }
    const data = await response.json();
    if (!data?.authorized || !data?.architecture?.stages?.length) {
      showOnly(denied);
      return;
    }
    architecture = data.architecture;
    const claims = decodeJwt(getAccess());
    if (sessionLabel) sessionLabel.textContent = claims?.email ? `Signed in as ${claims.email}` : 'Google-authenticated session';
    showOnly(workspace);
    renderArchitecture();
  }

  async function initialize() {
    storeCallbackSession();
    const query = new URLSearchParams(window.location.search);
    const authError = query.get('auth_error');
    if (authError && authMessage) {
      authMessage.textContent = authError === 'google_provider_not_ready'
        ? 'Google sign-in is not ready for this redirect yet.'
        : 'Google sign-in could not be started.';
    }

    if (!getAccess()) {
      showOnly(login);
      return;
    }
    await loadArchitecture();
  }

  prevButton?.addEventListener('click', () => {
    if (!architecture || currentStageIndex <= 0) return;
    currentStageIndex -= 1;
    renderStage();
  });

  nextButton?.addEventListener('click', () => {
    if (!architecture || currentStageIndex >= architecture.stages.length - 1) return;
    currentStageIndex += 1;
    renderStage();
  });

  signoutButton?.addEventListener('click', signOut);
  deniedSignoutButton?.addEventListener('click', signOut);

  initialize().catch((error) => {
    console.error('Book 4 architecture initialization failed', error);
    showOnly(login);
    if (authMessage) authMessage.textContent = 'The private architecture could not be initialized. Please sign in again.';
  });
})();
