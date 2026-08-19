import { Github, Smartphone, Globe } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  appStoreLink?: string;
  playStoreLink?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
  appStoreLink,
  playStoreLink,
}: ProjectCardProps) => {
  return (
    <div className="card-surface card-surface-hover flex flex-col h-full overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/40 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-ink-950/70 backdrop-blur border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-signal" />
          <span className="text-[10px] font-medium text-slate-300 tracking-wide">
            LIVE
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2.5 text-sm text-slate-400 leading-relaxed flex-1">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center flex-1 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:border-accent/40 hover:text-white text-xs transition-colors duration-200"
            >
              <Github className="w-3.5 h-3.5 mr-2" />
              Code
            </a>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center flex-1 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:border-accent/40 hover:text-white text-xs transition-colors duration-200"
              >
                <Globe className="w-3.5 h-3.5 mr-2" />
                Demo
              </a>
            )}
          </div>
          {(appStoreLink || playStoreLink) && (
            <div className="flex items-center gap-2.5">
              {appStoreLink && (
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center flex-1 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:border-accent/40 hover:text-white text-xs transition-colors duration-200"
                >
                  <Smartphone className="w-3.5 h-3.5 mr-2" />
                  App Store
                </a>
              )}
              {playStoreLink && (
                <a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center flex-1 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:border-accent/40 hover:text-white text-xs transition-colors duration-200"
                >
                  <Smartphone className="w-3.5 h-3.5 mr-2" />
                  Play Store
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
