import React from 'react';
import { Sparkles } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-28 overflow-hidden bg-[#060913]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#00F0FF]/10 via-[#0284C7]/5 to-[#A855F7]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/25 text-[#00F0FF] text-xs font-mono font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>04 — The Philosophy</span>
        </div>

        {/* Big Quote / Headline */}
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          "Technology should understand us,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#38BDF8]">
            not the other way around.
          </span>"
        </h2>

        {/* Editorial Body */}
        <div className="mt-8 space-y-6 text-base sm:text-lg text-[#94A3B8] font-light leading-relaxed max-w-2xl mx-auto">
          <p>
            Computers were always supposed to be bicycles for the mind. But over time, our days became an endless maze of nested dialogs, window switching, and hunting through menus just to do simple things.
          </p>
          <p>
            Midway didn’t start as a venture-backed startup pitch or another generic SaaS tool. It started in a quiet bedroom on a modest HP laptop with an AMD Ryzen 3 processor, built by someone who wanted their computer to just <span className="text-white font-medium">listen, understand, and help</span>.
          </p>
          <p className="text-white font-medium">
            Whether you speak in English, Hindi, or conversational Hinglish — whether you want to focus on studying, launch your tools, or silence your speakers without looking away from your work — Midway is here to bridge the gap between human thought and desktop action.
          </p>
        </div>

        {/* Author Signature Card */}
        <div className="mt-12 inline-flex items-center gap-4 p-4 rounded-2xl bg-[#0B1120]/80 border border-white/[0.08] backdrop-blur-md">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00F0FF] to-[#0284C7] p-0.5">
            <div className="w-full h-full rounded-full bg-[#060913] flex items-center justify-center text-white font-bold text-xs font-mono">
              SS
            </div>
          </div>
          <div className="text-left">
            <div className="text-sm font-bold text-white font-['Space_Grotesk']">
              Shashank Shekhar
            </div>
            <div className="text-xs font-mono text-[#00F0FF]">
              Creator of Midway • Built for Boss
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
