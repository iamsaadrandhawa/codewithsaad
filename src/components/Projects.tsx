import { Code2, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-25" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Featured Projects"
          description="A showcase of my mobile development journey and technical expertise."
          icon={<Sparkles className="w-3.5 h-3.5" />}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 90}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02]">
            <Code2 className="w-4 h-4 text-accent" />
            <span className="text-sm text-slate-400">
              Building innovative solutions with cutting-edge technologies and modern development practices
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
