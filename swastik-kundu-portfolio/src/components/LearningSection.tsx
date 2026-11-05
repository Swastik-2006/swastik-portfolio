import React from 'react';
import { Cloud, Award, Trophy, Terminal, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { TOOLSTACK } from '../data/portfolioData';

export const LearningSection: React.FC = () => {
  return (
    <section id="learning" className="w-full py-20 lg:py-28 bg-[#111318] border-t border-[#1e2025]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#c8f169] uppercase tracking-widest font-bold">
              04 //
            </span>
            <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
              LEARNING
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-3xl leading-tight">
            Sometimes I don't know what I'm doing. I learn anyway.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#92949D] max-w-3xl mt-1 leading-relaxed">
            I am still building my programming foundation. I use AI tools to help me understand
            concepts, experiment with code, debug problems, and turn ideas into prototypes. I don't
            claim to know everything. I am learning by trying.
          </p>
        </div>

        {/* 2-Column Grid: Honest Toolstack + Google Cloud Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Honest Toolstack */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1b21] border border-[#282a2f] shadow-lg flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#282a2f] mb-6">
                  <h3 className="font-display font-semibold text-xl text-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-[#c8f169]" />
                    <span>Honest Toolstack</span>
                  </h3>
                  <span className="font-mono text-xs text-[#c8f169] bg-[#c8f169]/10 px-2.5 py-1 rounded border border-[#c8f169]/20 font-bold">
                    NO FAKE METRICS
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  {/* Category 1: Programming */}
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#92949D] block mb-2">
                      PROGRAMMING
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {TOOLSTACK.programming.map((item) => (
                        <div
                          key={item.name}
                          className="px-3.5 py-1.5 rounded-lg bg-[#1e2025] border border-[#33353a] font-mono text-xs text-white hover:border-[#c8f169]/50 transition-colors"
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2: Data & Spreadsheets */}
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#92949D] block mb-2">
                      DATA &amp; SPREADSHEETS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {TOOLSTACK.data.map((item) => (
                        <div
                          key={item.name}
                          className="px-3.5 py-1.5 rounded-lg bg-[#1e2025] border border-[#33353a] font-mono text-xs text-white hover:border-[#c8f169]/50 transition-colors"
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 3: Cloud Infrastructure */}
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#92949D] block mb-2">
                      CLOUD INFRASTRUCTURE
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {TOOLSTACK.cloud.map((item) => (
                        <div
                          key={item.name}
                          className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-colors flex items-center gap-1.5 ${
                            item.highlight
                              ? 'bg-[#282a2f] text-[#c8f169] border border-[#c8f169]/40 font-semibold shadow-[0_0_12px_rgba(200,241,105,0.15)]'
                              : 'bg-[#1e2025] text-[#92949D] border border-[#33353a]'
                          }`}
                        >
                          {item.highlight && <span className="w-1.5 h-1.5 rounded-full bg-[#c8f169]"></span>}
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 4: Workflow & Software */}
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#92949D] block mb-2">
                      WORKFLOW &amp; SOFTWARE
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {TOOLSTACK.workflow.map((item) => (
                        <div
                          key={item.name}
                          className="px-3.5 py-1.5 rounded-lg bg-[#1e2025] border border-[#33353a] font-mono text-xs text-white hover:border-[#c8f169]/50 transition-colors"
                        >
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#282a2f] text-xs font-mono text-[#92949D]">
                <span>No arbitrary 90% progress bars. Just tools actively used in practice.</span>
              </div>
            </div>
          </div>

          {/* Column 2: Google Cloud Journey Block */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1b21] border border-[#282a2f] shadow-xl flex flex-col justify-between h-full relative overflow-hidden group hover:border-[#c8f169]/40 transition-colors">
              {/* Subtle background ambient blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8f169]/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#0c0e13] border border-[#33353a] text-[#c8f169]">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <span className="font-display font-semibold text-lg sm:text-xl text-white tracking-wide">
                      Google Cloud Journey
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#c8f169] text-[#111318] font-mono text-xs uppercase font-bold tracking-wider shadow-[0_0_12px_rgba(200,241,105,0.25)]">
                    CHAMPION TIER
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#92949D] leading-relaxed">
                  Hundreds of hands-on labs, learning new cloud services, troubleshooting deployment
                  configs, getting stuck, trying again, and finishing arcade challenges. One of the
                  journeys that truly taught me the value of learning through raw practice.
                </p>

                {/* Big Metrics Display */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#1e2025] border border-[#282a2f] flex flex-col">
                    <span className="font-display font-bold text-4xl sm:text-5xl text-[#c8f169] leading-none">
                      300+
                    </span>
                    <span className="font-mono text-xs text-[#e2e2e9] uppercase tracking-wider mt-2 font-semibold">
                      Labs Completed
                    </span>
                    <span className="font-mono text-[11px] text-[#92949D] mt-1 leading-snug">
                      Hands-on architecture sandbox runs
                    </span>
                  </div>

                  <div className="p-5 rounded-xl bg-[#1e2025] border border-[#282a2f] flex flex-col">
                    <span className="font-display font-bold text-4xl sm:text-5xl text-[#c2c1ff] leading-none">
                      80+
                    </span>
                    <span className="font-mono text-xs text-[#e2e2e9] uppercase tracking-wider mt-2 font-semibold">
                      Skill Badges
                    </span>
                    <span className="font-mono text-[11px] text-[#92949D] mt-1 leading-snug">
                      Google Cloud verified micro-credentials
                    </span>
                  </div>
                </div>
              </div>

              {/* Arcade Milestone Ribbon */}
              <div className="mt-6 p-4 rounded-xl bg-[#282a2f]/90 border border-[#33353a] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Trophy className="w-5 h-5 text-[#c8f169]" />
                  <span className="font-mono text-xs sm:text-sm text-white font-medium">
                    Google Cloud Arcade 2026
                  </span>
                </div>
                <span className="font-mono text-xs uppercase text-[#c8f169] font-bold">
                  Champion Tier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
