import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MidwayOrb } from './MidwayOrb';
import type { OrbState } from './MidwayOrb';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Mic, 
  Cpu, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  const [orbState, setOrbState] = useState<OrbState>('IDLE');
  const [activePrompt, setActivePrompt] = useState<string>('Listening for "MIDWAY"...');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('System nominal. Ready for conversational input.');

  const samplePrompts = [
    {
      text: '"Open Chrome and search JEE syllabus"',
      state: 'EXECUTING' as OrbState,
      response: 'Chrome is open, Boss. Searching Google for "JEE syllabus".',
      badge: 'Browser Automation',
    },
    {
      text: '"Volume 40% kardo aur Notepad kholo"',
      state: 'PROCESSING' as OrbState,
      response: 'Volume set to 40%, Boss. Notepad is open and ready.',
      badge: 'Bilingual Control',
    },
    {
      text: '"Wi-Fi connection aur battery status batao"',
      state: 'SPEAKING' as OrbState,
      response: 'Wi-Fi is connected (88% signal). Battery at 92%, Boss.',
      badge: 'Hardware Telemetry',
    },
    {
      text: '"Midway, stop"',
      state: 'INTERRUPTED' as OrbState,
      response: 'Immediate audio cutoff (<25ms). Speech halted, Boss.',
      badge: 'Voice Interruption',
    },
  ];

  const handlePromptClick = (prompt: typeof samplePrompts[0]) => {
    setActivePrompt(prompt.text);
    setOrbState(prompt.state);
    setFeedbackMessage(prompt.response);
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Background Lighting & Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#00F0FF]/15 via-[#0284C7]/10 to-[#A855F7]/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Tech Grid Subtle Texture */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Product Announcement Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#0B1120]/90 border border-white/[0.1] shadow-[0_0_20px_rgba(0,240,255,0.1)] backdrop-blur-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-medium text-[#94A3B8]">
              Personal AI Desktop Operating Environment for Windows 11
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-[#00F0FF] font-semibold flex items-center gap-1">
              v4.0 Final <Zap className="w-3 h-3" />
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.2] px-2"
          >
            Your Computer.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#0284C7] inline-block">
              Your Words.
            </span>{' '}
            <span className="inline-block">Your Way.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-[#94A3B8] font-light max-w-2xl mx-auto leading-relaxed"
          >
            Meet <span className="text-white font-medium">Midway</span> — a smarter, more natural way to interact with your desktop. Desktop control, application management, and browser automation through everyday conversation in Hindi, English, and Hinglish.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#experience"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#060913] bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#0284C7] rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Explore Interactive Experience</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://github.com/ShashankShekhar-Moon/MIDWAY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#F8FAFC] bg-[#0B1120]/80 hover:bg-[#0F172A] border border-white/[0.12] hover:border-[#00F0FF]/40 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
            >
              <GithubIcon className="w-4 h-4 text-[#00F0FF]" />
              <span>Explore Source Code</span>
            </a>
          </motion.div>

          {/* Key Architecture Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-[#64748B]"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <Mic className="w-3.5 h-3.5 text-[#00F0FF]" /> 100% Offline Kaldi Vosk Engine
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" /> Win32 SendInput & AppID
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" /> Zero-Cost Policy (₹0 API)
            </span>
          </motion.div>
        </div>

        {/* Central Visually Impressive Interactive Product HUD Preview */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-14 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0F172A]/90 to-[#0B1120]/95 border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_-10px_rgba(0,240,255,0.2)] backdrop-blur-2xl p-4 sm:p-7 overflow-hidden">
            {/* Top Chrome / Window Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80 border border-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#EAB308]/80 border border-[#EAB308]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80 border border-[#10B981]" />
                </div>
                <div className="h-4 w-px bg-white/[0.1] mx-1" />
                <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <img src="/midway_logo.svg" alt="" className="w-4 h-4" />
                    MIDWAY Core 4.0
                  </span>
                  <span className="text-[#64748B]">|</span>
                  <span className="text-[#00F0FF]">Personal AI Desktop Station</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-[#94A3B8]">
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                  RAM: ~180MB
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  MUTEX LOCKED
                </span>
              </div>
            </div>

            {/* Inner Interactive Visual HUD Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6 items-center">
              {/* Left Column: Interactive Orb & Acoustic Resonance */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
                <div className="relative">
                  <MidwayOrb
                    state={orbState}
                    size={240}
                    interactive={true}
                    onStateChange={(newState) => setOrbState(newState)}
                  />
                </div>

                {/* Simulated Audio Spectrum Waveform */}
                <div className="flex items-center gap-1.5 mt-4 h-6">
                  {[24, 45, 78, 30, 92, 60, 40, 85, 30, 70, 50, 90, 35, 65, 45, 20].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: orbState === 'IDLE' ? 4 : [6, height * 0.35, 6],
                        opacity: orbState === 'IDLE' ? 0.3 : [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.06,
                        ease: 'easeInOut',
                      }}
                      className="w-1 bg-gradient-to-t from-[#0284C7] to-[#00F0FF] rounded-full"
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-[#64748B] mt-2">
                  Live Vosk VAD • Acoustic Buffer 16kHz
                </span>
              </div>

              {/* Right Column: Live Terminal Dialogue & Quick Prompt Chips */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                {/* Active Transcript Box */}
                <div className="p-4 rounded-2xl bg-[#060913]/90 border border-white/[0.08] font-mono text-xs space-y-2.5">
                  <div className="flex items-center justify-between text-[#64748B] text-[11px] pb-2 border-b border-white/[0.05]">
                    <span className="flex items-center gap-1.5 text-[#38BDF8]">
                      <Terminal className="w-3.5 h-3.5" /> Conversational Router
                    </span>
                    <span className="text-emerald-400 font-medium">State: {orbState}</span>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-[#94A3B8]">
                      <span className="text-[#A855F7]">user@desktop:~$</span> {activePrompt}
                    </p>
                    <p className="text-white flex items-start gap-1.5">
                      <span className="text-[#00F0FF] font-bold">MIDWAY:</span>{' '}
                      <span className="text-[#F8FAFC]">{feedbackMessage}</span>
                    </p>
                  </div>
                </div>

                {/* Clickable Real Prompt Scenarios */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#00F0FF]" /> Click a real prompt to simulate:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {samplePrompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handlePromptClick(p)}
                        className={`text-left p-2.5 rounded-xl border text-xs font-mono transition-all duration-200 ${
                          activePrompt === p.text
                            ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                            : 'bg-white/[0.03] border-white/[0.06] text-[#94A3B8] hover:bg-white/[0.06] hover:text-white hover:border-white/[0.15]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.05] text-[#38BDF8]">
                            {p.badge}
                          </span>
                        </div>
                        <p className="truncate text-white font-medium">{p.text}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom HUD Status Strip */}
            <div className="pt-4 mt-2 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#64748B]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> UWP AppID Direct Launch
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Chrome Active Tab Reuse
                </span>
                <span className="hidden md:flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Zero API Leak Guard
                </span>
              </div>
              <span className="text-[#00F0FF]">Engineered for Shashank Shekhar ("Boss")</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
