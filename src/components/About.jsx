import { ArrowRight, Boxes, Cloud, Code2, Database, Layers3, Rocket } from "lucide-react";
import SectionTitle from "./SectionTitle";

const cards = [
  { icon: Code2, label: "BUILD", text: "Turn an idea into a working product with thoughtful interfaces and maintainable code." },
  { icon: Layers3, label: "CONNECT", text: "Design the API, data and application layers so the pieces work together naturally." },
  { icon: Boxes, label: "PACKAGE", text: "Use containers and repeatable workflows to make software easier to move and run." },
  { icon: Cloud, label: "SHIP", text: "Take projects beyond localhost and connect them to practical cloud infrastructure." },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          number="01"
          eyebrow="About"
          title="CURIOUS ABOUT THE WHOLE SYSTEM."
          copy="I enjoy the space between product and infrastructure — shaping an experience people can use, then understanding what makes the software dependable underneath it."
        />

        <div className="about-panel overflow-hidden rounded-[2rem] border border-border bg-card">
          <div className="grid lg:grid-cols-[1.05fr_1fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-foreground p-7 text-primary-foreground md:p-10">
              <div className="absolute -right-20 -top-20 size-72 rounded-full border border-primary-foreground/10" />
              <div className="absolute -bottom-32 -left-20 size-80 rounded-full border border-primary-foreground/10" />
              <p className="label-mono text-signal">01 / HOW I WORK</p>
              <div className="relative mt-20 max-w-xl">
                <p className="font-display text-3xl font-bold leading-tight md:text-5xl">
                  BUILD IT. UNDERSTAND IT. MAKE IT BETTER.
                </p>
                <p className="mt-6 max-w-lg text-sm leading-7 text-primary-foreground/65">
                  I’m at my best when I can move between a UI, an API, a database, and the deployment pipeline.
                  That curiosity keeps me learning without losing sight of the thing that matters: building something useful.
                </p>
              </div>
              <div className="absolute bottom-7 left-7 flex items-center gap-3 font-mono text-xs text-primary-foreground/50 md:left-10 md:bottom-10">
                <Rocket size={15} className="text-signal" /> IDEA → PRODUCT → PRODUCTION
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              {cards.map(({ icon: Icon, label, text }, index) => (
                <article key={label} className="group border-b border-border p-6 last:border-b-0 sm:border-r sm:p-7 lg:border-b lg:last:border-b lg:last:border-r-0">
                  <div className="flex items-start justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={20} />
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                  </div>
                  <h3 className="mt-12 font-display text-xl font-bold">{label}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                  <ArrowRight className="mt-7 size-4 text-accent transition group-hover:translate-x-2" />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["MINDSET", "Curiosity over shortcuts"],
            ["FOCUS", "Useful, maintainable software"],
            ["NEXT", "Always one system deeper"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-border bg-secondary/60 p-5">
              <p className="label-mono text-primary">{label}</p>
              <p className="mt-2 font-display text-lg font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
