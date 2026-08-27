import Script from 'next/script';
import { InteriorPage } from '@/components/InteriorPage';

export const metadata = {
  title: 'Review Decision',
  description: 'Secure final-gate action for Shared Wisdom editorial review.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function ReviewActionPage() {
  return (
    <InteriorPage eyebrow="Final publication gate" title="Shared Wisdom Decision">
      <section className="review-state-card" aria-live="polite">
        <div id="review-action-status">
          <div className="eyebrow bronze">Secure review action</div>
          <h2>Recording your decision…</h2>
          <p>The approval token is processed privately and removed from the browser address after validation.</p>
        </div>
      </section>
      <Script id="shared-wisdom-review-action" src="/review-action.js?v=20260827-1" strategy="afterInteractive" />
    </InteriorPage>
  );
}
