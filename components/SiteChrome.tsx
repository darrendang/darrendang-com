import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="wordmark">Darren Dang <span>✦</span></Link>
        <nav aria-label="Primary">
          <Link href="/the-way/">The Way</Link>
          <Link href="/letters/">Letters</Link>
          <Link href="/ideas/">Ideas</Link>
          <Link href="/books/">Books</Link>
          <Link href="/shared-wisdom/">Shared Wisdom</Link>
          <Link href="/about/">About</Link>
          <Link className="nav-cta" href="/share/">Share Wisdom</Link>
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
          <p>The public expression of The Way—a place where ideas, stories, letters, books, and shared wisdom can be preserved, connected, tested, improved, and passed forward.</p>
          <p className="footer-independence">Independent ideas and writing. Views expressed here are Darren&apos;s own and do not necessarily represent OCERS or any other institution with which he is affiliated.</p>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/the-way/">The Way</Link>
          <Link href="/letters/">Letters from Darren</Link>
          <Link href="/ideas/">Ideas</Link>
          <Link href="/books/">Books</Link>
          <Link href="/genome/">The Dang Genome</Link>
          <Link href="/dots/">D.O.T.S.</Link>
          <Link href="/papers/">Papers</Link>
          <Link href="/speaking/">Speaking</Link>
        </div>
        <div>
          <strong>Pass Forward</strong>
          <Link href="/shared-wisdom/">Shared Wisdom</Link>
          <Link href="/share/">Share What You&apos;ve Learned</Link>
          <Link href="/about/">About Darren</Link>
          <Link href="/connect/">Connect</Link>
          <a href="mailto:dangphibang@gmail.com">Email Darren</a>
          <Link href="/independence/">Independence</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/accessibility/">Accessibility</Link>
        </div>
      </div>
      <div className="container copyright">© 2026 Darren Dang. All rights reserved.</div>
    </footer>
  );
}
