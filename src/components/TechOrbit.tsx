import { ReactNode } from 'react';

export interface OrbitItem {
  icon: ReactNode;
  href: string;
  label: string;
}

interface TechOrbitProps {
  items: OrbitItem[];
  radius?: number;
  duration?: number;
  className?: string;
}

/**
 * A ring of icons that orbits continuously around its center while each
 * icon itself stays upright (classic "counter-rotation" trick): the ring
 * spins via `animate-orbit-spin`, and each icon is wrapped in
 * `animate-orbit-spin-reverse` running at the same duration, canceling the
 * ring's rotation out so only the *position* moves.
 */
const TechOrbit = ({
  items,
  radius = 160,
  duration = 26,
  className = '',
}: TechOrbitProps) => {
  const step = 360 / items.length;

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}
      aria-hidden
    >
      <div
        className="relative animate-orbit-spin"
        style={{
          width: radius * 2,
          height: radius * 2,
          animationDuration: `${duration}s`,
        }}
      >
        {items.map((item, i) => {
          const angle = step * i;
          return (
            <div
              key={item.label}
              className="absolute top-1/2 left-1/2 w-0 h-0"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
              }}
            >
              <div
                className="animate-orbit-spin-reverse -ml-5 -mt-5 w-10 h-10"
                style={{ animationDuration: `${duration}s` }}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={item.label}
                  title={item.label}
                  className="pointer-events-auto flex w-10 h-10 items-center justify-center rounded-full border border-white/10 bg-ink-850/90 backdrop-blur text-slate-300 hover:text-accent hover:border-accent/40 hover:scale-110 transition-all duration-200 shadow-glow-sm"
                >
                  {item.icon}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechOrbit;
