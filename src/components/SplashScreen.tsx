import { useEffect, useRef, useState } from 'react';
import {
  Laptop,
  Smartphone,
  Server,
  Router,
  ShieldCheck,
  Database,
  Cpu,
  Wifi,
} from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

// Evenly spaced around the FULL circle (45° apart) — not just one side.
const devices = [
  { icon: Laptop, label: 'Client', angle: -90, color: '#22D3EE' },
  { icon: Smartphone, label: 'Mobile', angle: -45, color: '#818CF8' },
  { icon: Server, label: 'Server', angle: 0, color: '#34D399' },
  { icon: Database, label: 'Data', angle: 45, color: '#F97316' },
  { icon: Router, label: 'Network', angle: 90, color: '#FBBF24' },
  { icon: ShieldCheck, label: 'Security', angle: 135, color: '#F472B6' },
  { icon: Cpu, label: 'Compute', angle: 180, color: '#2DD4BF' },
  { icon: Wifi, label: 'Signal', angle: 225, color: '#60A5FA' },
];

const bits = [
  { left: '8%', delay: '0s', duration: '7s', symbol: '01' },
  { left: '18%', delay: '1.4s', duration: '9s', symbol: '{ }' },
  { left: '30%', delay: '0.6s', duration: '8s', symbol: '10' },
  { left: '68%', delay: '2s', duration: '7.5s', symbol: '</>' },
  { left: '80%', delay: '0.9s', duration: '8.5s', symbol: '01' },
  { left: '92%', delay: '1.8s', duration: '9.5s', symbol: '10' },
];

const RADIUS = 142;
const CENTER = 170;
const STEP_MS = 320;
const START_DELAY = 350;

const point = (angleDeg: number) => {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER + RADIUS * Math.sin(rad),
  };
};

interface TravelBot {
  id: string;
  sx: number;
  sy: number;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [stage, setStage] = useState(0);
  const [fading, setFading] = useState(false);
  const [robots, setRobots] = useState<TravelBot[]>([]);
  const finishedRef = useRef(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
      const t = setTimeout(finish, 450);
      return () => clearTimeout(t);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    devices.forEach((_, i) => {
      timers.push(
        setTimeout(() => setStage(i + 1), START_DELAY + i * STEP_MS)
      );
    });
    timers.push(
      setTimeout(
        () => setStage(devices.length + 1),
        START_DELAY + devices.length * STEP_MS + 500
      )
    );
    timers.push(
      setTimeout(finish, START_DELAY + devices.length * STEP_MS + 1700)
    );

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fire a one-shot "robot" that visibly travels the wire from a device
  // to the center the instant that device connects.
  useEffect(() => {
    if (stage >= 1 && stage <= devices.length) {
      const d = devices[stage - 1];
      const p = point(d.angle);
      const id = `${d.label}-${stage}`;
      setRobots((r) => [...r, { id, sx: p.x, sy: p.y }]);
      const t = setTimeout(() => {
        setRobots((r) => r.filter((rb) => rb.id !== id));
      }, 950);
      return () => clearTimeout(t);
    }
  }, [stage]);

  function finish() {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setFading(true);
    setTimeout(onComplete, 550);
  }

  const totalStages = devices.length + 1;
  const progress = Math.min(100, Math.round((stage / totalStages) * 100));
  const allConnected = stage > devices.length;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink-950 overflow-hidden transition-[opacity,transform,filter] duration-500 ${
        fading
          ? 'opacity-0 scale-105 blur-sm pointer-events-none'
          : 'opacity-100 scale-100 blur-0'
      }`}
      role="status"
      aria-label="Loading site"
    >
      <style>{`
        @keyframes splashRobotTravel {
          0%   { left: var(--sx); top: var(--sy); opacity: 1; transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          80%  { opacity: 1; }
          100% { left: var(--ex); top: var(--ey); opacity: 0; transform: translate(-50%, -50%) rotate(340deg) scale(0.55); }
        }
        .splash-robot {
          position: absolute;
          font-size: 17px;
          line-height: 1;
          pointer-events: none;
          will-change: left, top, transform, opacity;
          animation: splashRobotTravel 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.6));
        }
        @keyframes splashRobotLoop {
          0%   { transform: translate(0, 0) scale(0.9); opacity: 0; }
          12%  { opacity: 1; }
          88%  { opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) scale(0.5); opacity: 0; }
        }
        .splash-robot-loop {
          position: absolute;
          left: var(--sx);
          top: var(--sy);
          font-size: 14px;
          line-height: 1;
          pointer-events: none;
          transform: translate(-50%, -50%);
          animation: splashRobotLoop var(--dur, 2.2s) linear infinite;
          animation-delay: var(--delay, 0s);
        }
        @keyframes splashSpin { to { transform: rotate(360deg); } }
        .splash-spin { animation: splashSpin 7s linear infinite; }
        .splash-spin-slow { animation: splashSpin 11s linear infinite reverse; }
        @keyframes splashPulseRing {
          0%   { transform: scale(0.55); opacity: 0.55; }
          100% { transform: scale(2); opacity: 0; }
        }
        .splash-pulse-ring { animation: splashPulseRing 2.6s ease-out infinite; }
        @keyframes splashFloatUp {
          0%   { transform: translateY(0); opacity: 0; }
          12%  { opacity: 0.45; }
          100% { transform: translateY(-46vh); opacity: 0; }
        }
        .splash-bit { animation: splashFloatUp linear infinite; }
      `}</style>

      {/* Background layers */}
      <div
        className="absolute inset-0 bg-circuit bg-circuit-fade opacity-30"
        aria-hidden
      />

      {/* Floating binary / code particles */}
      {bits.map((b, i) => (
        <span
          key={i}
          className="splash-bit absolute bottom-0 text-accent/20 text-xs font-mono select-none"
          style={{ left: b.left, animationDelay: b.delay, animationDuration: b.duration }}
          aria-hidden
        >
          {b.symbol}
        </span>
      ))}

      <div className="relative flex flex-col items-center px-6">
        {/* Network sync diagram */}
        <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
          {/* Radar sweep */}
          <div
            className="absolute inset-0 rounded-full splash-spin opacity-70"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,0.35) 26deg, transparent 70deg)',
            }}
            aria-hidden
          />
          <div
            className="absolute inset-8 rounded-full splash-spin-slow opacity-40"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, rgba(129,140,248,0.3) 20deg, transparent 60deg)',
            }}
            aria-hidden
          />

          <svg
            viewBox="0 0 340 340"
            className="absolute inset-0 w-full h-full overflow-visible"
          >
            {devices.map((d, i) => {
              const p = point(d.angle);
              const connected = stage > i;
              return (
                <line
                  key={d.label}
                  x1={p.x}
                  y1={p.y}
                  x2={CENTER}
                  y2={CENTER}
                  stroke={d.color}
                  strokeWidth={1.5}
                  strokeDasharray="6 6"
                  className={`transition-opacity duration-500 ${
                    connected ? 'opacity-70 animate-dash' : 'opacity-0'
                  }`}
                />
              );
            })}
          </svg>

          {/* One-shot robots traveling from a device to the center as it connects */}
          {robots.map((r) => (
            <span
              key={r.id}
              className="splash-robot"
              style={
                {
                  '--sx': `${r.sx}px`,
                  '--sy': `${r.sy}px`,
                  '--ex': `${CENTER}px`,
                  '--ey': `${CENTER}px`,
                } as React.CSSProperties
              }
              aria-hidden
            >
              🤖
            </span>
          ))}

          {/* Continuous looping robots once every device is connected */}
          {allConnected &&
            !fading &&
            devices.map((d, i) => {
              const p = point(d.angle);
              return (
                <span
                  key={`loop-${d.label}`}
                  className="splash-robot-loop"
                  style={
                    {
                      '--sx': `${p.x}px`,
                      '--sy': `${p.y}px`,
                      '--dx': `${CENTER - p.x}px`,
                      '--dy': `${CENTER - p.y}px`,
                      '--dur': `${1.6 + (i % 3) * 0.35}s`,
                      '--delay': `${i * 0.14}s`,
                    } as React.CSSProperties
                  }
                  aria-hidden
                >
                  🤖
                </span>
              );
            })}

          {/* Device nodes */}
          {devices.map((d, i) => {
            const p = point(d.angle);
            const connected = stage > i;
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className={`absolute flex flex-col items-center gap-1.5 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  connected ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ left: p.x, top: p.y }}
              >
                <div
                  className="w-11 h-11 rounded-xl border flex items-center justify-center bg-ink-850 shadow-glow-sm"
                  style={{ borderColor: `${d.color}55`, color: d.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] text-slate-500">{d.label}</span>
              </div>
            );
          })}

          {/* Center node — the actual profile photo */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: CENTER, top: CENTER }}
          >
            <div className="relative flex items-center justify-center">
              <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-accent/40 splash-pulse-ring" aria-hidden />
              <span
                className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-accent/40 splash-pulse-ring"
                style={{ animationDelay: '0.85s' }}
                aria-hidden
              />
              <span
                className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-signal-400/40 splash-pulse-ring"
                style={{ animationDelay: '1.7s' }}
                aria-hidden
              />

              <span
                className="absolute -inset-2 rounded-full border-2 border-dashed border-accent/40 splash-spin"
                aria-hidden
              />

              <div
                className="absolute -inset-4 rounded-full bg-accent/20 blur-xl animate-pulse-signal"
                aria-hidden
              />

              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-accent/60 shadow-glow bg-ink-800">
                <img
                  src="./saadlogo.png"
                  alt="Saad Ali"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-ink-950 border-2 border-ink-950 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-signal" />
              </span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-8 w-56 sm:w-64">
          <div className="flex justify-between text-[11px] text-slate-500 mb-1.5">
            <span>{progress === 100 ? 'All systems connected' : 'Syncing systems'}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-signal-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Wordmark + slogan */}
        <div className="mt-7 text-center">
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Connect<span className="text-accent-gradient">with</span>saad
          </p>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 tracking-wide">
            Engineering networks. Crafting software.
          </p>
        </div>

        {/* <button
          onClick={finish}
          className="mt-8 text-[11px] text-slate-600 hover:text-slate-400 transition-colors duration-200 underline underline-offset-4"
        >
          Skip intro
        </button> */}
      </div>
    </div>
  );
};

export default SplashScreen;