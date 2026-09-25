import { ReactNode } from 'react';
import {
  Code2, Globe, Server, Smartphone, Cpu, GitBranch, Database,
  LayoutGrid as Layout, Radio, ShieldCheck, Network, Wifi,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface Skill {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  kind: 'dev' | 'net';
  explain: string;
  explainUr: string;
}

const devSkills: Skill[] = [
  {
    title: 'Web Development',
    subtitle: 'React.js, Next.js, Tailwind CSS',
    description: 'Modern, responsive, high-performance web apps.',
    icon: <Layout className="w-5 h-5" />,
    kind: 'dev',
    explain:
      'Web Development. Saad builds modern, responsive, high performance websites using React dot J S, Next dot J S, and Tailwind CSS. He focuses on fast loading pages, smooth animations, mobile friendly layouts, and clean code architecture.',
    explainUr:
      'Web Development. Saad React dot J S, Next dot J S aur Tailwind CSS ka use kar ke modern, responsive aur tez raftaar wali websites banate hain. Unki tawajjo tez loading, smooth animations, mobile friendly layouts aur saaf code par hoti hai.',
  },
  {
    title: 'Mobile Development',
    subtitle: 'React Native, Expo',
    description: 'Cross-platform mobile apps with seamless UX.',
    icon: <Smartphone className="w-5 h-5" />,
    kind: 'dev',
    explain:
      'Mobile Development. Saad creates cross platform mobile apps using React Native and Expo. These apps run on both Android and i O S from a single codebase, with smooth animations, offline support, and native device features like camera, location, and notifications.',
    explainUr:
      'Mobile Development. Saad React Native aur Expo ka use kar ke cross platform mobile apps banate hain. Yeh apps ek hi code se Android aur i O S dono par chalti hain, smooth animations, offline support, aur camera, location aur notifications jaise native features ke saath.',
  },
  {
    title: 'Backend Development',
    subtitle: 'Node.js, Express, REST APIs',
    description: 'Secure, scalable backend systems and APIs.',
    icon: <Server className="w-5 h-5" />,
    kind: 'dev',
    explain:
      'Backend Development. Saad builds secure and scalable backend systems using Node dot J S, Express, and REST APIs. He designs authentication systems, database models, payment integrations, and real time features with WebSockets.',
    explainUr:
      'Backend Development. Saad Node dot J S, Express aur REST APIs ka use kar ke mehfooz aur scalable backend systems banate hain. Isme authentication, database models, payment integrations aur WebSockets ke zariye real time features shamil hain.',
  },
  {
    title: 'Database Systems',
    subtitle: 'MongoDB, MySQL, Firestore',
    description: 'Efficient data modeling and optimized queries.',
    icon: <Database className="w-5 h-5" />,
    kind: 'dev',
    explain:
      'Database Systems. Saad works with MongoDB, MySQL, and Firebase Firestore. He designs efficient data models, writes optimized queries, and ensures data integrity and backups across production systems.',
    explainUr:
      'Database Systems. Saad MongoDB, MySQL aur Firebase Firestore ke saath kaam karte hain. Woh behtar data models banate hain, optimized queries likhte hain aur production systems mein data ki hifazat aur backup yaqeeni banate hain.',
  },
];

const netSkills: Skill[] = [
  {
    title: 'Network Infrastructure',
    subtitle: 'Fiber, Routing, Mikrotik',
    description: 'Designing and managing resilient network topologies.',
    icon: <Network className="w-5 h-5" />,
    kind: 'net',
    explain:
      'Network Infrastructure. Saad designs and manages fiber optic networks, IP routing, and Mikrotik devices. He builds resilient topologies with redundancy, so internet service stays stable even when a link goes down.',
    explainUr:
      'Network Infrastructure. Saad fiber optic networks, I P routing aur Mikrotik devices design aur manage karte hain. Woh redundancy ke saath mazboot topologies banate hain taake kisi link ke band hone par bhi internet service stable rahe.',
  },
  {
    title: 'Security & Firewalls',
    subtitle: 'Firewalls, Access Control',
    description: 'Hardening infrastructure with secure access policies.',
    icon: <ShieldCheck className="w-5 h-5" />,
    kind: 'net',
    explain:
      'Security and Firewalls. Saad configures firewalls and access control rules to protect networks. He hardens infrastructure against attacks, blocks unauthorized traffic, and enforces secure access policies for users and devices.',
    explainUr:
      'Security aur Firewalls. Saad firewalls aur access control rules configure karte hain taake networks mehfooz rahen. Woh infrastructure ko attacks se bachate hain, ghair zaroori traffic block karte hain aur users aur devices ke liye secure access policies lagate hain.',
  },
  {
    title: 'Connectivity',
    subtitle: 'Switches, VLANs, WAN',
    description: 'Stable, monitored connectivity across sites.',
    icon: <Wifi className="w-5 h-5" />,
    kind: 'net',
    explain:
      'Connectivity. Saad manages switches, V LANs, and Wide Area Networks across multiple sites. He ensures stable, monitored connectivity with proper segmentation and traffic shaping for best performance.',
    explainUr:
      'Connectivity. Saad switches, V LANs aur Wide Area Networks ko multiple sites par manage karte hain. Woh stable aur monitored connectivity yaqeeni banate hain, sahi segmentation aur traffic shaping ke saath taake performance behtar rahe.',
  },
  {
    title: 'IT Operations',
    subtitle: 'CCTV, OS Setup, Support',
    description: 'End-to-end IT support and infrastructure maintenance.',
    icon: <Radio className="w-5 h-5" />,
    kind: 'net',
    explain:
      'I T Operations. Saad handles C C T V installation and monitoring, operating system setup, hardware troubleshooting, and end to end I T support. He keeps daily I T operations running smoothly for businesses.',
    explainUr:
      'I T Operations. Saad C C T V ki installation aur monitoring, operating system setup, hardware troubleshooting aur mukammal I T support sambhalte hain. Woh businesses ke rozana ke I T operations ko smoothly chalate hain.',
  },
];

const extraChips = [
  { icon: <Code2 className="w-4 h-4" />, label: 'Clean Code' },
  { icon: <Globe className="w-4 h-4" />, label: 'API Integration' },
  { icon: <GitBranch className="w-4 h-4" />, label: 'Version Control' },
  { icon: <Cpu className="w-4 h-4" />, label: 'Automation' },
];

/* ============ ORBITAL HUB ============ */
const OrbitHub = ({
  kind,
  centerLabel,
  centerIcon,
  skills,
}: {
  kind: 'dev' | 'net';
  centerLabel: string;
  centerIcon: ReactNode;
  skills: Skill[];
}) => {
  const isDev = kind === 'dev';
  const accentText = isDev ? 'text-accent' : 'text-signal-400';
  const accentBorder = isDev ? 'border-accent/40' : 'border-signal-400/40';
  const accentBg = isDev ? 'bg-accent/[0.08]' : 'bg-signal-400/[0.08]';
  const accentGlow = isDev
    ? 'shadow-[0_0_40px_rgba(34,211,238,0.35)]'
    : 'shadow-[0_0_40px_rgba(239,68,68,0.35)]';

  const positions = [
    { top: '0%', left: '50%', tx: '-50%', ty: '0%' },
    { top: '50%', left: '100%', tx: '-100%', ty: '-50%' },
    { top: '100%', left: '50%', tx: '-50%', ty: '-100%' },
    { top: '50%', left: '0%', tx: '0%', ty: '-50%' },
  ];

  const hubExplain = isDev
    ? 'Development Hub. This center covers Saad\'s software development skills: Web, Mobile, Backend, and Databases.'
    : 'Networking Hub. This center covers Saad\'s networking and IT skills: Infrastructure, Security, Connectivity, and IT Operations.';

  const hubExplainUr = isDev
    ? 'Development Hub. Yeh markaz Saad ki software development skills ko cover karta hai: Web, Mobile, Backend aur Databases.'
    : 'Networking Hub. Yeh markaz Saad ki networking aur I T skills ko cover karta hai: Infrastructure, Security, Connectivity aur I T Operations.';

  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      <div
        aria-hidden
        className={`absolute inset-[18%] rounded-full border border-dashed ${accentBorder} opacity-40`}
      />
      <div
        aria-hidden
        className={`absolute inset-[32%] rounded-full border ${accentBorder} opacity-20`}
      />
      <div
        aria-hidden
        className={`absolute inset-[18%] rounded-full border border-dashed ${accentBorder} opacity-30 animate-[spin_40s_linear_infinite]`}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          data-explain={hubExplain}
          data-explain-ur={hubExplainUr}
          className={`relative w-32 h-32 rounded-full border-2 ${accentBorder} ${accentBg} ${accentGlow} backdrop-blur-sm flex flex-col items-center justify-center gap-2 cursor-pointer`}
        >
          <span
            className={`absolute inset-0 rounded-full ${accentBorder} border animate-ping opacity-30`}
          />
          <div className={`${accentText}`}>{centerIcon}</div>
          <span
            className={`text-[11px] font-semibold tracking-widest uppercase ${accentText}`}
          >
            {centerLabel}
          </span>
        </div>
      </div>

      {skills.map((skill, i) => {
        const p = positions[i % positions.length];
        return (
          <div
            key={skill.title}
            className="absolute z-10 w-[42%] sm:w-[38%]"
            style={{
              top: p.top,
              left: p.left,
              transform: `translate(${p.tx}, ${p.ty})`,
            }}
          >
            <Reveal delay={i * 90}>
              <div
                data-explain={skill.explain}
                data-explain-ur={skill.explainUr}
                className={`group rounded-xl border ${accentBorder} bg-ink-900/80 backdrop-blur-md p-3 sm:p-4 hover:bg-ink-800/90 transition-all duration-300 hover:scale-[1.03] cursor-pointer`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`shrink-0 w-9 h-9 rounded-lg border ${accentBorder} ${accentBg} flex items-center justify-center ${accentText}`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-[13px] sm:text-sm font-semibold text-white leading-tight">
                    {skill.title}
                  </h3>
                </div>
                <p className="mt-2 text-[11px] text-slate-400 leading-snug line-clamp-2">
                  {skill.subtitle}
                </p>
              </div>
            </Reveal>
          </div>
        );
      })}

      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="0"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          className={accentText}
          opacity="0.35"
        />
        <line
          x1="50"
          y1="50"
          x2="100"
          y2="50"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          className={accentText}
          opacity="0.35"
        />
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          className={accentText}
          opacity="0.35"
        />
        <line
          x1="50"
          y1="50"
          x2="0"
          y2="50"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="2 2"
          className={accentText}
          opacity="0.35"
        />
      </svg>
    </div>
  );
};

/* ============ MAIN SECTION ============ */
const Summary = () => {
  return (
    <section className="py-24 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-30" aria-hidden />

      <div
        aria-hidden
        className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/3 right-1/4 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-signal-400/[0.06] blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Summary"
          title="Two disciplines, one engineer"
          description="Full-stack developer specializing in React Native and Node.js, with a strong background in IT networking — building scalable applications and managing secure, efficient infrastructure."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          <Reveal>
            <OrbitHub
              kind="dev"
              centerLabel="Development"
              centerIcon={<Code2 className="w-7 h-7" />}
              skills={devSkills}
            />
          </Reveal>

          <Reveal delay={140}>
            <OrbitHub
              kind="net"
              centerLabel="Networking"
              centerIcon={<Network className="w-7 h-7" />}
              skills={netSkills}
            />
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-20">
          <div className="flex flex-wrap justify-center gap-3">
            {extraChips.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-slate-300 hover:border-accent/30 hover:text-white transition-colors duration-200"
              >
                <span className="text-accent">{c.icon}</span>
                {c.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Summary;