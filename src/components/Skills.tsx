import { ReactNode } from 'react';
import { Smartphone, Server, Palette, Wrench, Cpu, Router } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FiberLine, SwitchNode, DropConnector } from './Topology';

interface Category {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const skillCategories: Category[] = [
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-5 h-5" />,
    skills: ['React Native', 'iOS', 'Android', 'Expo', 'Native Modules', 'App Store Connect'],
  },
  {
    title: 'Frontend',
    icon: <Palette className="w-5 h-5" />,
    skills: ['React.js', 'TypeScript', 'Redux', 'React Navigation', 'Reanimated'],
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5" />,
    skills: ['Node.js', 'Express', 'Mongoose', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench className="w-5 h-5" />,
    skills: ['Git', 'CI/CD', 'Fastlane', 'Jest', 'Firebase', 'AWS'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-20" aria-hidden />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The full stack, end to end"
          description="Specialized in mobile app development and full-stack technologies — paired with hands-on networking and infrastructure expertise."
        />

        <div className="relative">
          {/* Vertical fiber trunk */}
          <FiberLine
            orientation="vertical"
            className="absolute left-5 sm:left-6 top-0 bottom-0 h-full"
            cableIndex={2}
          />

          <div className="space-y-8 pl-14 sm:pl-20">
            {skillCategories.map((cat, i) => (
              <div key={cat.title} className="relative">
                {/* Switch node on the trunk */}
                <div className="absolute -left-14 sm:-left-20 top-0 z-10">
                  <SwitchNode ports={5} icon={<Router className="w-3.5 h-3.5" />} portColorOffset={i} />
                </div>

                {/* Horizontal ethernet drop */}
                <div className="hidden sm:block absolute left-0 top-4 w-12 h-px">
                  <DropConnector orientation="horizontal" length="w-12" />
                </div>

                <Reveal delay={i * 90}>
                  <div className="card-surface card-surface-hover p-6 group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent group-hover:border-accent/30 transition-colors duration-300">
                        {cat.icon}
                      </div>
                      <h3 className="text-base font-semibold text-white">{cat.title}</h3>
                    </div>

                    <div className="mt-4 accent-rule" />

                    {/* Skills as ethernet endpoint chips */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300 hover:border-accent/30 hover:text-white transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02]">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm text-slate-400">
              Continuously learning and adapting to new technologies and development practices
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
