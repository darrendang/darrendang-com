import type { Metadata } from 'next';
import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';
import { authorId, pageMetadata } from '@/lib/seo';
import styles from './paper.module.css';

const path = '/papers/staying-in-sync/';
const url = 'https://darrendang.com' + path;
const title = 'Staying in Sync';
const subtitle = 'How Organizations Can Move Faster With AI';
const description = 'How leaders can coordinate people, processes, and legacy systems as AI adoption accelerates, with a public pension example and measures for responsible scaling.';
const published = '2026-11-15';
const pdf = '/docs/Staying_in_Sync_Darren_Dang.pdf';

export const metadata: Metadata = pageMetadata(path, {
  title,
  description,
  openGraph: { type: 'article', publishedTime: published },
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': url + '#article',
  headline: title,
  alternativeHeadline: subtitle,
  description,
  author: { '@type': 'Person', '@id': authorId, name: 'Darren Dang' },
  publisher: { '@type': 'Person', '@id': authorId, name: 'Darren Dang' },
  datePublished: published,
  inLanguage: 'en-US',
  mainEntityOfPage: url,
  isAccessibleForFree: true,
  articleSection: 'The Way Papers · Framework',
  encoding: {
    '@type': 'MediaObject',
    contentUrl: 'https://darrendang.com' + pdf,
    encodingFormat: 'application/pdf',
  },
};

export default function StayingInSync() {
  return (
    <InteriorPage path={path} eyebrow="The Way Papers · Framework" title={title} wide>
      <header className={styles.intro}>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.byline}>Darren Dang · <time dateTime={published}>November 15, 2026</time></p>
        <div className={styles.links}>
          <a className="button button-dark" href={pdf} download>Download PDF</a>
          <Link href="/papers/building-agency-before-agents/">Companion paper · Building Agency Before Agents</Link>
        </div>
      </header>
      <nav className={styles.contents} aria-label="On this page">
        <h2>On this page</h2>
        <ul>
          <li><a href="#executive-summary">Executive Summary</a></li>
          <li><a href="#when-one-step-gets-faster">When One Step Gets Faster</a></li>
          <li><a href="#people-process-and-technology">People Process and Technology</a></li>
          <li><a href="#what-research-can-tell-us">What Research Can Tell Us</a></li>
          <li><a href="#how-to-stay-in-sync">How to Stay in Sync</a></li>
          <li><a href="#what-leaders-should-measure">What Leaders Should Measure</a></li>
          <li><a href="#agency-across-the-life-of-a-workflow">Agency Across the Life of a Workflow</a></li>
          <li><a href="#references">References</a></li>
        </ul>
      </nav>
      <article className={styles.article} id="article" aria-label={title}>
        <h2 id="executive-summary">Executive Summary</h2>
        <p>A team can finish its work faster while the people it serves wait longer. An AI tool can generate replies, prepare cases, or initiate transactions in seconds. Its effect on the organization depends on what happens next. A reviewer needs time and evidence. An exception needs an owner. A system of record needs to accept or reject a change reliably. When those parts develop at different speeds, a gain at one step can become a backlog, a new source of error, or a loss of control elsewhere.</p>
        <p>Organizations can make progress at different speeds by coordinating the handoffs where their work depends on one another. Give teams room to experiment and learn. In live operations, set the volume and authority of AI-assisted work to what the receiving team can review, what the process can handle, and what the institution can detect and correct. When a handoff limits an important service, invest in improving it. Measure the time to a correct outcome for the person being served.</p>
        <h2 id="when-one-step-gets-faster">When One Step Gets Faster</h2>
        <p>A mechanical watch offers a useful image. Its gears turn at different speeds. Their movement is coordinated so the hands keep time. Organizations have more freedom than a watchmaker. They can change who does the work, redesign where it passes between teams, and decide which parts can run independently.</p>
        <p>Imagine a public pension office piloting an AI assistant to draft replies to member inquiries. The tool can prepare 100 drafts a day. Staff can reliably verify 40 under the current workflow, and each draft requires review. If all 100 enter the queue each day, 60 cases accumulate every working day. After five working days, 300 drafts are waiting, assuming a starting queue of zero and steady arrivals and review capacity. A report that counts drafts created could call the pilot a success while members wait longer for a correct answer.</p>
        <p>With a growing queue, managers might ask staff to review faster. An assistant drafts a convincing reply from an overnight record that omits a member’s recent service-credit correction. Under pressure, the reviewer misses it. The member receives the wrong answer while planning for retirement. If an agent can send those replies itself, the error can reach more members before anyone sees the pattern.</p>
        <p>Three kinds of failure follow from this example. <strong>Congestion</strong> appears when incoming work exceeds the capacity of the next step. <strong>Divergence</strong> appears when people or systems use different versions of the facts or apply different rules. <strong>Propagation</strong> appears when automation carries a mistake into other cases, communications, or records before the institution can intervene. A backlog makes the first visible. The other two can grow while the dashboard shows work moving faster.</p>
        <h2 id="people-process-and-technology">People Process and Technology</h2>
        <p>Readiness belongs to a workflow and the people doing it. The same organization may be ready to let an assistant explain publicly available forms, ready to pilot staff-reviewed drafting on a small set of cases, and still need more work before delegating member-facing action. The useful unit of analysis is the handoff. What crosses it, what does the next person or system need to accept it, and who can stop it when conditions change?</p>
        <table>
        <thead><tr>
        <th scope="col">Lens</th>
        <th scope="col">What falls out of sync</th>
        <th scope="col">What to change</th>
        </tr></thead>
        <tbody>
        <tr>
        <th scope="row">People</th>
        <td>AI fluency grows unevenly. Domain experts carry a rising review load, while newer staff may struggle to recognize a plausible error.</td>
        <td>Pair AI-fluent staff with domain experts. Protect practice and review time. Test whether another trained person can handle exceptions.</td>
        </tr>
        <tr>
        <th scope="row">Process</th>
        <td>Intake or drafting speeds up while approvals, exception routes, and ownership follow an earlier workflow.</td>
        <td>Map the flow from request to resolution. Remove redundant steps. Give each exception an owner and set limits on the work entering review.</td>
        </tr>
        <tr>
        <th scope="row">Technology</th>
        <td>The AI layer changes quickly while records refresh in batches or a core system has limited integration and recovery options.</td>
        <td>Show the source and its freshness. Stage proposed changes and reconcile any permitted writes. Keep a tested manual route.</td>
        </tr>
        </tbody>
        </table>
        <h3 id="people-who-can-teach-each-other">People Who Can Teach Each Other</h3>
        <p>A person who learns a new tool quickly may still need years of institutional judgment to know where its answer is fragile. A person who takes longer to adopt the tool may know why a policy exception exists, what a record usually omits, or when a member needs a conversation. Both kinds of expertise matter at the point where a draft becomes advice.</p>
        <p>Pair those people and give them a piece of real work to improve. The AI-fluent employee can show a colleague how to generate a draft with its supporting sources. The domain expert can explain where a persuasive draft would mislead, what evidence would change the answer, and which cases need escalation. Capture those lessons in training examples and evaluation cases.</p>
        <p>Give reviewers enough time and authority to challenge what they see. Someone who can reject an answer in theory needs to be able to do so on a busy Wednesday, too.</p>
        <h3 id="processes-that-carry-the-work">Processes That Carry the Work</h3>
        <p>Map the steps staff actually take, including workarounds. For each handoff, identify the evidence that travels with the case, who receives it, when work is returned, and what happens when the receiving team is at capacity. Look closely at waits and repeat reviews. One control may resolve a genuine uncertainty. Another may compensate for an old screen that hid information a reviewer can now see. Staff should help distinguish them before a process gets automated.</p>
        <p>Give the workflow an owner who can make decisions across teams. Agree on what constitutes a complete resolution and keep approval authority visible. If a receiving team can exercise judgment on 40 cases, its workload includes difficult cases, training, and absences. Plan intake below demonstrated capacity where variability warrants it. When the queue fills, preserve the ordinary service route so members still have a way to get help.</p>
        <h3 id="technology-that-preserves-the-record">Technology That Preserves the Record</h3>
        <p>A legacy system may embody years of tested business rules, audit history, and operational knowledge. Its age tells us little about the value of replacing it for a particular workflow. Start with the dependency that affects service. If an overnight update is adequate for answering general questions, document that expectation. If a determination depends on a change made today, provide an approved route to verify the current record or send the case to a qualified person.</p>
        <p>Keep the boundary between a draft and an official record clear. A system can display the source and when it was retrieved, then stage a proposed change for an authorized person. Where automated writes are appropriate, verify that repeat submissions cannot create duplicate actions, record what happened, and compare the outcomes with the authoritative system. A reply already sent cannot be recalled in every channel, so recovery may require finding affected members, issuing a correction, and helping them understand what changed.</p>
        <h2 id="what-research-can-tell-us">What Research Can Tell Us</h2>
        <p>The evidence gives leaders grounds to experiment and reasons to examine the whole workflow. In a study of 5,172 customer-support workers, Brynjolfsson, Li, and Raymond found that access to a generative AI assistant increased issues resolved per hour by 15 percent on average. Less experienced and lower-skilled workers gained in speed and quality, while the most experienced workers saw smaller speed gains and some quality declines <a href="#reference-2">[2]</a>. In an experiment with consultants, Dell’Acqua and colleagues found improvements on some tasks and lower correctness on a task outside the tested model’s capabilities <a href="#reference-3">[3]</a>. Both cases point to the value of testing by role, task, and level of experience.</p>
        <p>Dillon and colleagues reported time savings from individual access to generative AI in a field experiment across 66 firms. They did not detect changes in the quantity or mix of workers’ tasks from providing access at the individual level <a href="#reference-4">[4]</a>.</p>
        <p>Earlier work on the productivity J-curve described how investments in complementary capabilities, including human capital and new processes, can shape when gains from a general-purpose technology show up <a href="#reference-5">[5]</a>. Gartner’s pace-layered application strategy gives an architectural precedent for managing applications at different rates <a href="#reference-6">[6]</a>. These findings and frameworks give leaders a basis for examining the connection between local improvements and service delivery. Each institution should test the practices proposed here against its own results.</p>
        <h2 id="how-to-stay-in-sync">How to Stay in Sync</h2>
        <h3 id="give-learning-room-to-move">Give Learning Room to Move</h3>
        <p>A team can test prompts, compare drafts, and replay difficult cases in an approved environment. An experiment whose output stays inside the team can progress on its own schedule. A team can also run in shadow mode, preparing proposed answers alongside the ordinary process so staff can compare results before anything reaches a member. Those experiments expose unclear policies, missing evidence, and tedious steps. Bring the receiving team into that work early. Its expertise helps determine which experiments are worth advancing.</p>
        <p>Match the pace of live use to the consequences of the action. An internal draft, an externally sent reply, and an update to a benefit record carry different obligations. Review each expansion when the decision is made. A change in volume, case mix, model, data source, permissions, or receiving team can change the conditions under which the pilot worked. The NIST AI Risk Management Framework and its generative AI profile provide guidance for evaluating and monitoring such risks across the system’s life cycle <a href="#reference-7">[7]</a>.</p>
        <h3 id="fix-the-handoff-that-limits-the-outcome">Fix the Handoff That Limits the Outcome</h3>
        <p>Return to the pension office. The next investment depends on why the team can verify 40 cases a day. Reviewers might spend most of their time finding the governing provision. Attaching the relevant passage and effective date to every draft could reduce that burden. If exceptions consume the time, the office might route routine informational inquiries through a trained team and direct cases involving individual facts to specialists. If reviewers keep encountering stale records, address access to authoritative data before widening the pilot.</p>
        <p>Each move changes a different part of the workflow. Assign the people, process, and technology work to owners and fund them alongside the pilot. Specify the member outcome each investment is expected to improve. When the case for AI rests on minutes saved upstream, verify whether the receiving team absorbed additional work and whether the member received better service.</p>
        <h3 id="set-conditions-for-expanding-or-pausing">Set Conditions for Expanding or Pausing</h3>
        <p>Before going live, the workflow owner should record the allowed actions, staffing assumptions, case types, volume limit, escalation route, and person authorized to pause. Set thresholds from the organization’s baseline and service commitments. For example, a team might slow intake when a queue approaches its service deadline, stop automated sending when the authoritative data is stale, or suspend writes when a change cannot be reconciled. Route work to the established service process while staff investigate.</p>
        <p>Decide what it takes to resume. The owner should be able to identify which cases were exposed, correct any records or communications, and show that the revised control would have caught the failure. Include peak periods and absences in the test. A control that depends on the one employee who built the pilot puts service at risk when that person is unavailable.</p>
        <h2 id="what-leaders-should-measure">What Leaders Should Measure</h2>
        <p>Use a baseline for the complete workflow. Measure from the public’s side of the handoff, and then look inside the process for the cause of change. Track routine and complex cases independently so a faster average cannot hide longer waits or more errors for people with difficult cases.</p>
        <table>
        <thead><tr>
        <th scope="col">What to measure</th>
        <th scope="col">What it can reveal</th>
        </tr></thead>
        <tbody>
        <tr>
        <th scope="row">Correct resolutions and time to resolution</th>
        <td>Whether people get accurate, usable answers faster, including those with complex cases. Check a sample for correctness.</td>
        </tr>
        <tr>
        <th scope="row">Age of the oldest open cases and arrivals versus completions</th>
        <td>Where work is accumulating, even if the front of the process appears faster.</td>
        </tr>
        <tr>
        <th scope="row">Total staff time per resolved case and cases reopened</th>
        <td>Whether drafting gains survive review, escalation, and rework. Include time spent by downstream teams.</td>
        </tr>
        <tr>
        <th scope="row">Exceptions, review capacity, and correction time</th>
        <td>Whether staff can still challenge decisions and handle surges. Track how long it takes to detect and correct material mistakes.</td>
        </tr>
        <tr>
        <th scope="row">Record discrepancies and unresolved corrections</th>
        <td>Whether different parts of the workflow are acting on the same facts and whether affected people received a correction.</td>
        </tr>
        </tbody>
        </table>
        <p>In a public institution, faster service and lower rework are part of the return. Trust also depends on whether a person can understand their answer, reach someone with authority to help, and get an error corrected. Give those outcomes the same visibility as the savings report.</p>
        <h2 id="agency-across-the-life-of-a-workflow">Agency Across the Life of a Workflow</h2>
        <p>In <cite>Building Agency Before Agents</cite>, I call the distance between an institution’s technical capacity and its ability to direct that capacity responsibly the Agency Gap <a href="#reference-1">[1]</a>. The paper describes the foundations for delegation, among them trustworthy knowledge, meaningful judgment, legitimate authority, and the ability to intervene. Staying in sync brings that question into day-to-day operations. The conditions that justify delegation can change after a pilot passes review.</p>
        <p>A team may have enough capacity to investigate exceptions when it handles a limited set of draft responses. If the agent starts acting across channels, the same staff may have fewer opportunities to notice that the error has spread. The people in charge need a clear view of what has happened, authority to stop further action, a way to keep ordinary service available, and a practical means of correcting what reached the public. Human agency lives in those abilities.</p>
        <p>An executive team can begin with one service people care about. Follow a case from the initial request to a verified outcome. Find the first handoff that would strain if the AI-enabled step doubled its output. Give that handoff an owner and put the next dollar or hour where it will improve the service. Then look for the constraint that emerges after the change. That is an ongoing responsibility of modernization.</p>
        <p>When we give an institution a faster way to act, we should also give its people a better way to see what is happening and correct what goes wrong. If the member gets a correct answer sooner and the people serving them retain that ability, the institution has learned how to move faster.</p>
        <h2 id="references">References</h2>
        <ol className={styles.references}>
        <li id="reference-1">Darren Dang. <cite>Building Agency Before Agents</cite>. The Way Papers, 2026. <a href="https://darrendang.com/papers/building-agency-before-agents/">DarrenDang.com</a></li>
        <li id="reference-2">Erik Brynjolfsson, Danielle Li, and Lindsey R. Raymond. “Generative AI at Work.” The Quarterly Journal of Economics 140, no. 2 (2025), 889–942. <a href="https://doi.org/10.1093/qje/qjae044">Journal article</a></li>
        <li id="reference-3">Fabrizio Dell’Acqua and colleagues. “Navigating the Jagged Technological Frontier.” Harvard Business School Working Paper 24-013, September 2023. <a href="https://www.hbs.edu/ris/download.aspx?name=24-013.pdf">HBS working paper</a></li>
        <li id="reference-4">Eleanor W. Dillon, Sonia Jaffe, Nicole Immorlica, and Christopher T. Stanton. “Shifting Work Patterns with Generative AI.” NBER Working Paper 33795, revised November 2025. <a href="https://doi.org/10.3386/w33795">NBER working paper</a></li>
        <li id="reference-5">Erik Brynjolfsson, Daniel Rock, and Chad Syverson. “The Productivity J-Curve.” American Economic Journal: Macroeconomics 13, no. 1 (2021), 333–372. <a href="https://doi.org/10.1257/mac.20180386">Journal article</a></li>
        <li id="reference-6">Gartner. “Pace-Layered Application Strategy.” Gartner Symposium/ITxpo summary report, 2012. <a href="https://www.gartner.com/imagesrv/symposium/orlando/docs/SYM2012_summaryreport_Applications.pdf">Symposium report</a></li>
        <li id="reference-7">National Institute of Standards and Technology. AI Risk Management Framework (2023) and Generative Artificial Intelligence Profile (2024). <a href="https://doi.org/10.6028/NIST.AI.100-1">AI RMF 1.0</a> <a href="https://doi.org/10.6028/NIST.AI.600-1">Generative AI Profile</a></li>
        </ol>
      </article>
      <footer className={styles.footer}>
        <p>Darren Dang writes in a personal capacity. The pension example is hypothetical.</p>
        <div className={styles.links}>
          <Link href="/papers/">All Papers &amp; Talks</Link>
          <Link href="/papers/building-agency-before-agents/">Read Building Agency Before Agents</Link>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </InteriorPage>
  );
}
