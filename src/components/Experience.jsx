import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="05" eyebrow="Experience" title="WHERE CODE MEETS INFRASTRUCTURE." />
        <article className="glass-panel grid gap-8 rounded-[2rem] p-7 md:grid-cols-[1fr_2fr] md:p-10">
          <div>
            <p className="label-mono text-primary">AWS–DEVOPS INTERNSHIP</p>
            <p className="mt-3 font-display text-3xl font-bold">Cloud & DevOps Intern</p>
          </div>
          <div>
            <p className="max-w-2xl text-lg text-ink-soft">
              Worked across cloud infrastructure, Linux environments, deployment workflows, containers, and automation—connecting application code with reliable production systems.
            </p>
            <p className="label-mono mt-5 text-primary">AWS · LINUX · DOCKER · CI/CD · AUTOMATION</p>
          </div>
        </article>
      </div>
    </section>
  );
}
