import React, { useState } from 'react';
import { ArrowDown, Code2, Radar, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="w-full relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background Ambient Glows */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-[#c8f169]/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-48 right-12 w-80 h-80 rounded-full bg-[#3630b5]/25 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#c2c1ff]/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Typographic Manifesto */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Intro Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1b21] border border-[#33353a]/70 w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f169] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8f169]"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#c4c9b2]">
                HELLO, I'M SWASTIK KUNDU.
              </span>
            </div>

            {/* Giant Title */}
            <div className="flex flex-col tracking-tight">
              <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[72px] text-white tracking-tighter uppercase leading-[0.98]">
                I DON'T HAVE IT ALL FIGURED OUT.
              </h1>
              <div className="mt-2 flex items-center gap-3 flex-wrap">
                <span className="font-display font-bold text-4xl sm:text-6xl lg:text-[72px] tracking-tighter uppercase text-[#c8f169] drop-shadow-[0_0_28px_rgba(200,241,105,0.3)]">
                  BUT I'M STILL BUILDING.
                </span>
              </div>
            </div>

            {/* Subtext Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#92949D] max-w-xl leading-relaxed">
              A Computer Science student trying different things, exploring technology, chasing
              opportunities, making mistakes, learning through experiments, and figuring out what
              comes next.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#story"
                className="px-6 py-3.5 rounded-lg bg-[#c8f169] text-[#111318] font-display font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-[#d6f785] shadow-[0_0_24px_-4px_rgba(200,241,105,0.3)] flex items-center gap-2 group"
              >
                <span>EXPLORE MY JOURNEY</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href="#experiments"
                className="px-6 py-3.5 rounded-lg bg-[#282a2f] text-white hover:text-[#c8f169] transition-all duration-200 hover:bg-[#33353a] font-display font-bold text-sm sm:text-base tracking-wide uppercase flex items-center gap-2 border border-[#33353a]/60"
              >
                <span>WHAT I'VE BUILT</span>
                <Code2 className="w-4 h-4" />
              </a>
            </div>

            {/* Status / Philosophy / Location Ticker */}
            <div className="pt-6 border-t border-[#1e2025] grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#92949D]">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/90">
                  STATUS
                </span>
                <span className="font-sans text-sm text-[#c4c9b2] mt-0.5">
                  {PERSONAL_INFO.status}
                </span>
              </div>

              <div className="flex flex-col sm:border-l sm:border-[#1e2025] sm:pl-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/90">
                  CORE PHILOSOPHY
                </span>
                <span className="font-sans text-sm text-[#c4c9b2] mt-0.5">
                  {PERSONAL_INFO.philosophy}
                </span>
              </div>

              <div className="flex flex-col sm:border-l sm:border-[#1e2025] sm:pl-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/90">
                  LOCATION
                </span>
                <span className="font-sans text-sm text-[#c4c9b2] mt-0.5">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Digital Asymmetrical Fragment Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full relative bg-[#1a1b21] rounded-2xl p-4 sm:p-5 border border-[#33353a]/80 shadow-2xl overflow-hidden group transition-all duration-300 hover:border-[#c8f169]/40"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#282a2f]/60 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c8f169]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c2c1ff]"></span>
                </div>
                <span className="font-mono text-[11px] tracking-wider text-[#92949D]">
                  COMPOSITION // UNFINISHED.SYS
                </span>
              </div>

              {/* Graphic Canvas */}
              <div className="relative w-full h-[400px] sm:h-[420px] rounded-xl overflow-hidden bg-[#0c0e13] border border-[#282a2f]/50 flex items-center justify-center p-4">
                {/* Grid background dots */}
                <div className="absolute inset-0 bg-[radial-gradient(#33353a_1px,transparent_1px)] [background-size:18px_18px] opacity-40"></div>

                {/* Geometric Wireframes & Abstract Art */}
                <svg
                  className="absolute w-full h-full text-[#92949D]/20 transition-transform duration-700 pointer-events-none"
                  style={{
                    transform: isHovered ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0deg)',
                  }}
                  fill="none"
                  viewBox="0 0 400 400"
                >
                  <circle cx="200" cy="200" r="160" stroke="currentColor" strokeDasharray="4 6" />
                  <circle cx="200" cy="200" r="110" stroke="currentColor" />
                  <circle cx="200" cy="200" r="60" stroke="currentColor" strokeDasharray="2 4" />
                  <path d="M50 350 L350 50" stroke="currentColor" strokeDasharray="8 8" />
                  <polygon
                    fill="none"
                    opacity="0.3"
                    points="200,60 320,300 80,300"
                    stroke="currentColor"
                  />
                  <line x1="200" y1="0" x2="200" y2="400" stroke="currentColor" opacity="0.1" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="currentColor" opacity="0.1" />
                </svg>

                {/* Fragment Layer 1: Status WIP */}
                <div className="absolute top-7 left-5 p-3 bg-[#282a2f]/90 border border-[#444938] rounded-lg shadow-xl backdrop-blur-md -rotate-6 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  <span className="font-mono text-[11px] text-[#c8f169] tracking-wider block">
                    // STATUS: WIP
                  </span>
                  <p className="font-mono text-xs font-bold uppercase text-white mt-0.5">
                    EXPERIMENTING DAILY
                  </p>
                </div>

                {/* Fragment Layer 2: Curiosity > Specialization */}
                <div className="absolute bottom-9 right-5 p-3 bg-[#3630b5]/90 border border-[#aeadff]/30 rounded-lg shadow-xl backdrop-blur-md rotate-3 text-[#c2c1ff] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                  <span className="font-mono text-[11px] tracking-wider text-[#aeadff] block">
                    CANVAS // NEVER FIXED
                  </span>
                  <p className="font-mono text-xs font-bold uppercase text-white mt-0.5">
                    CURIOSITY &gt; SPECIALIZATION
                  </p>
                </div>

                {/* Center Centerpiece Artwork Box */}
                <div className="relative z-10 w-52 h-52 rounded-2xl bg-[#1e2025]/95 border border-[#33353a] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-[#c8f169]/50">
                  <div className="relative mb-2">
                    <div className="w-16 h-16 rounded-full bg-[#c8f169]/10 flex items-center justify-center">
                      <Radar className="w-8 h-8 text-[#c8f169] animate-spin" style={{ animationDuration: '6s' }} />
                    </div>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#c8f169] animate-ping" />
                  </div>
                  <span className="font-display font-bold text-xl text-white tracking-wider">
                    SWASTIK
                  </span>
                  <span className="font-mono text-[11px] text-[#92949D] uppercase tracking-widest mt-1">
                    IN SEARCH OF SIGNAL
                  </span>
                  <div className="mt-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#111318] border border-[#33353a]/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8f169] animate-pulse"></span>
                    <span className="font-mono text-[9px] text-[#c4c9b2] tracking-wider">
                      RADAR ACTIVE
                    </span>
                  </div>
                </div>

                {/* Floating Coordinates */}
                <div className="absolute bottom-4 left-6 font-mono text-[10px] text-[#92949D]/80 flex items-center gap-1.5">
                  <Compass className="w-3 h-3 text-[#c8f169]" />
                  <span>{PERSONAL_INFO.coordinates}</span>
                </div>
              </div>

              {/* Box Footer Bar */}
              <div className="mt-3 flex items-center justify-between text-[#92949D] font-mono text-xs pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#92949D]"></span>
                  EXPLORING
                </span>
                <span className="text-[#c8f169] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c8f169] animate-pulse"></span>
                  RUNNING ITERATIONS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
