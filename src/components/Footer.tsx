import React from 'react';
import { Heart } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060913] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <img
                src="/midway_logo.svg"
                alt="Midway Original Vector Logo"
                className="w-full h-full"
              />
            </div>
            <div>
              <span className="font-['Space_Grotesk'] font-bold text-base tracking-wider text-white">
                MIDWAY
              </span>
              <p className="text-xs text-[#94A3B8]">
                Your Computer. Your Words. Your Way.
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8] font-mono">
            <a href="#idea" className="hover:text-white transition-colors">
              The Vision
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#philosophy" className="hover:text-white transition-colors">
              Philosophy
            </a>
            <a
              href="https://github.com/ShashankShekhar-Moon/MIDWAY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF] hover:underline flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <p>© 2026 Midway. Open Architecture for Windows 11.</p>
          <p className="flex items-center gap-1.5 text-[#94A3B8]">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> and curiosity by{' '}
            <span className="text-white font-medium">Shashank Shekhar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
