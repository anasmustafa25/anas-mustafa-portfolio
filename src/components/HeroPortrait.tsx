import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import portraitAsset from "@/assets/anas-portrait.png.asset.json";

const TECH = [
  { name: "Python", r: 0 },
  { name: "TensorFlow", r: 1 },
  { name: "PyTorch", r: 2 },
  { name: "Pandas", r: 3 },
  { name: "NumPy", r: 4 },
  { name: "Scikit-learn", r: 5 },
  { name: "Power BI", r: 6 },
  { name: "Tableau", r: 7 },
  { name: "SQL", r: 8 },
  { name: "MongoDB", r: 9 },
  { name: "React", r: 10 },
  { name: "Next.js", r: 11 },
];

export function HeroPortrait() {
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 14 });

  const onMove = (e: React.MouseEvent) => {
    const rect = wrap.current!.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-[min(520px,92vw)]"
      style={{ perspective: 1200 }}
    >
      {/* Orbits */}
      <div className="pointer-events-none absolute inset-0">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-[var(--gold)]/15"
            style={{ scale: 0.7 + i * 0.18 }}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{ duration: 60 + i * 20, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Floating tech badges along an ellipse */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        {TECH.map((t, i) => {
          const angle = (i / TECH.length) * Math.PI * 2;
          const radius = 48; // %
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          return (
            <motion.div
              key={t.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="glass rounded-full px-3 py-1 text-[11px] font-medium tracking-wide text-champagne shadow-gold"
                style={{ borderColor: "rgba(212,175,55,0.35)" }}
              >
                {t.name}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 3D-tilt portrait card */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="absolute inset-[14%] rounded-[2rem] glass-strong shadow-card-lux overflow-hidden gold-border"
      >
        {/* glow */}
        <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,217,90,0.35),transparent_60%)]" />
        <img
          src="/images/profile-img.png"
          alt="Anas Mustafa"
          className="relative h-full w-full object-cover"
          draggable={false}
        />
        {/* shine sweep */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(255,217,90,0.18)_50%,transparent_60%)] mix-blend-screen animate-shimmer" />
        {/* bottom plate */}
        <div className="absolute inset-x-3 bottom-3 rounded-2xl glass px-4 py-2 flex items-center justify-between text-[11px]">
          <span className="font-display tracking-wider text-[var(--gold-bright)]">A.M · 2026</span>
          <span className="text-muted-foreground">AI · Data · Engineering</span>
        </div>
      </motion.div>

      {/* corner glints */}
      <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[var(--gold-bright)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[var(--bronze)]/30 blur-3xl" />
    </div>
  );
}
