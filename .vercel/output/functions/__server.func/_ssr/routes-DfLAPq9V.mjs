import { o as __toESM } from "../_runtime.mjs";
import { i as useFrame, n as PointMaterial, o as require_jsx_runtime, r as Canvas, s as require_react, t as Points } from "../_libs/@react-three/drei+[...].mjs";
import { a as useTransform, c as motion, i as useSpring, l as AnimatePresence, n as animate, o as useMotionValue, r as useAnimationFrame, s as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { t as es_default } from "../_libs/emailjs__browser.mjs";
import { C as Award, S as Boxes, _ as ChartLine, a as Phone, b as Briefcase, c as Linkedin, d as GitBranch, f as ExternalLink, g as CodeXml, h as Cpu, i as Sparkles, l as Layers, m as Database, n as X, o as MapPin, p as Download, r as Terminal, s as Mail, t as Zap, u as Github, v as ChartColumn, w as ArrowRight, x as Brain, y as Calendar } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DfLAPq9V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "certificates",
		label: "Certificates"
	},
	{
		id: "services",
		label: "Services"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("home");
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 30);
			let current = "home";
			for (const s of SECTIONS) {
				const el = document.getElementById(s.id);
				if (el && el.getBoundingClientRect().top < window.innerHeight * .4) current = s.id;
			}
			setActive(current);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.nav, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-500 ${scrolled ? "w-[min(960px,94vw)]" : "w-[min(1100px,96vw)]"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-card-lux" : "glass"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-base font-bold",
						children: "A"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-base tracking-wide hidden sm:inline",
						children: "Anas Mustafa"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden md:flex items-center gap-1 text-sm",
					children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${s.id}`,
						"data-cursor": "hover",
						className: `relative rounded-full px-3 py-1.5 transition-colors ${active === s.id ? "text-[var(--gold-bright)]" : "text-foreground/70 hover:text-foreground"}`,
						children: [active === s.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-pill",
							className: "absolute inset-0 rounded-full bg-[var(--gold)]/12 border border-[var(--gold)]/30",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 30
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: s.label
						})]
					}) }, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "hidden md:inline-flex items-center rounded-full bg-gradient-gold px-4 py-1.5 text-sm font-medium text-primary-foreground shadow-gold",
					"data-cursor": "hover",
					children: "Let's talk"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Menu",
					onClick: () => setOpen((v) => !v),
					className: "md:hidden grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-[2px] w-4 bg-[var(--gold-bright)]" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
			initial: {
				opacity: 0,
				y: -8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -8
			},
			className: "md:hidden mt-2 glass-strong rounded-2xl p-2",
			children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				onClick: () => setOpen(false),
				href: `#${s.id}`,
				className: "block rounded-xl px-4 py-2.5 text-sm hover:bg-[var(--gold)]/10",
				children: s.label
			}) }, s.id))
		}) })]
	});
}
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 24,
		mass: .3
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: {
			scaleX,
			transformOrigin: "0% 50%"
		},
		className: "fixed left-0 right-0 top-0 z-[100] h-[2px] bg-gradient-gold"
	});
}
function CustomCursor() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		let x = window.innerWidth / 2, y = window.innerHeight / 2;
		let rx = x, ry = y;
		const move = (e) => {
			x = e.clientX;
			y = e.clientY;
		};
		const over = (e) => {
			const interactive = e.target.closest("a,button,[data-cursor='hover']");
			ring.current?.classList.toggle("scale-150", !!interactive);
			ring.current?.classList.toggle("bg-[oklch(0.78_0.13_85/0.15)]", !!interactive);
		};
		window.addEventListener("mousemove", move);
		window.addEventListener("mouseover", over);
		let raf = 0;
		const loop = () => {
			rx += (x - rx) * .18;
			ry += (y - ry) * .18;
			if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
			raf = requestAnimationFrame(loop);
		};
		loop();
		return () => {
			window.removeEventListener("mousemove", move);
			window.removeEventListener("mouseover", over);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dot,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-[var(--gold-bright)] mix-blend-difference",
		style: { transform: "translate(-50%,-50%)" }
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ring,
		className: "pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-[var(--gold)]/60 transition-[transform,background-color] duration-200 ease-out hidden md:block"
	})] });
}
function ClientOnly({ children, fallback = null }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var TECH = [
	{
		name: "Python",
		r: 0
	},
	{
		name: "TensorFlow",
		r: 1
	},
	{
		name: "PyTorch",
		r: 2
	},
	{
		name: "Pandas",
		r: 3
	},
	{
		name: "NumPy",
		r: 4
	},
	{
		name: "Scikit-learn",
		r: 5
	},
	{
		name: "Power BI",
		r: 6
	},
	{
		name: "Tableau",
		r: 7
	},
	{
		name: "SQL",
		r: 8
	},
	{
		name: "MongoDB",
		r: 9
	},
	{
		name: "React",
		r: 10
	},
	{
		name: "Next.js",
		r: 11
	}
];
function HeroPortrait() {
	const wrap = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useSpring(useTransform(my, [-.5, .5], [10, -10]), {
		stiffness: 120,
		damping: 14
	});
	const ry = useSpring(useTransform(mx, [-.5, .5], [-12, 12]), {
		stiffness: 120,
		damping: 14
	});
	const onMove = (e) => {
		const rect = wrap.current.getBoundingClientRect();
		mx.set((e.clientX - rect.left) / rect.width - .5);
		my.set((e.clientY - rect.top) / rect.height - .5);
	};
	const onLeave = () => {
		mx.set(0);
		my.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrap,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: "relative mx-auto aspect-square w-[min(310px,85vw)] md:w-[min(360px,85vw)] translate-x-0 md:-translate-x-8 origin-center",
		style: { perspective: 1200 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [
					0,
					1,
					2
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0 rounded-full border border-[var(--gold)]/15",
					style: { scale: .7 + i * .18 },
					animate: { rotate: i % 2 ? -360 : 360 },
					transition: {
						duration: 60 + i * 20,
						repeat: Infinity,
						ease: "linear"
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "pointer-events-none absolute inset-0",
				animate: { rotate: 360 },
				transition: {
					duration: 80,
					repeat: Infinity,
					ease: "linear"
				},
				children: TECH.map((t, i) => {
					const angle = i / TECH.length * Math.PI * 2;
					const radius = 48;
					const x = 50 + Math.cos(angle) * radius;
					const y = 50 + Math.sin(angle) * radius;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "absolute -translate-x-1/2 -translate-y-1/2",
						style: {
							left: `${x}%`,
							top: `${y}%`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { rotate: -360 },
							transition: {
								duration: 80,
								repeat: Infinity,
								ease: "linear"
							},
							className: "glass rounded-full px-3 py-1 text-[11px] font-medium tracking-wide text-champagne shadow-gold",
							style: { borderColor: "rgba(212,175,55,0.35)" },
							children: t.name
						})
					}, t.name);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					rotateX: rx,
					rotateY: ry,
					transformStyle: "preserve-3d"
				},
				className: "absolute inset-x-[14%] top-[8%] bottom-[20%] rounded-[2rem] glass-strong shadow-card-lux overflow-hidden gold-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,217,90,0.35),transparent_60%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/profile-img.png",
						alt: "Anas Mustafa",
						className: "relative h-full w-full object-cover",
						draggable: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(255,217,90,0.18)_50%,transparent_60%)] mix-blend-screen animate-shimmer" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-3 bottom-3 rounded-2xl glass px-4 py-2 flex items-center justify-between text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display tracking-wider text-[var(--gold-bright)]",
							children: "A.M · 2026"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "AI · Data · Engineering"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[var(--gold-bright)]/30 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[var(--bronze)]/30 blur-3xl" })
		]
	});
}
function NeuralField() {
	const ref = (0, import_react.useRef)(null);
	const positions = (0, import_react.useMemo)(() => {
		const n = 1400;
		const arr = new Float32Array(n * 3);
		for (let i = 0; i < n; i++) {
			const r = 6 + Math.random() * 6;
			const t = Math.random() * Math.PI * 2;
			const p = Math.acos(2 * Math.random() - 1);
			arr[i * 3] = r * Math.sin(p) * Math.cos(t);
			arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t) * .6;
			arr[i * 3 + 2] = r * Math.cos(p);
		}
		return arr;
	}, []);
	useFrame((state) => {
		if (!ref.current) return;
		ref.current.rotation.y = state.clock.elapsedTime * .04;
		ref.current.rotation.x = Math.sin(state.clock.elapsedTime * .1) * .2;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Points, {
		ref,
		positions,
		stride: 3,
		frustumCulled: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointMaterial, {
			transparent: true,
			color: "#D4AF37",
			size: .025,
			sizeAttenuation: true,
			depthWrite: false,
			opacity: .85
		})
	});
}
function GoldTorus() {
	const ref = (0, import_react.useRef)(null);
	useFrame((s) => {
		if (!ref.current) return;
		ref.current.rotation.x = s.clock.elapsedTime * .15;
		ref.current.rotation.y = s.clock.elapsedTime * .2;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		ref,
		position: [
			3.5,
			-1.5,
			-2
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusKnotGeometry", { args: [
			1.1,
			.18,
			180,
			24
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#D4AF37",
			metalness: 1,
			roughness: .18,
			emissive: "#3a2a10"
		})]
	});
}
function Scene3D() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		dpr: [1, 2],
		camera: {
			position: [
				0,
				0,
				10
			],
			fov: 55
		},
		gl: {
			antialias: true,
			alpha: true
		},
		className: "!absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .4 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					5,
					5,
					5
				],
				intensity: 1.2,
				color: "#FFD95A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					-5,
					-3,
					4
				],
				intensity: .8,
				color: "#B08D57"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NeuralField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldTorus, {})
		]
	});
}
var ITEMS = [
	{
		label: "Python",
		Icon: CodeXml
	},
	{
		label: "TensorFlow",
		Icon: Brain
	},
	{
		label: "PyTorch",
		Icon: Cpu
	},
	{
		label: "YOLOv8",
		Icon: Zap
	},
	{
		label: "Pandas",
		Icon: ChartColumn
	},
	{
		label: "NumPy",
		Icon: Layers
	},
	{
		label: "Scikit-learn",
		Icon: Sparkles
	},
	{
		label: "Power BI",
		Icon: ChartLine
	},
	{
		label: "Tableau",
		Icon: ChartColumn
	},
	{
		label: "SQL",
		Icon: Database
	},
	{
		label: "MongoDB",
		Icon: Database
	},
	{
		label: "Next.js",
		Icon: Boxes
	},
	{
		label: "React",
		Icon: Boxes
	},
	{
		label: "Node.js",
		Icon: Terminal
	},
	{
		label: "Git",
		Icon: GitBranch
	}
];
function TechMarquee() {
	const loop = [
		...ITEMS,
		...ITEMS,
		...ITEMS
	];
	const containerRef = (0, import_react.useRef)(null);
	const rawX = useMotionValue(0);
	const baseSpeed = -.8;
	const isDragging = (0, import_react.useRef)(false);
	const startX = (0, import_react.useRef)(0);
	const currentXOffset = (0, import_react.useRef)(0);
	const [cursorClass, setCursorClass] = (0, import_react.useState)("cursor-grab");
	const loopX = useTransform(rawX, (value) => {
		if (!containerRef.current) return 0;
		const singleSegmentWidth = containerRef.current.scrollWidth / 3;
		if (singleSegmentWidth === 0) return 0;
		const remainder = value % singleSegmentWidth;
		return remainder > 0 ? remainder - singleSegmentWidth : remainder;
	});
	useAnimationFrame(() => {
		if (isDragging.current) return;
		rawX.set(rawX.get() + baseSpeed);
	});
	const handlePointerDown = (e) => {
		isDragging.current = true;
		startX.current = e.clientX;
		currentXOffset.current = rawX.get();
		setCursorClass("cursor-grabbing");
		e.target.setPointerCapture(e.pointerId);
	};
	const handlePointerMove = (e) => {
		if (!isDragging.current) return;
		const deltaX = e.clientX - startX.current;
		rawX.set(currentXOffset.current + deltaX);
	};
	const handlePointerUp = (e) => {
		isDragging.current = false;
		setCursorClass("cursor-grab");
		e.target.releasePointerCapture(e.pointerId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `relative my-16 overflow-hidden touch-pan-y select-none ${cursorClass}`,
		onPointerDown: handlePointerDown,
		onPointerMove: handlePointerMove,
		onPointerUp: handlePointerUp,
		onPointerCancel: handlePointerUp,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative border-y border-[var(--gold)]/25 bg-gradient-to-r from-[var(--dark-brown)]/40 via-[var(--coffee)]/30 to-[var(--dark-brown)]/40 backdrop-blur-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					ref: containerRef,
					style: { x: loopX },
					className: "flex gap-12 py-6 whitespace-nowrap will-change-transform",
					children: loop.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 px-4 pointer-events-none",
						"data-cursor": "hover",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.Icon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl md:text-2xl tracking-wide text-[var(--gold-bright)]/90",
								children: it.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-6 text-[var(--gold)]/40",
								children: "✦"
							})
						]
					}, i))
				})
			]
		})
	});
}
function Section({ id, eyebrow, title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-14 max-w-3xl",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs tracking-[0.18em] text-[var(--gold-bright)] uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }),
						" ",
						eyebrow
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl md:text-6xl leading-[1.05]",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base md:text-lg text-muted-foreground",
					children: subtitle
				})
			]
		}) }), children]
	});
}
function CustomSubtitle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "A production ready stack covering machine learning, analytical modeling, and dashboard development selected to build reliable, high impact systems." });
}
function Reveal({ children, delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		className,
		initial: {
			opacity: 0,
			y: 28
		},
		animate: inView ? {
			opacity: 1,
			y: 0
		} : {},
		transition: {
			duration: .9,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	(0, import_react.useEffect)(() => {
		if (!inView || !ref.current) return;
		const node = ref.current;
		const controls = animate(0, to, {
			duration: 1.8,
			ease: [
				.22,
				1,
				.36,
				1
			],
			onUpdate: (v) => {
				node.textContent = Math.round(v).toString() + suffix;
			}
		});
		return () => controls.stop();
	}, [
		inView,
		to,
		suffix
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: ["0", suffix]
	});
}
var SKILLS = [
	{
		cat: "AI & ML",
		icon: Brain,
		items: [
			"Machine Learning",
			"Deep Learning",
			"YOLOv8",
			"Generative AI",
			"Model Evaluation"
		]
	},
	{
		cat: "Data Analytics",
		icon: ChartColumn,
		items: [
			"Data Cleaning",
			"EDA",
			"Forecasting",
			"KPI Design",
			"Storytelling"
		]
	},
	{
		cat: "Programming",
		icon: CodeXml,
		items: [
			"Python",
			"JavaScript",
			"TypeScript",
			"SQL"
		]
	},
	{
		cat: "Libraries",
		icon: ChartLine,
		items: [
			"Pandas",
			"NumPy",
			"Matplotlib",
			"Seaborn",
			"Scikit-learn"
		]
	},
	{
		cat: "Frameworks",
		icon: Sparkles,
		items: [
			"React.js",
			"Next.js",
			"Node.js"
		]
	},
	{
		cat: "Databases & Tools",
		icon: Database,
		items: [
			"MySQL",
			"MongoDB",
			"Oracle SQL",
			"Power BI",
			"Tableau",
			"Excel",
			"Git/GitHub"
		]
	}
];
var EXPERIENCE = [{
	role: "Information Technology Intern",
	company: "Fatima Memorial System, Lahore",
	date: "Jun 2025 – Aug 2025",
	bullets: [
		"Developed frontend interfaces based on hospital operational requirements.",
		"Worked with Oracle SQL & Excel to clean and analyze operational data.",
		"Supported IT workflows with HIS Software in a live healthcare environment."
	]
}, {
	role: "Web Developer Intern (MERN Stack)",
	company: "Gamica Cloud, Faisalabad",
	date: "Feb 2025 – May 2025",
	bullets: [
		"Built responsive frontend components using React and JavaScript.",
		"Implemented reusable UI elements following modern UX standards.",
		"Strengthened full-stack fundamentals through project-based learning."
	]
}];
var PROJECTS = [
	{
		title: "MotionGuard AI",
		tag: "Computer Vision · YOLOv8",
		blurb: "AI security system for real-time shoplifting detection with custom threat-scoring.",
		tech: [
			"Python",
			"YOLOv8",
			"OpenCV",
			"PyTorch"
		],
		image: "/images/motionguard.png",
		github: " https://github.com/anasmustafa25/MotionGuard-AI-An-Automated-Retail-Security-System",
		problem: "Retail stores need automated, real-time loss-prevention without constant human monitoring.",
		approach: "Built a YOLOv8 detection pipeline with custom threat-score logic on top of frame-level object tracking, then exposed insights through a monitoring layer.",
		tools: "Python, YOLOv8, OpenCV, PyTorch, NumPy",
		results: "Reliable real-time incident detection with iteratively-tuned model accuracy.",
		challenges: "Balancing detection sensitivity vs. false-positive rate in noisy retail footage.",
		learnings: "Productionizing vision models requires as much logic engineering as model training."
	},
	{
		title: "E-Commerce Sales Analysis & Forecasting",
		tag: "Power BI · Time Series",
		blurb: "Interactive dashboard with KPIs, drill-down filters and time-series forecasting.",
		tech: [
			"Power BI",
			"DAX",
			"Excel"
		],
		image: "/images/powerbi.png",
		github: "https://github.com/anasmustafa25/Super-Store-Sales-Dashboard-PowerBI",
		problem: "Stakeholders needed a single pane to track seasonality, performance and forward demand.",
		approach: "Modeled the sales data, designed KPI cards & drill-down visuals, then layered time-series forecasting for forward-looking insight.",
		tools: "Power BI, DAX, Excel",
		results: "Self-serve BI surface enabling proactive, data-driven decisions.",
		challenges: "Reconciling messy multi-source data into a clean star schema.",
		learnings: "Great dashboards are 70% data modeling, 30% visuals."
	},
	{
		title: "Supplier Performance Dashboard",
		tag: "Tableau · Procurement",
		blurb: "Visual analytics on supplier efficiency and delivery bottlenecks.",
		tech: [
			"Tableau",
			"SQL",
			"Excel"
		],
		image: "/images/tableau.png",
		github: "https://github.com/anasmustafa25/Supplier-Performance-Dashboard-Tableau",
		problem: "Procurement teams lacked a single comparable view of supplier reliability.",
		approach: "Built calculated fields & comparison visuals to surface underperforming suppliers and delivery gaps.",
		tools: "Tableau, SQL",
		results: "Empowered buyers to renegotiate or replace consistently underperforming vendors.",
		challenges: "Defining fair, weighted performance metrics across vendor categories.",
		learnings: "Metric design is the most important design decision."
	},
	{
		title: "Operations Analysis Dashboard",
		tag: "Excel · Operations",
		blurb: "Dynamic Excel dashboard for sales, inventory, logistics, and returns.",
		tech: [
			"Excel",
			"Pivot Tables",
			"Statistics"
		],
		image: "/images/excel.png",
		github: "https://github.com/anasmustafa25/Operations-Intelligence-Dashboard-Advance-Excel",
		problem: "Ops data lived in disconnected sheets with quality issues.",
		approach: "Cleaned and unified datasets, then built KPI cards, slicers, and trend visuals on top.",
		tools: "Excel (advanced formulas, Pivot Tables, conditional formatting)",
		results: "A single interactive dashboard powering weekly ops reviews.",
		challenges: "Handling inconsistent formats and duplicates across systems.",
		learnings: "Excel can ship surprisingly far when modeled with discipline."
	},
	{
		title: "Online Shopping Web Application",
		tag: "Next.js · Full Stack",
		blurb: "Responsive shopping app with cart, dynamic routing and API integration.",
		tech: [
			"Next.js",
			"JavaScript",
			"REST API"
		],
		image: "/images/nextjs.png",
		github: "https://github.com/anasmustafa25/A-online-Shoe-Store-with-NextJS",
		problem: "Need a performant, reusable storefront foundation.",
		approach: "Built a component-driven Next.js storefront with dynamic routes, cart state, and API-backed product data.",
		tools: "Next.js, JavaScript, REST APIs",
		results: "A fast, modular base for e-commerce experimentation.",
		challenges: "Designing state that scales from cart to checkout cleanly.",
		learnings: "Reusable component contracts pay off the second a feature changes."
	}
];
var CERTS = [
	"AI & Data Science Course (NAVTTC)",
	"Python Programming",
	"Analyzing and Visualizing Data with Microsoft Power BI",
	"Tableau Data Visualization Workshop",
	"Generative AI Fundamentals",
	"MERN Stack Development"
];
var SERVICES = [
	{
		title: "AI & Machine Learning Solutions",
		desc: "Computer vision, predictive models and ML pipelines tailored to your data.",
		icon: Brain
	},
	{
		title: "Data Analysis & Visualization",
		desc: "Turning messy datasets into clear, decision-ready stories.",
		icon: ChartLine
	},
	{
		title: "Power BI Dashboards",
		desc: "Interactive Power BI dashboards with KPIs, forecasts and drill-downs.",
		icon: ChartColumn
	},
	{
		title: "Tableau Dashboards",
		desc: "Executive-grade Tableau dashboards with calculated fields and analytics.",
		icon: Award
	},
	{
		title: "Web Development",
		desc: "Responsive React / Next.js applications with clean, scalable architecture.",
		icon: CodeXml
	},
	{
		title: "Data Cleaning & Reporting",
		desc: "End-to-end data preparation, automated reports and KPI tracking.",
		icon: Database
	}
];
function Portfolio() {
	const [openProject, setOpenProject] = (0, import_react.useState)(null);
	const heroRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"]
	});
	const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
	const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, .3]);
	const formRef = (0, import_react.useRef)(null);
	const [isSending, setIsSending] = (0, import_react.useState)(false);
	const [statusMessage, setStatusMessage] = (0, import_react.useState)("");
	const [isDesktop, setIsDesktop] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsDesktop(window.innerWidth >= 768);
		const handleResize = () => setIsDesktop(window.innerWidth >= 768);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const sendEmail = (e) => {
		e.preventDefault();
		if (!formRef.current) return;
		setIsSending(true);
		setStatusMessage("");
		es_default.sendForm("service_0tavc1v", "template_y8eywyn", formRef.current, "4fyxJtw_4NX-Gm14_").then(() => {
			setIsSending(false);
			setStatusMessage("Message sent successfully! ✨");
			formRef.current?.reset();
		}).catch((error) => {
			setIsSending(false);
			setStatusMessage("Failed to send message. Please try again.");
			console.error("EmailJS Error:", error);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen bg-background text-foreground overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "home",
				ref: heroRef,
				className: "relative min-h-[85svh] noise",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene3D, {}) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						style: {
							y: isDesktop ? heroY : 0,
							opacity: heroOpacity
						},
						className: "relative mx-auto grid max-w-7xl gap-16 px-6 pt-24 pb-24 md:grid-cols-2 md:pt-32 md:pb-24 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-start",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-5 inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--gold-bright)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gold-bright)] shadow-[0_0_10px_var(--gold-bright)]" }), "Available for opportunities"]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .05,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-display text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.95] tracking-tight",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-foreground/90",
											children: "Anas"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-gradient-gold animate-shimmer bg-[length:200%_100%]",
											children: "Mustafa"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .15,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl md:text-2xl text-champagne",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI Engineer" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[var(--gold)]",
												children: "·"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Data Scientist" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .25,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-xl text-base md:text-lg text-muted-foreground",
										children: "Building intelligent systems, transforming data into insights, and crafting scalable digital experiences with the polish of a luxury product."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .35,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-9 flex flex-wrap items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#projects",
											"data-cursor": "hover",
											className: "group relative inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold",
											children: ["Explore my work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "/Anas_Mustafa_Resume.pdf",
											download: "Anas_Mustafa_Resume.pdf",
											"data-cursor": "hover",
											className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-[var(--gold)]/10 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Download Resume"]
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: .5,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-12 grid grid-cols-3 gap-6 max-w-md",
										children: [
											{
												v: 20,
												s: "+",
												l: "Projects"
											},
											{
												v: 10,
												s: "+",
												l: "Dashboards"
											},
											{
												v: 15,
												s: "+",
												l: "Technologies"
											}
										].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-3xl text-[var(--gold-bright)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to: s.v,
												suffix: s.s
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
											children: s.l
										})] }, s.l))
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex items-start justify-center mb-16 md:mb-0 md:-mt-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPortrait, {})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground hidden md:block",
						children: "scroll"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "about",
				eyebrow: "About",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "craft aligned"
					}),
					" engineer at the",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:inline" }),
					" intersection of AI & data."
				] }),
				subtitle: "Computer Science graduate (UAF, 2022–2026) focused on Artificial Intelligence, Data Science and Web Development. I love turning messy, real world data into clean systems and crisp visual stories.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: [
						{
							t: "Education",
							v: "B.S. Computer Science",
							s: "University of Agriculture, Faisalabad · 2022–2026"
						},
						{
							t: "Focus",
							v: "AI · Data · Engineering",
							s: "ML, analytics, dashboards, full-stack web."
						},
						{
							t: "Mindset",
							v: "Analytical & adaptable",
							s: "Problem solving, communication, continuous learning."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-full rounded-3xl glass-strong p-7 shadow-card-lux gold-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.22em] text-[var(--gold)]/80",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 font-display text-2xl",
								children: c.v
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: c.s
							})
						]
					}) }, c.t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "skills",
				eyebrow: "Skills",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"The ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "toolkit"
					}),
					"."
				] }),
				subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomSubtitle, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: SKILLS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillCard, {
							cat: s.cat,
							Icon: s.icon,
							items: s.items
						})
					}, s.cat))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "experience",
				eyebrow: "Experience",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"A timeline of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "deliberate"
					}),
					" work."
				] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-12",
						children: EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `md:pr-10 ${i % 2 ? "md:pr-0 md:pl-10" : ""} pl-12 md:pl-0`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `rounded-3xl glass-strong p-7 shadow-card-lux gold-border`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-xs text-[var(--gold-bright)]",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
														" ",
														e.date
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 font-display text-2xl",
													children: e.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-1 flex items-center gap-2 text-sm text-muted-foreground",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-3.5 w-3.5" }),
														" ",
														e.company
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-4 space-y-2 text-sm text-foreground/85",
													children: e.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 flex-none rounded-full bg-[var(--gold)]" }), b]
													}, b))
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-4 md:left-1/2 top-7 -translate-x-1/2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-3 w-3 rounded-full bg-gradient-gold shadow-[0_0_18px_var(--gold-bright)]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
								]
							})
						}, e.role))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "projects",
				eyebrow: "Selected Work",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Projects, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "case study"
					}),
					" style."
				] }),
				subtitle: "Select a card to unpack the complete workflow, key constraints, and strategic insights.",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							p,
							onOpen: () => setOpenProject(i),
							index: i
						})
					}, p.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectModal, {
					project: openProject !== null ? PROJECTS[openProject] : null,
					onClose: () => setOpenProject(null)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "certificates",
				eyebrow: "Certifications",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Continuously ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "leveling up"
					}),
					"."
				] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: CERTS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							whileHover: {
								y: -6,
								rotateX: 4,
								rotateY: -3
							},
							transition: {
								type: "spring",
								stiffness: 250,
								damping: 18
							},
							style: { transformStyle: "preserve-3d" },
							className: "group relative h-full rounded-2xl glass-strong p-6 shadow-card-lux gold-border",
							"data-cursor": "hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-7 w-7 text-[var(--gold-bright)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 font-display text-lg leading-snug",
									children: c
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-xs uppercase tracking-widest text-muted-foreground",
									children: "Verified Training"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--gold-bright)]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" })
							]
						})
					}, c))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "services",
				eyebrow: "Services",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"How I can ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "help"
					}),
					"."
				] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: SERVICES.map((s, i) => {
						const IconComponent = s.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative h-full rounded-3xl glass-strong p-7 shadow-card-lux gold-border overflow-hidden transition-all duration-300",
								"data-cursor": "hover",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--gold-bright)]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 text-[var(--gold-bright)] shadow-[0_0_15px_rgba(212,175,55,0.05)] mb-6 transition-transform duration-300 group-hover:scale-105",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl leading-tight text-foreground group-hover:text-[var(--gold-bright)] transition-colors duration-300",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground leading-relaxed",
										children: s.desc
									})
								]
							})
						}, s.title);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative mx-auto w-full max-w-7xl px-6 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full rounded-3xl glass-strong p-8 md:p-10 gold-border shadow-card-lux relative overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[var(--gold-bright)]/10 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[var(--gold-bright)]/10 blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0 text-center divide-y-0 md:divide-y-0 md:divide-x divide-[var(--gold)]/15",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-center px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-4xl md:text-5xl text-[var(--gold-bright)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
											to: 20,
											suffix: "+"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium",
										children: "Projects Completed"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-center px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-4xl md:text-5xl text-[var(--gold-bright)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
											to: 10,
											suffix: "+"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium",
										children: "Dashboards Built"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-center px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-4xl md:text-5xl text-[var(--gold-bright)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
											to: 15,
											suffix: "+"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium",
										children: "Technologies Used"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-center px-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-4xl md:text-5xl text-[var(--gold-bright)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
											to: 2,
											suffix: ""
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium",
										children: "Internship Experiences"
									})]
								})
							]
						})
					]
				}) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "contact",
				eyebrow: "Contact",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Let's build something ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-gold",
						children: "exceptional"
					}),
					"."
				] }),
				subtitle: "Open to roles and collaborations in AI, Data Science, Analytics and Software Development.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-7xl lg:max-w-[85rem] grid gap-6 lg:grid-cols-12 transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
									Icon: Mail,
									label: "Email",
									value: "anasmustafa464@gmail.com",
									href: "https://mail.google.com/mail/?view=cm&fs=1&to=anasmustafa464@gmail.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
									Icon: Phone,
									label: "Phone",
									value: "+92 308 1872437",
									href: "tel:+923081872437"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
									Icon: MapPin,
									label: "Location",
									value: "Sheikhupura, Pakistan"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
									Icon: Linkedin,
									label: "LinkedIn",
									value: "anas-mustafa25",
									href: "https://linkedin.com/in/anas-mustafa25"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactItem, {
									Icon: Github,
									label: "GitHub",
									value: "anasmustafa25",
									href: "https://github.com/anasmustafa25"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							ref: formRef,
							onSubmit: sendEmail,
							className: "rounded-3xl glass-strong p-7 md:p-9 shadow-card-lux gold-border space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Name",
										name: "name",
										placeholder: "Your name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email",
										placeholder: "you@company.com"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Subject",
									name: "subject",
									placeholder: "Let's collaborate on…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-xs uppercase tracking-[0.22em] text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									rows: 5,
									className: "w-full rounded-2xl bg-[var(--dark-brown)]/60 border border-[var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[var(--gold)] focus:shadow-gold transition resize-none",
									placeholder: "Tell me a little about the project or role…",
									required: true
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: isSending,
										"data-cursor": "hover",
										className: "inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold disabled:opacity-50",
										children: [
											isSending ? "Sending..." : "Send message",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										]
									}), statusMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-wider text-[var(--gold-bright)] uppercase animate-pulse",
										children: statusMessage
									})]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-[var(--gold)]/15 bg-background/30 pt-16 pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-2 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-xs font-bold text-primary-foreground shadow-gold",
										children: "AM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-xl tracking-tight text-foreground",
										children: "Anas Mustafa"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "max-w-xs text-sm text-muted-foreground leading-relaxed",
									children: [
										"AI Engineer · Data Scientist · Software Developer.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Sheikhupura, Pakistan."
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]",
									children: "Quick Links"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#home",
											className: "hover:text-[var(--gold)] transition-colors",
											children: "Home"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#skills",
											className: "hover:text-[var(--gold)] transition-colors",
											children: "Skills"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#projects",
											className: "hover:text-[var(--gold)] transition-colors",
											children: "Projects"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#services",
											className: "hover:text-[var(--gold)] transition-colors",
											children: "Services"
										}) })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3 pt-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#about",
											className: "hover:text-[var(--gold)] transition-colors",
											children: "About"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#experience",
											className: "hover:text-[var(--gold)] transition-colors",
											children: "Experience"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#certificates",
											className: "hover:text-[var(--gold)] transition-colors",
											children: "Certifications"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											className: "hover:text-[var(--gold)] transition-colors",
											children: "Contact"
										}) })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]",
									children: "Connect"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://linkedin.com/in/anas-mustafa25",
											target: "_blank",
											rel: "noreferrer",
											className: "grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/20 glass hover:bg-[var(--gold)]/10 text-muted-foreground hover:text-[var(--gold-bright)] transition-all",
											"data-cursor": "hover",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://github.com/anasmustafa25",
											target: "_blank",
											rel: "noreferrer",
											className: "grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/20 glass hover:bg-[var(--gold)]/10 text-muted-foreground hover:text-[var(--gold-bright)] transition-all",
											"data-cursor": "hover",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://mail.google.com/mail/?view=cm&fs=1&to=anasmustafa464@gmail.com",
											target: "_blank",
											rel: "noreferrer",
											className: "grid h-10 w-10 place-items-center rounded-full border border-[var(--gold)]/20 glass hover:bg-[var(--gold)]/10 text-muted-foreground hover:text-[var(--gold-bright)] transition-all",
											"data-cursor": "hover",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
										})
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-[var(--gold)]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Anas Mustafa. All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display tracking-widest text-[var(--gold)] uppercase",
							children: "AI · DATA · ENGINEERING"
						})]
					})]
				})
			})
		]
	});
}
function SkillCard({ cat, Icon, items }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		const r = el.getBoundingClientRect();
		el.style.setProperty("--mx", `${e.clientX - r.left}px`);
		el.style.setProperty("--my", `${e.clientY - r.top}px`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		onMouseMove: onMove,
		whileHover: { y: -6 },
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 18
		},
		className: "group relative h-full overflow-hidden rounded-3xl glass-strong p-7 shadow-card-lux gold-border",
		"data-cursor": "hover",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity",
				style: { background: "radial-gradient(220px circle at var(--mx) var(--my), rgba(255,217,90,0.18), transparent 60%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: cat
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-[var(--gold)]/25 bg-[var(--dark-brown)]/50 px-3 py-1 text-xs text-foreground/85",
					children: it
				}, it))
			})
		]
	});
}
function ProjectCard({ p, onOpen, index }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - .5;
		const y = (e.clientY - r.top) / r.height - .5;
		el.style.setProperty("--rx", `${-y * 6}deg`);
		el.style.setProperty("--ry", `${x * 8}deg`);
	};
	const onLeave = () => {
		ref.current?.style.setProperty("--rx", "0deg");
		ref.current?.style.setProperty("--ry", "0deg");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		"data-cursor": "hover",
		className: "group relative block h-full w-full text-left rounded-3xl glass-strong p-1 shadow-card-lux gold-border overflow-hidden",
		style: {
			transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
			transition: "transform 200ms ease-out"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: onOpen,
			className: "relative block w-full text-left",
			"aria-label": `Open ${p.title} case study`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-56 overflow-hidden rounded-[1.4rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, {
						index,
						title: p.title,
						image: p.image
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] tracking-wider text-[var(--gold-bright)] uppercase",
						children: p.tag
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl leading-tight",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 text-[var(--gold)] mt-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: p.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-2.5 py-0.5 text-[11px] text-champagne",
								children: t
							}, t))
						}), p.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.github,
							target: "_blank",
							rel: "noreferrer",
							onClick: (e) => e.stopPropagation(),
							className: "inline-flex w-fit items-center gap-1.5 rounded-xl border border-[var(--gold)]/30 glass px-3 py-1.5 text-xs text-[var(--gold-bright)] hover:bg-[var(--gold)]/15 transition-colors",
							"data-cursor": "hover",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3.5 w-3.5" }), " Github"]
						})]
					})
				]
			})]
		}), p.github ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: p.github,
			target: "_blank",
			rel: "noreferrer",
			onClick: (e) => e.stopPropagation(),
			"data-cursor": "hover",
			"aria-label": `${p.title} on GitHub`,
			className: "absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full glass-strong border border-[var(--gold)]/30 text-[var(--gold-bright)] hover:bg-[var(--gold)]/15 transition-colors",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full glass-strong border border-[var(--gold)]/20 text-[var(--gold)]/60",
			title: "GitHub link — add URL in PROJECTS data",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" })
		})]
	});
}
function ProjectVisual({ index, title, image }) {
	const variants = [
		"from-[#2A1F1A] via-[#4A3428] to-[#0D0A07]",
		"from-[#3a2a10] via-[#B08D57] to-[#0D0A07]",
		"from-[#0D0A07] via-[#4A3428] to-[#D4AF37]",
		"from-[#2A1F1A] via-[#0D0A07] to-[#B08D57]",
		"from-[#4A3428] via-[#0D0A07] to-[#D4AF37]"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative h-full w-full bg-gradient-to-br ${variants[index % variants.length]}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-60" }),
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: title,
				className: "absolute inset-0 h-full w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-5xl md:text-6xl text-[var(--gold-bright)]/40 tracking-[0.25em] text-center px-6",
					children: title.split(" ").map((w) => w[0]).join("").slice(0, 4)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[var(--gold-bright)]/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -left-10 h-40 w-40 rounded-full bg-[var(--bronze)]/30 blur-3xl" })
		]
	});
}
function ProjectModal({ project, onClose }) {
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = project ? "hidden" : "";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [project, onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: project && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose,
		className: "fixed inset-0 z-[120] bg-background/85 backdrop-blur-md p-4 md:p-10 overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			onClick: (e) => e.stopPropagation(),
			initial: {
				y: 30,
				opacity: 0,
				scale: .98
			},
			animate: {
				y: 0,
				opacity: 1,
				scale: 1
			},
			transition: {
				duration: .5,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "mx-auto max-w-4xl rounded-3xl glass-strong shadow-card-lux gold-border overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-56 md:h-72",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, {
						index: PROJECTS.indexOf(project),
						title: project.title,
						image: project.image
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass-strong hover:bg-[var(--gold)]/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-background to-transparent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.22em] text-[var(--gold-bright)]",
							children: project.tag
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl md:text-4xl",
							children: project.title
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 md:p-10 space-y-6",
				children: [[
					["Problem", project.problem],
					["Approach", project.approach],
					["Tools", project.tools],
					["Results", project.results],
					["Challenges", project.challenges],
					["Learnings", project.learnings]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-[var(--gold)]/80",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-foreground/90",
					children: v
				})] }, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5 pt-2",
					children: project.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-2.5 py-0.5 text-[11px] text-champagne",
						children: t
					}, t))
				})]
			})]
		})
	}) });
}
function ContactItem({ Icon, label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(href ? "a" : "div", {
		href,
		target: href?.startsWith("http") ? "_blank" : void 0,
		rel: "noreferrer",
		"data-cursor": "hover",
		className: "group flex items-start gap-4 rounded-2xl glass p-4 hover:bg-[var(--gold)]/10 transition-colors",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium break-words text-sm md:text-base leading-snug",
				children: value
			})]
		})]
	});
}
function Field({ label, name, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-2 block text-xs uppercase tracking-[0.22em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		placeholder,
		className: "w-full rounded-2xl bg-[var(--dark-brown)]/60 border border-[var(--gold)]/20 px-4 py-3 text-sm outline-none focus:border-[var(--gold)] focus:shadow-gold transition"
	})] });
}
//#endregion
export { Portfolio as component };
