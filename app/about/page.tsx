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
          <p>Darren Dang currently serves as Chief Technology Officer at the Orange County Employees Retirement System. His career has crossed private technology, consulting, education, courts, and public pensions.</p>
          <h2>Ideas first. Experience as evidence.</h2>
          <p>DarrenDang.com is not meant to reproduce a résumé. Darren&apos;s professional and personal experiences provide provenance for ideas about learning, judgment, systems, leadership, technology, family, service, and what we pass forward.</p>
          <p>A recurring pattern has emerged across that body of work: lessons can cross generations, wisdom can cross hierarchy, ideas can cross disciplines, and real institutional problems often cross the organizational boundaries used to manage them.</p>
          <p>That thinking now takes shape across books, essays, papers, talks, and D.O.T.S.—a way of seeing problems by moving from label to structure and expanding where we look for useful ideas.</p>
          <h2>A steward of wisdom.</h2>
          <p>Darren increasingly thinks of this work as stewardship rather than ownership: preserve what matters, connect what experience can teach, give credit to the people and places that shaped the lesson, and pass wisdom forward in a form someone else can question and improve.</p>
          <p>The North Star is simple: <strong>strengthen the starting point for someone who comes after.</strong> The goal is not to hand the next generation a finished script. It is to leave better context, better questions, and more useful material from which they can think for themselves.</p>
          <div className="independence-callout">The views and ideas expressed on DarrenDang.com are Darren&apos;s own and do not necessarily represent OCERS or any other institution with which he is affiliated.</div>
          <div className="actions"><Link className="text-link" href="/ideas/living-legacy/">Living Legacy →</Link><Link className="text-link" href="/dots/">Explore D.O.T.S. →</Link><Link className="text-link" href="/independence/">Editorial independence →</Link></div>
        </div>
      </div>
    </InteriorPage>
  );
}