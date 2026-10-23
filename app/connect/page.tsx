import { pageMetadata } from "@/lib/seo";
import {InteriorPage} from '@/components/InteriorPage';

export const metadata=pageMetadata("/connect/", {title:"Connect", description:"Contact Darren Dang for speaking, media, book inquiries, and thoughtful exchange about his independent writing and ideas."});

export default function Connect(){return <InteriorPage path="/connect/" eyebrow="Connect" title="Continue the conversation.">
  <p className="lead">DarrenDang.com exists to share ideas and invite thoughtful exchange. For professional discussion, speaking, media, book, or general inquiries, email <a className="text-link" href="mailto:dangphibang@gmail.com">dangphibang@gmail.com</a>.</p>
  <p>This is intentionally not a consulting-services or advisory-sales page. Darren currently serves in public employment, and the site is designed to keep his independent writing and ideas clearly separate from any private commercial activity.</p>
  <p>You can also <a className="text-link" href="https://www.linkedin.com/in/darren-dang-2ba3b6/">connect with Darren on LinkedIn</a>.</p>
  <p className="note">New Shared Wisdom submissions are currently paused. Read the <a className="text-link" href="/share/">contribution intake update</a> for the current status.</p>
</InteriorPage>}
