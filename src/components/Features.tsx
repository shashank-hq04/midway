import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Volume2, 
  ShieldCheck, 
  Monitor, 
  Languages, 
  Database, 
  Zap, 
  Check
} from 'lucide-react';

interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  metric: string;
  techSpecs: string[];
  interactiveDemo: React.ReactNode;
}

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Mini interactive state for capability previews
  const [volumeLevel, setVolumeLevel] = useState<number>(65);
  const [brightnessLevel, setBrightnessLevel] = useState<number>(80);
  const [typedText, setTypedText] = useState<string>('MIDWAY — Win32 Unicode Injection ⚡');
  const [activeLang, setActiveLang] = useState<'EN' | 'HI' | 'HINGLISH'>('HINGLISH');

  const features: FeatureItem[] = [
    {
      id: 'app-discovery',
      tag: 'Desktop Orchestration',
      title: 'Universal App Discovery & Window Reuse',
      description:
        'Midway indexes installed software across Start Menu shortcuts (.lnk), UWP AppIDs, and 32/64-bit Registry hives. Instead of opening cluttered duplicate windows, it scans desktop stations and brings existing instances to the foreground.',
      metric: 'Sub-5ms Lookup • 154 Apps Cached',
      techSpecs: [
        'Win32 EnumDesktopWindows & SetForegroundWindow',
        'Direct UWP shell:AppsFolder\\<AppID> execution',
        '2.5-second launch in-flight deduplication debounce',
      ],
      interactiveDemo: (
        <div className="p-4 rounded-2xl bg-[#060913]/90 border border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[#64748B] text-[11px] pb-2 border-b border-white/[0.05]">
            <span>App Discovery Indexer</span>
            <span className="text-[#00F0FF]">Cache: config/discovered_apps.json</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-white font-medium">Google Chrome</span>
              <span className="text-[10px] text-emerald-400 font-mono">PID 14280 (Window Reused)</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-white font-medium">Windows Calculator</span>
              <span className="text-[10px] text-[#38BDF8] font-mono">UWP: Microsoft.WindowsCalculator</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-white font-medium">Notepad</span>
              <span className="text-[10px] text-[#A855F7] font-mono">System32: notepad.exe</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'win32-injection',
      tag: 'Hardware-Level Keystrokes',
      title: 'Native Win32 SendInput & Keystroke Chords',
      description:
        'Bypasses PySide6 GUI thread event queue bottlenecks by directly utilizing ctypes Win32 INPUT union structures. Executes complex browser chords and injects arbitrary Unicode characters in any focused window.',
      metric: 'Zero-Lag Hardware Dispatch',
      techSpecs: [
        'KEYEVENTF_UNICODE for symbols, equations & Hindi Devanagari',
        'Modifier combinations: Ctrl+T, Ctrl+W, Ctrl+Shift+T, Win+D, Alt+Left',
        'Interactive 64-bit desktop station traversal via OpenDesktopW',
      ],
      interactiveDemo: (
        <div className="p-4 rounded-2xl bg-[#060913]/90 border border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[#64748B] text-[11px] pb-2 border-b border-white/[0.05]">
            <span>Win32 SendInput Stream</span>
            <span className="text-[#38BDF8]">Buffer: 64-bit C Struct</span>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white">
            <span className="text-[10px] text-[#00F0FF] block mb-1">Target Window: Notepad</span>
            <p className="text-sm font-mono text-[#F8FAFC]">{typedText}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setTypedText('∫ x² dx = x³/3 + C (Calculus Equation)')}
              className="px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-[10px] text-[#38BDF8] transition-colors"
            >
              Test Equation
            </button>
            <button
              onClick={() => setTypedText('नमस्ते! मिडवे में आपका स्वागत है। (Hindi Devanagari)')}
              className="px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-[10px] text-[#00F0FF] transition-colors"
            >
              Test Hindi
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'hardware-controls',
      tag: 'System Telemetry',
      title: 'Windows CoreAudio & WMI Hardware Control',
      description:
        'Direct low-level control over Windows master endpoints. Queries and sets master volume without third-party audio apps, adjusts display brightness via WMI, monitors Wi-Fi signal strength, and scans Bluetooth devices.',
      metric: 'Real COM Endpoints • No External Bloat',
      techSpecs: [
        'pycaw Windows CoreAudio COM Master Endpoint (0-100% & Mute)',
        'root\\wmi WmiMonitorBrightnessMethods display dimming',
        'netsh wlan interface querying & profile reconnection without plaintext leaks',
      ],
      interactiveDemo: (
        <div className="p-4 rounded-2xl bg-[#060913]/90 border border-white/[0.08] font-mono text-xs space-y-4">
          <div className="flex items-center justify-between text-[#64748B] text-[11px] pb-2 border-b border-white/[0.05]">
            <span>Live Hardware Sliders</span>
            <span className="text-[#10B981]">CoreAudio / WMI Hooked</span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-[#94A3B8] flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-[#00F0FF]" /> Master Audio Volume
                </span>
                <span className="text-[#00F0FF] font-bold">{volumeLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={volumeLevel}
                onChange={(e) => setVolumeLevel(Number(e.target.value))}
                className="w-full h-1.5 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#00F0FF]"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-[#94A3B8] flex items-center gap-1.5">
                  <Monitor className="w-3.5 h-3.5 text-[#38BDF8]" /> Display Brightness (WMI)
                </span>
                <span className="text-[#38BDF8] font-bold">{brightnessLevel}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={brightnessLevel}
                onChange={(e) => setBrightnessLevel(Number(e.target.value))}
                className="w-full h-1.5 bg-white/[0.1] rounded-lg appearance-none cursor-pointer accent-[#38BDF8]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'offline-voice',
      tag: 'Acoustic Subsystem',
      title: 'Kaldi Vosk Offline Voice & Sub-25ms Interruption',
      description:
        'True privacy with 100% offline speech recognition running locally on CPU. Isolated wake-word "MIDWAY" prevents false activations. Instant speech ducking stops audio playback in under 25 milliseconds when you say "STOP".',
      metric: '0 KB Cloud Audio Sent • < 1% CPU Usage',
      techSpecs: [
        'Vosk small English model (vosk-model-small-en-us-0.15)',
        'Continuous Windows SAPI5 COM speech synthesis lifecycle',
        'Kaldi energy-based VAD filtering background keyboard clicks',
      ],
      interactiveDemo: (
        <div className="p-4 rounded-2xl bg-[#060913]/90 border border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[#64748B] text-[11px] pb-2 border-b border-white/[0.05]">
            <span>Vosk Acoustic FSM</span>
            <span className="text-[#EF4444] font-medium">Wake: "MIDWAY"</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[#64748B] block text-[9px]">AUDIO VAD</span>
              <span className="text-white font-medium">16kHz Mono Stream</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[#64748B] block text-[9px]">INTERRUPT LATENCY</span>
              <span className="text-emerald-400 font-medium">18.4 ms (Verified)</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[#64748B] block text-[9px]">SPEECH CUTOFF</span>
              <span className="text-[#00F0FF] font-medium">pythoncom Ducking</span>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[#64748B] block text-[9px]">CLOUD DEPENDENCY</span>
              <span className="text-[#A855F7] font-medium">0.0% (Zero Cloud)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'multilingual-memory',
      tag: 'Bilingual Dialogue',
      title: 'Multilingual Interaction & Anaphoric Memory',
      description:
        'Talk to Midway naturally in English, Hindi, or conversational Hinglish. Its multi-turn context tracker remembers pronouns and references across turns ("Open that", "Search the same thing", "Do that again").',
      metric: 'Hindi • English • Hinglish • Japanese',
      techSpecs: [
        'Anaphoric resolution tracks last_action, last_target, last_search_query',
        'SAPI5 pronunciation lexicon with phonetic overrides for Indian context',
        'Deterministic offline 6-way translator between English, Hindi & Japanese',
      ],
      interactiveDemo: (
        <div className="p-4 rounded-2xl bg-[#060913]/90 border border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[#64748B] text-[11px] pb-2 border-b border-white/[0.05]">
            <span>Conversational Memory Slot</span>
            <span className="text-[#38BDF8]">Anaphora Resolver</span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="p-1.5 rounded bg-white/[0.03] text-[#94A3B8]">
              Turn 1: <span className="text-white">"Open Notepad"</span> → <span className="text-[#10B981]">Notepad opened</span>
            </div>
            <div className="p-1.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF]">
              Turn 2: <span className="text-white">"Close that"</span> → <span className="text-white font-bold">Resolved "that" = Notepad</span>
            </div>
          </div>
          <div className="pt-2 flex gap-1.5">
            {(['HINGLISH', 'HI', 'EN'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setActiveLang(l)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors ${
                  activeLang === l ? 'bg-[#00F0FF] text-[#060913] font-bold' : 'bg-white/[0.05] text-[#94A3B8]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'dual-engine',
      tag: 'Zero-Cost Architecture',
      title: 'Dual Engine Intelligence & ₹0 Cost Guard',
      description:
        'All deterministic actions (calculators, local file searches, alarms, translation) execute 100% offline. Complex reasoning is routed to Google Gemini 2.5 Flash with strict HTTP 429 quota handling and zero-cost protection.',
      metric: 'Strict ₹0 Cloud Footprint Guaranteed',
      techSpecs: [
        'SymPy symbolic math solver for JEE Physics & Mathematics equations',
        'Autonomous web search engine operating without paid search APIs',
        'ErrorStateManager suppressing duplicate API lecture essays on key errors',
      ],
      interactiveDemo: (
        <div className="p-4 rounded-2xl bg-[#060913]/90 border border-white/[0.08] font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[#64748B] text-[11px] pb-2 border-b border-white/[0.05]">
            <span>Zero-Cost Dispatch Engine</span>
            <span className="text-emerald-400">Budget: ₹0.00 Fixed</span>
          </div>
          <div className="space-y-2">
            <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px]">
              ✓ Local Deterministic Engine: Math, Alarms, Tasks, Apps, Hardware
            </div>
            <div className="p-2 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[11px]">
              ✓ Cloud Fallback: Gemini 2.5 Flash Free Tier with 429 Graceful Fallback
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#0284C7]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/25 text-[#00F0FF] text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 — Verified Capabilities</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Engineered with real depth, not marketing claims
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Every feature shown here exists in the working Midway codebase. Built from the ground up for Windows 11 with native APIs, hardware controls, and an offline-first philosophy.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-medium transition-all duration-200 border ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#00F0FF]/20 to-[#38BDF8]/20 border-[#00F0FF] text-white shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                  : 'bg-[#0B1120]/60 border-white/[0.08] text-[#94A3B8] hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              {feature.tag}
            </button>
          ))}
        </div>

        {/* Main Active Feature Presentation Card */}
        <div className="mt-8 max-w-5xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-gradient-to-b from-[#0F172A]/90 to-[#0B1120]/95 border border-white/[0.12] p-6 sm:p-10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Description & Specs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30">
                      {features[activeTab].tag}
                    </span>
                    <span className="text-xs font-mono text-[#10B981]">
                      {features[activeTab].metric}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">
                    {features[activeTab].title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  {features[activeTab].description}
                </p>

                {/* Technical Specifications Checklist */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                    Production Architecture Details:
                  </span>
                  {features[activeTab].techSpecs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#F8FAFC]">
                      <div className="w-4 h-4 rounded-full bg-[#00F0FF]/20 border border-[#00F0FF]/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#00F0FF]">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="font-mono text-[12px]">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Live Interactive Demo Box */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="rounded-2xl p-1 bg-gradient-to-tr from-[#00F0FF]/30 via-white/[0.05] to-[#A855F7]/30">
                  {features[activeTab].interactiveDemo}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Supporting Grid of Additional Verified Modules */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#0B1120]/70 border border-white/[0.08] hover:border-white/[0.18] transition-all">
            <div className="w-9 h-9 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] flex items-center justify-center mb-4">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
              Sub-25ms Interruption
            </h4>
            <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
              Instant acoustic ducking and TTS thread cutoff upon hearing "STOP MIDWAY" or "quiet".
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1120]/70 border border-white/[0.08] hover:border-white/[0.18] transition-all">
            <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center mb-4">
              <Database className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
              Persistent SQLite Suite
            </h4>
            <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
              Local tasks, study agendas, timers, and personal memory stores with zero cloud reliance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1120]/70 border border-white/[0.08] hover:border-white/[0.18] transition-all">
            <div className="w-9 h-9 rounded-xl bg-[#A855F7]/10 text-[#A855F7] flex items-center justify-center mb-4">
              <Languages className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
              Offline 6-Way Translator
            </h4>
            <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
              Deterministic offline translation between English, Hindi, and Japanese without blocked DLLs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B1120]/70 border border-white/[0.08] hover:border-white/[0.18] transition-all">
            <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center mb-4">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white font-['Space_Grotesk']">
              Hard Privacy Controls
            </h4>
            <p className="mt-2 text-xs text-[#94A3B8] leading-relaxed">
              3-tier control: Wake-Word detection, Push-to-Talk only, or total physical mic disconnection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
