import {
  ArrowRight,
  Download,
  Github,
  Code,
  Smartphone,
  Globe,
  Linkedin,
  Radio,
  MapPin,
} from 'lucide-react';

import TypeWriter from './TypeWriter';
import NetworkGraph from './NetworkGraph';

const titles = [
  'Software Developer',
  'MERN Stack Developer',
  'Full-Stack Developer',
  'React Native Developer',
  'Network Engineer',
  'System Engineer',
  'IT Professional',
  'System Administrator',
];

const techCluster = [
  {
    icon: <Github className="w-5 h-5" />,
    label: 'Saad Randhawa on GitHub',
    href: 'https://github.com/iamsaadrandhawa',
  },
  {
    icon: <Code className="w-5 h-5" />,
    label: 'Development Skills',
    href: '#skills',
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    label: 'Mobile Development Projects',
    href: '#projects',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: 'Web Development Projects',
    href: '#projects',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'Saad Randhawa on LinkedIn',
    href: 'https://www.linkedin.com/in/iamsaadrandhawa',
  },
];

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '5+', label: 'Years Experience' },
  { value: '98%', label: 'Success' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-ink-900"
      aria-labelledby="hero-title"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-circuit bg-circuit-fade opacity-70"
        aria-hidden
      />

      <NetworkGraph className="opacity-60" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 35%, rgba(34,211,238,0.10), transparent 70%)',
        }}
        aria-hidden
      />

      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-900 pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* =================================================
              TEXT CONTENT
          ================================================== */}

          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/[0.06] mb-6 animate-fade-rise">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>

              <span className="text-xs font-medium tracking-wide text-accent-200">
                Available for software & IT projects
              </span>
            </div>

            {/* Primary identity */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
            >
              <span
                className="block animate-fade-rise"
                style={{
                  animationDelay: '0.1s',
                  opacity: 0,
                }}
              >
                Hi, I'm{' '}
                <span className="text-accent-gradient">
                  Saad Ali
                </span>
              </span>

              <span
                className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-200 animate-fade-rise"
                style={{
                  animationDelay: '0.25s',
                  opacity: 0,
                }}
              >
                <TypeWriter words={titles} />
              </span>
            </h1>

            {/* Professional name */}
            <p
              className="mt-4 text-sm sm:text-base text-slate-300 animate-fade-rise"
              style={{
                animationDelay: '0.32s',
                opacity: 0,
              }}
            >
              Professionally known as{' '}
              <strong className="font-semibold text-white">
                Saad Randhawa
              </strong>
            </p>

            {/* Location */}
            <div
              className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400 animate-fade-rise"
              style={{
                animationDelay: '0.36s',
                opacity: 0,
              }}
            >
              <MapPin
                className="w-4 h-4 text-accent"
                aria-hidden
              />

              <span>
                Shahkot, Punjab, Pakistan
              </span>
            </div>

            {/* Professional summary */}
            <p
              className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 animate-fade-rise"
              style={{
                animationDelay: '0.4s',
                opacity: 0,
              }}
            >
              Software developer and IT professional specializing in
              MERN stack development, React Native, computer networking,
              system administration, server infrastructure and modern
              IT solutions.
            </p>

            {/* Stats */}
            <div
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-rise"
              style={{
                animationDelay: '0.55s',
                opacity: 0,
              }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="text-xs text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-rise"
              style={{
                animationDelay: '0.7s',
                opacity: 0,
              }}
            >
              <a
                href="#contact"
                className="btn-primary group"
              >
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

                View Resume
              </a>
            </div>
          </div>

          {/* =================================================
              PROFILE IMAGE
          ================================================== */}

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative animate-fade-rise"
              style={{
                animationDelay: '0.5s',
                opacity: 0,
              }}
            >
              {/* Glow */}
              <div
                className="absolute -inset-6 rounded-3xl bg-accent/10 blur-2xl pointer-events-none"
                aria-hidden
              />

              {/* Image frame */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl border border-white/10 bg-ink-850 overflow-hidden shadow-card">

                <img
                  src="/saadlogo.png"
                  alt="Saad Ali, professionally known as Saad Randhawa, software developer and IT professional from Shahkot, Punjab, Pakistan"
                  className="w-full h-full object-cover object-top"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent"
                  aria-hidden
                />

                {/* Online indicator */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur border border-white/10">

                  <Radio
                    className="w-3 h-3 text-accent animate-pulse-signal"
                    aria-hidden
                  />

                  <span className="text-[10px] font-medium text-slate-300 tracking-wide">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Profile / development links */}
              <div className="mt-5 flex items-center justify-center gap-2.5">
                {techCluster.map((item) => {
                  const external = item.href.startsWith('http');

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={item.label}
                      title={item.label}
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-ink-850 text-slate-400 hover:text-accent hover:border-accent/40 transition-colors duration-200"
                    >
                      {item.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
