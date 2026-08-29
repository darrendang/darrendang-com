import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Submit a Contribution',
  description: 'Submit a story, lesson, question, correction, reflection, or short video for private editorial review as a possible contribution to The Way Forward.'
};

const DEFAULT_INTAKE_ENDPOINT = 'https://zlpjkixskskfcgmkajyd.supabase.co/functions/v1/shared-wisdom-intake';

export default function ShareWisdomPage(){
  const endpoint = process.env.SHARED_WISDOM_FORM_ENDPOINT || DEFAULT_INTAKE_ENDPOINT;

  return <InteriorPage eyebrow="The Way Forward · Contribution Intake" title="What have you learned that you would want someone who comes after you to know?" wide>
    <div className="share-intro-grid">
      <div>
        <p className="lead">You can share a reflection, story, lesson, question, correction, alternate perspective, new connection, or brief video. Submissions enter a private review process. Nothing is published automatically.</p>
        <p>The strongest contributions usually begin with something specific: what happened, what changed your thinking, what you learned, where the limits are, and why the experience might help someone else begin with more context or possibility.</p>
      </div>
      <aside className="intake-flow" aria-label="Contribution review process">
        <span>Submit</span><b>→</b><span>Receive</span><b>→</b><span>Review</span><b>→</b><span>Select</span><b>→</b><span>Edit</span><b>→</b><span>Approve</span><b>→</b><span>Publish</span>
      </aside>
    </div>

    <section className="share-form-section" aria-labelledby="share-form-title">
      <div className="eyebrow bronze">Contribution intake</div>
      <h2 id="share-form-title">Add a dot.</h2>
      <div className="intake-status intake-status-live" role="status"><strong>Secure contribution intake is active.</strong><p>Your submission and any attachment are sent to a private review queue. They are not committed to the public website repository and are not published automatically.</p></div>
      <form className="wisdom-form" action={endpoint} method="post" encType="multipart/form-data">
        <input type="hidden" name="form_type" value="shared_wisdom" />
        <input type="hidden" name="source" value="darrendang.com/share" />
        <label className="honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        <div className="form-row two-col">
          <label>Your name<input name="name" type="text" autoComplete="name" required /></label>
          <label>Email for private follow-up<input name="email" type="email" autoComplete="email" required /></label>
        </div>
        <div className="form-row two-col">
          <label>What are you sharing?
            <select name="contribution_type" required defaultValue="">
              <option value="" disabled>Select one</option>
              <option value="wisdom-note">Wisdom Note, reflection, question, correction, or connection</option>
              <option value="story">Story or lesson</option>
              <option value="video">Short video</option>
              <option value="story-and-media">Story with an attachment</option>
            </select>
          </label>
          <label>Public attribution preference
            <select name="attribution" required defaultValue="full-name">
              <option value="full-name">Full name</option>
              <option value="first-name">First name only</option>
              <option value="anonymous">Anonymous publicly</option>
            </select>
          </label>
        </div>
        <label>Working title<input name="title" type="text" maxLength={140} placeholder="A short title for your story, lesson, or question" /></label>
        <label>What happened, or what would you like to carry forward?<textarea name="contribution" rows={10} required placeholder="Tell it in your own words. Specific experiences and concrete questions are more useful than general advice." /></label>
        <label>What did you learn, question, or see differently?<textarea name="lesson" rows={5} required placeholder="What changed in how you think, decide, lead, build, live, relate to others, or understand the issue?" /></label>
        <label>Who do you hope this might help?<input name="audience" type="text" placeholder="For example: my children, a new leader, someone starting over" /></label>
        <label>Optional attachment or short video
          <input name="attachment" type="file" accept=".txt,.pdf,.doc,.docx,.rtf,.jpg,.jpeg,.png,.webp,.mp4,.mov,.m4v,.webm" />
          <span className="field-help">Written documents, images, or short video clips up to 25 MB. Keep video focused on one experience, question, or lesson.</span>
        </label>
        <fieldset className="permission-fieldset">
          <legend>Permission and review</legend>
          <label className="check-label"><input name="rights_confirmed" type="checkbox" required />I created this contribution or have permission to share it and any attached media.</label>
          <label className="check-label"><input name="review_permission" type="checkbox" required />I give DarrenDang.com permission to privately review this submission and contact me about it.</label>
          <label className="check-label"><input name="publication_permission" type="checkbox" required />If selected, I give permission for the contribution to be edited for clarity or length and published with my chosen attribution, subject to final editorial approval.</label>
        </fieldset>
        <div className="form-submit-row">
          <button className="button button-dark" type="submit">Submit for review</button>
          <p className="note">Submission does not guarantee publication. A contribution remains attributable to its source and does not become Darren&apos;s canon merely by being submitted or published.</p>
        </div>
      </form>
    </section>

    <section className="contribution-policy">
      <div className="eyebrow bronze">Stewardship principles</div>
      <h2>Curated for usefulness, provenance, and freedom.</h2>
      <div className="policy-grid">
        <article><h3>Nothing publishes automatically.</h3><p>Every contribution is reviewed before it can appear on the site.</p></article>
        <article><h3>Authorship stays visible.</h3><p>A contributor&apos;s story remains the contributor&apos;s story. Connections to Darren&apos;s ideas do not erase provenance.</p></article>
        <article><h3>Privacy comes before content.</h3><p>Do not submit private information about another person that you do not have the right to share.</p></article>
        <article><h3>The lesson must earn its place.</h3><p>The constitutional test is whether the contribution can help someone start stronger without narrowing their future.</p></article>
      </div>
      <p className="note">For professional, media, or speaking inquiries rather than a contribution, use <Link className="text-link" href="/connect/">Connect</Link>.</p>
    </section>
  </InteriorPage>
}
