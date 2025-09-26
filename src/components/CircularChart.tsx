import React from 'react';

interface CircularChartProps {
  percentage: number;
  title: string;
  subtitle: string;
}

export const CircularChart: React.FC<CircularChartProps> = ({ percentage, title, subtitle }) => {
  const radius = 80;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className="flex flex-col items-center p-6 bg-black/20 backdrop-blur-md rounded-2xl border border-cyan-500/20">
      <div className="relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            stroke="rgba(255, 255, 255, 0.1)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress circle */}
          <circle
            stroke="url(#gradient)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-1000 ease-out"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage text in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      </div>
    </div>
  );
};