(() => {
  const ENDPOINT = 'https://zlpjkixskskfcgmkajyd.supabase.co/functions/v1/shared-wisdom-review-action';
  const status = document.getElementById('review-action-status');
  if (!status) return;

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const show = (eyebrow, title, message, detail = '') => {
    status.innerHTML = `
      <div class="eyebrow bronze">${escapeHtml(eyebrow)}</div>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(message)}</p>
      ${detail ? `<p class="review-small-note">${escapeHtml(detail)}</p>` : ''}
      <p><a class="button button-dark" href="/review/">Open private review console</a></p>
    `;
  };

  async function run() {
    const raw = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : '';
    const params = new URLSearchParams(raw);
    const token = params.get('token') || '';

    history.replaceState(null, '', window.location.pathname + window.location.search);

    if (!token) {
      show('Action unavailable', 'This review link is incomplete.', 'Open the private review console to continue.');
      return;
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        show('Action not completed', 'The decision could not be recorded.', data.error || 'The link may be expired or already used.');
        return;
      }

      if (data.action === 'published') {
        show('Final gate passed', 'Approved and published.', 'The contribution is now live in Shared Wisdom.');
      } else if (data.action === 'declined') {
        show('Decision recorded', 'Decline confirmed.', 'The submission remains private and will not be published.');
      } else {
        show('Decision recorded', 'Review action completed.', data.message || 'The submission queue has been updated.');
      }
    } catch {
      show('Connection problem', 'The decision was not recorded.', 'No publication or decline action was taken. Please use the private review console.');
    }
  }

  run();
})();
