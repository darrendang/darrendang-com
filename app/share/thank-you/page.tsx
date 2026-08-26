import Link from 'next/link';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Thank You for Sharing',
  robots: { index: false, follow: true }
};

export default function ShareThankYouPage(){
  return <InteriorPage eyebrow="Shared Wisdom" title="Thank you for adding a dot.">
    <div className="thank-you-panel">
      <p className="lead">Your contribution has been received for private editorial review.</p>
      <p>Nothing is published automatically. If the story or lesson appears to fit Shared Wisdom, DarrenDang.com may contact you to clarify context, attribution, permissions, or editing before anything is made public.</p>
      <p>Whether or not a submission is ultimately published, thank you for taking the time to ask a worthwhile question: <strong>what have I learned that might help someone who comes after me?</strong></p>
      <div className="actions">
        <Link className="button button-dark" href="/shared-wisdom/">Explore Shared Wisdom</Link>
        <Link className="text-link" href="/genome/">Explore The Dang Genome →</Link>
      </div>
    </div>
  </InteriorPage>
}
