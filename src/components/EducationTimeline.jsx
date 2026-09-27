import { GraduationCap } from "lucide-react";
import { portfolio } from "../portfolio";
import SectionTitle from "./SectionTitle";

export default function EducationTimeline() {
  return (
    <section id="education" className="macos-section px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="06" eyebrow="Education" title="THE ROAD SO FAR." />
        <div className="education-timeline">
          {portfolio.education.map(([name, detail], index) => (
            <article key={name} className="education-item" style={{ "--delay": `${index * 120}ms` }}>
              <div className="education-dot">
                <span>{index + 1}</span>
              </div>
              <div className="education-card">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="label-mono text-primary">MILESTONE / 0{index + 1}</p>
                    <h3 className="mt-3 font-display text-2xl font-bold">{name}</h3>
                  </div>
                  <GraduationCap className="shrink-0 text-accent" />
                </div>
                <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
