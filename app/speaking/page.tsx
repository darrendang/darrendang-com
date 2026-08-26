import Link from 'next/link';
import {InteriorPage} from '@/components/InteriorPage';

export const metadata={title:'Speaking'};

const talks=[
  ['D.O.T.S. — A Way of Seeing Problems','How moving from label to structure can expand the search space for better solutions.','/dots/'],
  ['From AI Experiments to Institutional Capability','A stewardship lens on mission, evidence, governance, readiness, trust, and the institutional capability required to scale AI responsibly.','/papers/from-ai-experiments-to-institutional-capability/'],
  ['Wisdom Has No Rank','What changes when useful insight comes from someone younger, more junior, or outside the expected hierarchy.','/books/wisdom-has-no-rank/'],
  ['Automate the Repetition. Preserve Human Judgment.','A human-centered way to think about AI, automation, accountability, and the work that should remain judgment-intensive.','/ideas/automate-the-repetition-preserve-human-judgment/'],
];

export default function Speaking(){return <InteriorPage eyebrow="Speaking & professional conversations" title="Some ideas become clearer when people examine them together." wide>
  <p className="lead">Darren has participated in conferences, webinars, podcasts, board discussions, and professional forums on AI, data, digital transformation, technology leadership, and public-sector innovation.</p>
  <p>The purpose is the same as DarrenDang.com: share useful thinking, invite scrutiny, learn from the exchange, and make the next version of the idea better. This page is not a commercial speaker-services page.</p>
  <h2>Current discussion territories</h2>
  <div className="card-list">{talks.map(([title,copy,href])=><article className="content-card" key={title}><h2>{title}</h2><p>{copy}</p><Link className="text-link" href={href}>Explore the idea →</Link></article>)}</div>
  <div className="speaking-note"><strong>Independent perspective</strong><p>Unless expressly identified as an official institutional presentation, views shared through DarrenDang.com and related speaking inquiries are Darren&apos;s own and do not necessarily represent OCERS or any other affiliated organization.</p></div>
  <p style={{marginTop:'42px'}}>For speaking or professional inquiries, email <a className="text-link" href="mailto:dangphibang@gmail.com?subject=Speaking%20or%20professional%20inquiry">dangphibang@gmail.com</a>.</p>
</InteriorPage>}
