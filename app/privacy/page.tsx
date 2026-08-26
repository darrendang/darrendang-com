import { InteriorPage } from '@/components/InteriorPage';

export const metadata={title:'Privacy'};

export default function Privacy(){
  return <InteriorPage eyebrow="Legal" title="Privacy">
    <p>DarrenDang.com is designed to collect only the information needed to operate the site, respond to inquiries, and review material that people intentionally submit.</p>
    <h2>Shared Wisdom submissions</h2>
    <p>If the Shared Wisdom intake service is enabled, the submission form may collect your name, email address, written contribution, attribution preference, permission choices, and any document, image, or short video you intentionally attach.</p>
    <p>Submitted material is intended to enter a private review process. It is not published automatically and should not be stored in the public GitHub repository. Contact information is used for review and follow-up and is not displayed publicly unless you separately approve publication of information that contains it.</p>
    <h2>Publication</h2>
    <p>If a contribution is selected for possible publication, DarrenDang.com may contact you to clarify attribution, editing, permissions, or context. Publication remains discretionary. A published contribution should retain clear provenance so a contributor&apos;s story is not presented as Darren&apos;s story.</p>
    <h2>What not to submit</h2>
    <p>Do not submit passwords, financial account information, government identification numbers, confidential employer or client information, private medical records, or personal information about another person that you do not have the right to share.</p>
    <h2>Services</h2>
    <p>As analytics, inquiry, or private contribution-storage services are activated, this notice will be updated to identify material service relationships and the information they process.</p>
  </InteriorPage>
}
