(() => {
  const PROJECT_URL = 'https://zlpjkixskskfcgmkajyd.supabase.co';
  const PUBLIC_KEY = 'sb_publishable_XBESWMhKrcGK0jMH6d9fnA_u_tuspI5';
  const container = document.getElementById('published-shared-wisdom');
  if (!container) return;

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const typeLabel = (value) => ({
    'wisdom-note': 'Wisdom Note',
    story: 'Story',
    video: 'In Their Own Voice',
    'story-and-media': 'Story + Media',
  }[value] || 'Shared Wisdom');

  function render(items) {
    if (!items.length) {
      container.innerHTML = `<div class="shared-wisdom-empty">
        <div class="eyebrow bronze">Opening the collection</div>
        <h3>The first published contributions will appear here.</h3>
        <p>Nothing is manufactured or auto-published. The collection grows only when a contribution passes both editorial and publishing review.</p>
      </div>`;
      return;
    }

    container.innerHTML = items.map((item) => {
      const title = item.public_title ? `<h3>${escapeHtml(item.public_title)}</h3>` : '';
      const lesson = item.public_lesson ? `<div class="shared-wisdom-lesson"><span>What they learned</span><p>${escapeHtml(item.public_lesson)}</p></div>` : '';
      return `<article class="shared-wisdom-entry" id="wisdom-${escapeHtml(item.id)}">
        <div class="shared-wisdom-entry-kicker"><span>${escapeHtml(typeLabel(item.contribution_type))}</span><span>Shared Wisdom</span></div>
        ${title}
        <p class="shared-wisdom-contribution">${escapeHtml(item.public_contribution || '')}</p>
        ${lesson}
        <div class="shared-wisdom-byline">— ${escapeHtml(item.public_byline || 'Anonymous')}</div>
      </article>`;
    }).join('');
  }

  async function load() {
    const select = 'id,status,contribution_type,public_title,public_contribution,public_lesson,public_byline,published_at';
    const url = `${PROJECT_URL}/rest/v1/shared_wisdom_submissions?select=${encodeURIComponent(select)}&status=eq.published&order=published_at.desc`;
    try {
      const response = await fetch(url, {
        headers: {
          apikey: PUBLIC_KEY,
          Accept: 'application/json',
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const items = await response.json();
      render(Array.isArray(items) ? items : []);
    } catch {
      container.innerHTML = `<div class="shared-wisdom-empty">
        <h3>The collection is temporarily unavailable.</h3>
        <p>Please try again later. No private submission data is exposed by this public view.</p>
      </div>`;
    }
  }

  load();
})();