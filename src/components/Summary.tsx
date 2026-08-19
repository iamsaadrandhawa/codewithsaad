import { ReactNode } from 'react';
import { Code2, Globe, Server, Smartphone, Cpu, GitBranch, Database, LayoutGrid as Layout, Radio, ShieldCheck, Network, Wifi } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface Skill {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  kind: 'dev' | 'net';
}

const devSkills: Skill[] = [
  {
    title: 'Web Development',
    subtitle: 'React.js, Next.js, Tailwind CSS',
    description: 'Modern, responsive, high-performance web apps.',
    icon: <Layout className="w-6 h-6" />,
    kind: 'dev',
  },
  {
    title: 'Mobile Development',
    subtitle: 'React Native, Expo',
    description: 'Cross-platform mobile apps with seamless UX.',
    icon: <Smartphone className="w-6 h-6" />,
    kind: 'dev',
  },
  {
    title: 'Backend Development',
    subtitle: 'Node.js, Express, REST APIs',
    description: 'Secure, scalable backend systems and APIs.',
    icon: <Server className="w-6 h-6" />,
    kind: 'dev',
  },
  {
    title: 'Database Systems',
    subtitle: 'MongoDB, MySQL, Firestore',
    description: 'Efficient data modeling and optimized queries.',
    icon: <Database className="w-6 h-6" />,
    kind: 'dev',
  },
];

const netSkills: Skill[] = [
  {
    title: 'Network Infrastructure',
    subtitle: 'Fiber, Routing, Mikrotik',
    description: 'Designing and managing resilient network topologies.',
    icon: <Network className="w-6 h-6" />,
    kind: 'net',
  },
  {
    title: 'Security & Firewalls',
    subtitle: 'Firewalls, Access Control',
    description: 'Hardening infrastructure with secure access policies.',
    icon: <ShieldCheck className="w-6 h-6" />,
    kind: 'net',
  },
  {
    title: 'Connectivity',
    subtitle: 'Switches, VLANs, WAN',
    description: 'Stable, monitored connectivity across sites.',
    icon: <Wifi className="w-6 h-6" />,
    kind: 'net',
  },
  {
    title: 'IT Operations',
    subtitle: 'CCTV, OS Setup, Support',
    description: 'End-to-end IT support and infrastructure maintenance.',
    icon: <Radio className="w-6 h-6" />,
    kind: 'net',
  },
];

const extraChips = [
  { icon: <Code2 className="w-4 h-4" />, label: 'Clean Code' },
  { icon: <Globe className="w-4 h-4" />, label: 'API Integration' },
  { icon: <GitBranch className="w-4 h-4" />, label: 'Version Control' },
  { icon: <Cpu className="w-4 h-4" />, label: 'Automation' },
];

const SkillCard = ({ skill }: { skill: Skill }) => {
  const accent = skill.kind === 'dev' ? 'text-accent' : 'text-signal-400';
  return (
    <div className="card-surface card-surface-hover p-5 h-full group">
      <div className="flex items-start gap-4">
        <div
          className={`shrink-0 w-11 h-11 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center ${accent} group-hover:border-accent/30 transition-colors duration-300`}
        >
          {skill.icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white">{skill.title}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{skill.subtitle}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-400 leading-relaxed">
        {skill.description}
      </p>
      <div className="mt-4 accent-rule" />
    </div>
  );
};

const Summary = () => {
  return (
    <section className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-30" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Professional Summary"
          title="Two disciplines, one engineer"
          description="Full-stack developer specializing in React Native and Node.js, with a strong background in IT networking — building scalable applications and managing secure, efficient infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Development
              </span>
              <span className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {devSkills.map((s) => (
                <SkillCard key={s.title} skill={s} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-signal-400 uppercase">
                Networking
              </span>
              <span className="flex-1 h-px bg-gradient-to-r from-signal-400/40 to-transparent" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {netSkills.map((s) => (
                <SkillCard key={s.title} skill={s} />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Extra chips */}
        <Reveal delay={200} className="mt-10">
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
