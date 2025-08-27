import React, { useState, useEffect, useCallback } from 'react';
import { 
  Cpu, 
  Activity, 
  Cloud, 
  Globe, 
  Smartphone,
  Sun,
  Database,
  Wifi,
  Settings,
  TrendingUp
} from 'lucide-react';

const SmartGreenhouseArchitecture = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [dataPackets, setDataPackets] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width < 1024 && width >= 768);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Animation cycle control
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getDataForStep = (step) => {
    const dataTypes = [
      { emoji: "🌡️", value: "24.5°C", label: "Temperature", color: "#4CAF50" },
      { emoji: "📡", value: "HTTP", label: "Protocol", color: "#9C27B0" },
      { emoji: "💾", value: "STORE", label: "Database", color: "#FF9800" },
      { emoji: "📊", value: "GET", label: "Request", color: "#00BCD4" },
      { emoji: "📈", value: "LIVE", label: "Stream", color: "#2196F3" },
      { emoji: "🎮", value: "CTRL", label: "Control", color: "#F44336" }
    ];
    return dataTypes[step] || dataTypes[0];
  };

  const getResponsiveScale = () => {
    if (isMobile) return 0.6;
    if (isTablet) return 0.8;
    return 1;
  };

  // Data packet generation
  useEffect(() => {
    const packetTimer = setInterval(() => {
      const newPacket = {
        id: Date.now() + Math.random(),
        step: animationStep,
        progress: 0,
        data: getDataForStep(animationStep),
        timestamp: Date.now()
      };
      
      setDataPackets(prev => [...prev.filter(p => p.progress < 100), newPacket]);
    }, 1000);

    return () => clearInterval(packetTimer);
  }, [animationStep]);

  // Packet animation
  useEffect(() => {
    const animatePackets = setInterval(() => {
      setDataPackets(prev => 
        prev.map(packet => ({
          ...packet,
          progress: Math.min(packet.progress + 2, 100)
        })).filter(packet => packet.progress < 100)
      );
    }, 50);

    return () => clearInterval(animatePackets);
  }, []);

  const getPacketPosition = (step, progress) => {
    const scale = getResponsiveScale();
    const baseOffsetX = isMobile ? 50 : 100;
    const baseOffsetY = isMobile ? 100 : 50;
    
    const paths = {
      0: { 
        start: [200 * scale + baseOffsetX, 240 * scale + baseOffsetY], 
        end: [200 * scale + baseOffsetX, 340 * scale + baseOffsetY] 
      },
      1: { 
        start: [280 * scale + baseOffsetX, 380 * scale + baseOffsetY], 
        end: [520 * scale + baseOffsetX, 320 * scale + baseOffsetY] 
      },
      2: { 
        start: [640 * scale + baseOffsetX, 300 * scale + baseOffsetY], 
        end: [800 * scale + baseOffsetX, 200 * scale + baseOffsetY] 
      },
      3: { 
        start: [520 * scale + baseOffsetX, 500 * scale + baseOffsetY], 
        end: [580 * scale + baseOffsetX, 360 * scale + baseOffsetY] 
      },
      4: { 
        start: [560 * scale + baseOffsetX, 340 * scale + baseOffsetY], 
        end: [500 * scale + baseOffsetX, 480 * scale + baseOffsetY] 
      },
      5: { 
        start: [520 * scale + baseOffsetX, 360 * scale + baseOffsetY], 
        end: [280 * scale + baseOffsetX, 360 * scale + baseOffsetY] 
      }
    };

    const path = paths[step];
    if (!path) return { x: 0, y: 0 };

    const x = path.start[0] + (path.end[0] - path.start[0]) * (progress / 100);
    const y = path.start[1] + (path.end[1] - path.start[1]) * (progress / 100);
    
    return { x, y };
  };

  const DataPacket = ({ packet }) => {
    const position = getPacketPosition(packet.step, packet.progress);
    const { emoji, value, label, color } = packet.data;
    const packetSize = isMobile ? 10 : 15;
    const opacity = Math.max(0.3, 1 - (packet.progress / 100));
    
    return (
      <g transform={`translate(${position.x}, ${position.y})`} opacity={opacity}>
        {/* Outer glow */}
        <circle r={packetSize * 3} fill={color} opacity="0.1" />
        <circle r={packetSize * 2} fill={color} opacity="0.2" />
        
        {/* Main packet */}
        <circle
          r={packetSize}
          fill={color}
          stroke="white"
          strokeWidth="3"
          style={{
            filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.5))",
            animation: "bounce 2s infinite"
          }}
        />
        
        {/* Content */}
        <text 
          y="3" 
          textAnchor="middle" 
          fontSize={isMobile ? "12" : "16"}
          fill="white"
          fontWeight="bold"
        >
          {emoji}
        </text>
        
        {/* Data label */}
        <g transform="translate(0, -45)">
          <rect
            x={isMobile ? "-25" : "-35"}
            y="-12"
            width={isMobile ? "50" : "70"}
            height="24"
            rx="12"
            fill="white"
            stroke={color}
            strokeWidth="2"
            opacity="0.95"
            style={{ filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.3))" }}
          />
          <text
            y="-2"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill={color}
          >
            {value}
          </text>
          <text
            y="8"
            textAnchor="middle"
            fontSize="8"
            fill={color}
            opacity="0.8"
          >
            {label}
          </text>
        </g>
        
        {/* Motion trail */}
        <g opacity="0.7">
          {[1, 2, 3].map((i) => (
            <circle
              key={i}
              cx={-15 * i}
              cy="0"
              r={packetSize / (i + 1)}
              fill={color}
              opacity={0.8 / i}
            />
          ))}
        </g>
      </g>
    );
  };

  const ConnectionLine = ({ step, isActive }) => {
    const scale = getResponsiveScale();
    const baseOffsetX = isMobile ? 50 : 100;
    const baseOffsetY = isMobile ? 100 : 50;
    const lineWidth = isMobile ? 6 : 8;
    
    const paths = [
      { 
        start: [200 * scale + baseOffsetX, 260 * scale + baseOffsetY], 
        end: [200 * scale + baseOffsetX, 340 * scale + baseOffsetY], 
        label: isMobile ? "Sensor" : "Sensor Reading", 
        color: "#4CAF50", 
        width: lineWidth,
        description: "Environmental Data Collection"
      },
      { 
        start: [280 * scale + baseOffsetX, 380 * scale + baseOffsetY], 
        end: [520 * scale + baseOffsetX, 320 * scale + baseOffsetY], 
        label: isMobile ? "WiFi" : "WiFi Transmission", 
        color: "#9C27B0", 
        width: lineWidth + 2,
        description: "Wireless Data Transfer"
      },
      { 
        start: [640 * scale + baseOffsetX, 300 * scale + baseOffsetY], 
        end: [800 * scale + baseOffsetX, 200 * scale + baseOffsetY], 
        label: isMobile ? "Cloud" : "Cloud Storage", 
        color: "#FF9800", 
        width: lineWidth + 1,
        description: "Data Persistence"
      },
      { 
        start: [520 * scale + baseOffsetX, 500 * scale + baseOffsetY], 
        end: [580 * scale + baseOffsetX, 360 * scale + baseOffsetY], 
        label: isMobile ? "Request" : "Data Request", 
        color: "#00BCD4", 
        width: lineWidth,
        description: "Client Data Fetch"
      },
      { 
        start: [560 * scale + baseOffsetX, 340 * scale + baseOffsetY], 
        end: [500 * scale + baseOffsetX, 480 * scale + baseOffsetY], 
        label: isMobile ? "Update" : "Live Update", 
        color: "#2196F3", 
        width: lineWidth + 2,
        description: "Real-time Streaming"
      },
      { 
        start: [520 * scale + baseOffsetX, 360 * scale + baseOffsetY], 
        end: [280 * scale + baseOffsetX, 360 * scale + baseOffsetY], 
        label: isMobile ? "Control" : "Device Control", 
        color: "#F44336", 
        width: lineWidth + 1,
        description: "Command Execution"
      }
    ];

    const path = paths[step];
    if (!path) return null;

    const midX = path.start[0] + (path.end[0] - path.start[0]) * 0.5;
    const midY = path.start[1] + (path.end[1] - path.start[1]) * 0.5;

    return (
      <g>
        {/* Background line */}
        <line
          x1={path.start[0]}
          y1={path.start[1]}
          x2={path.end[0]}
          y2={path.end[1]}
          stroke="#e0e0e0"
          strokeWidth="4"
          opacity="0.3"
        />
        
        {/* Active line */}
        <line
          x1={path.start[0]}
          y1={path.start[1]}
          x2={path.end[0]}
          y2={path.end[1]}
          stroke={isActive ? path.color : '#e0e0e0'}
          strokeWidth={isActive ? path.width : 4}
          strokeDasharray={isActive ? '20,10' : '0'}
          opacity={isActive ? 1 : 0.3}
          style={{
            filter: isActive ? `drop-shadow(0 0 20px ${path.color})` : "none",
            animation: isActive ? "pulse 2s infinite" : "none"
          }}
        />
        
        {/* Flow indicators */}
        {isActive && (
          <>
            {[0.2, 0.4, 0.6, 0.8].map((position, idx) => (
              <circle
                key={idx}
                cx={path.start[0] + (path.end[0] - path.start[0]) * position}
                cy={path.start[1] + (path.end[1] - path.start[1]) * position}
                r={isMobile ? "4" : "6"}
                fill={path.color}
                opacity="0.8"
                style={{
                  animation: "ping 1.5s infinite",
                  animationDelay: `${idx * 0.3}s`
                }}
              />
            ))}
          </>
        )}
        
        {/* Label */}
        {isActive && (
          <g>
            <rect
              x={midX - (isMobile ? 50 : 80)}
              y={midY - (isMobile ? 35 : 45)}
              width={isMobile ? "100" : "160"}
              height={isMobile ? "30" : "40"}
              rx={isMobile ? "15" : "20"}
              fill="white"
              stroke={path.color}
              strokeWidth="3"
              opacity="0.98"
              style={{ filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.3))" }}
            />
            <text
              x={midX}
              y={midY - (isMobile ? 25 : 30)}
              textAnchor="middle"
              fontSize={isMobile ? "14" : "18"}
              fontWeight="bold"
              fill={path.color}
            >
              {path.label}
            </text>
            <text
              x={midX}
              y={midY - (isMobile ? 12 : 15)}
              textAnchor="middle"
              fontSize="10"
              fill={path.color}
              opacity="0.8"
            >
              {path.description}
            </text>
          </g>
        )}
      </g>
    );
  };

  const Component3D = ({ x, y, width, height, title, subtitle, icon, color, isActive, details, metrics }) => {
    const scale = getResponsiveScale();
    const baseOffsetX = isMobile ? 50 : 100;
    const baseOffsetY = isMobile ? 100 : 50;
    const scaledX = x * scale + baseOffsetX;
    const scaledY = y * scale + baseOffsetY;
    const scaledWidth = width * scale;
    const scaledHeight = height * scale;
    
    return (
      <g style={{ transition: "all 0.7s ease" }}>
        {/* Enhanced shadow */}
        <rect 
          x={scaledX + (isMobile ? 6 : 12)} 
          y={scaledY + (isMobile ? 6 : 12)} 
          width={scaledWidth} 
          height={scaledHeight} 
          rx={isMobile ? "20" : "30"} 
          fill="rgba(0,0,0,0.3)"
          style={{ filter: "blur(8px)" }}
        />
        
        {/* Main component */}
        <rect 
          x={scaledX} 
          y={scaledY} 
          width={scaledWidth} 
          height={scaledHeight} 
          rx={isMobile ? "20" : "30"} 
          fill={isActive ? color : `${color}CC`}
          stroke="white"
          strokeWidth={isMobile ? "4" : "6"}
          style={{
            filter: "drop-shadow(0px 12px 30px rgba(0,0,0,0.4))",
            transition: "all 0.7s ease",
            animation: isActive ? "pulse 3s infinite" : "none"
          }}
        />
        
        {/* Top highlight */}
        <rect 
          x={scaledX + (isMobile ? 4 : 8)} 
          y={scaledY + (isMobile ? 4 : 8)} 
          width={scaledWidth - (isMobile ? 8 : 16)} 
          height={isMobile ? "25" : "40"} 
          rx={isMobile ? "16" : "25"} 
          fill="rgba(255,255,255,0.4)"
          opacity={isActive ? "0.8" : "0.4"}
        />
        
        {/* Active glow */}
        {isActive && (
          <>
            <rect 
              x={scaledX - (isMobile ? 3 : 6)} 
              y={scaledY - (isMobile ? 3 : 6)} 
              width={scaledWidth + (isMobile ? 6 : 12)} 
              height={scaledHeight + (isMobile ? 6 : 12)} 
              rx={isMobile ? "23" : "36"} 
              fill="none"
              stroke={color}
              strokeWidth={isMobile ? "6" : "12"}
              opacity="0.5"
              style={{
                filter: "blur(4px)",
                animation: "pulse 2s infinite"
              }}
            />
            
            {/* Status indicator */}
            <circle
              cx={scaledX + scaledWidth - (isMobile ? 15 : 25)}
              cy={scaledY + (isMobile ? 15 : 25)}
              r={isMobile ? "6" : "10"}
              fill="#00ff00"
              style={{ animation: "ping 2s infinite" }}
            />
            <circle
              cx={scaledX + scaledWidth - (isMobile ? 15 : 25)}
              cy={scaledY + (isMobile ? 15 : 25)}
              r={isMobile ? "3" : "5"}
              fill="#00ff00"
            />
          </>
        )}
        
        {/* Content */}
        <foreignObject 
          x={scaledX + (isMobile ? 12 : 20)} 
          y={scaledY + (isMobile ? 12 : 20)} 
          width={scaledWidth - (isMobile ? 24 : 40)} 
          height={scaledHeight - (isMobile ? 24 : 40)}
        >
          <div className="text-white h-full flex flex-col justify-center items-center text-center">
            {/* Icon */}
            <div 
              className={isMobile ? 'mb-2' : 'mb-4'} 
              style={{
                transition: "transform 0.5s ease",
                animation: isActive ? "bounce 2s infinite" : "none"
              }}
            >
              {React.cloneElement(icon, { 
                size: isMobile ? 32 : 56,
                style: { filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))" }
              })}
            </div>
            
            {/* Title */}
            <div 
              className={`${isMobile ? 'text-base' : 'text-2xl'} font-bold ${isMobile ? 'mb-1' : 'mb-3'}`}
              style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)" }}
            >
              {title}
            </div>
            
            {/* Subtitle */}
            <div className={`${isMobile ? 'text-xs' : 'text-base'} opacity-90 ${isMobile ? 'mb-2' : 'mb-4'} font-medium`}>
              {subtitle}
            </div>
            
            {/* Details */}
            <div className={`${isMobile ? 'text-xs' : 'text-sm'} space-y-1 opacity-85`}>
              {details.slice(0, isMobile ? 2 : 3).map((detail, idx) => (
                <div key={idx} className="flex items-center justify-center space-x-2">
                  <span>{detail}</span>
                </div>
              ))}
            </div>
            
            {/* Metrics */}
            {metrics && isActive && (
              <div className={`${isMobile ? 'mt-2 px-3 py-1 text-xs' : 'mt-3 px-4 py-2 text-sm'} bg-white bg-opacity-30 rounded-full font-bold space-y-1`}>
                {metrics.map((metric, idx) => (
                  <div key={idx}>{metric}</div>
                ))}
              </div>
            )}
            
            {/* Active indicator */}
            {isActive && (
              <div 
                className={`${isMobile ? 'mt-2 px-3 py-1 text-xs' : 'mt-3 px-4 py-2 text-sm'} bg-green-500 bg-opacity-80 rounded-full font-bold`}
                style={{ animation: "pulse 2s infinite" }}
              >
                ● ACTIVE
              </div>
            )}
          </div>
        </foreignObject>
      </g>
    );
  };

  const stepDescriptions = [
    "Environmental sensors collect temperature, humidity, and light data",
    "ESP32 microcontroller transmits data via WiFi to the backend server",
    "Ballerina backend processes and stores data in AWS DynamoDB cloud database",
    "Web dashboard requests real-time data from the backend API",
    "Live data streams to the 3D visualization dashboard interface",
    "Admin sends control commands back to greenhouse automation systems"
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-50 to-slate-200 overflow-hidden relative">
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="bg-white bg-opacity-90 rounded-2xl p-4 shadow-xl" style={{ backdropFilter: "blur(10px)" }}>
          <h1 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-gray-800 mb-2`}>
            🏠 Smart Greenhouse IoT Architecture
          </h1>
          <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-600 mb-3`}>
            Real-time environmental monitoring and control system
          </p>
          <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-700 bg-blue-50 p-3 rounded-lg`}>
            <strong>Step {animationStep + 1}:</strong> {stepDescriptions[animationStep]}
          </div>
        </div>
      </div>

      {/* Main SVG */}
      <div className="w-full h-full pt-32">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid meet"
          className="min-w-full min-h-full"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f0f0f0" strokeWidth="2" opacity="0.5"/>
            </pattern>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc"/>
              <stop offset="50%" stopColor="#f1f5f9"/>
              <stop offset="100%" stopColor="#e2e8f0"/>
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Connection lines */}
          {[0, 1, 2, 3, 4, 5].map(step => (
            <ConnectionLine
              key={step}
              step={step}
              isActive={animationStep === step}
            />
          ))}
          
          {/* Data packets */}
          {dataPackets.map(packet => (
            <DataPacket key={packet.id} packet={packet} />
          ))}
          
          {/* Architecture Components */}
          <Component3D
            x={50}
            y={100}
            width={300}
            height={300}
            title="🏠 Smart Greenhouse"
            subtitle="Physical Environment"
            color="#4CAF50"
            isActive={[0, 5].includes(animationStep)}
            icon={<Sun />}
            details={[
              "🌡️ Temperature: 24.5°C",
              "💧 Humidity: 65%", 
              "☀️ Light: 850 lux",
              "🌱 Growth Stage: Optimal"
            ]}
            metrics={[0, 5].includes(animationStep) ? ["Status: Online", "Sensors: 8 Active"] : null}
          />
          
          <Component3D
            x={120}
            y={350}
            width={160}
            height={120}
            title="ESP32"
            subtitle="IoT Microcontroller"
            color="#FF6B35"
            isActive={[0, 1, 5].includes(animationStep)}
            icon={<Cpu />}
            details={[
              "📶 WiFi: Connected",
              "⚡ CPU: 240MHz",
              "🔄 Sampling: 1Hz"
            ]}
            metrics={[0, 1, 5].includes(animationStep) ? ["Memory: 85%", "Signal: -45dBm"] : null}
          />
          
          <Component3D
            x={450}
            y={240}
            width={180}
            height={180}
            title="Ballerina"
            subtitle="Ballerina Backend API Server"
            color="#9C27B0"
            isActive={[1, 2, 3, 4, 5].includes(animationStep)}
            icon={<Activity />}
            details={[
              "🔗 REST API Gateway",
              "⚡ Real-time Processing",
              "🔄 Data Orchestration",
              "🎛️ Device Management"
            ]}
            metrics={[1, 2, 3, 4, 5].includes(animationStep) ? ["Load: 23%", "Uptime: 99.9%"] : null}
          />
          
          <Component3D
            x={720}
            y={120}
            width={200}
            height={160}
            title="AWS DynamoDB"
            subtitle="Cloud Database"
            color="#FF9800"
            isActive={animationStep === 2}
            icon={<Database />}
            details={[
              "☁️ NoSQL Database",
              "📊 Time-series Data",
              "🔍 Analytics Ready",
              "⚡ Auto-scaling"
            ]}
            metrics={animationStep === 2 ? ["Records: 2.3M", "Latency: 3ms"] : null}
          />
          
          <Component3D
            x={350}
            y={450}
            width={280}
            height={160}
            title="3D Dashboard"
            subtitle="Web Visualization"
            color="#00BCD4"
            isActive={[3, 4].includes(animationStep)}
            icon={<TrendingUp />}
            details={[
              "🎮 Interactive 3D View",
              "📊 Real-time Charts",
              "🎛️ Control Interface",
              "📈 Historical Analytics"
            ]}
            metrics={[3, 4].includes(animationStep) ? ["Users: 12", "FPS: 60"] : null}
          />
          
          <Component3D
            x={700}
            y={450}
            width={180}
            height={160}
            title="Admin Panel"
            subtitle="System Control"
            color="#607D8B"
            isActive={false}
            icon={<Settings />}
            details={[
              "👀 Monitor Systems",
              "🎮 Device Control",
              "📊 Performance Metrics",
              "⚙️ Configuration"
            ]}
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="bg-white bg-opacity-90 rounded-xl p-3 shadow-lg" style={{ backdropFilter: "blur(10px)" }}>
          <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-6'} gap-2 text-xs`}>
            {[
              { color: "#4CAF50", label: "Sensor Data" },
              { color: "#9C27B0", label: "WiFi Transfer" },
              { color: "#FF9800", label: "Cloud Storage" },
              { color: "#00BCD4", label: "Data Request" },
              { color: "#2196F3", label: "Live Stream" },
              { color: "#F44336", label: "Control Signal" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-8px,0); }
          70% { transform: translate3d(0,-4px,0); }
          90% { transform: translate3d(0,-2px,0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default SmartGreenhouseArchitecture;