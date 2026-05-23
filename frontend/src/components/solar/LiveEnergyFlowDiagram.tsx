import { useId } from 'react';
import type { SolarSystemFlowType } from '../../data/solarSystems';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/cn';

type Accent = 'green' | 'blue' | 'amber' | 'violet';

const accentStroke: Record<Accent, string> = {
  green: '#76a754',
  blue: '#5986b1',
  amber: '#d97706',
  violet: '#7c3aed',
};

type Segment = { d: string; delay: string; color?: string; dashed?: boolean };

type FlowConfig = {
  nodes: { x: number; label: string; sub?: string; accent: Accent }[];
  segments: Segment[];
};

const flows: Record<SolarSystemFlowType, FlowConfig> = {
  'on-grid': {
    nodes: [
      { x: 24, label: 'Solar PV', sub: 'Array', accent: 'green' },
      { x: 148, label: 'Inverter', sub: 'Grid-tied', accent: 'blue' },
      { x: 272, label: 'Net meter', sub: 'Bi-dir.', accent: 'blue' },
      { x: 396, label: 'CEB Grid', accent: 'blue' },
      { x: 520, label: 'Loads', sub: 'Your site', accent: 'green' },
    ],
    segments: [
      { d: 'M 108 52 L 148 52', delay: '0s', color: '#76a754' },
      { d: 'M 232 52 L 272 52', delay: '0.35s', color: '#76a754' },
      { d: 'M 356 52 L 396 52', delay: '0.7s', color: '#5986b1' },
      { d: 'M 200 68 L 200 88 L 520 88 L 520 68', delay: '1s', color: '#76a754' },
      { d: 'M 440 52 L 480 52 L 480 88', delay: '1.2s', color: '#94a3b8', dashed: true },
    ],
  },
  'off-grid': {
    nodes: [
      { x: 40, label: 'Solar PV', accent: 'green' },
      { x: 168, label: 'Inverter', sub: 'Off-grid', accent: 'amber' },
      { x: 296, label: 'Battery', sub: 'LFP', accent: 'amber' },
      { x: 424, label: 'AC loads', accent: 'green' },
      { x: 552, label: 'No utility', sub: 'Island', accent: 'blue' },
    ],
    segments: [
      { d: 'M 124 52 L 168 52', delay: '0s', color: '#76a754' },
      { d: 'M 252 52 L 296 52', delay: '0.4s', color: '#d97706' },
      { d: 'M 380 52 L 424 52', delay: '0.8s', color: '#76a754' },
      { d: 'M 340 68 L 340 92 L 552 92 L 552 68', delay: '1.1s', color: '#94a3b8', dashed: true },
    ],
  },
  hybrid: {
    nodes: [
      { x: 20, label: 'Solar', accent: 'green' },
      { x: 130, label: 'Hybrid', sub: 'Inverter', accent: 'blue' },
      { x: 250, label: 'Battery', accent: 'amber' },
      { x: 360, label: 'Grid', accent: 'blue' },
      { x: 470, label: 'Loads', accent: 'green' },
      { x: 500, label: 'Backup', sub: 'Outage', accent: 'violet' },
    ],
    segments: [
      { d: 'M 104 52 L 130 52', delay: '0s', color: '#76a754' },
      { d: 'M 214 52 L 250 52', delay: '0.3s', color: '#d97706' },
      { d: 'M 324 52 L 360 52', delay: '0.6s', color: '#5986b1' },
      { d: 'M 434 52 L 470 52', delay: '0.9s', color: '#76a754' },
      { d: 'M 178 68 L 178 100 L 548 100 L 548 68', delay: '1.2s', color: '#7c3aed', dashed: true },
    ],
  },
  'battery-backup': {
    nodes: [
      { x: 30, label: 'Solar', sub: 'Opt.', accent: 'green' },
      { x: 150, label: 'Backup', sub: 'Inverter', accent: 'violet' },
      { x: 280, label: 'Battery', accent: 'amber' },
      { x: 400, label: 'Grid', sub: 'Charge', accent: 'blue' },
      { x: 520, label: 'Critical', sub: 'Loads', accent: 'green' },
    ],
    segments: [
      { d: 'M 114 52 L 150 52', delay: '0s', color: '#76a754' },
      { d: 'M 234 52 L 280 52', delay: '0.35s', color: '#7c3aed' },
      { d: 'M 364 52 L 400 52', delay: '0.7s', color: '#5986b1', dashed: true },
      { d: 'M 200 68 L 200 96 L 520 96 L 520 52', delay: '1s', color: '#76a754' },
    ],
  },
};

const fills: Record<Accent, string> = {
  green: '#f0fdf4',
  blue: '#eff6ff',
  amber: '#fffbeb',
  violet: '#f5f3ff',
};

type Props = {
  type: SolarSystemFlowType;
  accent: Accent;
  compact?: boolean;
  className?: string;
};

export function LiveEnergyFlowDiagram({ type, accent, compact = false, className }: Props) {
  const uid = useId().replace(/:/g, '');
  const reducedMotion = useReducedMotion();
  const config = flows[type];
  const h = compact ? 88 : 120;
  const viewW = 640;
  const nodeW = compact ? 84 : 96;
  const nodeH = compact ? 36 : 44;

  return (
    <div
      className={cn(
        'rounded-xl border border-slate-200/80 bg-slate-950/[0.02] overflow-hidden',
        compact ? 'p-2' : 'p-3',
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-2 px-1">
        <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
          Live energy flow
        </p>
        {!reducedMotion && (
          <span className="inline-flex items-center gap-1 text-[8px] font-bold uppercase text-emerald-600">
            <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        )}
      </div>
      <svg
        viewBox={`0 0 ${viewW} ${h}`}
        className="w-full h-auto"
        role="img"
        aria-label={`${type} live energy flow`}
      >
        <defs>
          <marker
            id={`arrow-${uid}`}
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#94a3b8" />
          </marker>
        </defs>

        {config.segments.map((seg, i) => (
          <g key={i}>
            <path
              d={seg.d}
              fill="none"
              stroke={seg.color ?? accentStroke[accent]}
              strokeWidth={compact ? 1.5 : 2}
              strokeLinecap="round"
              strokeDasharray={seg.dashed ? '5 4' : undefined}
              markerEnd={seg.dashed ? undefined : `url(#arrow-${uid})`}
              className={!reducedMotion && !seg.dashed ? 'energy-flow-path' : undefined}
              style={!reducedMotion && !seg.dashed ? { animationDelay: seg.delay } : undefined}
            />
            {!reducedMotion && !seg.dashed && (
              <circle r={compact ? 2.5 : 3} fill={seg.color ?? accentStroke[accent]}>
                <animateMotion dur="2.2s" repeatCount="indefinite" path={seg.d} begin={seg.delay} />
              </circle>
            )}
          </g>
        ))}

        {config.nodes.map((node) => (
          <g key={node.label}>
            <rect
              x={node.x}
              y={compact ? 14 : 18}
              width={nodeW}
              height={nodeH}
              rx={8}
              fill={fills[node.accent]}
              stroke={accentStroke[node.accent]}
              strokeWidth={1.2}
              className={!reducedMotion ? 'energy-node-pulse' : undefined}
            />
            <text
              x={node.x + nodeW / 2}
              y={compact ? 30 : 36}
              textAnchor="middle"
              fontSize={compact ? 8 : 9}
              fontWeight="800"
              fill="#0f172a"
              fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
            >
              {node.label}
            </text>
            {node.sub && (
              <text
                x={node.x + nodeW / 2}
                y={compact ? 42 : 50}
                textAnchor="middle"
                fontSize="7"
                fill="#64748b"
                fontFamily="Plus Jakarta Sans, system-ui, sans-serif"
              >
                {node.sub}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
