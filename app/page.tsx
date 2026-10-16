 "use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Mail,
  Menu,
  Phone,
  X,
  Zap,
} from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=85",
    kicker: "Electrical engineering • Facilities maintenance • Infrastructure",
    title: "POWERING PROGRESS.\nENGINEERING TRUST.",
    text: "Rothvil Group Holdings delivers electrical engineering, maintenance and installation solutions for commercial, residential, industrial and renewable environments.",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85",
    kicker: "Commercial • Industrial • Residential",
    title: "SPACES THAT WORK.\nSYSTEMS THAT LAST.",
    text: "From commercial premises to residential developments, we deliver considered electrical installations, responsive maintenance and dependable infrastructure support.",
  },
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85",
    kicker: "Facilities • Automation • Energy",
    title: "ENERGY FOR\nWHAT COMES NEXT.",
    text: "Smarter lighting, reliable backup power, industrial automation and solar solutions—designed around the demands of tomorrow.",
  },
];

const services = [
  {
    no: "01",
    title: "Commercial",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85",
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
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=85",
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
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=85",
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
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=85",
    items: ["Solar installations"],
  },
];

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

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [menu, setMenu] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setSlide((s) => (s + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") setSlide((s) => (s + 1) % slides.length);
      if (event.key === "ArrowLeft") setSlide((s) => (s - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = slides[slide];

  return (
    <main className="overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/20 text-white backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-[#39c6e8] text-[#07111f]">
              <Zap size={23} strokeWidth={2.8} />
            </span>
            <span className="leading-none">
              <span className="display block text-[22px] uppercase">Rothvil</span>
              <span className="block text-[9px] font-bold tracking-[0.38em]">GROUP HOLDINGS</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.18em] lg:flex">
            {["About", "Services", "Vision", "References", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#39c6e8]">
                {item}
              </a>
            ))}
            <a
              href="mailto:ethan.rothvilgroupholdings@gmail.com"
              className="border border-white/50 px-5 py-3 transition hover:border-[#39c6e8] hover:bg-[#39c6e8] hover:text-[#07111f]"
            >
              Start a conversation
            </a>
          </nav>

          <button onClick={() => setMenu(!menu)} className="lg:hidden" aria-label="Toggle menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        {menu && (
          <div className="border-t border-white/10 bg-[#07111f]/95 px-5 py-5 lg:hidden">
            {["About", "Services", "Vision", "References", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
                className="block border-b border-white/10 py-4 text-sm font-bold uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Full viewport hero slider */}
      <section id="home" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-[#07111f] text-white" aria-label="Rothvil featured services" aria-roledescription="carousel">
        {slides.map((s, i) => (
          <div
            key={s.title}
            aria-hidden={i !== slide}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={s.image}
              alt=""
              className={`h-full w-full object-cover object-center ${i === slide ? "hero-pan" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#03101d]/90 via-[#07111f]/55 to-[#07111f]/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 via-transparent to-black/20" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-end px-5 pb-24 md:px-10 md:pb-28 lg:pb-32">
          <div className="max-w-5xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#9ff5ff]">
              <span className="h-px w-12 bg-[#39c6e8]" />
              {current.kicker}
            </div>
            <h1 key={current.title} className="display whitespace-pre-line text-[clamp(4rem,10vw,9.5rem)] leading-[0.82] tracking-[-0.035em] fade-up">
              {current.title}
            </h1>
            <p key={current.text} className="mt-8 max-w-xl text-base leading-7 text-white/80 fade-up md:text-lg">
              {current.text}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 fade-up">
              <a href="#services" className="inline-flex items-center gap-3 bg-[#39c6e8] px-6 py-4 text-sm font-black uppercase tracking-wider text-[#07111f]">
                Explore services <ArrowDownRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 border border-white/40 px-6 py-4 text-sm font-black uppercase tracking-wider backdrop-blur-sm">
                Contact Rothvil <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-5 z-20 flex items-center gap-3 md:right-10">
          <span className="hidden text-xs font-bold tracking-widest text-white/80 sm:inline" aria-live="polite">0{slide + 1} / 0{slides.length}</span>
          <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause slideshow" : "Play slideshow"} className="slider-control grid h-11 w-11 place-items-center border border-white/35 bg-black/15 backdrop-blur hover:bg-white hover:text-[#07111f]">{playing ? <Pause size={17}/> : <Play size={17}/>}</button>
          <button onClick={() => setSlide((slide - 1 + slides.length) % slides.length)} aria-label="Previous slide" className="slider-control grid h-11 w-11 place-items-center border border-white/35 bg-black/15 backdrop-blur hover:bg-white hover:text-[#07111f]">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} aria-label={`Show slide ${i + 1}`} aria-current={i === slide ? "true" : undefined} className={`h-1 transition-all ${i === slide ? "w-12 bg-[#39c6e8]" : "w-5 bg-white/40"}`} />
            ))}
          </div>
          <button onClick={() => setSlide((slide + 1) % slides.length)} aria-label="Next slide" className="slider-control grid h-11 w-11 place-items-center border border-white/35 bg-black/15 backdrop-blur hover:bg-white hover:text-[#07111f]">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 z-20 hidden w-full border-t border-white/10 bg-[#07111f]/55 py-3 backdrop-blur-md md:block">
          <div className="marquee flex w-max items-center gap-12 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                Electrical Engineering <i className="h-1.5 w-1.5 rounded-full bg-[#39c6e8]" />
                Facilities Maintenance <i className="h-1.5 w-1.5 rounded-full bg-[#39c6e8]" />
                Automation <i className="h-1.5 w-1.5 rounded-full bg-[#39c6e8]" />
                Renewable Energy <i className="h-1.5 w-1.5 rounded-full bg-[#39c6e8]" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling text / image storytelling */}
      <section id="about" className="bg-white">
        <div className="grid lg:grid-cols-[45%_55%]">
          <div className="relative min-h-[70vh] lg:sticky lg:top-0 lg:h-screen">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85" alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[#07111f]/35" />
            <div className="absolute bottom-8 left-6 right-6 text-white md:bottom-12 md:left-12">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#9ff5ff]">01 — About Rothvil</span>
              <p className="display mt-3 max-w-md text-5xl leading-none md:text-6xl">TECHNICAL.<br />RELIABLE.<br />FORWARD.</p>
            </div>
          </div>

          <div className="bg-[#f4fbfd]">
            <article className="flex min-h-[85vh] flex-col justify-center px-7 py-24 md:px-16 lg:px-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#159bc1]">The company</span>
              <h2 className="display mt-5 text-6xl leading-none md:text-8xl">ENGINEERED<br />TO DELIVER.</h2>
              <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-700">
                Rothvil Group Holdings (Pty) Ltd serves public- and private-sector clients with electrical engineering, facilities maintenance and infrastructure support. We bring practical execution and a solutions-led approach to the places people live, work and connect.
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Led by director Ethan Wayne George, the business draws on operational project experience, including work associated with WAM Electrical and an ATNS electrical maintenance contract. Our focus is straightforward: coordinated delivery, technical care and lasting value.
              </p>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {["Public & private entities", "Facilities management", "Electrical maintenance", "Infrastructure development"].map((x) => (
                  <div key={x} className="border-t border-slate-300 pt-4 text-sm font-bold uppercase tracking-wider">
                    {x}
                  </div>
                ))}
              </div>
            </article>

            <article className="min-h-[70vh] bg-[#07111f] px-7 py-24 text-white md:px-16 lg:px-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#39c6e8]">The ambition</span>
              <h3 className="display mt-6 max-w-3xl text-6xl leading-[.88] md:text-8xl">
                INFRASTRUCTURE THAT MOVES PEOPLE FORWARD.
              </h3>
              <p className="mt-10 max-w-2xl text-lg leading-8 text-white/65">
                We aim to contribute to infrastructure that strengthens communities, supports businesses and improves the built environment—through purposeful engineering and dependable maintenance.
              </p>
              <div className="mt-12 flex items-center gap-5 text-xs font-black uppercase tracking-[0.25em] text-[#9ff5ff]">
                <span className="h-px w-16 bg-[#39c6e8]" /> Rothvil Group Holdings
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="overflow-hidden bg-[#39c6e8] py-5 text-[#07111f]">
        <div className="marquee flex w-max gap-10 text-2xl font-black uppercase tracking-tight">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>POWER • MAINTAIN • INSTALL • INTEGRATE • </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="bg-white px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-12 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#159bc1]">02 — What we do</span>
              <h2 className="display mt-5 text-7xl leading-none md:text-[9rem]">SERVICES</h2>
            </div>
            <p className="max-w-md text-lg leading-7 text-slate-600">
              Electrical solutions across commercial, residential, industrial and renewable environments.
            </p>
          </div>

          <div className="divide-y divide-slate-200">
            {services.map((service) => (
              <div key={service.no} className="group grid gap-8 py-12 md:grid-cols-[110px_1fr_42%] md:items-center lg:py-16">
                <span className="text-sm font-black text-[#159bc1]">{service.no}</span>
                <div>
                  <h3 className="display text-5xl leading-none md:text-7xl">{service.title}</h3>
                  <ul className="mt-7 grid gap-3 text-base text-slate-600 md:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0 text-[#159bc1]" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-64 overflow-hidden md:h-72">
                  <img src={service.image} alt="" className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-[#07111f]/15 transition group-hover:bg-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section id="vision" className="relative overflow-hidden bg-[#07111f] px-5 py-28 text-white md:px-10 md:py-40">
        <div className="absolute right-0 top-0 h-full w-[45%] opacity-30">
          <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=85" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-[1500px]">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#39c6e8]">03 — Direction</span>
          <div className="mt-10 max-w-6xl">
            <h2 className="display text-7xl leading-[.84] md:text-[10rem]">VISION</h2>
            <p className="mt-10 max-w-3xl text-2xl leading-relaxed text-white/75 md:text-3xl">
              To be a trusted delivery partner for public- and private-sector infrastructure, specialising in electrical engineering and facilities maintenance that keep essential spaces safe, efficient and ready for the future.
            </p>
          </div>

          <div className="mt-28 grid gap-12 border-t border-white/15 pt-14 lg:grid-cols-3">
            <div>
              <span className="text-5xl font-black text-[#39c6e8]">01</span>
              <p className="mt-5 text-lg leading-7 text-white/75">Secure and position Rothvil Group Holdings in the construction industry as a reliable company for outsourced contracts.</p>
            </div>
            <div>
              <span className="text-5xl font-black text-[#39c6e8]">02</span>
              <p className="mt-5 text-lg leading-7 text-white/75">Assist Government and private projects in reaching their goals and achieving allocated time frames for completion.</p>
            </div>
            <div>
              <span className="text-5xl font-black text-[#39c6e8]">03</span>
              <p className="mt-5 text-lg leading-7 text-white/75">Become an eco-friendly entity that uses green building methods to decrease its environmental footprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="bg-[#f4fbfd] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#159bc1]">04 — Track record</span>
          <div className="mt-5 flex flex-col justify-between gap-8 border-b border-slate-300 pb-12 md:flex-row md:items-end">
            <h2 className="display text-7xl leading-none md:text-[9rem]">REFERENCES</h2>
            <p className="max-w-sm text-slate-600">Professional references listed in the company profile. Contact details are available upon request.</p>
          </div>
          <div className="grid gap-px bg-slate-300 md:grid-cols-2">
            {references.map((ref, i) => (
              <article key={ref.name} className="bg-[#f4fbfd] p-8 md:p-10">
                <div className="flex justify-between">
                  <span className="text-xs font-black text-[#159bc1]">0{i + 1}</span>
                  <ArrowRight size={20} className="text-slate-400" />
                </div>
                <h3 className="mt-14 text-2xl font-black">{ref.name}</h3>
                <p className="mt-2 font-bold text-[#145a93]">{ref.company}</p>
                <p className="mt-5 leading-7 text-slate-600">{ref.work}</p>
                <p className="mt-6 text-sm font-bold tracking-wide">{ref.phone}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-[#39c6e8] px-5 py-24 text-[#07111f] md:px-10 md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[70px] border-white/20" />
        <div className="relative mx-auto max-w-[1500px]">
          <span className="text-xs font-black uppercase tracking-[0.3em]">05 — Start a project</span>
          <h2 className="display mt-6 max-w-6xl text-7xl leading-[.82] md:text-[10rem]">LET&apos;S<br />GET TO<br />WORK.</h2>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <a href="tel:+27832370047" className="flex items-center justify-between border-t-2 border-[#07111f] py-6 text-xl font-black">
              <span className="flex items-center gap-4"><Phone /> 083 237 0047</span>
              <ArrowRight />
            </a>
            <a href="mailto:ethan.rothvilgroupholdings@gmail.com" className="flex items-center justify-between border-t-2 border-[#07111f] py-6 text-xl font-black">
              <span className="flex items-center gap-4"><Mail /> Email Rothvil</span>
              <ArrowRight />
            </a>
          </div>
          <p className="mt-14 max-w-2xl text-sm leading-6 opacity-75">
            Additional company particulars such as registration number, VAT/tax details, physical address and website domain were not visible in the supplied profile and have intentionally not been invented.
          </p>
        </div>
      </section>

      <footer className="bg-[#050b13] px-5 py-8 text-white md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 text-xs font-bold uppercase tracking-[0.18em] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Rothvil Group Holdings</span>
          <span className="text-white/40">Electrical Engineering • Facilities Maintenance • Infrastructure</span>
        </div>
      </footer>
    </main>
  );
}
