import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "../portfolio";
import portrait from "../assets/portrait.png";

export default function Hero({ onContact }) {
  return (
    <section id="home" className="relative px-5 pb-20 pt-16 lg:px-8 lg:pt-20">
      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center overflow-hidden py-8 md:py-12 lg:py-16">
        <div className="hero-orbit" />
        <p className="label-mono relative z-10 mb-7 w-fit rounded-full border border-border bg-background/35 px-4 py-2 text-primary backdrop-blur-md">
          Akhilesh Aher / Developer Portfolio
        </p>

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_230px]">
          <div>
            <h1 className="max-w-5xl font-display text-[clamp(3.2rem,9vw,8.5rem)] font-extrabold leading-[.86] tracking-[-.06em]">
              I BUILD.
              <br />
              I SHIP.
              <br />
              <span className="text-primary">I AUTOMATE.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-ink-soft md:text-lg">
              I’m Akhilesh Aher — a developer who enjoys turning ideas into useful products, reliable systems, and clean user experiences.
              I like working across the stack and seeing a project through from the first commit to a working deployment.
            </p>
          </div>

          <figure className="mx-auto w-40 rotate-2 border border-border bg-card p-2 shadow-xl transition duration-500 hover:rotate-0 hover:-translate-y-2 sm:w-48 lg:w-full">
            <img src={portrait} alt="Portrait of Akhilesh Aher" width="816" height="816" className="aspect-square w-full object-cover" />
            <figcaption className="label-mono mt-3 text-center text-[10px] text-muted-foreground">AKHILESH AHER — BUILDER</figcaption>
          </figure>
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <button onClick={onContact} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary">
            Get in touch
          </button>
          <a href="#about" className="ml-1 grid size-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary" aria-label="Scroll to about">
            <ArrowDown size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
