import { SiteFooter, SiteHeader } from '@/components/SiteChrome';
import { Breadcrumbs } from '@/components/Breadcrumbs';

type InteriorPageProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
  titleRole?: 'editorial' | 'signature';
  path?: string;
};

export function InteriorPage({
  eyebrow,
  title,
  children,
  wide = false,
  titleRole = 'editorial',
  path,
}: InteriorPageProps) {
  const roleClass = titleRole === 'signature' ? 'type-signature signature-heading' : 'type-editorial';

  return <>
    <div className="interior-header">
      <SiteHeader/>
      <div className="container">
        {path && <Breadcrumbs path={path} title={title} />}
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
