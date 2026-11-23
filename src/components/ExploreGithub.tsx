import React, { useState } from 'react';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Terminal
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const ExploreGithub: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const repoUrl = 'https://github.com/ShashankShekhar-Moon/MIDWAY';
  const cloneCmd = 'git clone https://github.com/ShashankShekhar-Moon/MIDWAY.git';

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="github" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#060913] via-[#0B1120] to-[#060913]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-white text-xs font-mono font-medium mb-4">
            <GithubIcon className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>05 — Open Architecture</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Explore the Source Code on GitHub
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Midway is built with clean Python, PySide6, official Google GenAI SDK, and native Windows Win32 integrations. Inspect the architecture, read the engineering reports, or run it on your own machine.
          </p>
        </div>

        {/* GitHub Repository Showcase Card */}
        <div className="mt-12 rounded-3xl bg-gradient-to-b from-[#0F172A]/90 to-[#0B1120]/95 border border-white/[0.12] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-[#94A3B8]">ShashankShekhar-Moon /</span>
                  <span className="text-lg font-bold font-['Space_Grotesk'] text-white">MIDWAY</span>
                </div>
                <span className="text-xs font-mono text-[#10B981]">Public Repository • Windows 11</span>
              </div>
            </div>

            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#060913] bg-[#00F0FF] hover:bg-[#38BDF8] shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              <span>View Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Clone Terminal Snippet */}
          <div className="mt-8">
            <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-2">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00F0FF]" /> Quick Clone Snippet
              </span>
              <span className="text-[11px] text-[#64748B]">Terminal / PowerShell</span>
            </div>
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#060913] border border-white/[0.08] font-mono text-xs">
              <span className="text-white truncate pr-4">
                <span className="text-[#00F0FF]">$</span> {cloneCmd}
              </span>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.06]">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-xs font-mono text-[#00F0FF] block mb-1">Architecture</span>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Single-process Win32 mutex architecture designed specifically for low-RAM laptops.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-xs font-mono text-[#38BDF8] block mb-1">Zero-Cost Policy</span>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Deterministic local tools + Google Gemini Flash free tier with quota circuit breakers.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-xs font-mono text-[#A855F7] block mb-1">Documentation</span>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Comprehensive engineering reports, test plans, and setup guides included in the repo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
