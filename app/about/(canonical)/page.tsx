import Image from 'next/image';
import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = { title: 'About' };

export default function About() {
  return (
    <InteriorPage eyebrow="About Darren" title="A life between worlds.">
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
          <p>Darren Dang currently serves as Chief Technology Officer at the Orange County Employees Retirement System. His career has crossed private technology, consulting, education, courts, and public pensions.</p>
          <h2>Ideas first. Experience as evidence.</h2>
          <p>DarrenDang.com is not meant to reproduce a résumé. Darren&apos;s professional and personal experiences provide provenance for ideas about learning, judgment, systems, leadership, technology, family, service, and what we pass forward.</p>
          <p>A recurring pattern has emerged across that body of work: lessons can cross generations, wisdom can cross hierarchy, ideas can cross disciplines, and real institutional problems often cross the organizational boundaries used to manage them.</p>
          <p>That thinking now takes shape across books, Letters, papers, talks, D.O.T.S., and the Dang Genome—the living connected body through which The Way can be explored, tested, expanded, and passed forward. DarrenDang.com is the public experience layer of that larger system.</p>
          <h2>Origin node. Current steward. Not the final authority on another person&apos;s Way.</h2>
          <p>Darren is the initial source of much of the material in the Genome and the current constitutional steward of The Way. Stewardship means preserving what matters, connecting what experience can teach, giving credit to the people and places that shaped the lesson, and passing wisdom forward in a form someone else can question and improve.</p>
          <p>The North Star is: <strong>leave those who come after a stronger starting point and the freedom to go farther.</strong> The goal is not to hand the next generation a finished script. It is to leave better context, better questions, and more useful material from which they can think for themselves.</p>
          <p>The Genome therefore leaves room for other voices. Shared Wisdom preserves selected lessons and stories from other people with clear authorship, provenance, privacy, and publication permission.</p>
          <div className="independence-callout">The views and ideas expressed on DarrenDang.com are Darren&apos;s own and do not necessarily represent OCERS or any other institution with which he is affiliated.</div>
          <div className="actions"><Link className="text-link" href="/the-way/">The Way →</Link><Link className="text-link" href="/genome/">The Dang Genome →</Link><Link className="text-link" href="/shared-wisdom/">Shared Wisdom →</Link><Link className="text-link" href="/independence/">Editorial independence →</Link></div>
        </div>
      </div>
    </InteriorPage>
  );
}
