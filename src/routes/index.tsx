import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight, Download, Mail, MapPin, Github, Linkedin, Phone,
  Sparkles, Brain, BarChart3, Code2, Database, LineChart,
  Award, ExternalLink, X, Calendar, Briefcase,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { ClientOnly } from "@/components/ClientOnly";
import { HeroPortrait } from "@/components/HeroPortrait";
import { Scene3D } from "@/components/Scene3D";
import { TechMarquee } from "@/components/TechMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anas Mustafa — AI Engineer & Data Scientist" },
      { name: "description", content: "Premium portfolio of Anas Mustafa: AI Engineer & Data Scientist building intelligent systems, dashboards and scalable web applications." },
      { property: "og:title", content: "Anas Mustafa — AI Engineer & Data Scientist" },
      { property: "og:description", content: "Building intelligent systems, transforming data into insights." },
    ],
  }),
  component: Portfolio,
});

/* ---------- helpers ---------- */

function Section({ id, eyebrow, title, subtitle, children }: any) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <Reveal>
        <div className="mb-14 max-w-3xl">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs tracking-[0.18em] text-[var(--gold-bright)] uppercase">
              <Sparkles className="h-3 w-3" /> {eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">{title}</h2>
          {subtitle && <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">{subtitle}</p>}
        </div>
      </Reveal>
      {children}
    </section>
  );
}

// Simple text swap helper as requested previously
function CustomSubtitle() {
  return <>A production ready stack covering machine learning, analytical modeling, and dashboard development selected to build reliable, high impact systems.</>;
}

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Simplified simple string render utility wrapper avoiding formal system variables for text prose layout structures
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.8, ease: [0.22, 1, 0.36, 1],
      onUpdate: v => { node.textContent = Math.round(v).toString() + suffix; },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

/* ---------- data ---------- */

const SKILLS = [
  { cat: "AI & ML", icon: Brain, items: ["Machine Learning", "Deep Learning", "YOLOv8", "Generative AI", "Model Evaluation"] },
  { cat: "Data Analytics", icon: BarChart3, items: ["Data Cleaning", "EDA", "Forecasting", "KPI Design", "Storytelling"] },
  { cat: "Programming", icon: Code2, items: ["Python", "JavaScript", "TypeScript", "SQL"] },
  { cat: "Libraries", icon: LineChart, items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"] },
  { cat: "Frameworks", icon: Sparkles, items: ["React.js", "Next.js", "Node.js"] },
  { cat: "Databases & Tools", icon: Database, items: ["MySQL", "MongoDB", "Oracle SQL", "Power BI", "Tableau", "Excel", "Git/GitHub"] },
];

const EXPERIENCE = [
  {
    role: "Information Technology Intern",
    company: "Fatima Memorial System, Lahore",
    date: "Jun 2025 – Aug 2025",
    bullets: [
      "Developed frontend interfaces based on hospital operational requirements.",
      "Worked with Oracle SQL & Excel to clean and analyze operational data.",
      "Supported IT workflows with HIS Software in a live healthcare environment.",
    ],
  },{
    role: "Web Developer Intern (MERN Stack)",
    company: "Gamica Cloud, Faisalabad",
    date: "Feb 2025 – May 2025",
    bullets: [
      "Built responsive frontend components using React and JavaScript.",
      "Implemented reusable UI elements following modern UX standards.",
      "Strengthened full-stack fundamentals through project-based learning.",
    ],
  },
];

const PROJECTS = [
  {
    title: "MotionGuard AI",
    tag: "Computer Vision · YOLOv8",
    blurb: "AI security system for real-time shoplifting detection with custom threat-scoring.",
    tech: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    image: "/images/motionguard.png", 
    github: " https://github.com/anasmustafa25/MotionGuard-AI-An-Automated-Retail-Security-System",
    problem: "Retail stores need automated, real-time loss-prevention without constant human monitoring.",
    approach: "Built a YOLOv8 detection pipeline with custom threat-score logic on top of frame-level object tracking, then exposed insights through a monitoring layer.",
    tools: "Python, YOLOv8, OpenCV, PyTorch, NumPy",
    results: "Reliable real-time incident detection with iteratively-tuned model accuracy.",
    challenges: "Balancing detection sensitivity vs. false-positive rate in noisy retail footage.",
    learnings: "Productionizing vision models requires as much logic engineering as model training.",
  },
  {
    title: "E-Commerce Sales Analysis & Forecasting",
    tag: "Power BI · Time Series",
    blurb: "Interactive dashboard with KPIs, drill-down filters and time-series forecasting.",
    tech: ["Power BI", "DAX", "Excel"],
    image: "/images/powerbi.png",
    github: "https://github.com/anasmustafa25/Super-Store-Sales-Dashboard-PowerBI",
    problem: "Stakeholders needed a single pane to track seasonality, performance and forward demand.",
    approach: "Modeled the sales data, designed KPI cards & drill-down visuals, then layered time-series forecasting for forward-looking insight.",
    tools: "Power BI, DAX, Excel",
    results: "Self-serve BI surface enabling proactive, data-driven decisions.",
    challenges: "Reconciling messy multi-source data into a clean star schema.",
    learnings: "Great dashboards are 70% data modeling, 30% visuals.",
  },
  {
    title: "Supplier Performance Dashboard",
    tag: "Tableau · Procurement",
    blurb: "Visual analytics on supplier efficiency and delivery bottlenecks.",
    tech: ["Tableau", "SQL", "Excel"],
    image: "/images/tableau.png",
    github: "https://github.com/anasmustafa25/Supplier-Performance-Dashboard-Tableau",
    problem: "Procurement teams lacked a single comparable view of supplier reliability.",
    approach: "Built calculated fields & comparison visuals to surface underperforming suppliers and delivery gaps.",
    tools: "Tableau, SQL",
    results: "Empowered buyers to renegotiate or replace consistently underperforming vendors.",
    challenges: "Defining fair, weighted performance metrics across vendor categories.",
    learnings: "Metric design is the most important design decision.",
  },
  {
    title: "Operations Analysis Dashboard",
    tag: "Excel · Operations",
    blurb: "Dynamic Excel dashboard for sales, inventory, logistics, and returns.",
    tech: ["Excel", "Pivot Tables", "Statistics"],
    image: "/images/excel.png",
    github: "https://github.com/anasmustafa25/Operations-Intelligence-Dashboard-Advance-Excel",
    problem: "Ops data lived in disconnected sheets with quality issues.",
    approach: "Cleaned and unified datasets, then built KPI cards, slicers, and trend visuals on top.",
    tools: "Excel (advanced formulas, Pivot Tables, conditional formatting)",
    results: "A single interactive dashboard powering weekly ops reviews.",
    challenges: "Handling inconsistent formats and duplicates across systems.",
    learnings: "Excel can ship surprisingly far when modeled with discipline.",
  },
  {
    title: "Online Shopping Web Application",
    tag: "Next.js · Full Stack",
    blurb: "Responsive shopping app with cart, dynamic routing and API integration.",
    tech: ["Next.js", "JavaScript", "REST API"],
    image: "/images/nextjs.png",
    github: "https://github.com/anasmustafa25/A-online-Shoe-Store-with-NextJS",
    problem: "Need a performant, reusable storefront foundation.",
    approach: "Built a component-driven Next.js storefront with dynamic routes, cart state, and API-backed product data.",
    tools: "Next.js, JavaScript, REST APIs",
    results: "A fast, modular base for e-commerce experimentation.",
    challenges: "Designing state that scales from cart to checkout cleanly.",
    learnings: "Reusable component contracts pay off the second a feature changes.",
  },
];

const CERTS = [
  "AI & Data Science Course (NAVTTC)",
  "Python Programming",
  "Analyzing and Visualizing Data with Microsoft Power BI",
  "Tableau Data Visualization Workshop",
  "Generative AI Fundamentals",
  "MERN Stack Development",
];

const SERVICES = [
  {
    title: "AI & Machine Learning Solutions",
    desc: "Computer vision, predictive models and ML pipelines tailored to your data.",
    icon: Brain,
  },
  {
    title: "Data Analysis & Visualization",
    desc: "Turning messy datasets into clear, decision-ready stories.",
    icon: LineChart,
  },
  {
    title: "Power BI Dashboards",
    desc: "Interactive Power BI dashboards with KPIs, forecasts and drill-downs.",
    icon: BarChart3,
  },
  {
    title: "Tableau Dashboards",
    desc: "Executive-grade Tableau dashboards with calculated fields and analytics.",
    icon: Award, // Reusing an existing import or replace with another Lucide icon
  },
  {
    title: "Web Development",
    desc: "Responsive React / Next.js applications with clean, scalable architecture.",
    icon: Code2,
  },
  {
    title: "Data Cleaning & Reporting",
    desc: "End-to-end data preparation, automated reports and KPI tracking.",
    icon: Database,
  },
];
/* ---------- page ---------- */

function Portfolio() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // EmailJS Integration Logic Elements
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatusMessage("");

    emailjs.sendForm(
      "service_0tavc1v",   // 👈 Replace with your EmailJS Service ID
      "template_y8eywyn",  // 👈 Replace with your EmailJS Template ID
      formRef.current,
      "4fyxJtw_4NX-Gm14_"    // 👈 Replace with your EmailJS Public Key
    )
    .then(() => {
      setIsSending(false);
      setStatusMessage("Message sent successfully! ✨");
      formRef.current?.reset(); 
    })
    .catch((error) => {
      setIsSending(false);
      setStatusMessage("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-clip">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* HERO */}
      <section id="home" ref={heroRef} className="relative min-h-[85svh] noise">
        {/* 3D backdrop */}
        <div className="absolute inset-0 opacity-70">
          <ClientOnly>
            <Scene3D />
          </ClientOnly>
        </div>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

        <motion.div style={{ y: isDesktop ? heroY : 0, opacity: heroOpacity }} className="relative mx-auto grid max-w-7xl gap-16 px-6 pt-24 pb-24 md:grid-cols-2 md:pt-32 md:pb-24 items-start">
          {/* Left: text */}
          <div className="flex flex-col justify-start">
            <Reveal>
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--gold-bright)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-bright)] shadow-[0_0_10px_var(--gold-bright)]" />
                Available for opportunities
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.95] tracking-tight">
                <span className="block text-foreground/90">Anas</span>
                <span className="block text-gradient-gold animate-shimmer bg-[length:200%_100%]">Mustafa</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl md:text-2xl text-champagne">
                <span>AI Engineer</span>
                <span className="text-[var(--gold)]">·</span>
                <span>Data Scientist</span>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
                Building intelligent systems, transforming data into insights, and crafting scalable digital experiences with the polish of a luxury product.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#projects" data-cursor="hover" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold">
                  Explore my work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/Anas_Mustafa_Resume.pdf" download="Anas_Mustafa_Resume.pdf" data-cursor="hover" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-[var(--gold)]/10 transition-colors">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { v: 20, s: "+", l: "Projects" },
                  { v: 10, s: "+", l: "Dashboards" },
                  { v: 15, s: "+", l: "Technologies" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl text-[var(--gold-bright)]"><Counter to={s.v} suffix={s.s} /></div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: portrait */}
          <Reveal delay={0.2} className="w-full">
            <div className="relative flex items-start justify-center mb-16 md:mb-0 md:-mt-12">
              <HeroPortrait />
            </div>
          </Reveal>
        </motion.div>

        {/* scroll cue */}
        <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground hidden md:block">
          scroll
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About"
        title={<>A <span className="text-gradient-gold">craft aligned</span> engineer at the<br className="hidden md:inline" /> intersection of AI & data.</>}
        subtitle="Computer Science graduate (UAF, 2022–2026) focused on Artificial Intelligence, Data Science and Web Development. I love turning messy, real world data into clean systems and crisp visual stories."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Education", v: "B.S. Computer Science", s: "University of Agriculture, Faisalabad · 2022–2026" },
            { t: "Focus", v: "AI · Data · Engineering", s: "ML, analytics, dashboards, full-stack web." },
            { t: "Mindset", v: "Analytical & adaptable", s: "Problem solving, communication, continuous learning." },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className="relative h-full rounded-3xl glass-strong p-7 shadow-card-lux gold-border">
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]/80">{c.t}</div>
                <div className="mt-3 font-display text-2xl">{c.v}</div>
                <p className="mt-3 text-sm text-muted-foreground">{c.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        eyebrow="Skills"
        title={<>The <span className="text-gradient-gold">toolkit</span>.</>}
        subtitle={<CustomSubtitle />}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <Reveal key={s.cat} delay={i * 0.05}>
              <SkillCard cat={s.cat} Icon={s.icon} items={s.items} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Continuous tech marquee — runs forever across the page */}
      <TechMarquee />

      {/* EXPERIENCE */}
      <Section
        id="experience"
        eyebrow="Experience"
        title={<>A timeline of <span className="text-gradient-gold">deliberate</span> work.</>}
      >
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.08}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className={`md:pr-10 ${i % 2 ? "md:pr-0 md:pl-10" : ""} pl-12 md:pl-0`}>
                    <div className={`rounded-3xl glass-strong p-7 shadow-card-lux gold-border`}>
                      <div className="flex items-center gap-2 text-xs text-[var(--gold-bright)]">
                        <Calendar className="h-3.5 w-3.5" /> {e.date}
                      </div>
                      <h3 className="mt-2 font-display text-2xl">{e.role}</h3>
                      <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5" /> {e.company}
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                        {e.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--gold)]" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* dot */}
                  <div className="absolute left-4 md:left-1/2 top-7 -translate-x-1/2">
                    <span className="block h-3 w-3 rounded-full bg-gradient-gold shadow-[0_0_18px_var(--gold-bright)]" />
                  </div>
                  <div />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        eyebrow="Selected Work"
        title={<>Projects, <span className="text-gradient-gold">case study</span> style.</>}
        subtitle="Select a card to unpack the complete workflow, key constraints, and strategic insights."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <ProjectCard p={p} onOpen={() => setOpenProject(i)} index={i} />
            </Reveal>
          ))}
        </div>
        <ProjectModal project={openProject !== null ? PROJECTS[openProject] : null} onClose={() => setOpenProject(null)} />
      </Section>

      {/* CERTIFICATIONS */}
      <Section
        id="certificates"
        eyebrow="Certifications"
        title={<>Continuously <span className="text-gradient-gold">leveling up</span>.</>}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, rotateX: 4, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative h-full rounded-2xl glass-strong p-6 shadow-card-lux gold-border"
                data-cursor="hover"
              >
                <Award className="h-7 w-7 text-[var(--gold-bright)]" />
                <div className="mt-4 font-display text-lg leading-snug">{c}</div>
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Verified Training</div>
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--gold-bright)]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

{/* SERVICES */}
      <Section
        id="services"
        eyebrow="Services"
        title={<>How I can <span className="text-gradient-gold">help</span>.</>}
      >
        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet (sm), 3 cols on desktop (lg) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div 
                  className="group relative h-full rounded-3xl glass-strong p-7 shadow-card-lux gold-border overflow-hidden transition-all duration-300"
                  data-cursor="hover"
                >
                  {/* Subtle hover background accent glow */}
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--gold-bright)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon Wrapper Badge */}
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold-bright)] shadow-[0_0_15px_rgba(212,175,55,0.05)] mb-6 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Service Text Content */}
                  <h3 className="font-display text-xl leading-tight text-foreground group-hover:text-[var(--gold-bright)] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

     {/* Standalone Metrics Bar Section */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-12">
        <Reveal>
          <div className="w-full rounded-3xl glass-strong p-8 md:p-10 gold-border shadow-card-lux relative overflow-hidden">
           
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[var(--gold-bright)]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[var(--gold-bright)]/10 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0 text-center divide-y-0 md:divide-y-0 md:divide-x divide-[var(--gold)]/15">
              
              {/* Stat 1 */}
              <div className="flex flex-col justify-center px-4">
                <div className="font-display text-4xl md:text-5xl text-[var(--gold-bright)]">
                  <Counter to={20} suffix="+" />
                </div>
                <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Projects Completed
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col justify-center px-4">
                <div className="font-display text-4xl md:text-5xl text-[var(--gold-bright)]">
                  <Counter to={10} suffix="+" />
                </div>
                <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Dashboards Built
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col justify-center px-4">
                <div className="font-display text-4xl md:text-5xl text-[var(--gold-bright)]">
                  <Counter to={15} suffix="+" />
                </div>
                <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Technologies Used
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col justify-center px-4">
                <div className="font-display text-4xl md:text-5xl text-[var(--gold-bright)]">
                  <Counter to={2} suffix="" />
                </div>
                <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  Internship Experiences
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </section>

     {/* CONTACT */}
      <Section
        id="contact"
        eyebrow="Contact"
        title={<>Let's build something <span className="text-gradient-gold">exceptional</span>.</>}
        subtitle="Open to roles and collaborations in AI, Data Science, Analytics and Software Development."
      >
        {/* 🚀 FIXED: Added lg:max-w-[85rem] to expand the total row width on large screens so things stretch properly */}
        <div className="mx-auto w-full max-w-7xl lg:max-w-[85rem] grid gap-6 lg:grid-cols-12 transition-all">
          <Reveal className="lg:col-span-4">
            <div className="space-y-4">
              <ContactItem Icon={Mail} label="Email" value="anasmustafa464@gmail.com" href="https://mail.google.com/mail/?view=cm&fs=1&to=anasmustafa464@gmail.com" />
              <ContactItem Icon={Phone} label="Phone" value="+92 308 1872437" href="tel:+923081872437" />
              <ContactItem Icon={MapPin} label="Location" value="Sheikhupura, Pakistan" />
              <ContactItem Icon={Linkedin} label="LinkedIn" value="anas-mustafa25" href="https://linkedin.com/in/anas-mustafa25" />
              <ContactItem Icon={Github} label="GitHub" value="anasmustafa25" href="https://github.com/anasmustafa25" />
            </div>
          </Reveal>
          
          <Reveal delay={0.1} className="lg:col-span-8">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="rounded-3xl glass-strong p-7 md:p-9 shadow-card-lux gold-border space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="Let's collaborate on…" />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-2xl bg-[var(--dark-brown)]/60 border border-[var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[var(--gold)] focus:shadow-gold transition resize-none"
                  placeholder="Tell me a little about the project or role…"
                  required
                />
              </div>
              
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isSending}
                  data-cursor="hover"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold disabled:opacity-50"
                >
                  {isSending ? "Sending..." : "Send message"} <ArrowRight className="h-4 w-4" />
                </button>
                
                {statusMessage && (
                  <span className="text-xs tracking-wider text-[var(--gold-bright)] uppercase animate-pulse">
                    {statusMessage}
                  </span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-[var(--gold)]/15 bg-background/30 pt-16 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          {/* Top Multi-Column Grid Layout */}
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-12">
            
            {/* Column 1: Profile Brand Statement */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-xs font-bold text-primary-foreground shadow-gold">
                  AM
                </div>
                <span className="font-display text-xl tracking-tight text-foreground">Anas Mustafa</span>
              </div>
              <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                AI Engineer · Data Scientist · Software Developer.<br />
                Sheikhupura, Pakistan.
              </p>
            </div>

            {/* Column 2: Structural Page Section Anchors (A) */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#home" className="hover:text-[var(--gold)] transition-colors">Home</a></li>
                <li><a href="#skills" className="hover:text-[var(--gold)] transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-[var(--gold)] transition-colors">Projects</a></li>
                <li><a href="#services" className="hover:text-[var(--gold)] transition-colors">Services</a></li>
              </ul>
            </div>

            {/* Column 3: Structural Page Section Anchors (B) */}
            <div className="space-y-3 pt-7">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-[var(--gold)] transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-[var(--gold)] transition-colors">Experience</a></li>
                <li><a href="#certificates" className="hover:text-[var(--gold)] transition-colors">Certifications</a></li>
                <li><a href="#contact" className="hover:text-[var(--gold)] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: External Interactive Social Channels */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]">Connect</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="https://linkedin.com/in/anas-mustafa25" 
                  target="_blank" 
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/20 glass hover:bg-[var(--gold)]/10 text-muted-foreground hover:text-[var(--gold-bright)] transition-all"
                  data-cursor="hover"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://github.com/anasmustafa25" 
                  target="_blank" 
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/20 glass hover:bg-[var(--gold)]/10 text-muted-foreground hover:text-[var(--gold-bright)] transition-all"
                  data-cursor="hover"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=anasmustafa464@gmail.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/20 glass hover:bg-[var(--gold)]/10 text-muted-foreground hover:text-[var(--gold-bright)] transition-all"
                  data-cursor="hover"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Metainfo Line */}
          <div className="border-t border-[var(--gold)]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Anas Mustafa. All rights reserved.</span>
            <span className="font-display tracking-widest text-[var(--gold)] uppercase">AI · DATA · ENGINEERING</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- pieces ---------- */

function SkillCard({ cat, Icon, items }: { cat: string; Icon: any; items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!; const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="group relative h-full overflow-hidden rounded-3xl glass-strong p-7 shadow-card-lux gold-border"
      data-cursor="hover"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "radial-gradient(220px circle at var(--mx) var(--my), rgba(255,217,90,0.18), transparent 60%)" }}
      />
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl">{cat}</h3>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="rounded-full border border-[var(--gold)]/25 bg-[var(--dark-brown)]/50 px-3 py-1 text-xs text-foreground/85">
            {it}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ p, onOpen, index }: { p: typeof PROJECTS[number]; onOpen: () => void; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!; const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-y * 6}deg`);
    el.style.setProperty("--ry", `${x * 8}deg`);
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };
  return (
    <div
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
      className="group relative block h-full w-full text-left rounded-3xl glass-strong p-1 shadow-card-lux gold-border overflow-hidden"
      style={{ transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))", transition: "transform 200ms ease-out" }}
    >
      <button
        onClick={onOpen}
        className="relative block w-full text-left"
        aria-label={`Open ${p.title} case study`}
      >
        <div className="relative h-56 overflow-hidden rounded-[1.4rem]">
          <ProjectVisual index={index} title={p.title} image={p.image} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] tracking-wider text-[var(--gold-bright)] uppercase">
            {p.tag}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
            <ExternalLink className="h-4 w-4 text-[var(--gold)] mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
          
          {/* Responsive container: stack tags on tiny screens, inline row on normal screens */}
          <div className="mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map(t => (
                <span key={t} className="rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-2.5 py-0.5 text-[11px] text-champagne">{t}</span>
              ))}
            </div>

            {/* Bottom Right GitHub Action Button */}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()} // Stop modal from popping up when clicking the link
                className="inline-flex w-fit items-center gap-1.5 rounded-xl border border-[var(--gold)]/30 glass px-3 py-1.5 text-xs text-[var(--gold-bright)] hover:bg-[var(--gold)]/15 transition-colors"
                data-cursor="hover"
              >
                <Github className="h-3.5 w-3.5" /> Github
              </a>
            )}
          </div>
        </div>
      </button>

      {p.github ? (
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          data-cursor="hover"
          aria-label={`${p.title} on GitHub`}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full glass-strong border border-[var(--gold)]/30 text-[var(--gold-bright)] hover:bg-[var(--gold)]/15 transition-colors"
        >
          <Github className="h-4 w-4" />
        </a>
      ) : (
        <span
          aria-hidden
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full glass-strong border border-[var(--gold)]/20 text-[var(--gold)]/60"
          title="GitHub link — add URL in PROJECTS data"
        >
          <Github className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}

function ProjectVisual({ index, title, image }: { index: number; title: string; image?: string }) {
  const variants = [
    "from-[#2A1F1A] via-[#4A3428] to-[#0D0A07]",
    "from-[#3a2a10] via-[#B08D57] to-[#0D0A07]",
    "from-[#0D0A07] via-[#4A3428] to-[#D4AF37]",
    "from-[#2A1F1A] via-[#0D0A07] to-[#B08D57]",
    "from-[#4A3428] via-[#0D0A07] to-[#D4AF37]",
  ];
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${variants[index % variants.length]}`}>
      <div className="absolute inset-0 grid-bg opacity-60" />
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display text-5xl md:text-6xl text-[var(--gold-bright)]/40 tracking-[0.25em] text-center px-6">
            {title.split(" ").map(w => w[0]).join("").slice(0, 4)}
          </div>
        </div>
      )}
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[var(--gold-bright)]/25 blur-3xl" />
      <div className="absolute -top-12 -left-10 h-40 w-40 rounded-full bg-[var(--bronze)]/30 blur-3xl" />
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: typeof PROJECTS[number] | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [project, onClose]);

  return (
    <>
      {project && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] bg-background/85 backdrop-blur-md p-4 md:p-10 overflow-y-auto"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl rounded-3xl glass-strong shadow-card-lux gold-border overflow-hidden"
          >
            <div className="relative h-56 md:h-72">
              <ProjectVisual index={PROJECTS.indexOf(project)} title={project.title} image={project.image} />
              <button onClick={onClose} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass-strong hover:bg-[var(--gold)]/15">
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-background to-transparent">
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold-bright)]">{project.tag}</div>
                <h3 className="mt-2 font-display text-3xl md:text-4xl">{project.title}</h3>
              </div>
            </div>
            <div className="p-6 md:p-10 space-y-6">
              {[
                ["Problem", project.problem],
                ["Approach", project.approach],
                ["Tools", project.tools],
                ["Results", project.results],
                ["Challenges", project.challenges],
                ["Learnings", project.learnings],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <div className="text-xs uppercase tracking-[0.22em] text-[var(--gold)]/80">{k}</div>
                  <p className="mt-1.5 text-foreground/90">{v}</p>
                </div>
              ))}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map(t => (
                  <span key={t} className="rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-2.5 py-0.5 text-[11px] text-champagne">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

function ContactItem({ Icon, label, value, href }: { Icon: any; label: string; value: string; href?: string }) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" data-cursor="hover"
      className="group flex items-start gap-4 rounded-2xl glass p-4 hover:bg-[var(--gold)]/10 transition-colors">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
        <div className="font-medium break-words text-sm md:text-base leading-snug">{value}</div>
      </div>
    </Tag>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input
        name={name} type={type} placeholder={placeholder}
        className="w-full rounded-2xl bg-[var(--dark-brown)]/60 border border-[var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[var(--gold)] focus:shadow-gold transition"
      />
    </div>
  );
}