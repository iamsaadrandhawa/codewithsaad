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
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="absolute left-5 sm:left-1/2 top-0 bottom-0 h-full sm:-translate-x-1/2"
            cableIndex={1}
          />

          <div className="space-y-16 sm:space-y-24">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={project.title} className="relative">
                  {/* Switch node on the trunk */}
                  <div className="absolute left-5 sm:left-1/2 top-6 -translate-x-1/2 z-20">
                    <SwitchNode
                      ports={4}
                      icon={<Server className="w-3.5 h-3.5" />}
                      portColorOffset={index}
                    />
                  </div>

                  {/* Mobile: card below node | Desktop: alternating sides with drop line */}
                  <div
                    className={`flex ${
                      isLeft ? 'sm:justify-start' : 'sm:justify-end'
                    }`}
                  >
                    {/* Horizontal drop connector (desktop only) */}
                    <div
                      className={`hidden sm:flex absolute top-9 z-10 items-center ${
                        isLeft ? 'right-1/2 mr-5' : 'left-1/2 ml-5'
                      }`}
                    >
                      <DropConnector orientation="horizontal" length="w-16 lg:w-24" />
                    </div>

                    <Reveal
                      className={`w-full pl-16 sm:pl-0 sm:w-[calc(50%-3rem)] ${
                        isLeft ? 'sm:pr-12 lg:pr-16' : 'sm:pl-12 lg:pl-16'
                      }`}
                      delay={(index % 3) * 80}
                    >
                      <ProjectCard {...project} />
                    </Reveal>
                  </div>
                </div>
              );
            })}
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
