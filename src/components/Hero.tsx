import { ArrowRight, Download, Github, Code, Smartphone, Globe, Linkedin, Radio } from 'lucide-react';
import TypeWriter from './TypeWriter';
import NetworkGraph from './NetworkGraph';

const titles = [
  'MERN-Stack Developer',
  'React-Native Expert',
  'Network Engineer',
  'CS Lecturer',
];

const techCluster = [
  { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/iamsaadrandhawa' },
  { icon: <Code className="w-5 h-5" />, label: 'Code', href: 'https://code.visualstudio.com/' },
  { icon: <Smartphone className="w-5 h-5" />, label: 'Mobile', href: 'https://play.google.com/store' },
  { icon: <Globe className="w-5 h-5" />, label: 'Web', href: '#projects' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/iamsaadrandhawa' },
];

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '5+', label: 'Years Exp' },
  { value: '98%', label: 'Success' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-ink-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-70" aria-hidden />
      <NetworkGraph className="opacity-60" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 35%, rgba(34,211,238,0.10), transparent 70%)',
        }}
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900 pointer-events-none" aria-hidden />

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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              <span className="block animate-fade-rise" style={{ animationDelay: '0.1s', opacity: 0 }}>
                Hi, I'm{' '}
                <span className="text-accent-gradient">Saad</span>
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

            {/* Stats */}
            <div
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-rise"
              style={{ animationDelay: '0.55s', opacity: 0 }}
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-rise"
              style={{ animationDelay: '0.7s', opacity: 0 }}
            >
              <a href="#contact" className="btn-primary group">
                Let's build something
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1bF0dsGzxVg4eGRQl0TJAEE20ri0ztkKn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost group"
              >
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Get Resume
              </a>
            </div>
          </div>

          {/* Photo + icon cluster */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative animate-fade-rise" style={{ animationDelay: '0.5s', opacity: 0 }}>
              {/* Soft glow */}
              <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl pointer-events-none" aria-hidden />

              {/* Frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl border border-white/10 bg-ink-850 overflow-hidden shadow-card">
                <img
                  src="./saadali.png"
                  alt="Saad Ali — Developer & Network Engineer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" aria-hidden />

                {/* Signal tag */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur border border-white/10">
                  <Radio className="w-3 h-3 text-accent animate-pulse-signal" />
                  <span className="text-[10px] font-medium text-slate-300 tracking-wide">ONLINE</span>
                </div>
              </div>

              {/* Icon cluster below */}
              <div className="mt-5 flex items-center justify-center gap-2.5">
                {techCluster.map((t) => (
                  <a
                    key={t.label}
                    href={t.href}
                    target={t.href.startsWith('http') ? '_blank' : undefined}
                    rel={t.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={t.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-ink-850 text-slate-400 hover:text-accent hover:border-accent/40 transition-colors duration-200"
                  >
                    {t.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
