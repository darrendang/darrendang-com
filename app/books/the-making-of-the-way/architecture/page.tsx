import Script from 'next/script';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Private Book 4 Architecture',
  description: 'Private prepublication architecture workspace for The Making of The Way.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

const authStart = 'https://zlpjkixskskfcgmkajyd.supabase.co/functions/v1/book4-architecture-auth-start';

export default function Book4ArchitecturePage() {
  return (
    <InteriorPage eyebrow="Private prepublication workspace" title="The Architecture We Earned" wide>
      <link rel="stylesheet" href="/book4-architecture.css?v=20260915-1" />

      <div id="book4-architecture" className="book4-architecture" aria-live="polite">
        <section id="book4-architecture-loading" className="b4a-state-card">
          <div className="eyebrow bronze">Secure architecture</div>
          <h2>Checking your session…</h2>
          <p>The unpublished architecture is requested only after Google authentication and authorization.</p>
        </section>

        <section id="book4-architecture-login" className="b4a-state-card" hidden>
          <div className="eyebrow bronze">Private access</div>
          <h2>Sign in to enter the Book 4 architecture.</h2>
          <p className="lead">This prepublication workspace is restricted to Darren’s authorized Google identity. The architecture itself is not embedded in the public website build.</p>
          <a className="button button-dark" href={authStart}>Sign in with Google</a>
          <p id="book4-architecture-auth-message" className="b4a-small-note"></p>
        </section>

        <section id="book4-architecture-denied" className="b4a-state-card b4a-denied" hidden>
          <div className="eyebrow bronze">Access denied</div>
          <h2>This Google account is not authorized.</h2>
          <p>The prepublication Book 4 architecture is restricted to the approved identity.</p>
          <button id="book4-architecture-denied-signout" className="button button-outline" type="button">Sign out</button>
        </section>

        <section id="book4-architecture-workspace" hidden>
          <div className="b4a-toolbar">
            <div>
              <div className="eyebrow bronze">Book 4 · Private until publication</div>
              <h2 id="book4-architecture-title">The Architecture We Earned</h2>
              <p id="book4-architecture-subtitle" className="lead"></p>
            </div>
            <div className="b4a-toolbar-actions">
              <span id="book4-architecture-session" className="b4a-session-label"></span>
              <button id="book4-architecture-signout" className="button button-outline" type="button">Sign out</button>
            </div>
          </div>

          <div className="b4a-private-banner" role="note">
            <strong>Prepublication.</strong>
            <span>This view is intentionally absent from public navigation and search indexing.</span>
          </div>

          <nav id="book4-architecture-stages" className="b4a-stage-nav" aria-label="Architecture stages"></nav>

          <div className="b4a-stage-heading">
            <div>
              <div id="book4-architecture-period" className="eyebrow bronze"></div>
              <h3 id="book4-architecture-stage-title"></h3>
              <p id="book4-architecture-thesis" className="b4a-thesis"></p>
            </div>
            <div className="b4a-stage-controls">
              <button id="book4-architecture-prev" className="button button-outline b4a-button-small" type="button">← Previous</button>
              <button id="book4-architecture-next" className="button button-dark b4a-button-small" type="button">Next →</button>
            </div>
          </div>

          <p id="book4-architecture-narrative" className="b4a-narrative"></p>

          <div className="b4a-work-grid">
            <div className="b4a-canvas-panel">
              <div className="b4a-canvas-intro">
                <span>Select any node to inspect why it appeared and what job it performs.</span>
                <span id="book4-architecture-provenance" className="b4a-provenance"></span>
              </div>
              <div id="book4-architecture-canvas" className="b4a-canvas" aria-label="Interactive architecture diagram"></div>
              <div id="book4-architecture-mechanism" className="b4a-mechanism" hidden></div>
            </div>

            <aside id="book4-architecture-detail" className="b4a-detail-panel" aria-label="Selected architecture node">
              <div className="eyebrow bronze">Node detail</div>
              <h3>Select a node.</h3>
              <p>Its role in the architecture will appear here.</p>
            </aside>
          </div>

          <div id="book4-architecture-error" className="b4a-error" hidden></div>
        </section>
      </div>

      <Script id="book4-private-architecture" src="/book4-architecture.js?v=20260915-1" strategy="afterInteractive" />
    </InteriorPage>
  );
}
