import { Link } from "react-router-dom";
import { ArrowLeft, Cpu, HardDrive, Keyboard, Laptop, MemoryStick, Mouse, Monitor } from "lucide-react";
import gearSetup from "../assets/gear-setup.jpg";

const gear = [
  { icon: Laptop, type: "PRIMARY LAPTOP", name: "Acer Nitro 5", detail: "Intel Core i5 · NVIDIA RTX 3050 · 16 GB RAM · 512 GB SSD", status: "Development + gaming" },
  { icon: Monitor, type: "PORTABLE MACHINE", name: "13-inch MacBook", detail: "macOS Monterey · compact everyday setup", status: "Portable workflow" },
  { icon: Mouse, type: "MOUSE", name: "T-Wolf Wireless RGB", detail: "Wireless connection · RGB lighting · gaming sensor", status: "Pointing + gaming" },
  { icon: Keyboard, type: "KEYBOARD", name: "RPM Euro Gaming Keyboard", detail: "Full-size layout · RGB lighting · gaming controls", status: "Coding + shortcuts" },
];

export default function GearPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground lg:px-8">
      <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3">
        <Link to="/" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold hover:text-primary"><ArrowLeft size={18} /> Portfolio</Link>
        <p className="label-mono text-primary">AKHILESH / GEAR</p>
      </nav>
      <section className="mx-auto max-w-7xl py-14">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_1.25fr] lg:items-end">
          <div>
            <p className="label-mono text-primary">WORKSTATION / 2026</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight md:text-7xl">MY DAILY<br /><span className="text-primary">DRIVERS.</span></h1>
            <p className="mt-5 max-w-lg text-muted-foreground">The machines and peripherals behind my development, cloud work, and gaming setup.</p>
          </div>
          <div className="overflow-hidden rounded-lg"><img src={gearSetup} alt="Developer workstation" className="aspect-[8/5] w-full object-cover" /></div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {gear.map(({ icon: Icon, type, name, detail, status }) => (
            <article key={name} className="neo-raised pressable rounded-lg p-6 md:p-8">
              <div className="flex items-start justify-between"><span className="neo-inset grid size-14 place-items-center rounded-md text-primary"><Icon /></span><span className="label-mono rounded-full bg-primary/10 px-3 py-2 text-primary">{type}</span></div>
              <h2 className="mt-10 font-display text-3xl font-bold">{name}</h2><p className="mt-3 text-muted-foreground">{detail}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4"><span className="font-mono text-xs">{status}</span><span className="size-2 rounded-full bg-accent" /></div>
            </article>
          ))}
        </div>
        <div className="glass-panel mt-8 grid gap-4 rounded-[2rem] p-6 sm:grid-cols-3">
          <div className="flex items-center gap-4"><Cpu className="text-primary" /><div><p className="label-mono text-muted-foreground">GRAPHICS</p><p className="font-semibold">RTX 3050</p></div></div>
          <div className="flex items-center gap-4"><MemoryStick className="text-primary" /><div><p className="label-mono text-muted-foreground">MEMORY</p><p className="font-semibold">16 GB RAM</p></div></div>
          <div className="flex items-center gap-4"><HardDrive className="text-primary" /><div><p className="label-mono text-muted-foreground">STORAGE</p><p className="font-semibold">512 GB SSD</p></div></div>
        </div>
      </section>
    </main>
  );
}
