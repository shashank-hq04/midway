import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Vision', href: '#idea' },
    { name: 'Experience', href: '#experience' },
    { name: 'Capabilities', href: '#features' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Source Code', href: '#github' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060913]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-[#00F0FF]/25 rounded-full blur-md group-hover:bg-[#00F0FF]/40 transition-all duration-300" />
              <img
                src="/midway_logo.svg"
                alt="Midway Original Vector Logo"
                className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-['Space_Grotesk'] font-bold text-base sm:text-xl tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
                  MIDWAY
                </span>
                <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono font-semibold uppercase tracking-wider bg-[#00F0FF]/10 text-[#00F0FF] rounded border border-[#00F0FF]/30">
                  v4.0 PROD
                </span>
              </div>
              <span className="text-[10px] text-[#94A3B8] tracking-widest uppercase font-mono hidden sm:inline">
                Personal AI Desktop Environment
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#0B1120]/80 border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-white hover:bg-white/[0.05] rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live System Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A]/90 border border-white/[0.08] text-[11px] font-mono text-[#94A3B8]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span>Windows 11 Native</span>
            </div>

            {/* GitHub Quick Link */}
            <a
              href="https://github.com/ShashankShekhar-Moon/MIDWAY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Midway on GitHub"
              className="p-2 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <a
              href="#experience"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#060913] bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] rounded-full hover:shadow-[0_0_20px_rgba(0,240,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Midway</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://github.com/ShashankShekhar-Moon/MIDWAY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-2 text-[#94A3B8] hover:text-white"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94A3B8] hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0B1120] border border-white/[0.1] shadow-2xl space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                Windows 11 Ready
              </span>
              <span className="text-[#00F0FF]">Offline Core Active</span>
            </div>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#94A3B8] hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#060913] bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] rounded-xl"
              >
                <Sparkles className="w-4 h-4" />
                <span>Try Interactive Experience</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
