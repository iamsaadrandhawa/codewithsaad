import { ReactNode, useState } from 'react';
import {
  Smartphone, Server, Palette, Wrench, Cpu,
  Circle, FileCode2, Folder, ChevronRight, Terminal, Network,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

interface Category {
  id: string;
  filename: string;
  title: string;
  icon: ReactNode;
  skills: string[];
  color: string;
  explain: string;
  explainUr: string;
}

const skillCategories: Category[] = [
  {
    id: 'mobile',
    filename: 'mobile.tsx',
    title: 'Mobile Development',
    icon: <Smartphone className="w-3.5 h-3.5" />,
    skills: ['React Native', 'iOS', 'Android', 'Expo', 'Native Modules', 'App Store Connect'],
    color: 'text-sky-400',
    explain:
      'Mobile Development. Saad builds cross platform mobile apps with React Native and Expo. His stack includes native modules for i O S and Android, and he handles the full publishing flow through App Store Connect. Apps are smooth, offline capable, and take advantage of device features like camera, location, and notifications.',
    explainUr:
      'Mobile Development. Saad React Native aur Expo ke saath cross platform mobile apps banate hain. Unke stack mein i O S aur Android ke native modules shamil hain, aur woh App Store Connect ke zariye poori publishing handle karte hain. Apps smooth, offline capable hoti hain aur camera, location aur notifications jaise device features use karti hain.',
  },
  {
    id: 'frontend',
    filename: 'frontend.tsx',
    title: 'Frontend',
    icon: <Palette className="w-3.5 h-3.5" />,
    skills: ['React.js', 'TypeScript', 'Redux', 'React Navigation', 'Reanimated'],
    color: 'text-violet-400',
    explain:
      'Frontend. Saad works with React dot J S and TypeScript to build fast, type safe user interfaces. He uses Redux for state management, React Navigation for routing, and Reanimated for smooth 60 frames per second animations.',
    explainUr:
      'Frontend. Saad React dot J S aur TypeScript ke saath tez aur type safe user interfaces banate hain. Woh state management ke liye Redux, routing ke liye React Navigation aur smooth 60 F P S animations ke liye Reanimated use karte hain.',
  },
  {
    id: 'backend',
    filename: 'backend.ts',
    title: 'Backend',
    icon: <Server className="w-3.5 h-3.5" />,
    skills: ['Node.js', 'Express', 'Mongoose', 'GraphQL', 'REST APIs', 'WebSockets'],
    color: 'text-emerald-400',
    explain:
      'Backend. Saad builds secure backends with Node dot J S and Express. He works with Mongoose for MongoDB modelling, GraphQL and REST A P Is for data access, and WebSockets for real time features like chat and live updates.',
    explainUr:
      'Backend. Saad Node dot J S aur Express ke saath mehfooz backends banate hain. Woh MongoDB modelling ke liye Mongoose, data access ke liye GraphQL aur REST A P Is, aur chat aur live updates jaise real time features ke liye WebSockets use karte hain.',
  },
  {
    id: 'network',
    filename: 'network.ts',
    title: 'Networking & IT',
    icon: <Network className="w-3.5 h-3.5" />,
    skills: [
      'Fiber Optic',
      'Mikrotik',
      'Cisco Routing',
      'Firewalls',
      'VLANs',
      'CCTV / NVR',
      'Switches',
      'VLAN Design',
      'Network Security',
      'OS Setup',
    ],
    color: 'text-red-400',
    explain:
      'Networking and I T. Saad has hands on experience with fiber optic networks, Mikrotik routers, Cisco routing, firewalls, V LANs, switches, C C T V and N V R systems, network security, and operating system setup. He designs and maintains reliable network infrastructure for businesses and I S Ps.',
    explainUr:
      'Networking aur I T. Saad ko fiber optic networks, Mikrotik routers, Cisco routing, firewalls, V LANs, switches, C C T V aur N V R systems, network security aur operating system setup ka amli tajurba hai. Woh businesses aur I S Ps ke liye mazboot network infrastructure design aur maintain karte hain.',
  },
  {
    id: 'devops',
    filename: 'devops.yml',
    title: 'Tools & DevOps',
    icon: <Wrench className="w-3.5 h-3.5" />,
    skills: ['Git', 'CI/CD', 'Fastlane', 'Jest', 'Firebase', 'AWS'],
    color: 'text-amber-400',
    explain:
      'Tools and DevOps. Saad uses Git for version control, C I and C D pipelines for automated deployment, Fastlane for mobile release automation, Jest for testing, Firebase for backend services, and A W S for cloud hosting.',
    explainUr:
      'Tools aur DevOps. Saad version control ke liye Git, automated deployment ke liye C I aur C D pipelines, mobile release automation ke liye Fastlane, testing ke liye Jest, backend services ke liye Firebase aur cloud hosting ke liye A W S use karte hain.',
  },
];

const Skills = () => {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <section id="skills" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-20" aria-hidden />

      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/[0.05] blur-3xl rounded-full pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The full stack, end to end"
          description="Specialized in mobile app development and full-stack technologies — paired with hands-on networking and infrastructure expertise."
        />

        <Reveal className="mt-16">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0b1020] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm">

            {/* Top bar */}
            <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-[11px] font-mono text-slate-500">
                  ~/portfolio/skills — {active.filename}
                </span>
              </div>
              <Terminal className="w-3.5 h-3.5 text-slate-600" />
            </div>

            {/* Tab strip */}
            <div className="flex items-center border-b border-white/10 bg-black/20 overflow-x-auto">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 border-r border-white/10 text-slate-500 shrink-0">
                <Folder className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono">src</span>
              </div>

              {skillCategories.map((cat) => {
                const isActive = cat.id === activeId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveId(cat.id)}
                    data-explain={cat.explain}
                    data-explain-ur={cat.explainUr}
                    className={`group relative flex items-center gap-2 px-4 py-2.5 border-r border-white/10 text-[12px] font-mono whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#0b1020] text-white'
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className={isActive ? cat.color : ''}>{cat.icon}</span>
                    <span>{cat.filename}</span>
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-px ${cat.color.replace('text-', 'bg-')}`}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] min-h-[420px]">
              {/* Sidebar */}
              <aside className="hidden md:block border-r border-white/10 bg-black/10 p-3 text-[12px] font-mono">
                <div className="text-slate-500 uppercase tracking-wider text-[10px] mb-2 px-2">
                  Explorer
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 px-2 py-1 text-slate-400">
                    <ChevronRight className="w-3 h-3 rotate-90" />
                    <Folder className="w-3.5 h-3.5 text-sky-400" />
                    <span>components</span>
                  </div>
                  {skillCategories.map((cat) => {
                    const isActive = cat.id === activeId;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveId(cat.id)}
                        data-explain={cat.explain}
                        data-explain-ur={cat.explainUr}
                        className={`w-full flex items-center gap-1.5 px-2 py-1 pl-6 rounded text-left transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-white/[0.06] text-white'
                            : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]'
                        }`}
                      >
                        <FileCode2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? cat.color : ''}`} />
                        <span className="truncate">{cat.filename}</span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Code area */}
              <div
                className="relative overflow-hidden pb-8"
                data-explain={active.explain}
                data-explain-ur={active.explainUr}
              >
                <div className="flex">
                  <div className="select-none py-4 px-3 text-right text-[12px] font-mono leading-7 text-slate-600 bg-black/20 border-r border-white/[0.05]">
                    {active.skills.map((_, i) => (
                      <div key={i}>{String(i + 1).padStart(2, '0')}</div>
                    ))}
                    <div>{String(active.skills.length + 1).padStart(2, '0')}</div>
                  </div>

                  <div className="flex-1 py-4 px-5 font-mono text-[13px] leading-7 overflow-x-auto">
                    <div className="text-slate-500">
                      <span className="text-slate-600">{'// '}</span>
                      <span className={active.color}>{active.title}</span>
                      <span className="text-slate-600"> — stack.ts</span>
                    </div>

                    <div className="h-7" />

                    <div className="text-slate-300">
                      <span className="text-pink-400">const</span>{' '}
                      <span className="text-sky-300">stack</span>{' '}
                      <span className="text-slate-400">=</span>{' '}
                      <span className="text-yellow-300">[</span>
                    </div>

                    {active.skills.map((skill, i) => (
                      <div
                        key={`${activeId}-${skill}`}
                        className="group/line flex items-center gap-2 hover:bg-white/[0.03] rounded px-1 -mx-1 transition-colors"
                        style={{
                          animation: `fadeSlideIn 400ms ease-out ${i * 60}ms both`,
                        }}
                      >
                        <span className="text-slate-500 select-none">{'  '}</span>
                        <span className="text-emerald-400">"</span>
                        <span className="text-amber-200">{skill}</span>
                        <span className="text-emerald-400">"</span>
                        {i < active.skills.length - 1 && (
                          <span className="text-slate-500">,</span>
                        )}
                        <span className="text-slate-600 italic opacity-0 group-hover/line:opacity-100 transition-opacity duration-200">
                          {' // '}#{i + 1}
                        </span>
                      </div>
                    ))}

                    <div className="text-yellow-300">
                      <span>{']'}</span>
                      <span className="text-slate-400">;</span>
                    </div>

                    <div className="mt-2 flex items-center gap-1 text-slate-500">
                      <span
                        className={`w-2 h-4 ${active.color.replace('text-', 'bg-')} animate-pulse`}
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/30 text-[10px] font-mono text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Circle className={`w-2 h-2 fill-current ${active.color}`} />
                      {active.skills.length} items
                    </span>
                    <span className="hidden sm:inline">UTF-8</span>
                    <span className="hidden sm:inline">LF</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{active.id === 'network' ? 'Network Config' : 'TypeScript'}</span>
                    <span className={active.color}>●</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02]">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm text-slate-400">
              Continuously learning and adapting to new technologies and development practices
            </span>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;