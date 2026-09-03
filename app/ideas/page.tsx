import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';
import { ideas } from '@/content/seed';

export const metadata={
  title:'Ideas',
  description:'Explore Darren Dang’s core ideas about learning, leadership, human–AI collaboration, knowledge stewardship, D.O.T.S., and passing wisdom forward.',
};

export default function Ideas(){
  return <InteriorPage eyebrow="Ideas" title="Ideas worth using, questioning, and carrying forward.">
    <p className="lead">This is the public idea map behind The Way: durable concepts that can be explored through books, papers, talks, stories, case studies, and practice without turning the site into a conventional blog.</p>
    <p>Each idea keeps a clear home and provenance. Darren&apos;s Ideas remain distinct from <Link className="text-link" href="/shared-wisdom/">Shared Wisdom</Link> contributed by other people, while related ideas are deliberately connected so readers—and search engines—can follow the larger body of thought.</p>
    <div className="card-list">{ideas.map(i=><article className="content-card" key={i.slug}><div className="eyebrow bronze">{i.topic}</div><h2>{i.title}</h2><p>{i.summary}</p><Link className="text-link" href={`/ideas/${i.slug}/`}>Explore the idea →</Link></article>)}</div>
    <div className="section-link"><Link className="text-link" href="/papers/">Read The Way Papers →</Link></div>
    <div className="section-link"><Link className="text-link" href="/genome/">See how Ideas fit into The Dang Genome →</Link></div>
  </InteriorPage>
}
