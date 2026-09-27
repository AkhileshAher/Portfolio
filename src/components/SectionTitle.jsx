export default function SectionTitle({ number, eyebrow, title, copy }) {
  return (
    <div className="mb-12 grid gap-5 lg:grid-cols-[180px_1fr] lg:items-end">
      <div>
        <p className="label-mono text-primary">{number} / {eyebrow}</p>
        <div className="mt-4 h-px w-16 bg-primary" />
      </div>
      <div>
        <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] font-extrabold leading-[.9] tracking-tight">
          {title}
        </h2>
        {copy && <p className="mt-5 max-w-2xl text-muted-foreground">{copy}</p>}
      </div>
    </div>
  );
}
