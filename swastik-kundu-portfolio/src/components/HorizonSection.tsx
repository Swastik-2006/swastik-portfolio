import React from 'react';

export const HorizonSection: React.FC = () => {
  return (
    <section id="horizon" className="w-full py-20 lg:py-28 bg-[#0c0e13] border-t border-[#1e2025] relative overflow-hidden">
      {/* Ambient Backing */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#3630b5]/15 blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-[#c8f169]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#c8f169] uppercase tracking-widest font-bold">
              07 //
            </span>
            <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
              HORIZON
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            I don't know exactly where I'm going. And that's okay I guess.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#92949D] leading-relaxed">
            I'm still learning, exploring opportunities, building projects, trying to improve my
            skills, and looking for a direction that feels right. I don't have a 10-year perfect
            roadmap designed for an investor pitch. I just want to keep moving forward, staying
            honest, and outworking my doubts.
          </p>

          {/* Bullet Vectors */}
          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c8f169] shrink-0"></span>
              <span className="font-sans text-base text-[#92949D]">
                Targeting deeper Python.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c8f169] shrink-0"></span>
              <span className="font-sans text-base text-[#92949D]">
                Pursuing technical summer internships and collaborative developer projects.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#c2c1ff] shrink-0"></span>
              <span className="font-sans text-base text-[#92949D]">
                Continuing visual art explorations and community design experiments.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
