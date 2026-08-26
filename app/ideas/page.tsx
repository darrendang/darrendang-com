import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';
import { ideas } from '@/content/seed';

export const metadata={title:'Ideas'};

export default function Ideas(){
  return <InteriorPage eyebrow="Ideas" title="Ideas worth using, questioning, and carrying forward.">
    <p className="lead">Ideas are durable intellectual entities inside The Dang Genome. Books, writing, talks, stories, papers, and media are different ways an idea can be developed, tested, applied, and made to travel.</p>
    <p>Darren&apos;s Ideas remain distinct from <Link className="text-link" href="/shared-wisdom/">Shared Wisdom</Link> contributed by other people. The two may be related editorially, but provenance stays visible.</p>
    <div className="card-list">{ideas.map(i=><article className="content-card" key={i.slug}><div className="eyebrow bronze">{i.topic}</div><h2>{i.title}</h2><p>{i.summary}</p><Link className="text-link" href={`/ideas/${i.slug}/`}>Explore the idea →</Link></article>)}</div>
    <div className="section-link"><Link className="text-link" href="/genome/">See how Ideas fit into The Dang Genome →</Link></div>
  </InteriorPage>
}
