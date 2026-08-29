import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="wordmark">Darren Dang <span>✦</span></Link>
        <nav aria-label="Primary">
          <Link href="/the-way/">The Way</Link>
          <Link href="/explore/">Explore</Link>
          <Link href="/your-way/">Your Way</Link>
          <Link className="nav-cta" href="/the-way-forward/">The Way Forward</Link>
          <Link href="/about/">About</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid genome-footer">
        <div>
          <div className="wordmark">Darren Dang</div>
          <p>The public experience layer for The Way: begin with inherited wisdom, make it your own, choose The Way Forward, and pass forward what life teaches you.</p>
          <p className="footer-independence">Independent ideas and writing. Views expressed here are Darren&apos;s own and do not necessarily represent OCERS or any other institution with which he is affiliated.</p>
        </div>
        <div>
          <strong>Begin & Explore</strong>
          <Link href="/the-way/">The Way</Link>
          <Link href="/the-way/constitution/">The Constitution</Link>
          <Link href="/explore/">Explore the Genome</Link>
          <Link href="/letters/">Letters from Darren</Link>
          <Link href="/books/">Books · The Path Forward</Link>
          <Link href="/ideas/">Ideas</Link>
          <Link href="/dots/">D.O.T.S.</Link>
          <Link href="/papers/">Papers & Talks</Link>
        </div>
        <div>
          <strong>Make It Your Own</strong>
          <Link href="/your-way/">Your Way</Link>
          <Link href="/the-way-forward/">The Way Forward</Link>
          <Link href="/shared-wisdom/">Shared Wisdom</Link>
          <Link href="/contribute/">Pass It Forward</Link>
          <Link href="/genome/">The Dang Genome</Link>
          <Link href="/about/">About Darren</Link>
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
