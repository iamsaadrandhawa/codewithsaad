import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Code2,
  Smartphone,
  Globe,
  Linkedin,
  Database,
  Radio,
  Instagram,
  Facebook,
  Music2, // TikTok substitute (lucide has no TikTok icon)
} from 'lucide-react';
import TypeWriter from './TypeWriter';
import NetworkGraph from './NetworkGraph';
import TechOrbit from './TechOrbit';
const titles = [
  'MERN-Stack Developer',
  'React-Native Expert',
  'Network Engineer',
  'CS Lecturer',
];
const orbitItems = [
  { icon: <Github className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/iamsaadrandhawa' },
  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/iamsaadrandhawa' },
  { icon: <Code2 className="w-4 h-4" />, label: 'React / TypeScript', href: '#skills' },
  { icon: <Smartphone className="w-4 h-4" />, label: 'React Native', href: '#skills' },
  { icon: <Database className="w-4 h-4" />, label: 'Node.js / MongoDB', href: '#skills' },
  { icon: <Globe className="w-4 h-4" />, label: 'Web Projects', href: '#projects' },
];
const stats = [
  { value: '50+', label: 'Projects' },
  { value: '5+', label: 'Years Exp' },
  { value: '98%', label: 'Success' },
];
/* ============================================================
   Social links shown on the BACK of the photo card
   ============================================================ */
const socials = [
  {
    label: 'GitHub',
    handle: '@iamsaadrandhawa',
    href: 'https://github.com/iamsaadrandhawa',
    icon: <Github className="w-5 h-5" />,
    color: 'text-slate-200',
    hoverBorder: 'hover:border-slate-300/50',
    hoverBg: 'hover:bg-slate-200/10',
  },
  {
    label: 'LinkedIn',
    handle: 'in/iamsaadrandhawa',
    href: 'https://www.linkedin.com/in/iamsaadrandhawa',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'text-sky-400',
    hoverBorder: 'hover:border-sky-400/50',
    hoverBg: 'hover:bg-sky-400/10',
  },
  {
    label: 'Instagram',
    handle: '@iamsaadrandhawa',
    href: 'https://instagram.com/iamsaadrandhawa',
    icon: <Instagram className="w-5 h-5" />,
    color: 'text-pink-400',
    hoverBorder: 'hover:border-pink-400/50',
    hoverBg: 'hover:bg-pink-400/10',
  },
  {
    label: 'TikTok',
    handle: '@iamsaadrandhawa',
    href: 'https://tiktok.com/@iamsaadrandhawa',
    icon: <Music2 className="w-5 h-5" />,
    color: 'text-fuchsia-400',
    hoverBorder: 'hover:border-fuchsia-400/50',
    hoverBg: 'hover:bg-fuchsia-400/10',
  },
  {
    label: 'Facebook',
    handle: 'iamsaadrandhawa',
    href: 'https://facebook.com/iamsaadrandhawa',
    icon: <Facebook className="w-5 h-5" />,
    color: 'text-blue-500',
    hoverBorder: 'hover:border-blue-500/50',
    hoverBg: 'hover:bg-blue-500/10',
  },
];
/* ============================================================
   HERO SECTION
   ============================================================ */
const Hero = () => {
  const [flipped, setFlipped] = useState(false);
  const [shaking, setShaking] = useState(false);
  const shakeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const photoButtonRef = useRef<HTMLButtonElement | null>(null);
  const backButtonRef = useRef<HTMLButtonElement | null>(null);
  const focusAfterFlipRef = useRef(false);

  const stopShake = () => {
    if (shakeTimerRef.current !== null) {
      clearTimeout(shakeTimerRef.current);
      shakeTimerRef.current = null;
    }
    setShaking(false);
  };

  const startShake = () => {
    if (flipped || shaking || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setShaking(true);
    shakeTimerRef.current = setTimeout(() => {
      setShaking(false);
      shakeTimerRef.current = null;
    }, 1000);
  };

  const flipTo = (showSocials: boolean) => {
    stopShake();
    focusAfterFlipRef.current = true;
    setFlipped(showSocials);
  };

  useEffect(() => {
    if (!focusAfterFlipRef.current) return;
    focusAfterFlipRef.current = false;
    (flipped ? backButtonRef.current : photoButtonRef.current)?.focus({ preventScroll: true });
  }, [flipped]);

  useEffect(() => () => {
    if (shakeTimerRef.current !== null) clearTimeout(shakeTimerRef.current);
  }, []);
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-ink-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-70" aria-hidden="true" />
      <NetworkGraph className="opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 35%, rgba(34,211,238,0.10), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/[0.06] mb-6 animate-fade-rise">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-medium tracking-wide text-accent-200">
                Available for projects
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            >
              <span
                className="block animate-fade-rise"
                style={{ animationDelay: '0.1s', opacity: 0 }}
              >
                Hi, I'm <span className="text-accent-gradient">Saad</span>
              </span>
              <span
                className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-200 animate-fade-rise"
                style={{ animationDelay: '0.25s', opacity: 0 }}
              >
                <TypeWriter words={titles} />
              </span>
            </h1>
            <p
              className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 animate-fade-rise"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              I build scalable cross-platform apps with React Native and design
              resilient network infrastructure — fiber, Mikrotik, CCTV and IT
              operations. One engineer for both worlds.
            </p>
            <div
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-rise"
              style={{ animationDelay: '0.55s', opacity: 0 }}
              aria-label="Professional statistics"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div
              className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-rise"
              style={{ animationDelay: '0.7s', opacity: 0 }}
            >
              <a href="#contact" className="btn-primary group" aria-label="Contact Saad">
                Let's build something
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
              <a
                href="https://drive.google.com/file/d/1bF0dsGzxVg4eGRQl0TJAEE20ri0ztkKn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost group"
                aria-label="View Saad's resume"
              >
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
                Get Resume
              </a>
            </div>
          </div>
          {/* Photo + orbiting icon ring — FLIP CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative animate-fade-rise"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl pointer-events-none" aria-hidden="true" />
              <TechOrbit items={orbitItems} radius={172} duration={28} />
              {/* ============ FLIP CARD ============ */}
              <div
                className="relative z-10 w-72 h-80 sm:w-80 sm:h-96"
                style={{ perspective: '1200px' }}
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse' || event.pointerType === 'pen') startShake();
                }}
              >
                <div className={shaking ? 'hero-photo-shake h-full w-full' : 'h-full w-full'}>
                {/* Inner wrapper that rotates */}
                <div
                  className="hero-photo-rotator relative w-full h-full"
                  style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', transformStyle: 'preserve-3d', transition: 'transform 700ms ease' }}
                >
                  {/* ---------- FRONT (photo) ---------- */}
                  <button
                    ref={photoButtonRef}
                    type="button"
                    onClick={() => flipTo(true)}
                    aria-label="Rotate photo to show social links"
                    aria-hidden={flipped}
                    tabIndex={flipped ? -1 : 0}
                    className="absolute inset-0 block h-full w-full cursor-pointer rounded-2xl border border-white/10 bg-ink-850 p-0 overflow-hidden shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', pointerEvents: flipped ? 'none' : 'auto' }}
                  >
                    <img
                      src="/saadlogo.png"
                      alt="Saad Ali - Developer and Network Engineer"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                      fetchPriority="high"
                      draggable={false}
                    />
                    <span
                      className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {/* ONLINE tag */}
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur border border-white/10">
                      <Radio className="w-3 h-3 text-accent animate-pulse-signal" aria-hidden="true" />
                      <span className="text-[10px] font-medium text-slate-300 tracking-wide">
                        ONLINE
                      </span>
                    </span>
                    {/* Click hint */}
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur border border-white/10 opacity-90">
                      <span className="text-[10px] font-medium text-accent-200 tracking-wide">
                        Tap to see socials
                      </span>
                    </span>
                  </button>
                  {/* ---------- BACK (social links) ---------- */}
                  <div
                    className="absolute inset-0 rounded-2xl border border-accent/30 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 overflow-hidden shadow-card [backface-visibility:hidden]"
                    aria-hidden={!flipped}
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', pointerEvents: flipped ? 'auto' : 'none' }}
                  >
                    {/* Ambient glow */}
                    <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-fuchsia-500/10 blur-3xl pointer-events-none" />
                    <div className="relative h-full flex flex-col p-5">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-accent/80 font-semibold">
                            Connect with me
                          </div>
                          <div className="text-white text-sm font-semibold mt-0.5">
                            Saad Ali
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-accent/10 border border-accent/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-signal" />
                          <span className="text-[10px] font-medium text-accent-200">
                            ONLINE
                          </span>
                        </div>
                      </div>
                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3" />
                      {/* Socials list */}
                      <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto pr-1">
                        {socials.map((s) => (
                          <a
                            key={s.label}
                            tabIndex={flipped ? 0 : -1}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-200 ${s.hoverBorder} ${s.hoverBg} hover:translate-x-0.5`}
                          >
                            <span
                              className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.04] ${s.color}`}
                            >
                              {s.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="text-[12px] font-semibold text-white leading-tight">
                                {s.label}
                              </div>
                              <div className="text-[10px] text-slate-500 truncate mt-0.5">
                                {s.handle}
                              </div>
                            </div>
                            <ArrowRight
                              className={`w-4 h-4 ${s.color} opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all`}
                              aria-hidden="true"
                            />
                          </a>
                        ))}
                      </div>
                      {/* Flip back hint */}
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <button
                          ref={backButtonRef}
                          type="button"
                          tabIndex={flipped ? 0 : -1}
                          onClick={() => flipTo(false)}
                          className="w-full text-[10px] uppercase tracking-wider text-slate-500 hover:text-accent-200 transition-colors"
                        >
                          ← Back to photo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Keyframes */}
      <style>{`
        @keyframes heroPhotoShake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-3px) rotate(-0.7deg); }
          20%, 40%, 60%, 80% { transform: translateX(3px) rotate(0.7deg); }
        }
        .hero-photo-shake { animation: heroPhotoShake 1s ease-in-out 1; }
        @media (prefers-reduced-motion: reduce) {
          .hero-photo-shake { animation: none; }
          .hero-photo-rotator { transition: none !important; }
        }
        @keyframes armSwingLeft {
          0% { transform: rotate(-18deg); }
          100% { transform: rotate(18deg); }
        }
        @keyframes armSwingRight {
          0% { transform: rotate(18deg); }
          100% { transform: rotate(-18deg); }
        }
        @keyframes legSwingLeft {
          0% { transform: rotate(-14deg); }
          100% { transform: rotate(14deg); }
        }
        @keyframes legSwingRight {
          0% { transform: rotate(14deg); }
          100% { transform: rotate(-14deg); }
        }
        @keyframes robotBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
      `}</style>
    </section>
  );
};
export default Hero;