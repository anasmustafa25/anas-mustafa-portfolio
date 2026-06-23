import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "services", label: "Services" }, // 🚀 Added to include your services grid tracking logic
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${
        scrolled ? "w-[min(960px,94vw)]" : "w-[min(1100px,96vw)]"
      }`}
    >
      <div className={`relative flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-card-lux" : "glass"
      }`}>
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-base font-bold">A</span>
          <span className="font-display text-base tracking-wide hidden sm:inline">Anas Mustafa</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {SECTIONS.map(s => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-cursor="hover"
                className={`relative rounded-full px-3 py-1.5 transition-colors ${
                  active === s.id ? "text-[var(--gold-bright)]" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--gold)]/12 border border-[var(--gold)]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-gradient-gold px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-gold"
          data-cursor="hover"
        >
          Let's talk
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(v => !v)}
          className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/30"
        >
          <span className="block h-[2px] w-4 bg-[var(--gold-bright)]" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-2"
          >
            {SECTIONS.map(s => (
              <li key={s.id}>
                <a onClick={() => setOpen(false)} href={`#${s.id}`} className="block rounded-xl px-4 py-2.5 text-sm hover:bg-[var(--gold)]/10">{s.label}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}