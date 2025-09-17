"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { BarChart3, TrendingUp, Info } from "lucide-react";
import FeaturesContainer from "./features-container";

const AnalyticsDashboard = () => {
  const [activeMetric, setActiveMetric] = useState("$1.4M");
  const [activeChange, setActiveChange] = useState("+52%");
  const [activeTimeframe, setActiveTimeframe] = useState("5D");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const chartRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const [chartData, setChartData] = useState([
    { value: 45, label: "Week 1", amount: "$890K" },
    { value: 25, label: "Week 2", amount: "$650K" },
    { value: 75, label: "Week 3", amount: "$1.4M" },
    { value: 35, label: "Week 4", amount: "$780K" },
    { value: 85, label: "Week 5", amount: "$1.6M" }
  ]);

  const timeframes = ["5D", "2W", "1M", "6M"];
  const metrics = [
    { value: "$1.4M", change: "+52%", label: "Revenue" },
    { value: "9.8M", change: "+42%", label: "Impressions" },
    { value: "2.3M", change: "+28%", label: "Clicks" },
    { value: "15.2%", change: "+8%", label: "CTR" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => prev.map((item, index) => ({
        ...item,
        value: Math.max(15, Math.min(90, item.value + (Math.random() - 0.5) * 8))
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (chartRef.current) {
      const rect = chartRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x, y });

      // Determine which point is being hovered
      const pointWidth = rect.width / (chartData.length - 1);
      const hoveredIndex = Math.round(x / pointWidth);
      if (hoveredIndex >= 0 && hoveredIndex < chartData.length) {
        setHoveredPoint(hoveredIndex);
      }
    }
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  const handleTimeframeClick = (timeframe: string) => {
    setActiveTimeframe(timeframe);
    const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
    setActiveMetric(randomMetric.value);
    setActiveChange(randomMetric.change);
  };

  const getPathData = () => {
    const width = 380;
    const height = 120;
    return chartData.map((point, index) => {
      const x = (index / (chartData.length - 1)) * width;
      const y = height - (point.value / 100) * height;
      return { x, y };
    });
  };

  const pathData = getPathData();
  const pathString = pathData.reduce((path, point, index) => {
    const command = index === 0 ? 'M' : 'L';
    return `${path} ${command} ${point.x} ${point.y}`;
  }, '');

  const areaString = `${pathString} L ${pathData[pathData.length - 1].x} 120 L 0 120 Z`;

  return (
    <FeaturesContainer>
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium">
        <BarChart3 className="h-4 w-4 text-primary" />
        <p className="text-white">Campaign Analytics</p>
        <Info className="h-4 w-4 text-white/40" />
      </div>
      
      <p className="text-balance text-white/70 mb-6">
        Impressions and engagement
      </p>

      {/* Main Metric Display */}
      <div className="mb-6">
        <motion.div
          key={activeMetric}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold text-white mb-2"
        >
          {activeMetric}
        </motion.div>
        
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <motion.span
            key={activeChange}
            initial={{ x: -5, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-green-400 font-medium"
          >
            {activeChange}
          </motion.span>
          <span className="text-white/50 text-sm">compared to last period</span>
        </div>
      </div>

      {/* Timeframe Selector */}
      <div className="flex gap-1 mb-6 p-1 bg-slate-800/50 rounded-lg border border-slate-700">
        {timeframes.map((timeframe) => (
          <motion.button
            key={timeframe}
            onClick={() => handleTimeframeClick(timeframe)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
            className={`px-4 py-2 text-sm font-medium rounded transition-all duration-200 ${
              activeTimeframe === timeframe
                ? 'bg-slate-600 text-white border border-slate-500 shadow-lg'
                : 'text-white/60 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            {timeframe}
          </motion.button>
        ))}
      </div>

      {/* Interactive Chart */}
      <div 
        ref={chartRef}
        className="relative h-48 bg-slate-900/50 border border-slate-700 rounded-lg p-4 overflow-hidden cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none"></div>
        
        {/* Chart SVG */}
        <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)]" viewBox="0 0 380 120">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.05" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Area Fill */}
          <motion.path
            d={areaString}
            fill="url(#chartGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Main Line */}
          <motion.path
            d={pathString}
            stroke="rgb(147, 51, 234)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Data Points */}
          {pathData.map((point, index) => (
            <motion.circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={hoveredPoint === index ? "8" : "5"}
              fill={hoveredPoint === index ? "white" : "rgb(147, 51, 234)"}
              stroke="white"
              strokeWidth="2"
              filter={hoveredPoint === index ? "url(#glow)" : "none"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
              }}
              whileHover={{ scale: 1.3 }}
              transition={{ 
                delay: index * 0.1 + 0.5,
                duration: 0.3
              }}
              style={{ cursor: 'pointer' }}
            />
          ))}
          
          {/* Hover Line */}
          {hoveredPoint !== null && (
            <motion.line
              x1={pathData[hoveredPoint].x}
              y1="0"
              x2={pathData[hoveredPoint].x}
              y2="120"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="4,4"
              opacity="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </svg>

        {/* Interactive Tooltip */}
        {hoveredPoint !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-slate-800/95 backdrop-blur border border-slate-600 rounded-lg px-3 py-2 pointer-events-none shadow-xl"
            style={{
              left: `${(hoveredPoint / (chartData.length - 1)) * 100}%`,
              top: `${20 + (1 - chartData[hoveredPoint].value / 100) * 60}%`,
              transform: 'translate(-50%, -100%)',
              marginTop: '-10px'
            }}
          >
            <div className="text-white font-medium text-sm">
              {chartData[hoveredPoint].amount}
            </div>
            <div className="text-white/60 text-xs">
              {chartData[hoveredPoint].label}
            </div>
            <div className="w-2 h-2 bg-slate-800 border-l border-b border-slate-600 absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45"></div>
          </motion.div>
        )}

        {/* Mouse Follower Effect */}
        <motion.div
          className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none opacity-30"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        />
      </div>
    </FeaturesContainer>
  );
};

export default AnalyticsDashboard;