import { SiteFooter, SiteHeader } from '@/components/SiteChrome';

export function InteriorPage({eyebrow,title,children,wide=false}:{eyebrow:string;title:string;children:React.ReactNode;wide?:boolean}){
  return <>
    <div className="interior-header">
      <SiteHeader/>
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="interior-title">{title}</h1>
      </div>
    </div>
    <main id="main" className="interior-main">
      <div className={`container ${wide ? "reading reading-wide" : "reading"}`}>{children}</div>
    </main>
    <SiteFooter/>
  </>
}
