import { Code2, Sparkles, Server } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { SwitchNode, DropConnector } from './Topology';

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
          {/* ===== CENTRAL VERTICAL FIBER TRUNK (RED GLOW) ===== */}
          {/* Outer glow */}
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[6px] rounded-full bg-red-500/30 blur-[6px]"
          />
          {/* Core wire */}
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-red-400 via-red-500 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.9)]"
          />
          {/* White inner pulse */}
          <div
            aria-hidden
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] rounded-full bg-white/80"
          />

          {/* Mobile trunk (left side) */}
          <div
            aria-hidden
            className="sm:hidden absolute left-5 -translate-x-1/2 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-red-400 via-red-500 to-red-400 shadow-[0_0_10px_rgba(239,68,68,0.9)]"
          />

          <div className="space-y-16 sm:space-y-24">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={project.title} className="relative">
                  {/* ===== NODE ON THE TRUNK ===== */}
                  <div className="absolute left-5 sm:left-1/2 top-6 -translate-x-1/2 z-30">
                    <SwitchNode
                      ports={4}
                      icon={<Server className="w-3.5 h-3.5" />}
                      portColorOffset={index}
                    />
                  </div>

                  <div
                    className={`flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                  >
                    {/* ===== HORIZONTAL DROP WIRE (RED) ===== */}
                    <div
                      aria-hidden
                      className={`hidden sm:block absolute top-[30px] z-10 h-[2px] rounded-full bg-gradient-to-r from-red-500 to-red-400/40 shadow-[0_0_8px_rgba(239,68,68,0.8)] ${
                        isLeft
                          ? 'right-1/2 mr-2 w-12 lg:w-20'
                          : 'left-1/2 ml-2 w-12 lg:w-20 bg-gradient-to-l from-red-500 to-red-400/40'
                      }`}
                    />
                    {/* White pulse line over the red drop */}
                    <div
                      aria-hidden
                      className={`hidden sm:block absolute top-[30px] z-10 h-[1px] bg-white/70 ${
                        isLeft
                          ? 'right-1/2 mr-2 w-12 lg:w-20'
                          : 'left-1/2 ml-2 w-12 lg:w-20'
                      }`}
                    />

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
