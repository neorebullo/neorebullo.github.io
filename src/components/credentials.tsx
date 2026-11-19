import { ToolsMarquee } from "@/components/tools-marquee";

/** Tools section: the apps and platforms Jonathan builds with. */
export function Credentials() {
  return (
    <section id="credentials" className="lw-section lw-section-tight" aria-labelledby="credentials-title">
      <div className="lw-container">
        <p className="lw-eyebrow" data-reveal>
          <span className="lw-mono-index">05</span> Tools
        </p>
        <h2 id="credentials-title" className="lw-h2" data-reveal>
          Tools I work with
        </h2>
        <ToolsMarquee />
      </div>
    </section>
  );
}
