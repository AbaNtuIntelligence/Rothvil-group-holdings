"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Pause,
  Play,
  Phone,
  X,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONTENT                                                            */
/* ------------------------------------------------------------------ */

const slides = [
  {
    image: "/images/projects/pikitup-exterior.webp",
    kicker: "Electrical engineering · Facilities maintenance · Infrastructure",
    title: "BUILT FOR INDUSTRY.\nENGINEERED TO LAST.",
    text: "From industrial sorting bays to electrical distribution systems, Rothvil Group Holdings brings practical engineering and construction capability to complex environments.",
  },
  {
    image: "/images/projects/heritage-electrical-refurbishment.webp",
    kicker: "Commercial · Industrial · Residential",
    title: "TECHNICAL PRECISION.\nREAL-WORLD DELIVERY.",
    text: "Explore real work spanning electrical refurbishment, plumbing upgrades and technical installations, documented in the Rothvil project portfolio.",
  },
  {
    image: "/images/projects/atns-substation-installation.webp",
    kicker: "Facilities · Automation · Energy",
    title: "POWERING CRITICAL\nINFRASTRUCTURE.",
    text: "Electrical systems, substations and facility upgrades delivered with a focus on reliable infrastructure and functional spaces.",
  },
];

const services = [
  {
    no: "01",
    title: "Commercial",
    image: "/images/projects/atns-substation-installation.webp",
    items: [
      "Retail store electrical systems",
      "Data centre power and cabling",
      "Energy-efficient lighting retrofits",
      "Office fit-outs and renovations",
      "Restaurant and hospitality solutions",
    ],
  },
  {
    no: "02",
    title: "Residential",
    image: "/images/projects/stamford-bathroom.webp",
    items: [
      "Landscape lighting installation",
      "Generator installation & maintenance",
      "Electrical upgrades & renovations",
      "Home automation and systems integration",
    ],
  },
  {
    no: "03",
    title: "Industrial",
    image: "/images/projects/electrical-switchgear.webp",
    items: [
      "Facility lighting",
      "Machinery wiring & automation",
      "Electrical maintenance & troubleshooting",
      "Industrial electrical installations",
    ],
  },
  {
    no: "04",
    title: "Renewable",
    image: "/images/projects/solar-installation.webp",
    items: ["Solar installations"],
  },
];

const projects = [
  {
    id: "atns",
    title: "ATNS Substation Installation",
    category: "Infrastructure",
    location: "Johannesburg",
    image: "/images/projects/atns-substation-installation.webp",
    summary:
      "Substation installation and electrical distribution delivered inside a live aviation environment.",
    tags: ["Substation", "Distribution", "Compliance"],
  },
  {
    id: "pikitup",
    title: "Pikitup Industrial Facility",
    category: "Industrial",
    location: "Johannesburg",
    image: "/images/projects/pikitup-exterior.webp",
    summary:
      "Industrial facility electrical infrastructure, high-bay lighting and an ongoing maintenance programme.",
    tags: ["Facility lighting", "Maintenance", "Wiring"],
  },
  {
    id: "heritage",
    title: "Heritage Electrical Refurbishment",
    category: "Commercial",
    location: "Johannesburg CBD",
    image: "/images/projects/heritage-electrical-refurbishment.webp",
    summary:
      "Full electrical refurbishment of a heritage commercial building, balancing compliance with character.",
    tags: ["Refurbishment", "Compliance", "Retail"],
  },
  {
    id: "switchgear",
    title: "Switchgear & Distribution Upgrade",
    category: "Industrial",
    location: "Gauteng",
    image: "/images/projects/electrical-switchgear.webp",
    summary:
      "Switchgear replacement and distribution board upgrades executed for continuous operation.",
    tags: ["Switchgear", "Upgrades", "Testing"],
  },
  {
    id: "stamford",
    title: "Stamford Plumbing Upgrade",
    category: "Commercial",
    location: "Johannesburg",
    image: "/images/projects/stamford-plumbing.webp",
    summary:
      "Plumbing and building services upgrade coordinated alongside live electrical works.",
    tags: ["Plumbing", "Services", "Fit-out"],
  },
  {
    id: "fire",
    title: "Fire Services Installation",
    category: "Facilities",
    location: "Johannesburg",
    image: "/images/projects/fire-services-installation.webp",
    summary:
      "Fire detection and services installation for a multi-tenant facility, delivered to spec.",
    tags: ["Fire systems", "Compliance", "Facilities"],
  },
];

const filters = ["All", "Commercial", "Industrial", "Infrastructure", "Facilities"];

const references = [
  {
    name: "Lethlogonolo Chloe Tsheole",
    company: "ATNS (Air Traffic & Navigation Services)",
    work: "Electrical maintenance — Aviation Training Academy",
    phone: "Available upon request",
  },
  {
    name: "Omphile Kotsedi",
    company: "Capello Ghandi Square",
    work: "Lighting installations",
    phone: "Available upon request",
  },
  {
    name: "Happy Chaza",
    company: "WAM Electrical",
    work: "Bank of Athens Anderson Street, CBD",
    phone: "Available upon request",
  },
  {
    name: "Siya Mosile",
    company: "Library Gardens Johannesburg (JDA)",
    work: "Generator installation",
    phone: "Available upon request",
  },
];

const navItems = ["About", "Projects", "Services", "Vision", "References", "Contact"];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [menu, setMenu] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState("All");

  /* autoplay */
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setSlide((s) => (s + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [playing]);

  /* keyboard */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setSlide((s) => (s + 1) % slides.length);
      if (event.key === "ArrowLeft") setSlide((s) => (s - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* scroll state + progress bar */
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* reveal on scroll */
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const current = slides[slide];
  const visibleProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const trackSpotlight = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <main className="overflow-x-clip bg-[#05080f]">
      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#39c6e8] via-[#7ef0ff] to-[#39c6e8] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ---------------------------------------------------------- */}
      {/* NAVIGATION                                                 */}
      {/* ---------------------------------------------------------- */}
      <header
        className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#05080f]/80 backdrop-blur-xl"
            : "border-b border-white/10 bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-all duration-500 md:px-10 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-[#39c6e8] text-[#05080f] transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105">
              <Zap size={21} strokeWidth={2.8} />
            </span>
            <span className="leading-none">
              <span className="display block text-[21px] uppercase tracking-tight">Rothvil</span>
              <span className="mt-1 block text-[8.5px] font-extrabold tracking-[0.4em] text-white/60">
                GROUP HOLDINGS
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[10.5px] font-extrabold uppercase tracking-[0.2em] lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative py-2 text-white/70 transition-colors hover:text-white"
              >
                {item}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#39c6e8] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="mailto:ethan.rothvilgroupholdings@gmail.com"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/25 px-5 py-2.5 transition-colors duration-300 hover:border-[#39c6e8]"
            >
              <span className="absolute inset-0 -translate-y-full bg-[#39c6e8] transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#05080f]">
                Start a conversation
              </span>
            </a>
          </nav>

          <button
            onClick={() => setMenu(!menu)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 lg:hidden"
            aria-label="Toggle menu"
          >
            {menu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menu && (
          <div className="border-t border-white/10 bg-[#05080f]/95 px-5 py-4 backdrop-blur-xl lg:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-white/80"
              >
                {item}
                <ArrowUpRight size={16} className="text-[#39c6e8]" />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ---------------------------------------------------------- */}
      {/* HERO                                                       */}
      {/* ---------------------------------------------------------- */}
      <section
        id="home"
        className="relative h-[100svh] min-h-[640px] overflow-hidden bg-[#05080f] text-white"
        aria-label="Rothvil featured services"
        aria-roledescription="carousel"
      >
        {slides.map((s, i) => (
          <div
            key={s.title}
            aria-hidden={i !== slide}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image}
              alt=""
              className={`h-full w-full object-cover object-center ${i === slide ? "hero-pan" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03060c]/95 via-[#05080f]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-transparent to-[#03060c]/50" />
          </div>
        ))}

        <div className="grain pointer-events-none absolute inset-0 z-[1]" />

        {/* vertical slide rail */}
        <div className="absolute right-10 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex">
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setSlide(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === slide ? "true" : undefined}
              className="group flex items-center gap-3"
            >
              <span
                className={`text-[10px] font-extrabold tracking-[0.25em] transition-all duration-500 ${
                  i === slide ? "text-[#39c6e8]" : "text-white/30 group-hover:text-white/70"
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`block h-px transition-all duration-500 ${
                  i === slide ? "w-12 bg-[#39c6e8]" : "w-5 bg-white/25 group-hover:w-8"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-28 lg:pb-32">
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-3 text-[10.5px] font-extrabold uppercase tracking-[0.32em] text-[#9ff5ff]">
              <span className="h-px w-12 bg-[#39c6e8]" />
              {current.kicker}
            </div>

            <h1
              key={current.title}
              className="display fade-up whitespace-pre-line text-[clamp(3.4rem,9vw,8.5rem)] leading-[0.84] tracking-[-0.02em]"
            >
              {current.title}
            </h1>

            <p
              key={current.text}
              className="fade-up mt-8 max-w-xl text-base leading-7 text-white/70 md:text-lg"
              style={{ animationDelay: "120ms" }}
            >
              {current.text}
            </p>

            <div
              className="fade-up mt-10 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[#39c6e8] px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#05080f] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              >
                View projects
                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 text-[11px] font-extrabold uppercase tracking-[0.18em] backdrop-blur-sm transition-colors duration-300 hover:border-[#39c6e8] hover:text-[#39c6e8]"
              >
                Contact Rothvil
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* controls */}
          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-extrabold tracking-[0.3em] text-white/50">
                0{slide + 1} — 0{slides.length}
              </span>
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Show slide ${i + 1}`}
                    className={`h-[3px] rounded-full transition-all duration-500 ${
                      i === slide ? "w-10 bg-[#39c6e8]" : "w-4 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                className="slider-control grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-[#39c6e8] hover:bg-[#39c6e8] hover:text-[#05080f]"
              >
                {playing ? <Pause size={15} /> : <Play size={15} />}
              </button>
              <button
                onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
                className="slider-control grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-[#39c6e8] hover:bg-[#39c6e8] hover:text-[#05080f]"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={() => setSlide((slide + 1) % slides.length)}
                aria-label="Next slide"
                className="slider-control grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-all duration-300 hover:border-[#39c6e8] hover:bg-[#39c6e8] hover:text-[#05080f]"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* TICKER                                                     */}
      {/* ---------------------------------------------------------- */}
      <div className="overflow-hidden border-y border-[#39c6e8]/30 bg-[#05080f] py-4">
        <div className="marquee flex w-max items-center gap-12 text-[10px] font-extrabold uppercase tracking-[0.4em] text-white/45">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              Electrical Engineering
              <i className="h-1 w-1 rounded-full bg-[#39c6e8]" />
              Facilities Maintenance
              <i className="h-1 w-1 rounded-full bg-[#39c6e8]" />
              Automation
              <i className="h-1 w-1 rounded-full bg-[#39c6e8]" />
              Renewable Energy
              <i className="h-1 w-1 rounded-full bg-[#39c6e8]" />
            </span>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* ABOUT                                                      */}
      {/* ---------------------------------------------------------- */}
      <section id="about" className="bg-[#f6fafc]">
        <div className="grid lg:grid-cols-[45%_55%]">
          <div className="relative min-h-[70vh] overflow-hidden lg:sticky lg:top-0 lg:h-screen">
            <img
              src="/images/projects/stamford-plumbing.webp"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/30 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6 text-white md:bottom-12 md:left-12">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#9ff5ff]">
                01 — About Rothvil
              </span>
              <p className="display mt-4 text-5xl leading-[0.88] md:text-6xl">
                TECHNICAL.
                <br />
                RELIABLE.
                <br />
                FORWARD.
              </p>
            </div>
          </div>

          <div className="bg-[#f6fafc]">
            <article className="flex min-h-[85vh] flex-col justify-center px-6 py-24 md:px-16 lg:px-20">
              <span
                data-reveal
                className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#1497bb]"
              >
                The company
              </span>
              <h2
                data-reveal
                style={{ animationDelay: "80ms" }}
                className="display mt-5 text-6xl leading-[0.86] tracking-tight text-[#05080f] md:text-[7.5rem]"
              >
                ENGINEERED
                <br />
                TO DELIVER.
              </h2>
              <p
                data-reveal
                style={{ animationDelay: "160ms" }}
                className="mt-10 max-w-2xl text-lg leading-8 text-slate-600"
              >
                Rothvil Group Holdings (Pty) Ltd serves public- and private-sector clients with
                electrical engineering, facilities maintenance and infrastructure support. We bring
                practical execution and a solutions-led approach to the places people live, work and
                connect.
              </p>
              <p
                data-reveal
                style={{ animationDelay: "220ms" }}
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
              >
                Led by director Ethan Wayne George, the business draws on operational project
                experience, including work associated with WAM Electrical and an ATNS electrical
                maintenance contract. Our focus is straightforward: coordinated delivery, technical
                care and lasting value.
              </p>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  "Public & private entities",
                  "Facilities management",
                  "Electrical maintenance",
                  "Infrastructure development",
                ].map((x, i) => (
                  <div
                    key={x}
                    data-reveal
                    style={{ animationDelay: `${280 + i * 70}ms` }}
                    className="group flex items-center gap-3 border-t border-slate-300 pt-4 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1497bb] transition-transform duration-300 group-hover:scale-150" />
                    {x}
                  </div>
                ))}
              </div>
            </article>

            <article className="relative min-h-[70vh] overflow-hidden bg-[#05080f] px-6 py-24 text-white md:px-16 lg:px-20">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#39c6e8]/10 blur-3xl" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#39c6e8]">
                The ambition
              </span>
              <h3 className="display mt-6 max-w-3xl text-5xl leading-[0.9] md:text-[6.5rem]">
                INFRASTRUCTURE THAT MOVES PEOPLE FORWARD.
              </h3>
              <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55">
                We aim to contribute to infrastructure that strengthens communities, supports
                businesses and improves the built environment—through purposeful engineering and
                dependable maintenance.
              </p>
              <div className="mt-12 flex items-center gap-5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#9ff5ff]">
                <span className="h-px w-16 bg-[#39c6e8]" /> Rothvil Group Holdings
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* PROJECTS — the centrepiece                                 */}
      {/* ---------------------------------------------------------- */}
      <section id="projects" className="relative bg-[#05080f] px-5 py-24 text-white md:px-10 md:py-32">
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#39c6e8]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-10 border-b border-white/10 pb-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <span
                  data-reveal
                  className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#39c6e8]"
                >
                  02 — Selected work
                </span>
                <h2
                  data-reveal
                  style={{ animationDelay: "80ms" }}
                  className="display mt-5 text-[4.5rem] leading-[0.84] tracking-tight md:text-[9rem]"
                >
                  PROJECTS
                </h2>
              </div>
              <p
                data-reveal
                style={{ animationDelay: "140ms" }}
                className="max-w-sm text-base leading-7 text-white/50"
              >
                A portfolio of electrical, facilities and infrastructure work delivered across
                commercial, industrial and public-sector environments.
              </p>
            </div>

            {/* filters */}
            <div
              data-reveal
              style={{ animationDelay: "200ms" }}
              className="flex flex-wrap gap-2"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 ${
                    filter === f
                      ? "border-[#39c6e8] bg-[#39c6e8] text-[#05080f]"
                      : "border-white/15 text-white/50 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* grid */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((p, i) => (
              <article
                key={`${filter}-${p.id}`}
                onMouseMove={trackSpotlight}
                style={{ animationDelay: `${i * 80}ms` }}
                className="project-card card-in group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0a111c] ring-1 ring-white/10 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-2 hover:shadow-[0_40px_80px_-40px_rgba(57,198,232,0.45)] md:aspect-[4/4.6]"
              >
                {/* media */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03060c] via-[#03060c]/45 to-transparent opacity-95" />
                  <div className="spotlight absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/5 text-[10px] font-extrabold backdrop-blur-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                      {p.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="display text-[1.9rem] leading-[0.95] tracking-tight md:text-[2.2rem]">
                      {p.title}
                    </h3>

                    {/* talking reveal */}
                    <div className="grid max-h-0 grid-rows-[0fr] overflow-hidden transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:max-h-40">
                      <p className="overflow-hidden pt-3 text-[13.5px] leading-6 text-white/60">
                        {p.summary}
                      </p>
                    </div>

                    {/* tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t, ti) => (
                        <span
                          key={t}
                          style={{ transitionDelay: `${120 + ti * 70}ms` }}
                          className="translate-y-2 rounded-full border border-[#39c6e8]/30 bg-[#39c6e8]/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#9ff5ff] opacity-0 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/45">
                        <MapPin size={12} className="text-[#39c6e8]" />
                        {p.location}
                      </span>
                      <span className="bounce-arrow grid h-11 w-11 place-items-center rounded-full bg-[#39c6e8] text-[#05080f] transition-colors duration-300">
                        <ArrowUpRight size={18} strokeWidth={2.8} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* bottom accent line */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#39c6e8] to-[#7ef0ff] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
              </article>
            ))}
          </div>

          <div
            data-reveal
            className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center"
          >
            <p className="text-sm text-white/45">
              Detailed project references and scope documentation available on request.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#39c6e8]"
            >
              Request the full portfolio
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* MARQUEE DIVIDER                                            */}
      {/* ---------------------------------------------------------- */}
      <div className="overflow-hidden bg-[#39c6e8] py-4 text-[#05080f]">
        <div className="marquee marquee-slow flex w-max gap-10 text-xl font-black uppercase tracking-tight md:text-2xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>POWER • MAINTAIN • INSTALL • INTEGRATE • </span>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* SERVICES                                                   */}
      {/* ---------------------------------------------------------- */}
      <section id="services" className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-12 md:flex-row md:items-end">
            <div>
              <span
                data-reveal
                className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#1497bb]"
              >
                03 — What we do
              </span>
              <h2
                data-reveal
                style={{ animationDelay: "80ms" }}
                className="display mt-5 text-6xl leading-none tracking-tight text-[#05080f] md:text-[8.5rem]"
              >
                SERVICES
              </h2>
            </div>
            <p
              data-reveal
              style={{ animationDelay: "140ms" }}
              className="max-w-md text-lg leading-7 text-slate-500"
            >
              Electrical solutions across commercial, residential, industrial and renewable
              environments.
            </p>
          </div>

          <div className="divide-y divide-slate-200">
            {services.map((service, si) => (
              <div
                key={service.no}
                data-reveal
                style={{ animationDelay: `${si * 70}ms` }}
                className="group grid gap-8 py-12 md:grid-cols-[90px_1fr_40%] md:items-center lg:py-16"
              >
                <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#1497bb] transition-transform duration-500 group-hover:translate-x-1">
                  {service.no}
                </span>
                <div>
                  <h3 className="display text-5xl leading-none tracking-tight text-[#05080f] transition-colors duration-500 group-hover:text-[#1497bb] md:text-7xl">
                    {service.title}
                  </h3>
                  <ul className="mt-7 grid gap-3 text-[15px] text-slate-600 md:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check size={17} className="mt-0.5 shrink-0 text-[#1497bb]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 overflow-hidden rounded-xl md:h-72">
                  <img
                    src={service.image}
                    alt=""
                    className="h-full w-full object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#05080f]/15 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* VISION                                                     */}
      {/* ---------------------------------------------------------- */}
      <section
        id="vision"
        className="relative overflow-hidden bg-[#05080f] px-5 py-28 text-white md:px-10 md:py-40"
      >
        <div className="absolute right-0 top-0 h-full w-[45%] opacity-25">
          <img
            src="/images/projects/fire-services-installation.webp"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05080f] via-[#05080f]/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1600px]">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#39c6e8]">
            04 — Direction
          </span>
          <div className="mt-10 max-w-6xl">
            <h2
              data-reveal
              className="display text-7xl leading-[0.84] tracking-tight md:text-[9.5rem]"
            >
              VISION
            </h2>
            <p
              data-reveal
              style={{ animationDelay: "100ms" }}
              className="mt-10 max-w-3xl text-xl leading-relaxed text-white/60 md:text-3xl"
            >
              To be a trusted delivery partner for public- and private-sector infrastructure,
              specialising in electrical engineering and facilities maintenance that keep essential
              spaces safe, efficient and ready for the future.
            </p>
          </div>

          <div className="mt-24 grid gap-10 border-t border-white/10 pt-14 lg:grid-cols-3">
            {[
              "Secure and position Rothvil Group Holdings in the construction industry as a reliable company for outsourced contracts.",
              "Assist Government and private projects in reaching their goals and achieving allocated time frames for completion.",
              "Become an eco-friendly entity that uses green building methods to decrease its environmental footprint.",
            ].map((text, i) => (
              <div
                key={i}
                data-reveal
                style={{ animationDelay: `${i * 90}ms` }}
                className="group"
              >
                <span className="display text-4xl text-[#39c6e8] transition-transform duration-500 group-hover:-translate-y-1 inline-block">
                  0{i + 1}
                </span>
                <p className="mt-5 text-lg leading-7 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* REFERENCES                                                 */}
      {/* ---------------------------------------------------------- */}
      <section id="references" className="bg-[#f6fafc] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#1497bb]">
            05 — Track record
          </span>
          <div className="mt-5 flex flex-col justify-between gap-8 border-b border-slate-300 pb-12 md:flex-row md:items-end">
            <h2 className="display text-6xl leading-none tracking-tight text-[#05080f] md:text-[8.5rem]">
              REFERENCES
            </h2>
            <p className="max-w-sm text-slate-500">
              Professional references listed in the company profile. Contact details are available
              upon request.
            </p>
          </div>

          <div className="grid gap-px bg-slate-300 md:grid-cols-2">
            {references.map((ref, i) => (
              <article
                key={ref.name}
                data-reveal
                style={{ animationDelay: `${i * 70}ms` }}
                className="group relative bg-[#f6fafc] p-8 transition-colors duration-500 hover:bg-white md:p-10"
              >
                <div className="flex justify-between">
                  <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#1497bb]">
                    0{i + 1}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-slate-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1497bb]"
                  />
                </div>
                <h3 className="mt-14 text-2xl font-extrabold text-[#05080f]">{ref.name}</h3>
                <p className="mt-2 font-bold text-[#125a8c]">{ref.company}</p>
                <p className="mt-5 leading-7 text-slate-500">{ref.work}</p>
                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                  {ref.phone}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#1497bb] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* CONTACT                                                    */}
      {/* ---------------------------------------------------------- */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#39c6e8] px-5 py-24 text-[#05080f] md:px-10 md:py-32"
      >
        <div className="float-y pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[70px] border-white/20" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto max-w-[1600px]">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.32em]">
            06 — Start a project
          </span>
          <h2 className="display mt-6 max-w-6xl text-6xl leading-[0.84] tracking-tight md:text-[9.5rem]">
            LET&apos;S
            <br />
            GET TO
            <br />
            WORK.
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <a
              href="tel:+27832370047"
              className="group flex items-center justify-between border-t-2 border-[#05080f] py-6 text-lg font-extrabold md:text-xl"
            >
              <span className="flex items-center gap-4">
                <Phone size={20} /> 083 237 0047
              </span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
            <a
              href="mailto:ethan.rothvilgroupholdings@gmail.com"
              className="group flex items-center justify-between border-t-2 border-[#05080f] py-6 text-lg font-extrabold md:text-xl"
            >
              <span className="flex items-center gap-4">
                <Mail size={20} /> Email Rothvil
              </span>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </a>
          </div>

          <p className="mt-14 max-w-2xl text-sm leading-6 opacity-70">
            Additional company particulars such as registration number, VAT/tax details, physical
            address and website domain were not visible in the supplied profile and have
            intentionally not been invented.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* FOOTER                                                     */}
      {/* ---------------------------------------------------------- */}
      <footer className="bg-[#03060c] px-5 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-5 text-[10px] font-extrabold uppercase tracking-[0.2em] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Rothvil Group Holdings</span>
          <span className="text-white/30">
            Electrical Engineering • Facilities Maintenance • Infrastructure
          </span>
        </div>
      </footer>
    </main>
  );
}