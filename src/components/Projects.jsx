import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { portfolio } from "../portfolio";

export default function Projects() {
  return (
    <section id="projects" className="latest-work px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reference-section-top">
          <span>PROJECTS</span>
          <a href={portfolio.github} target="_blank" rel="noreferrer">My GitHub <ArrowUpRight size={17} /></a>
        </div>

        <div className="skills-heading mt-2">
          <h2 className="reference-heading">SELECTED WORK</h2>
          <span className="label-mono text-muted-foreground">BUILT / SHIPPED / LEARNED</span>
        </div>

        <div className="project-grid-modern mt-12">
          {portfolio.projects.map((project, index) => (
            <article key={project.name} className="project-card group">
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.name} website preview`} className="project-image" />
                <div className="project-image-overlay">
                  <span className="label-mono text-white">PROJECT / 0{index + 1}</span>
                  <a href={project.demo} className="rounded-full bg-white/90 p-3 text-foreground backdrop-blur" aria-label={`Open ${project.name} demo`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="label-mono text-primary">{project.category}</p>
                    <h3 className="mt-2 font-display text-2xl font-extrabold">{project.name}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.text}</p>
                <p className="mt-5 border-t border-border pt-4 font-mono text-[10px] leading-5 text-primary">{project.tech}</p>
                <div className="mt-6 flex gap-2">
                  <a href={project.demo} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground">Live demo <ExternalLink size={14} /></a>
                  <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-semibold transition hover:border-primary">
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
