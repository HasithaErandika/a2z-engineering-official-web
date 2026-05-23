const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function SolarPerformanceChart({
  profile,
  dailyConsumption,
}: {
  profile: number[];
  dailyConsumption: number;
}) {
  const PL = 40;
  const PT = 24;
  const PB = 28;
  const W = 700;
  const H = 240;
  const chartH = H - PT - PB;
  const chartW = W - PL;

  const peakVal = Math.max(...profile, dailyConsumption);
  const maxVal = Math.ceil(Math.max(10, peakVal) / 10) * 10;

  const slotW = chartW / 12;
  const barW = Math.min(30, slotW * 0.55);

  const toY = (v: number) => PT + chartH - (v / maxVal) * chartH;
  const toBarH = (v: number) => (v / maxVal) * chartH;

  const gridLines = Array.from({ length: 5 }, (_, i) => Math.round((maxVal / 4) * i));

  const consumptionMultipliers = [1.02, 0.98, 0.95, 0.92, 0.96, 1.05, 1.12, 1.1, 1.05, 0.98, 0.92, 0.95];
  const consPoints = profile.map((_, i) => dailyConsumption * consumptionMultipliers[i]);

  const polyPoints = [
    `${PL},${H - PB}`,
    ...consPoints.map((val, i) => {
      const cx = PL + i * slotW + slotW / 2;
      return `${cx},${toY(val)}`;
    }),
    `${PL + 11 * slotW + slotW / 2},${H - PB}`,
  ].join(' ');

  const linePoints = consPoints
    .map((val, i) => {
      const cx = PL + i * slotW + slotW / 2;
      return `${cx},${toY(val)}`;
    })
    .join(' ');

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[480px]" style={{ height: '260px' }}>
        {gridLines.map((v) => (
          <g key={v}>
            <line
              x1={PL}
              y1={toY(v)}
              x2={W}
              y2={toY(v)}
              stroke="#e2e8f0"
              strokeWidth="0.8"
              strokeDasharray={v === 0 ? '0' : '4 3'}
            />
            <text
              x={PL - 6}
              y={toY(v) + 4}
              textAnchor="end"
              fontSize="9"
              fill="#94a3b8"
              fontFamily="monospace"
            >
              {v}
            </text>
          </g>
        ))}
        <polygon points={polyPoints} fill="#cbd5e1" opacity="0.35" />
        <polyline
          points={linePoints}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        {profile.map((val, i) => {
          const cx = PL + i * slotW + slotW / 2;
          const bx = cx - barW / 2;
          return (
            <g key={MONTH_NAMES[i]}>
              <rect x={bx} y={toY(val)} width={barW} height={toBarH(val)} fill="#4ade80" rx="3" ry="3" />
              <text x={cx} y={toY(val) - 5} textAnchor="middle" fontSize="8" fontWeight="700" fill="#374151">
                {val.toFixed(1)}
              </text>
              <text x={cx} y={H - 6} textAnchor="middle" fontSize="9" fill="#64748b">
                {MONTH_NAMES[i]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
