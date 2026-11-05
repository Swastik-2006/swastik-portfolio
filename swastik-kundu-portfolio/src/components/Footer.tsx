import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0c0e13] border-t border-[#1e2025] py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-1.5">
          <p className="font-display font-semibold text-lg sm:text-xl text-white tracking-tight">
            Still learning. Still experimenting. Still becoming.
          </p>
          <p className="font-mono text-xs text-[#92949D]">
            Crafted with discipline, computational curiosity, and high-cadence exploration.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
          <div className="flex items-center justify-between md:justify-end gap-4 w-full">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c8f169] font-bold">
              SWASTIK KUNDU // 2026
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1a1b21] hover:bg-[#282a2f] border border-[#33353a] text-[#92949D] hover:text-[#c8f169] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
          <span className="font-mono text-[11px] text-[#92949D]">
            © 2026 ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
};
