import React from 'react';

interface TimelineGraphProps {
  title: string;
  subtitle: string;
}

export const TimelineGraph: React.FC<TimelineGraphProps> = ({ title, subtitle }) => {
  const dataPoints = [
    { month: 'Gen', value: 100, label: 'Prima del sito' },
    { month: 'Feb', value: 120, label: '' },
    { month: 'Mar', value: 150, label: 'Lancio sito' },
    { month: 'Apr', value: 180, label: '' },
    { month: 'Mag', value: 220, label: '' },
    { month: 'Giu', value: 250, label: 'Dopo 3 mesi' },
  ];

  const maxValue = Math.max(...dataPoints.map(d => d.value));
  const graphHeight = 120;
  const graphWidth = 280;

  return (
    <div className="flex flex-col p-6 bg-black/20 backdrop-blur-md rounded-2xl border border-cyan-500/20 overflow-hidden">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{subtitle}</p>
      </div>
      
      <div className="relative overflow-hidden">
        <svg width={graphWidth} height={graphHeight + 40} className="overflow-visible">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <line
              key={percent}
              x1="0"
              y1={graphHeight - (percent / 100) * graphHeight}
              x2={graphWidth}
              y2={graphHeight - (percent / 100) * graphHeight}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          ))}
          
          {/* Data line */}
          <polyline
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={dataPoints
              .map((point, index) => {
                const x = (index / (dataPoints.length - 1)) * (graphWidth - 20) + 10;
                const y = graphHeight - (point.value / maxValue) * graphHeight;
                return `${x},${y}`;
              })
              .join(' ')}
            className="animate-pulse"
          />
          
          {/* Data points */}
          {dataPoints.map((point, index) => {
            const x = (index / (dataPoints.length - 1)) * (graphWidth - 20) + 10;
            const y = graphHeight - (point.value / maxValue) * graphHeight;
            
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#06b6d4"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                {/* Month labels */}
                <text
                  x={x}
                  y={graphHeight + 20}
                  textAnchor="middle"
                  className="text-xs fill-gray-300"
                >
                  {point.month}
                </text>
                {/* Value labels for key points */}
                {(index === 0 || index === dataPoints.length - 1) && (
                  <text
                    x={x}
                    y={y - 10}
                    textAnchor="middle"
                    className="text-xs fill-white font-semibold"
                  >
                    {point.value}%
                  </text>
                )}
              </g>
            );
          })}
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Growth indicator */}
        <div className="absolute top-2 right-2 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
          +150% 📈
        </div>
      </div>
    </div>
  );
};