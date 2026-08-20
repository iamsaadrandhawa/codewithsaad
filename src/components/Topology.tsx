import { ReactNode } from 'react';

interface FiberLineProps {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

export const FiberLine = ({
  orientation = 'vertical',
  className = '',
}: FiberLineProps) => {
  const isVertical = orientation === 'vertical';
  return (
    <div
      className={`relative ${isVertical ? 'w-0.5' : 'h-0.5'} ${className}`}
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-gradient-to-${
          isVertical ? 'b' : 'r'
        } from-accent/50 via-accent/20 to-accent/50`}
      />
      <div
        className="absolute inset-0 animate-fiber-pulse"
        style={{
          background: isVertical
            ? 'linear-gradient(180deg, transparent 0%, rgba(34,211,238,0.7) 50%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.7) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
      />
    </div>
  );
};

interface SwitchNodeProps {
  ports?: number;
  icon?: ReactNode;
  className?: string;
}

export const SwitchNode = ({
  ports = 5,
  icon,
  className = '',
}: SwitchNodeProps) => (
  <div
    className={`relative z-10 flex items-center gap-1.5 rounded-md border border-white/15 bg-ink-800 px-2 py-1.5 shadow-glow-sm ${className}`}
  >
    {icon && <span className="text-accent shrink-0">{icon}</span>}
    <div className="flex items-center gap-1">
      {Array.from({ length: ports }).map((_, i) => (
        <span
          key={i}
          className="block w-1.5 h-1.5 rounded-full bg-accent animate-port-blink"
          style={{ animationDelay: `${(i * 0.3 + (i % 2) * 0.15).toFixed(2)}s` }}
        />
      ))}
    </div>
  </div>
);

interface DropConnectorProps {
  orientation?: 'vertical' | 'horizontal';
  length?: string;
  className?: string;
}

export const DropConnector = ({
  orientation = 'vertical',
  length = 'h-8',
  className = '',
}: DropConnectorProps) => {
  const isVertical = orientation === 'vertical';
  return (
    <div
      className={`${isVertical ? `${length} w-px` : `h-px ${length}`} ${className}`}
      style={{
        backgroundImage: isVertical
          ? 'repeating-linear-gradient(180deg, rgba(148,163,184,0.3) 0 4px, transparent 4px 7px)'
          : 'repeating-linear-gradient(90deg, rgba(148,163,184,0.3) 0 4px, transparent 4px 7px)',
      }}
      aria-hidden
    />
  );
};
