import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';

const RevenueChartDisplay = ({ data }: { data: Revenue[] }) => {
  const chartHeight = 350;
  const chartWidth = 800;
  const padding = 40;
  const innerHeight = chartHeight - 2 * padding;
  const innerWidth = chartWidth - 2 * padding;

  if (!data || data.length === 0) {
    return (
      <div className="w-full md:col-span-4">
        <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
          <h3 className={`${lusitana.className} mb-4 text-lg font-bold text-gray-900`}>
            Revenue Chart
          </h3>
          <div className="h-96 rounded bg-white p-4 flex items-center justify-center">
            <p className="text-gray-500">No revenue data available</p>
          </div>
        </div>
      </div>
    );
  }

  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const xStep = innerWidth / (data.length - 1 || 1);
  const yScale = innerHeight / maxRevenue;

  // Create SVG path for line chart
  const points = data.map((d, i) => ({
    x: padding + i * xStep,
    y: padding + innerHeight - d.revenue * yScale,
  }));

  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`)
    .join(' ');

  return (
    <div className="w-full md:col-span-4">
      <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
        <h3 className={`${lusitana.className} mb-4 text-lg font-bold text-gray-900`}>
          Revenue Chart
        </h3>
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="w-full border border-gray-200 rounded bg-white"
          >
            {/* Y-axis */}
            <line
              x1={padding}
              y1={padding}
              x2={padding}
              y2={chartHeight - padding}
              stroke="#ccc"
              strokeWidth="2"
            />

            {/* X-axis */}
            <line
              x1={padding}
              y1={chartHeight - padding}
              x2={chartWidth - padding}
              y2={chartHeight - padding}
              stroke="#ccc"
              strokeWidth="2"
            />

            {/* Y-axis labels */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
              const y = padding + innerHeight * (1 - ratio);
              const value = Math.round(maxRevenue * ratio);
              return (
                <g key={`y-${i}`}>
                  <line
                    x1={padding - 5}
                    y1={y}
                    x2={padding}
                    y2={y}
                    stroke="#ccc"
                    strokeWidth="1"
                  />
                  <text
                    x={padding - 10}
                    y={y + 4}
                    fontSize="12"
                    textAnchor="end"
                    fill="#666"
                  >
                    ${value}k
                  </text>
                </g>
              );
            })}

            {/* X-axis labels (months) */}
            {data.map((d, i) => (
              <g key={`x-${i}`}>
                <line
                  x1={padding + i * xStep}
                  y1={chartHeight - padding}
                  x2={padding + i * xStep}
                  y2={chartHeight - padding + 5}
                  stroke="#ccc"
                  strokeWidth="1"
                />
                <text
                  x={padding + i * xStep}
                  y={chartHeight - padding + 20}
                  fontSize="12"
                  textAnchor="middle"
                  fill="#666"
                >
                  {d.month}
                </text>
              </g>
            ))}

            {/* Line chart */}
            <path
              d={pathD}
              stroke="#3B82F6"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points */}
            {points.map((p, i) => (
              <circle
                key={`point-${i}`}
                cx={p.x}
                cy={p.y}
                r="4"
                fill="#3B82F6"
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RevenueChartDisplay;
