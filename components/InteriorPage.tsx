import { SiteFooter, SiteHeader } from '@/components/SiteChrome';

type InteriorPageProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
  titleRole?: 'editorial' | 'signature';
};

export function InteriorPage({
  eyebrow,
  title,
  children,
  wide = false,
  titleRole = 'editorial',
}: InteriorPageProps) {
  const roleClass = titleRole === 'signature' ? 'type-signature signature-heading' : 'type-editorial';

  return <>
    <div className="interior-header">
      <SiteHeader/>
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className={`interior-title ${roleClass}`}>{title}</h1>
      </div>
    </div>
    <main id="main" className="interior-main">
      <div className={`container ${wide ? "reading reading-wide" : "reading"}`}>{children}</div>
    </main>
    <SiteFooter/>
  </>
}
