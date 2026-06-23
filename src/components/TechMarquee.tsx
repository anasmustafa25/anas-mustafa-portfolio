import { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import {
  Brain, Code2, Database, BarChart3, LineChart, Sparkles,
  Cpu, GitBranch, Boxes, Terminal, Zap, Layers,
} from "lucide-react";

const ITEMS = [
  { label: "Python", Icon: Code2 },
  { label: "TensorFlow", Icon: Brain },
  { label: "PyTorch", Icon: Cpu },
  { label: "YOLOv8", Icon: Zap },
  { label: "Pandas", Icon: BarChart3 },
  { label: "NumPy", Icon: Layers },
  { label: "Scikit-learn", Icon: Sparkles },
  { label: "Power BI", Icon: LineChart },
  { label: "Tableau", Icon: BarChart3 },
  { label: "SQL", Icon: Database },
  { label: "MongoDB", Icon: Database },
  { label: "Next.js", Icon: Boxes },
  { label: "React", Icon: Boxes },
  { label: "Node.js", Icon: Terminal },
  { label: "Git", Icon: GitBranch },
];

export function TechMarquee() {
  // Triple the array elements to make sure there is absolutely no white space on huge monitors
  const loop = [...ITEMS, ...ITEMS, ...ITEMS];
  
  const containerRef = useRef<HTMLDivElement>(null);     
  const rawX = useMotionValue(0); 
  
  const baseSpeed = -0.8; 
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentXOffset = useRef(0);
  const [cursorClass, setCursorClass] = useState("cursor-grab");

  // Keep the tracking viewport completely stable via a safe modulo remainder engine
  const loopX = useTransform(rawX, (value) => {
    if (!containerRef.current) return 0;
    // Base track calculation matches exactly one full block segment length
    const singleSegmentWidth = containerRef.current.scrollWidth / 3;
    if (singleSegmentWidth === 0) return 0;
    
    const remainder = value % singleSegmentWidth;
    return remainder > 0 ? remainder - singleSegmentWidth : remainder;
  });

  useAnimationFrame(() => {
    if (isDragging.current) return;
    // Constant seamless crawling speed increment
    rawX.set(rawX.get() + baseSpeed);
  });

  // Native Web Pointer Event Handler (Unbreakable Infinite Drag Engine)
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentXOffset.current = rawX.get();
    setCursorClass("cursor-grabbing");
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startX.current;
    // Map human drag distance 1:1 straight into the raw coordinate buffer
    rawX.set(currentXOffset.current + deltaX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    setCursorClass("cursor-grab");
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div 
      className={`relative my-16 overflow-hidden touch-pan-y select-none ${cursorClass}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div className="relative border-y border-[var(--gold)]/25 bg-gradient-to-r from-[var(--dark-brown)]/40 via-[var(--coffee)]/30 to-[var(--dark-brown)]/40 backdrop-blur-sm">
        
        {/* Anti-aliasing side gradient masks */}
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          ref={containerRef}
          style={{ x: loopX }} 
          className="flex gap-12 py-6 whitespace-nowrap will-change-transform"
        >
          {loop.map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 pointer-events-none" 
              data-cursor="hover"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
                <it.Icon className="h-4 w-4" />
              </span>
              <span className="font-display text-xl md:text-2xl tracking-wide text-[var(--gold-bright)]/90">
                {it.label}
              </span>
              <span className="ml-6 text-[var(--gold)]/40">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}