import { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  icon?: ReactNode;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  icon,
}: SectionHeadingProps) => {
  const isCenter = align === 'center';
  return (
    <Reveal
      className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-5 ${
            isCenter ? '' : ''
          }`}
        >
          {icon && <span className="text-accent">{icon}</span>}
          <span className="text-xs font-medium tracking-wide text-slate-300 uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base text-slate-400 max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-5 h-px w-16 bg-gradient-to-r from-accent to-transparent ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </Reveal>
  );
};

export default SectionHeading;
