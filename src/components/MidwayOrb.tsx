import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export type OrbState = 'IDLE' | 'LISTENING' | 'PROCESSING' | 'EXECUTING' | 'SPEAKING' | 'SUCCESS' | 'INTERRUPTED';

interface MidwayOrbProps {
  state?: OrbState;
  size?: number;
  interactive?: boolean;
  onStateChange?: (state: OrbState) => void;
  className?: string;
}

const STATE_CONFIG: Record<OrbState, {
  label: string;
  primary: string;
  secondary: string;
  glow: string;
  halo: string;
  pulseSpeed: number;
  orbitSpeed: number;
}> = {
  IDLE: {
    label: 'Ready & Standby',
    primary: '#00f0ff',
    secondary: '#0284c7',
    glow: 'rgba(0, 240, 255, 0.5)',
    halo: 'rgba(2, 132, 199, 0.25)',
    pulseSpeed: 4,
    orbitSpeed: 25,
  },
  LISTENING: {
    label: 'Acoustic Listening',
    primary: '#ef4444',
    secondary: '#f97316',
    glow: 'rgba(239, 68, 68, 0.7)',
    halo: 'rgba(249, 115, 22, 0.3)',
    pulseSpeed: 1.5,
    orbitSpeed: 12,
  },
  PROCESSING: {
    label: 'Neural Processing',
    primary: '#a855f7',
    secondary: '#6366f1',
    glow: 'rgba(168, 85, 247, 0.7)',
    halo: 'rgba(99, 102, 241, 0.3)',
    pulseSpeed: 1.8,
    orbitSpeed: 8,
  },
  EXECUTING: {
    label: 'Win32 Executing',
    primary: '#55ddf5',
    secondary: '#0ea5e9',
    glow: 'rgba(85, 221, 245, 0.7)',
    halo: 'rgba(14, 165, 233, 0.35)',
    pulseSpeed: 1.2,
    orbitSpeed: 6,
  },
  SPEAKING: {
    label: 'SAPI5 Synthesizing',
    primary: '#eab308',
    secondary: '#f59e0b',
    glow: 'rgba(234, 179, 8, 0.65)',
    halo: 'rgba(245, 158, 11, 0.25)',
    pulseSpeed: 2,
    orbitSpeed: 14,
  },
  SUCCESS: {
    label: 'Action Completed',
    primary: '#10b981',
    secondary: '#059669',
    glow: 'rgba(16, 185, 129, 0.7)',
    halo: 'rgba(5, 150, 105, 0.3)',
    pulseSpeed: 3,
    orbitSpeed: 20,
  },
  INTERRUPTED: {
    label: 'Immediate Cutoff',
    primary: '#f97316',
    secondary: '#dc2626',
    glow: 'rgba(249, 115, 22, 0.7)',
    halo: 'rgba(220, 38, 38, 0.3)',
    pulseSpeed: 1,
    orbitSpeed: 30,
  },
};

export const MidwayOrb: React.FC<MidwayOrbProps> = ({
  state = 'IDLE',
  size = 280,
  interactive = false,
  onStateChange,
  className = '',
}) => {
  const [currentState, setCurrentState] = useState<OrbState>(state);

  useEffect(() => {
    setCurrentState(state);
  }, [state]);

  const config = STATE_CONFIG[currentState] || STATE_CONFIG.IDLE;

  const handleNextState = () => {
    if (!interactive) return;
    const states: OrbState[] = ['IDLE', 'LISTENING', 'PROCESSING', 'EXECUTING', 'SPEAKING', 'SUCCESS'];
    const nextIdx = (states.indexOf(currentState) + 1) % states.length;
    const nextState = states[nextIdx];
    setCurrentState(nextState);
    if (onStateChange) onStateChange(nextState);
  };

  return (
    <div
      onClick={handleNextState}
      className={`relative flex items-center justify-center select-none ${interactive ? 'cursor-pointer group' : ''} ${className}`}
      style={{ width: size, height: size }}
      title={interactive ? `Current State: ${config.label}. Click to cycle state.` : `Midway Intelligence Core: ${config.label}`}
    >
      {/* Outer Halo */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: config.pulseSpeed,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 rounded-full blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${config.halo} 0%, transparent 70%)`,
        }}
      />

      {/* SVG Layer for Precision Orbital Rings */}
      <svg
        viewBox="0 0 512 512"
        className="w-full h-full absolute inset-0 z-10"
        style={{ filter: `drop-shadow(0 0 15px ${config.glow})` }}
      >
        <defs>
          <filter id={`orbGlow-${currentState}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit Ring 1 (Tilted Outer Arc) */}
        <g className="origin-center" style={{ transformOrigin: '256px 256px' }}>
          <motion.ellipse
            cx="256"
            cy="256"
            rx="210"
            ry="92"
            fill="none"
            stroke={config.primary}
            strokeWidth="2.2"
            strokeDasharray="24 12 60 16 90 20"
            opacity="0.75"
            transform="rotate(-28 256 256)"
            animate={{ rotate: [-28, 332] }}
            transition={{
              duration: config.orbitSpeed,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </g>

        {/* Orbit Ring 2 (Counter Arc) */}
        <g className="origin-center" style={{ transformOrigin: '256px 256px' }}>
          <motion.ellipse
            cx="256"
            cy="256"
            rx="185"
            ry="78"
            fill="none"
            stroke={config.secondary}
            strokeWidth="1.8"
            strokeDasharray="18 14 45 15"
            opacity="0.65"
            transform="rotate(42 256 256)"
            animate={{ rotate: [42, -318] }}
            transition={{
              duration: config.orbitSpeed * 1.3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </g>

        {/* Orbit Ring 3 (Fast Inner Gyro Arc) */}
        <g className="origin-center" style={{ transformOrigin: '256px 256px' }}>
          <motion.ellipse
            cx="256"
            cy="256"
            rx="140"
            ry="55"
            fill="none"
            stroke={config.primary}
            strokeWidth="1.5"
            strokeDasharray="10 8 30 10"
            opacity="0.8"
            transform="rotate(-65 256 256)"
            animate={{ rotate: [-65, 295] }}
            transition={{
              duration: config.orbitSpeed * 0.7,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </g>

        {/* Satellite Node Particles */}
        <motion.circle
          cx="100"
          cy="185"
          r="4.5"
          fill="#ffffff"
          filter={`url(#orbGlow-${currentState})`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="412"
          cy="325"
          r="4"
          fill={config.primary}
          filter={`url(#orbGlow-${currentState})`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 }}
        />
        <circle cx="340" cy="130" r="3" fill={config.secondary} opacity="0.8" />
        <circle cx="165" cy="385" r="3.5" fill={config.primary} opacity="0.85" />
      </svg>

      {/* Central Luminous Core */}
      <motion.div
        animate={{
          scale: [0.94, 1.06, 0.94],
          boxShadow: [
            `0 0 35px ${config.glow}, inset 0 0 25px ${config.glow}`,
            `0 0 55px ${config.glow}, inset 0 0 35px ${config.glow}`,
            `0 0 35px ${config.glow}, inset 0 0 25px ${config.glow}`,
          ],
        }}
        transition={{
          duration: config.pulseSpeed,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-20 flex items-center justify-center rounded-full"
        style={{
          width: size * 0.42,
          height: size * 0.42,
          background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${config.primary} 45%, ${config.secondary} 80%, #060913 100%)`,
        }}
      >
        {/* Core Geometry Prism Accent */}
        <div
          className="w-1/2 h-1/2 rounded-full opacity-80 mix-blend-screen animate-spin-slow pointer-events-none"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${config.primary}, transparent 70%)`,
          }}
        />

        {/* State Icon / Center Wave */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-2.5 h-2.5 rounded-full bg-white shadow-lg"
            style={{ boxShadow: `0 0 10px #ffffff, 0 0 20px ${config.primary}` }}
          />
        </div>
      </motion.div>

      {/* State Badge for interactive feedback */}
      {interactive && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          <span
            className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full border backdrop-blur-md"
            style={{
              backgroundColor: 'rgba(11, 17, 32, 0.9)',
              borderColor: config.primary,
              color: config.primary,
            }}
          >
            ● {config.label} (Click to Cycle)
          </span>
        </div>
      )}
    </div>
  );
};
