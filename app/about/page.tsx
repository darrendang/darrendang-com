import Image from 'next/image';
import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = { title: 'About' };

export default function About() {
  return (
    <InteriorPage eyebrow="About" title="A life between worlds.">
      <div className="about-grid">
        <Image
          src="/images/darren-headshot.webp"
          width={360}
          height={540}
          alt="Portrait of Darren Dang."
          priority
          sizes="(max-width: 900px) 100vw, 40vw"
          style={{ width: '100%', height: 'auto', maxWidth: '520px' }}
        />
        <div>
          <p className="lead">Much of how Darren thinks comes from moving between worlds: Vietnam and America; computer science and business; technology and public institutions; analysis and judgment; leadership and family; one generation and the next.</p>
          <p>Darren Dang is Chief Technology Officer at the Orange County Employees Retirement System. His career has crossed private technology, consulting, education, courts, and public pensions.</p>
          <h2>Ideas first. Experience as evidence.</h2>
          <p>The purpose of this site is not to reproduce a résumé. Darren&apos;s experience provides context for ideas about learning, judgment, systems, leadership, technology, family, service, and what we pass forward.</p>
          <p>Those ideas now take shape across an expanding body of work: <em>For Those Who Come After Us</em> asks what is worth carrying forward; <em>Wisdom Has No Rank</em> explores what becomes possible when we remain teachable; and <em>D.O.T.S.</em> examines how broad learning and hidden connections can become useful new possibilities.</p>
          <Link className="text-link" href="/books/">Explore the Books →</Link>
        </div>
      </div>
    </InteriorPage>
  );
}
