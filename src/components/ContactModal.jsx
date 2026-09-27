import { useEffect, useRef, useState } from "react";
import { Mail, Send, X } from "lucide-react";
import { portfolio } from "../portfolio";

export default function ContactModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    setSent(false);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-foreground/30 p-4 backdrop-blur-md"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="contact-title"
        className="w-full max-w-xl rounded-[2rem] border border-border bg-card p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="label-mono text-primary">OPEN CHANNEL / CONTACT</p>
            <h2 id="contact-title" className="mt-3 font-display text-4xl font-extrabold">Let's talk.</h2>
            <p className="mt-2 text-sm text-muted-foreground">Send a quick message and I’ll get back to you.</p>
          </div>
          <button onClick={onClose} className="grid size-10 place-items-center rounded-full border border-border transition hover:border-primary hover:text-primary" aria-label="Close contact form">
            <X size={18} />
          </button>
        </div>

        {sent ? (
          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-7 text-center">
            <Mail className="mx-auto text-primary" size={30} />
            <h3 className="mt-4 font-display text-2xl font-bold">Message ready.</h3>
            <p className="mt-2 text-sm text-muted-foreground">Thanks for reaching out. You can also email me directly at {portfolio.email}.</p>
            <a className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground" href={`mailto:${portfolio.email}`}>
              Email me <Send size={16} />
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium">
                Name
                <input required name="name" className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Email
                <input required type="email" name="email" className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="you@example.com" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-medium">
              Subject
              <input required name="subject" className="rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="What would you like to build?" />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea required name="message" rows="5" className="resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10" placeholder="Tell me a little about it..." />
            </label>
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5">
              Send message <Send size={17} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
