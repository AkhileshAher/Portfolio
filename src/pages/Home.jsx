import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import DevOps from "../components/DevOps";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import EducationTimeline from "../components/EducationTimeline";
import Terminal from "../components/Terminal";
import ContactModal from "../components/ContactModal";
import SectionTitle from "../components/SectionTitle";
import { portfolio } from "../portfolio";

function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground ">
      <Navbar  />
      <main>
        <Hero onContact={() => setContactOpen(true)} />
        <About />
        <Skills />
        <DevOps />
        <Projects />
        <Experience />
        <EducationTimeline />

        <section className="macos-section px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionTitle number="07" eyebrow="Terminal" title="DEBUG LAB" />
            <Terminal />
          </div>
        </section>

        <section id="contact" className="section-rule blueprint-grid px-5 py-28 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="label-mono text-primary">AVAILABLE FOR THE RIGHT OPPORTUNITY</p>
            <h2 className="mx-auto mt-5 max-w-6xl font-display text-[clamp(3rem,8vw,7rem)] leading-[.88]">
              LET'S BUILD.
              <br />
              <span className="text-primary">SHIP.</span> AUTOMATE.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">Have an interesting project, opportunity, or problem to solve?</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button onClick={() => setContactOpen(true)} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">GET IN TOUCH</button>
              <a href={portfolio.github} target="_blank" rel="noreferrer" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary">VIEW GITHUB</a>
              <a href={portfolio.resume} className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary">DOWNLOAD RESUME</a>
            </div>
            <div className="mt-16 flex justify-center gap-5">
              <a aria-label="GitHub" href={portfolio.github} target="_blank" rel="noreferrer"><Github /></a>
              <a aria-label="LinkedIn" href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a>
              <a aria-label="Email" href={`mailto:${portfolio.email}`}><Mail /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-foreground/20 px-5 py-7">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 font-mono text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 AKHILESH AHER</p><p>BUILT WITH REACT · SHIPPED WITH CARE</p>
        </div>
      </footer>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
