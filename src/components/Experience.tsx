import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MidwayOrb } from './MidwayOrb';
import type { OrbState } from './MidwayOrb';
import { 
  Sparkles, 
  Terminal, 
  Volume2, 
  Laptop, 
  FileText, 
  Calendar, 
  CheckCircle,
  Send,
  Zap
} from 'lucide-react';
import { ChromeIcon } from './Icons';

interface Scenario {
  id: string;
  category: string;
  userPrompt: string;
  userLanguage: string;
  orbState: OrbState;
  midwayResponse: string;
  executionAction: string;
  systemEffect: {
    type: 'volume' | 'window' | 'search' | 'interrupt' | 'tasks';
    value?: string | number;
    detail: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: 'chrome-search',
    category: 'Browser Automation',
    userPrompt: 'Midway, open Chrome and search JEE mechanics formulas',
    userLanguage: 'English',
    orbState: 'EXECUTING',
    midwayResponse: 'Chrome is open, Boss. Searching Google for "JEE mechanics formulas".',
    executionAction: 'EnumDesktopWindows → Reused Chrome PID 14280 → Injected Ctrl+L → Dispatched URL',
    systemEffect: {
      type: 'search',
      value: 'https://google.com/search?q=JEE+mechanics+formulas',
      detail: 'Chrome window focused and URL opened in 118ms without opening duplicate browser instance',
    },
  },
  {
    id: 'bilingual-volume',
    category: 'Bilingual System Control',
    userPrompt: 'Midway, volume 35% kardo aur Notepad kholo',
    userLanguage: 'Hinglish (Hindi + English)',
    orbState: 'EXECUTING',
    midwayResponse: 'Volume set to 35%, Boss. Notepad is open.',
    executionAction: 'CoreAudio Master Endpoint set to 0.35 → App discovery launched "notepad.exe"',
    systemEffect: {
      type: 'volume',
      value: 35,
      detail: 'Windows master audio adjusted to 35% and active desktop station focused Notepad',
    },
  },
  {
    id: 'text-inject',
    category: 'Win32 Unicode Injection',
    userPrompt: 'Notepad me formula likho: E = mc² aur λ = h/p',
    userLanguage: 'Hinglish + Unicode Symbols',
    orbState: 'SPEAKING',
    midwayResponse: 'Formulas typed into active Notepad window, Boss.',
    executionAction: 'Win32 SendInput Unicode KEYEVENTF_UNICODE bypasses PySide6 GUI thread bottlenecks',
    systemEffect: {
      type: 'window',
      value: 'E = mc²\nλ = h/p',
      detail: 'Injected 2 lines of scientific Unicode symbols directly into active Notepad editor',
    },
  },
  {
    id: 'hardware-wifi',
    category: 'Hardware Diagnostics',
    userPrompt: 'Wi-Fi connection check karo aur IP probe run karo',
    userLanguage: 'Hindi / Hinglish',
    orbState: 'PROCESSING',
    midwayResponse: 'Wi-Fi SSID "MoonNet" is connected with 92% signal. Dual socket probe (DNS + 204) verified online, Boss.',
    executionAction: 'netsh wlan show interfaces → 8.8.8.8:53 socket + generate_204 HTTP probe',
    systemEffect: {
      type: 'window',
      value: 'SSID: MoonNet | Signal: 92% | Cipher: WPA2-Personal | Gateway: 192.168.1.1',
      detail: 'Independent dual probe distinguished local gateway from verified worldwide internet',
    },
  },
  {
    id: 'instant-stop',
    category: 'Voice Interruption',
    userPrompt: 'STOP MIDWAY',
    userLanguage: 'Voice Emergency Cutoff',
    orbState: 'INTERRUPTED',
    midwayResponse: 'Speech audio ducked and synthesis thread terminated in 19ms.',
    executionAction: 'Vosk energy gate triggered stop event → pythoncom audio stream muted',
    systemEffect: {
      type: 'interrupt',
      value: '19 ms latency',
      detail: 'Immediate acoustic ducking prevents assistant from talking over user conversation',
    },
  },
  {
    id: 'study-tasks',
    category: 'Local SQLite Persistence',
    userPrompt: 'Aaj ka Physics study task list dikhao',
    userLanguage: 'Hindi / English',
    orbState: 'SPEAKING',
    midwayResponse: 'Boss, you have 2 pending Physics tasks: 1. Ray Optics Formulas, 2. Rotational Mechanics MCQs.',
    executionAction: 'Queried SQLite data/tasks.db WHERE subject = "Physics" AND status = "PENDING"',
    systemEffect: {
      type: 'tasks',
      value: '2 Tasks Active',
      detail: 'Fetched and formatted local study agenda directly from zero-cloud SQLite database',
    },
  },
];

export const Experience: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [customInput, setCustomInput] = useState<string>('');

  const handleSelectScenario = (scenario: Scenario) => {
    setSelectedScenario(scenario);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    // Simulate intelligent classification
    const matched = SCENARIOS.find(s => 
      customInput.toLowerCase().includes('volume') ? s.id === 'bilingual-volume' :
      customInput.toLowerCase().includes('stop') ? s.id === 'instant-stop' :
      customInput.toLowerCase().includes('task') || customInput.toLowerCase().includes('study') ? s.id === 'study-tasks' :
      customInput.toLowerCase().includes('wifi') ? s.id === 'hardware-wifi' :
      s.id === 'chrome-search'
    ) || SCENARIOS[0];

    setSelectedScenario({
      ...matched,
      userPrompt: customInput,
      userLanguage: 'Custom User Voice/Text Input',
    });
    setCustomInput('');
  };

  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#060913] via-[#0B1120] to-[#060913]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#0284C7]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/25 text-[#00F0FF] text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 — The Conversational Experience</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            How interacting with your computer feels with Midway
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Real spoken commands. Instant Win32 desktop responses. Zero clunky menus. Explore simulated conversational scenarios below or enter your own query.
          </p>
        </div>

        {/* Interactive Scenario Chips */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {SCENARIOS.map((scenario) => {
            const isActive = selectedScenario.id === scenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => handleSelectScenario(scenario)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-white shadow-[0_0_20px_rgba(0,240,255,0.25)] scale-105'
                    : 'bg-[#0F172A]/70 border-white/[0.08] text-[#94A3B8] hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#00F0FF] animate-pulse' : 'bg-[#64748B]'}`} />
                <span>{scenario.category}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Experience Showcase Stage */}
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Conversational Dialogue Feed & Voice Visualizer */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#0B1120]/90 border border-white/[0.1] shadow-2xl backdrop-blur-xl">
            <div className="space-y-6">
              {/* Dialogue Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
                      Conversational Stream
                    </h4>
                    <span className="text-[10px] font-mono text-[#94A3B8]">
                      Intent: {selectedScenario.category}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/[0.05] text-[#38BDF8] border border-white/[0.08]">
                  {selectedScenario.userLanguage}
                </span>
              </div>

              {/* Chat Dialogue Bubbles */}
              <div className="space-y-4">
                {/* User Message Bubble */}
                <motion.div
                  key={`user-${selectedScenario.id}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#0284C7] flex items-center justify-center text-[11px] font-bold text-[#060913] flex-shrink-0">
                    You
                  </div>
                  <div className="p-4 rounded-2xl rounded-tl-sm bg-[#0F172A] border border-white/[0.08] text-sm text-[#F8FAFC] font-medium shadow-md max-w-md">
                    "{selectedScenario.userPrompt}"
                  </div>
                </motion.div>

                {/* Midway Assistant Response Bubble */}
                <motion.div
                  key={`midway-${selectedScenario.id}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="flex items-start gap-3 flex-row-reverse"
                >
                  <div className="w-7 h-7 rounded-full bg-[#060913] border border-[#00F0FF]/50 flex items-center justify-center p-1 flex-shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.4)]">
                    <img src="/midway_logo.svg" alt="Midway" className="w-full h-full" />
                  </div>
                  <div className="p-4 rounded-2xl rounded-tr-sm bg-gradient-to-br from-[#0F172A] to-[#111D32] border border-[#00F0FF]/30 text-sm text-[#F8FAFC] shadow-lg max-w-md space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#00F0FF]">
                      <span>MIDWAY (Concise Policy)</span>
                      <span className="text-[#10B981] flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Executed
                      </span>
                    </div>
                    <p className="font-medium text-white">
                      "{selectedScenario.midwayResponse}"
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Underlying Win32 Action Trace */}
              <div className="p-3.5 rounded-xl bg-[#060913]/90 border border-white/[0.06] text-xs font-mono space-y-1">
                <span className="text-[10px] uppercase text-[#64748B] tracking-wider block">
                  Underlying Windows 11 API Dispatch:
                </span>
                <p className="text-[#38BDF8] text-[11px] truncate">
                  ⚡ {selectedScenario.executionAction}
                </p>
              </div>
            </div>

            {/* Custom Interactive Input Bar */}
            <form onSubmit={handleCustomSubmit} className="mt-6 pt-4 border-t border-white/[0.08]">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder='Try typing: "volume 20%", "open chrome", "stop midway"...'
                  className="w-full pl-4 pr-11 py-3 rounded-xl bg-[#060913] border border-white/[0.1] text-xs font-mono text-white placeholder-[#64748B] focus:outline-none focus:border-[#00F0FF] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                />
                <button
                  type="submit"
                  aria-label="Send simulated command"
                  className="absolute right-2 p-2 rounded-lg bg-[#00F0FF]/20 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#060913] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <span className="text-[10px] font-mono text-[#64748B] mt-1.5 block">
                Press Enter to classify intent through Midway's deterministic intent router.
              </span>
            </form>
          </div>

          {/* Right Column: Live Simulated Desktop & Orb HUD */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-3xl bg-[#0F172A]/80 border border-white/[0.1] shadow-2xl backdrop-blur-xl">
            {/* Top Orb Visualization */}
            <div className="flex flex-col items-center justify-center py-4">
              <div className="scale-90 sm:scale-100">
                <MidwayOrb
                  state={selectedScenario.orbState}
                  size={200}
                  interactive={true}
                />
              </div>
              <span className="text-xs font-mono font-medium text-[#00F0FF] mt-2">
                Acoustic Core: {selectedScenario.orbState}
              </span>
            </div>

            {/* Simulated Desktop System Feedback Panel */}
            <div className="p-4 rounded-2xl bg-[#060913]/90 border border-white/[0.08] space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs text-[#94A3B8] pb-2 border-b border-white/[0.06]">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <Laptop className="w-3.5 h-3.5 text-[#38BDF8]" /> Windows 11 Desktop Effect
                </span>
                <span className="text-[10px] text-emerald-400">Win32 Hook Active</span>
              </div>

              {/* Dynamic UI based on effect type */}
              {selectedScenario.systemEffect.type === 'volume' && (
                <div className="space-y-2 py-1">
                  <div className="flex justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-[#94A3B8]">
                      <Volume2 className="w-4 h-4 text-[#00F0FF]" /> Master CoreAudio Volume
                    </span>
                    <span className="text-[#00F0FF] font-bold">
                      {selectedScenario.systemEffect.value}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/[0.1] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#0284C7] to-[#00F0FF] transition-all duration-500 rounded-full"
                      style={{ width: `${selectedScenario.systemEffect.value}%` }}
                    />
                  </div>
                </div>
              )}

              {selectedScenario.systemEffect.type === 'search' && (
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-white">
                    <ChromeIcon className="w-3.5 h-3.5 text-[#38BDF8]" /> Active Tab URL Dispatch
                  </div>
                  <p className="text-[11px] text-[#00F0FF] truncate">
                    {selectedScenario.systemEffect.value}
                  </p>
                </div>
              )}

              {selectedScenario.systemEffect.type === 'interrupt' && (
                <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-xs space-y-1 text-orange-300">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Zap className="w-3.5 h-3.5 text-orange-400" /> Immediate Audio Cutoff Triggered
                  </div>
                  <p className="text-[11px]">
                    Latency: {selectedScenario.systemEffect.value} (Target: &lt;25ms)
                  </p>
                </div>
              )}

              {selectedScenario.systemEffect.type === 'tasks' && (
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-white">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#10B981]" /> SQLite Local Tasks
                    </span>
                    <span className="text-[10px] text-emerald-400">Physics 12</span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8] space-y-0.5">
                    <div>• [PENDING] Ray Optics Formula Sheet</div>
                    <div>• [PENDING] Rotational Mechanics 20 MCQs</div>
                  </div>
                </div>
              )}

              {selectedScenario.systemEffect.type === 'window' && (
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-white">
                    <FileText className="w-3.5 h-3.5 text-[#A855F7]" /> Win32 Text Injection Target
                  </div>
                  <pre className="text-[11px] text-white font-mono whitespace-pre-wrap">
                    {selectedScenario.systemEffect.value}
                  </pre>
                </div>
              )}

              <p className="text-[11px] text-[#94A3B8] leading-tight">
                {selectedScenario.systemEffect.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
