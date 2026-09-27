import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="05" eyebrow="Experience" title="WHERE CODE MEETS INFRASTRUCTURE." />

        <article className="glass-panel grid gap-8 rounded-4xl p-7 md:grid-cols-[1fr_2fr] md:p-10 mb-10">
          <div>
            <p className="label-mono text-primary">JAVA- FULL STACK INTERNSHIP</p>
            <p className="mt-3 font-display text-3xl font-bold">Java Full Stack Intern</p>
            <p>All India Council for Technical Education</p>
          </div>
          <div>
            <p className="max-w-2xl text-lg text-ink-soft">
              Developed and integrated full-stack web applications using Java and Spring Boot, working with REST APIs, databases, backend services, and frontend components while gaining practical experience in application development and debugging.
            </p>
            <p className="label-mono mt-5 text-primary">CORE-JAVA · SPRING BOOT · REST APIS · Hibernate · MYSQL</p>
          </div>
        </article>

        <article className="glass-panel grid gap-8 rounded-[2rem] p-7 md:grid-cols-[1fr_2fr] md:p-10 mb-10">
          <div>
            <p className="label-mono text-primary">AWS–DEVOPS INTERNSHIP</p>
            <p className="mt-3 font-display text-3xl font-bold">Cloud & DevOps Intern</p>
            <p>Sanyu Infotech Pvt Ltd.</p>
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
