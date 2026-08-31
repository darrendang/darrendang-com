import Script from 'next/script';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Private Review',
  description: 'Private editorial and publishing review console for Shared Wisdom submissions.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

const authStart = 'https://zlpjkixskskfcgmkajyd.supabase.co/functions/v1/review-auth-start';

export default function ReviewPage() {
  return (
    <InteriorPage eyebrow="Private editorial workspace" title="Shared Wisdom Review" wide>
      <link rel="stylesheet" href="/review-console.css" />
      <link rel="stylesheet" href="/review-publishing.css" />
      <link rel="stylesheet" href="/review-governance.css" />

      <div id="review-console" className="review-console" aria-live="polite">
        <section id="review-loading" className="review-state-card">
          <div className="eyebrow bronze">Secure workspace</div>
          <h2>Checking your review session…</h2>
          <p>This area is not part of the public Genome. Submission data is only requested after authentication.</p>
        </section>

        <section id="review-login" className="review-state-card" hidden>
          <div className="eyebrow bronze">Private access</div>
          <h2>Sign in to review submissions.</h2>
          <p className="lead">Use the approved Google account for DarrenDang.com. Access is enforced in the data layer as well as in this interface.</p>
          <a className="button button-dark" href={authStart}>Sign in with Google</a>
          <p id="review-auth-message" className="review-small-note"></p>
        </section>

        <section id="review-denied" className="review-state-card review-denied" hidden>
          <div className="eyebrow bronze">Access denied</div>
          <h2>This Google account is not authorized.</h2>
          <p>The private review queue is restricted to Darren&apos;s approved account.</p>
          <button id="review-denied-signout" className="button button-outline" type="button">Sign out</button>
        </section>

        <section id="review-workspace" hidden>
          <div className="review-toolbar">
            <div>
              <div className="eyebrow bronze">Private review queue</div>
              <h2>Review. Govern. Publish intentionally.</h2>
              <p id="review-session-label" className="review-small-note"></p>
            </div>
            <div className="review-toolbar-actions">
              <button id="review-refresh" className="button button-outline" type="button">Refresh</button>
              <button id="review-signout" className="button button-dark" type="button">Sign out</button>
            </div>
          </div>

          <div className="review-workflow-strip" aria-label="Review workflow">
            <span>Editorial review</span><b>→</b><span>Governance</span><b>→</b><span>Exact authorization</span><b>→</b><span>Published intentionally</span>
          </div>

          <div id="review-metrics" className="review-metrics" aria-label="Submission counts"></div>

          <div className="review-controls">
            <label>
              <span>Filter</span>
              <select id="review-status-filter" defaultValue="all">
                <option value="all">All submissions</option>
                <option value="received">Received</option>
                <option value="screened">Screened</option>
                <option value="under_review">Under review</option>
                <option value="selected">Selected</option>
                <option value="editing">Editing</option>
                <option value="approved">Approved</option>
                <option value="ready_to_publish">Ready to publish</option>
                <option value="published">Published</option>
                <option value="unpublished">Removed from public</option>
                <option value="declined">Declined</option>
                <option value="archived">Archived</option>
              </select>
            </label>
            <label>
              <span>Search</span>
              <input id="review-search" type="search" placeholder="Title, contributor, lesson…" />
            </label>
          </div>

          <div id="review-error" className="review-error" hidden></div>

          <div className="review-workspace-grid">
            <aside className="review-queue-panel" aria-label="Submission queue">
              <div id="review-queue" className="review-queue"></div>
            </aside>
            <section id="review-detail" className="review-detail-panel" aria-label="Selected submission">
              <div className="review-empty-detail">
                <div className="eyebrow bronze">Submission detail</div>
                <h3>Select a contribution to review.</h3>
                <p>The source record, editorial decision, governance state, permission matrix, holds, and exact publication authorization will appear here.</p>
              </div>
            </section>
          </div>
        </section>
      </div>

      <Script id="shared-wisdom-review-console" src="/review-console-v2.js?v=20260826-2" strategy="afterInteractive" />
      <Script id="contribution-governance-review-console" src="/review-governance.js?v=20260830-1" strategy="afterInteractive" />
    </InteriorPage>
  );
}