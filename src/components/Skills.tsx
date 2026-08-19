import { ReactNode } from 'react';
import { Smartphone, Server, Palette, Wrench, Cpu } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The full stack, end to end"
          description="Specialized in mobile app development and full-stack technologies — paired with hands-on networking and infrastructure expertise."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 90}>
              <div className="card-surface card-surface-hover p-6 h-full group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent group-hover:border-accent/30 transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">{cat.title}</h3>
                </div>

                <div className="mt-4 accent-rule" />

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
          ))}
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
