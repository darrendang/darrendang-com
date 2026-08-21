import Link from 'next/link';
import {InteriorPage} from '@/components/InteriorPage';

export const metadata={title:'Speaking'};

const talks=[
  ['Collect Dots. Connect Dots. Create Something New.','How cross-disciplinary learning and structural connections can create useful new possibilities.','/books/dots/'],
  ['Automate the Repetition. Preserve Human Judgment.','A human-centered way to think about AI, automation, accountability, and the work that should remain judgment-intensive.','/ideas/automate-the-repetition-preserve-human-judgment/'],
  ['Wisdom Has No Rank.','What leaders, parents, and institutions miss when they assume useful insight must come from the top.','/books/wisdom-has-no-rank/'],
];

export default function Speaking(){return <InteriorPage eyebrow="Speaking" title="Some ideas deserve more than a page. They deserve a room." wide>
  <p className="lead">Darren has presented on AI, data, digital transformation, and public-sector innovation at conferences, webinars, podcasts, and professional forums. The next stage is deliberately developing the strongest recurring ideas into a distinctive keynote platform.</p>
  <p>Books, writing, presentations, and conversations are not separate brands. They are different ways to test whether an idea is clear enough, useful enough, and human enough to travel.</p>
  <h2>Developing talk territories</h2>
  <div className="card-list">{talks.map(([title,copy,href])=><article className="content-card" key={title}><h2>{title}</h2><p>{copy}</p><Link className="text-link" href={href}>Explore the idea →</Link></article>)}</div>
  <p style={{marginTop:'42px'}}><Link className="text-link" href="/books/">Explore the three-book system →</Link></p>
</InteriorPage>}
