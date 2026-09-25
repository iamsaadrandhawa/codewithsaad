import { Code2, Sparkles, Server } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FiberLine, SwitchNode, DropConnector } from './Topology';

const Projects = () => {
  // Split projects into left and right columns
  const leftProjects = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 === 1);

  return (
    <section id="projects" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-circuit bg-circuit-fade opacity-25" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Featured Projects"
          description="A showcase of my development journey and technical expertise."
          icon={<Sparkles className="w-3.5 h-3.5" />}
        />

        <div className="relative mt-16">
          {/* Central vertical fiber trunk */}
          <FiberLine
            orientation="vertical"
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 h-full hidden md:block"
            cableIndex={1}
          />

          {/* Top splitter node */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-6 z-20">
            <SwitchNode ports={4} icon={<Server className="w-4 h-4" />} portColorOffset={0} />
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-10">
            {/* Left column */}
            <div className="space-y-10">
              {leftProjects.map((project, i) => (
                <div key={project.title} className="relative">
                  {/* Horizontal drop line to center (points right) */}
                  <div className="hidden md:block absolute -right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-10">
                    <DropConnector orientation="horizontal" length="w-8 lg:w-12" />
                  </div>

                  {/* Small connector node on the card side */}
                  <div className="hidden md:flex absolute -right-10 lg:-right-14 top-1/2 -translate-y-1/2 z-10">
                    <SwitchNode ports={2} icon={<Server className="w-3 h-3" />} portColorOffset={i + 1} />
                  </div>

                  <Reveal delay={(i % 3) * 80}>
                    <ProjectCard {...project} />
                  </Reveal>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-10 md:mt-24">
              {rightProjects.map((project, i) => (
                <div key={project.title} className="relative">
                  {/* Horizontal drop line to center (points left) */}
                  <div className="hidden md:block absolute -left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-10">
                    <DropConnector orientation="horizontal" length="w-8 lg:w-12" />
                  </div>

                  {/* Small connector node on the card side */}
                  <div className="hidden md:flex absolute -left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-10">
                    <SwitchNode ports={2} icon={<Server className="w-3 h-3" />} portColorOffset={i + 2} />
                  </div>

                  <Reveal delay={(i % 3) * 80}>
                    <ProjectCard {...project} />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom splitter node */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-6 z-20">
            <SwitchNode ports={4} icon={<Server className="w-4 h-4" />} portColorOffset={3} />
          </div>
        </div>

        <Reveal delay={200} className="mt-20">
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
