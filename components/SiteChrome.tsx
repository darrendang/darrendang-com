import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header nathan-header">
      <div className="container nav nathan-nav">
        <Link href="/" className="brand-lockup" aria-label="Darren Dang home">
          <span className="wordmark type-signature">Darren Dang</span>
          <span className="brand-genome type-signature">The Dang Genome</span>
        </Link>
        <nav aria-label="Primary" className="primary-nav">
          <Link href="/books/">Books</Link>
          <Link href="/the-way/">The Way</Link>
          <Link href="/letters/">Letters</Link>
          <Link href="/ideas/">Ideas</Link>
          <Link href="/genome/">Genome</Link>
          <Link className="nav-cta" href="/explore/">Explore</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="nathan-footer">
      <div className="container footer-grid genome-footer">
        <div className="footer-brand">
          <div className="wordmark type-signature">Darren Dang</div>
          <div className="footer-genome type-signature">The Dang Genome</div>
          <p>Books, ideas, and a living body of learning about what we inherit, who can teach us, what we create, and what we choose to pass forward.</p>
          <p className="footer-independence">Independent ideas and writing. Views expressed here are Darren&apos;s own and do not necessarily represent OCERS or any other institution with which he is affiliated.</p>
        </div>
        <div>
          <strong>Books &amp; The Way</strong>
          <Link href="/books/">Books</Link>
          <Link href="/books/for-those-who-come-after-us/">For Those Who Come After Us</Link>
          <Link href="/books/wisdom-has-no-rank/">Wisdom Has No Rank</Link>
          <Link href="/books/dots/">D.O.T.S.</Link>
          <Link href="/books/the-making-of-the-way/">The Making of The Way</Link>
          <Link href="/the-way-forward/">The Way Forward</Link>
          <Link href="/the-way/">The Way</Link>
          <Link href="/your-way/">Your Way</Link>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/ideas/">Ideas</Link>
          <Link href="/ideas/generative-dialogue/">Generative Dialogue</Link>
          <Link href="/dots/">D.O.T.S. Method</Link>
          <Link href="/papers/">Papers &amp; Talks</Link>
          <Link href="/the-way-in-motion/">The Way in Motion</Link>
          <Link href="/the-way/music/">The Way in Music</Link>
          <Link href="/letters/">Letters from Darren</Link>
          <Link href="/shared-wisdom/">Shared Wisdom</Link>
          <Link href="/genome/">The Dang Genome</Link>
          <Link href="/about/">About Darren</Link>
          <Link href="/speaking/">Speaking</Link>
          <Link href="/connect/">Connect</Link>
          <Link href="/independence/">Independence</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/accessibility/">Accessibility</Link>
        </div>
      </div>
      <div className="container copyright">© 2026 Darren Dang. All rights reserved.</div>
    </footer>
  );
}
