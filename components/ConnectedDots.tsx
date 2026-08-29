import Link from "next/link";

type Connection = {
  label: string;
  title: string;
  copy: string;
  href: string;
};

type ConnectedDotsProps = {
  connections: Connection[];
  question: string;
  intro?: string;
};

export function ConnectedDots({ connections, question, intro }: ConnectedDotsProps) {
  return (
    <>
      <section className="genome-layers" aria-labelledby="connected-dots-title">
        <div className="eyebrow bronze">Connected dots</div>
        <h2 id="connected-dots-title">Follow the relationships.</h2>
        <p className="lead">{intro || "This is one node in a larger body of learning. Follow the connections to see what shaped the idea, where it appears elsewhere, and what other perspectives may extend it."}</p>
        <div className="layer-grid">
          {connections.map((connection) => (
            <article key={`${connection.label}-${connection.href}`}>
              <div className="book-movement">{connection.label}</div>
              <h3>{connection.title}</h3>
              <p>{connection.copy}</p>
              <Link className="text-link" href={connection.href}>Follow this dot →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="genome-boundary" aria-labelledby="for-your-way-title">
        <div className="eyebrow bronze">For Your Way</div>
        <h2 id="for-your-way-title">{question}</h2>
        <p>The point is not to inherit the conclusion unchanged. Use the question to test the idea against your own evidence, relationships, responsibilities, and lived experience.</p>
        <div className="actions">
          <Link className="button button-dark" href="/your-way/">Reflect through Your Way</Link>
          <Link className="text-link" href="/contribute/">Pass something forward →</Link>
        </div>
      </section>
    </>
  );
}
