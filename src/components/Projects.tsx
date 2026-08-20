import { Code2, Sparkles, Server } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { FiberLine, SwitchNode, DropConnector } from './Topology';

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

        <div className="relative">
          {/* Vertical fiber trunk */}
          <FiberLine
            orientation="vertical"
            className="absolute left-5 sm:left-6 top-0 bottom-0 h-full"
            cableIndex={1}
          />

          <div className="space-y-8 pl-14 sm:pl-20">
            {projects.map((project, i) => (
              <div key={project.title} className="relative">
                {/* Switch node on the trunk */}
                <div className="absolute -left-14 sm:-left-20 top-6 z-10">
                  <SwitchNode ports={4} icon={<Server className="w-3.5 h-3.5" />} portColorOffset={i} />
                </div>

                {/* Horizontal ethernet drop */}
                <div className="hidden sm:block absolute left-0 top-9 w-12 h-px">
                  <DropConnector orientation="horizontal" length="w-12" />
                </div>

                <Reveal delay={(i % 3) * 80}>
                  <ProjectCard {...project} />
                </Reveal>
              </div>
            ))}
          </div>
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
