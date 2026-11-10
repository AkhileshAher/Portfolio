import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const nav = ["home", "about", "skills", "devops", "projects", "experience", "education"];

export default function Navbar({ onContact }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sections = nav.map(i => document.getElementById(i)).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) setActive(visible[0].target.id);
    }, { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -60% 0px" });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = item => {
    setActive(item);
    setOpen(false);
  };

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-50 mx-3 sm:mx-6 lg:mx-10">
      <nav className="mx-auto flex h-[68px] max-w-[1500px] items-center gap-4">

        <a href="#home" onClick={() => handleNavClick("home")} className="shrink-0">
          <img src={logo} alt="Akhilesh Aher" className="h-20 w-auto object-contain sm:hover:scale-120 sm:hover:duration-1000" />
        </a>

        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center gap-1 rounded-xl border border-zinc-200/80 bg-zinc-100/90 p-1.5 shadow-sm backdrop-blur-xl">
            {nav.map(item => (
              <a key={item} href={`#${item}`} onClick={() => handleNavClick(item)}
                className={`rounded-lg px-4 py-2 text-sm capitalize transition-all duration-200 ${active === item ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:bg-white/60 hover:text-zinc-900"}`}>
                {item}
              </a>
            ))}
            <Link to="/gear" className="rounded-lg px-4 py-2 text-sm text-zinc-500 transition hover:bg-white/60 hover:text-zinc-900">
              Gear
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://github.com/AkhileshAher" target="_blank" rel="noreferrer"
            className="grid size-11 place-items-center rounded-xl border border-zinc-200 bg-white/80 transition hover:bg-zinc-100">
            <Github size={18} />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer"
            className="grid size-11 place-items-center rounded-xl border border-zinc-200 bg-white/80 transition hover:bg-zinc-100">
            <Linkedin size={18} />
          </a>

          <button onClick={onContact} aria-label="Contact"
            className="grid size-11 place-items-center rounded-xl border border-zinc-200 bg-white/80 transition hover:bg-zinc-100">
            <Mail size={18} />
          </button>

          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="grid size-11 place-items-center rounded-xl border border-zinc-200 bg-white/80 transition hover:bg-zinc-100">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button onClick={() => setOpen(!open)}
          className="ml-auto grid size-11 place-items-center rounded-xl border border-zinc-200 bg-white/80 lg:hidden">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-1 max-w-[1500px] rounded-xl border border-zinc-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl lg:hidden">
          {nav.map(item => (
            <a key={item} href={`#${item}`} onClick={() => handleNavClick(item)}
              className={`block rounded-lg px-4 py-3 text-sm capitalize transition ${active === item ? "bg-zinc-100 font-medium text-zinc-900" : "text-zinc-500 hover:bg-zinc-100"}`}>
              {item}
            </a>
          ))}

          <Link to="/gear" onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-sm text-zinc-500 hover:bg-zinc-100">
            Gear
          </Link>

          <div className="mt-2 flex gap-2 border-t border-zinc-200 pt-3">
            <a href="https://github.com/AkhileshAher" target="_blank" rel="noreferrer"
              className="grid size-10 place-items-center rounded-lg border border-zinc-200">
              <Github size={17} />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="grid size-10 place-items-center rounded-lg border border-zinc-200">
              <Linkedin size={17} />
            </a>

            <button onClick={() => { setOpen(false); onContact(); }}
              className="grid size-10 place-items-center rounded-lg border border-zinc-200">
              <Mail size={17} />
            </button>

            <button onClick={toggleTheme} aria-label="Toggle theme"
              className="grid size-10 place-items-center rounded-lg border border-zinc-200">
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

