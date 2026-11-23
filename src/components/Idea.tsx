import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Cpu, 
  ArrowRight,
  Shield,
  Check
} from 'lucide-react';

export const Idea: React.FC = () => {
  const comparisons = [
    {
      typical: 'Click Start → type "Chrome" → open new tab → click address bar → type search → hit enter.',
      midway: '"Search JEE 2027 mechanics syllabus on Chrome"',
      benefit: 'Single natural sentence, active tab reused, executed in 140ms.',
    },
    {
      typical: 'Alt-Tab through 12 windows → open Settings → Sound → Volume slider → drag to 40%.',
      midway: '"Midway, volume 40% kardo"',
      benefit: 'Direct Windows CoreAudio COM call, zero menu diving.',
    },
    {
      typical: 'Cloud assistant freezes when internet drops or free trial tokens expire.',
      midway: '100% offline Vosk speech recognition, local database, zero monthly bill.',
      benefit: 'Works anywhere, zero cost forever, total privacy.',
    },
  ];

  return (
    <section id="idea" className="relative py-28 overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/25 text-[#00F0FF] text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 — The Core Idea</span>
          </div>
          
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            What if talking to your computer felt as natural as talking to a friend?
          </h2>
          
          <p className="mt-6 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Every day, we click through dozens of menus, navigate nested windows, and hunt for buried settings. Midway was born out of a simple question: <span className="text-white font-medium">Why can’t your computer just understand what you want to do and do it?</span>
          </p>
        </div>

        {/* 3 Pillars of Midway */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Conversational Native */}
          <div className="relative group p-8 rounded-3xl bg-gradient-to-b from-[#0F172A]/70 to-[#0B1120]/90 border border-white/[0.08] hover:border-[#00F0FF]/40 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,240,255,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Fluent in Hindi, English & Hinglish
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                You don't need to speak like a robot. Speak naturally: <span className="text-white italic">"Midway, volume kam karo"</span> or <span className="text-white italic">"Open Notepad and start dictation"</span>. Midway resolves anaphoric context like "Open that" and "Search the same thing".
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#00F0FF]">
              <span>Contextual Turn Memory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2: Deep Windows Orchestration */}
          <div className="relative group p-8 rounded-3xl bg-gradient-to-b from-[#0F172A]/70 to-[#0B1120]/90 border border-white/[0.08] hover:border-[#38BDF8]/40 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Deep Windows 11 Integration
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Not another glorified web chatbot wrapper. Midway talks directly to native Windows Win32 APIs, Windows CoreAudio endpoints, WMI display methods, and UWP Shell AppIDs to control real applications.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#38BDF8]">
              <span>Hardware-Level SendInput</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 3: Offline-First & Zero Cost */}
          <div className="relative group p-8 rounded-3xl bg-gradient-to-b from-[#0F172A]/70 to-[#0B1120]/90 border border-white/[0.08] hover:border-[#A855F7]/40 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A855F7]/10 border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                Offline-First & Zero-Cost Policy
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Engineered with strict ₹0 budget architecture. Runs a high-speed Kaldi Vosk acoustic model directly on CPU, local SQLite storage, and only taps Google Gemini 2.5 Flash for deep reasoning with graceful quota fallback.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#A855F7]">
              <span>No Subscriptions • Total Privacy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* The Difference: Side-by-side Real World Comparison */}
        <div className="mt-16 rounded-3xl bg-[#0B1120]/90 border border-white/[0.1] p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white">
                The Reality Check
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1">
                How everyday desktop tasks feel with and without Midway.
              </p>
            </div>
            <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]">
              Verified in Production
            </span>
          </div>

          <div className="mt-8 space-y-6">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 rounded-2xl bg-[#060913]/70 border border-white/[0.05] items-center"
              >
                <div className="lg:col-span-5 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#EF4444]">
                    The Tedious Manual Way
                  </span>
                  <p className="text-sm text-[#94A3B8] font-mono leading-relaxed">
                    {item.typical}
                  </p>
                </div>

                <div className="hidden lg:flex lg:col-span-1 justify-center text-[#64748B]">
                  <ArrowRight className="w-5 h-5 text-[#00F0FF]" />
                </div>

                <div className="lg:col-span-6 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00F0FF] font-semibold">
                      The Midway Conversational Way
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3" /> {item.benefit}
                    </span>
                  </div>
                  <p className="text-sm text-white font-medium bg-white/[0.03] p-2.5 rounded-xl border border-white/[0.08]">
                    {item.midway}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
