import { useState } from "react";
import { RotateCcw, ShieldCheck } from "lucide-react";

const stages = [
  { error: "JWT validation failed at the gateway.", question: "Where would you inspect first?", options: ["Token claims and signing key", "CSS bundle", "Database index", "Docker image size"] },
  { error: "Container starts, then exits immediately.", question: "What is the next signal?", options: ["Application logs", "Browser cache", "Git history", "Font loading"] },
  { error: "Pods restart under traffic.", question: "What should you inspect?", options: ["Resource limits and probes", "README formatting", "LocalStorage", "SVG dimensions"] },
  { error: "Deployment is healthy but latency climbs.", question: "Which layer gives you the fastest clue?", options: ["Metrics and traces", "Logo asset", "IDE theme", "Package name"] },
];

export default function Terminal() {
  const [stage, setStage] = useState(0);
  const [message, setMessage] = useState("");
  const [started, setStarted] = useState(false);

  const choose = (index) => {
    if (index === 0) {
      setMessage("Good call. Signal found — move to the next incident.");
      setTimeout(() => { setMessage(""); setStage((value) => value + 1); }, 500);
    } else {
      setMessage("Not this layer. Follow the production signal first.");
    }
  };

  if (!started) {
    return (
      <div className="terminal-shell">
        <div className="terminal-bar"><span /><span /><span /><p>debug-lab</p></div>
        <div className="grid min-h-72 place-items-center p-8 text-center">
          <div>
            <p className="label-mono text-primary">INTERACTIVE INCIDENT SIMULATOR</p>
            <p className="mt-5 font-display text-3xl font-bold text-primary-foreground">Ready to debug production?</p>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/55">Trace four failures across authentication, containers, orchestration, and monitoring.</p>
            <button onClick={() => setStarted(true)} className="mt-8 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Start Debug Session</button>
          </div>
        </div>
      </div>
    );
  }

  if (stage >= stages.length) {
    return (
      <div className="terminal-shell grid min-h-80 place-items-center text-center">
        <div>
          <ShieldCheck className="mx-auto size-16 text-signal" />
          <p className="mt-5 font-sans text-3xl font-bold text-primary-foreground">System restored</p>
          <p className="mt-2 text-primary-foreground/60">All incidents resolved · Score 420</p>
          <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground" onClick={() => { setStage(0); setStarted(false); }}>
            <RotateCcw size={16} /> Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-shell p-5 md:p-8">
      <div className="mb-8 flex items-center justify-between">
        <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">INCIDENT 0{stage + 1}</span>
        <span className="text-primary-foreground/45">{stage + 1} / {stages.length}</span>
      </div>
      <div className="mb-7 flex gap-2">{stages.map((_, index) => <span key={index} className={`h-1.5 flex-1 rounded-full ${index <= stage ? "bg-primary" : "bg-primary-foreground/10"}`} />)}</div>
      <div className="glass-dark rounded-2xl p-5">
        <p className="text-accent">● LIVE INCIDENT</p>
        <p className="mt-4 text-lg text-primary-foreground">{stages[stage].error}</p>
        <p className="mt-2 text-primary-foreground/60">{stages[stage].question}</p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {stages[stage].options.map((option, index) => (
          <button key={option} onClick={() => choose(index)} className="min-h-14 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 text-left text-sm text-signal transition hover:bg-primary/20">
            <span className="mr-2 text-primary">⌘{index + 1}</span>{option}
          </button>
        ))}
      </div>
      {message && <p className="mt-5 rounded-xl bg-accent/10 p-3 text-accent">{message}</p>}
    </div>
  );
}
