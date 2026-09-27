import SectionTitle from "./SectionTitle";
import { portfolio } from "../portfolio";
import spaceSection from "../assets/space-section.jpg";

export default function DevOps() {
  return (
    <section id="devops" className="space-section relative overflow-hidden px-5 py-24 lg:px-8">
      <img className="space-section-image" src={spaceSection} alt="" loading="lazy" width="1536" height="1024" />
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle number="03" eyebrow="DevOps" title="FROM GIT PUSH TO PRODUCTION." />
        <div className="grid gap-4 md:grid-cols-3">
          {portfolio.pipeline.map(([stage, detail], index) => (
            <div key={stage} tabIndex={0} className="space-stage group relative min-h-36 rounded-lg p-5 outline-none focus:ring-2 focus:ring-primary">
              <i className="absolute right-5 top-5 size-2 rounded-full bg-primary" />
              <p className="font-mono text-xs text-primary">0{index + 1}</p>
              <p className="mt-5 font-display text-xl font-bold">{stage}</p>
              <p className="mt-2 text-xs opacity-70 transition group-hover:opacity-100 group-focus:opacity-100">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
