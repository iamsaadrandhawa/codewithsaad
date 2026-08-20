import { ReactNode } from 'react';

const PORT_COLORS = [
  '#22D3EE', // cyan
  '#818CF8', // violet
  '#34D399', // emerald
  '#FBBF24', // amber
  '#F472B6', // rose
  '#60A5FA', // blue
];

const CABLE_COLORS = [
  { jacket: '#0E7490', glow: 'rgba(34,211,238,0.7)', pulse: 'rgba(34,211,238,0.8)' },
  { jacket: '#4338CA', glow: 'rgba(129,140,248,0.6)', pulse: 'rgba(129,140,248,0.8)' },
  { jacket: '#047857', glow: 'rgba(52,211,153,0.6)', pulse: 'rgba(52,211,153,0.8)' },
];

interface FiberLineProps {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
  cableIndex?: number;
}

export const FiberLine = ({
  orientation = 'vertical',
  className = '',
  cableIndex = 0,
}: FiberLineProps) => {
  const isVertical = orientation === 'vertical';
  const cable = CABLE_COLORS[cableIndex % CABLE_COLORS.length];

  return (
    <div
      className={`relative ${isVertical ? 'w-1' : 'h-1'} ${className}`}
      aria-hidden
    >
      {/* Outer cable jacket — subtle dark sheath */}
      <div
        className={`absolute inset-0 rounded-full`}
        style={{ background: cable.jacket, opacity: 0.35 }}
      />
      {/* Inner core — brighter fiber line */}
      <div
        className={`absolute inset-0.5 rounded-full bg-gradient-to-${
          isVertical ? 'b' : 'r'
        }`}
        style={{
          background: `linear-gradient(${isVertical ? '180deg' : '90deg'}, ${cable.glow}, ${cable.glow})`,
          opacity: 0.5,
        }}
      />
      {/* Traveling light pulse */}
      <div
        className="absolute inset-0 rounded-full animate-fiber-pulse"
        style={{
          background: isVertical
            ? `linear-gradient(180deg, transparent 0%, ${cable.pulse} 50%, transparent 100%)`
            : `linear-gradient(90deg, transparent 0%, ${cable.pulse} 50%, transparent 100%)`,
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
  portColorOffset?: number;
}

export const SwitchNode = ({
  ports = 5,
  icon,
  className = '',
  portColorOffset = 0,
}: SwitchNodeProps) => (
  <div
    className={`relative z-10 flex items-center gap-1.5 rounded-md border border-white/15 bg-ink-800 px-2 py-1.5 shadow-glow-sm ${className}`}
  >
    {icon && <span className="text-accent shrink-0">{icon}</span>}
    <div className="flex items-center gap-1">
      {Array.from({ length: ports }).map((_, i) => {
        const color = PORT_COLORS[(i + portColorOffset) % PORT_COLORS.length];
        return (
          <span
            key={i}
            className="block w-1.5 h-1.5 rounded-full animate-port-blink"
            style={{
              backgroundColor: color,
              animationDelay: `${(i * 0.3 + (i % 2) * 0.15).toFixed(2)}s`,
              boxShadow: `0 0 4px ${color}80`,
            }}
          />
        );
      })}
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


export { SwitchNode, DropConnector, FiberLine }