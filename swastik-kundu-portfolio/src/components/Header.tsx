import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'The Story', href: '#story', id: 'story' },
    { label: 'The Journey', href: '#journey', id: 'journey' },
    { label: 'Experiments', href: '#experiments', id: 'experiments' },
    { label: 'Learning', href: '#learning', id: 'learning' },
    { label: 'Beyond Tech', href: '#art', id: 'art' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111318]/90 backdrop-blur-xl border-b border-[#33353a]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
          : 'bg-[#111318]/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#hero"
            className="font-display font-semibold text-lg tracking-tight text-white transition-opacity hover:opacity-85 flex items-center gap-1.5"
          >
            <span className="text-white font-bold tracking-wider">SWASTIK</span>
            <span className="text-[#8e937e] font-mono">//</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#c8f169] bg-[#c8f169]/10 px-1.5 py-0.5 rounded border border-[#c8f169]/20">
              IN PROGRESS
            </span>
          </a>

          {/* Still figuring it out badge */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1a1b21] border border-[#33353a]/50 shadow-[0_0_20px_-4px_rgba(200,241,105,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8f169] animate-pulse"></span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#c4c9b2]">
              STILL FIGURING IT OUT
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`font-mono text-[13px] uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-white font-bold border-b border-[#c8f169] pb-0.5'
                    : 'text-[#92949D] hover:text-[#e2e2e9]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/918609726725"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wide uppercase px-3 py-1.5 rounded-lg bg-[#1e2025] hover:bg-[#282a2f] text-[#c8f169] border border-[#33353a] transition-all hover:scale-[1.02]"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#1a1b21] text-[#e2e2e9] hover:text-white border border-[#33353a]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111318]/95 backdrop-blur-2xl border-b border-[#33353a] px-5 py-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#1e2025]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#92949D]">
              Navigation
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#c8f169]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8f169] animate-pulse"></span>
              LIVE PORTFOLIO
            </span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-mono text-sm uppercase py-2 px-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-[#1e2025] text-[#c8f169] font-semibold'
                  : 'text-[#92949D] hover:bg-[#1a1b21] hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="mailto:swastikkundu675@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-[#c8f169] text-[#111318] font-mono text-xs font-bold uppercase tracking-wider block"
            >
              swastikkundu675@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
