import React, { useMemo } from 'react';
import { Terminal, GraduationCap, MapPin, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StorySection: React.FC = () => {
  const { progressPercentage, currentYearLabel } = useMemo(() => {
    const startDate = new Date(2024, 7, 1); // August 1, 2024
    const endDate = new Date(2028, 7, 1); // August 1, 2028
    const now = new Date();

    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsedDuration = now.getTime() - startDate.getTime();
    const rawProgress = (elapsedDuration / totalDuration) * 100;
    const progress = Math.min(100, Math.max(0, rawProgress));

    let yearLabel = 'YEAR 1 // ACTIVE';
    if (now < startDate) {
      yearLabel = 'UPCOMING // ENROLLED';
    } else if (now >= endDate) {
      yearLabel = 'GRADUATED // COMPLETED';
    } else {
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth(); // 0-indexed (7 is August)
      const academicStartYear = currentMonth >= 7 ? currentYear : currentYear - 1;
      const academicYearNumber = Math.min(4, Math.max(1, academicStartYear - 2024 + 1));
      yearLabel = `YEAR ${academicYearNumber} // ACTIVE`;
    }

    return {
      progressPercentage: progress,
      currentYearLabel: yearLabel,
    };
  }, []);
  return (
    <section id="story" className="w-full py-20 lg:py-28 bg-[#0c0e13] border-t border-[#1e2025]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#c8f169] uppercase tracking-widest font-bold">
              01 //
            </span>
            <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
              THE STORY
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-3xl leading-tight">
            Somewhere between what I want to be and what I am.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Journal Narrative + Transparency Card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1b21] border border-[#282a2f] shadow-lg">
              <p className="font-sans text-base sm:text-lg text-[#e2e2e9] leading-relaxed mb-5">
                I'm studying Computer Science, but honestly, I haven't always known what I want to
                become. Sometimes I want to build products. Sometimes I explore AI. Sometimes I get
                interested in Cloud Computing. Sometimes I look for internships, freelance
                opportunities or ways to earn.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#92949D] leading-relaxed">
                I have tried different directions, sometimes without knowing whether they were the
                right ones. I'm not here to present a pre-packaged corporate narrative of linear
                perfection. I'm still figuring out my path.
              </p>
            </div>

            {/* Candid Student Note Card: Transparency */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#282a2f]/80 border border-[#444938] flex items-start gap-4 shadow-xl transition-all duration-300 hover:border-[#c8f169]/50">
              <div className="w-12 h-12 rounded-xl bg-[#0c0e13] border border-[#33353a] flex items-center justify-center shrink-0 text-[#c8f169]">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-wider text-[#c8f169] font-semibold">
                  TRANSPARENCY
                </span>
                <p className="font-display font-semibold text-lg sm:text-xl text-white mt-1">
                  Not an expert programmer or software engineer.
                </p>
                <p className="font-sans text-sm text-[#92949D] mt-1.5 leading-relaxed">
                  Just exploring what sticks. Embracing the discomfort of being an early learner in
                  an industry obsessed with synthetic gurus.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Academic & Geography Profile */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1e2025] border border-[#33353a] shadow-xl flex flex-col gap-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#282a2f]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#92949D]">
                  CURRENTLY IN
                </span>
                <span className="px-3 py-1 rounded-full bg-[#c8f169] text-[#111318] font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(200,241,105,0.2)]">
                  B.TECH CSE
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#111318] text-[#c8f169] shrink-0 border border-[#282a2f]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#92949D] block">
                      INSTITUTION
                    </span>
                    <p className="font-display font-semibold text-lg text-white">
                      {PERSONAL_INFO.institution}
                    </p>
                    <p className="font-sans text-sm text-[#92949D] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c8f169]" />
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#111318] text-[#c2c1ff] shrink-0 border border-[#282a2f]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#92949D] block">
                      ACADEMIC HORIZON
                    </span>
                    <p className="font-sans text-base text-[#e2e2e9] font-medium">
                      {PERSONAL_INFO.timeline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Tracker / Micro-Metrics */}
              <div className="pt-4 border-t border-[#282a2f] flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#92949D]">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#c8f169]" />
                    <span>DEGREE PROGRESSION</span>
                  </span>
                  <span className="text-[#c8f169] font-bold">{currentYearLabel}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#111318] overflow-hidden p-0.5 border border-[#282a2f]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#c8f169] to-[#c2c1ff] transition-all duration-700"
                    style={{ width: `${progressPercentage.toFixed(2)}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-[#92949D]">
                  <span>2024 ENROLLMENT</span>
                  <span>2028 GRADUATION</span>
                </div>
              </div>

              {/* Curiosity Accent */}
              <div className="p-3.5 rounded-xl bg-[#111318]/70 border border-[#282a2f] flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#c8f169] shrink-0" />
                <span className="font-mono text-xs text-[#c4c9b2]">
                  Driven by genuine curiosity rather than polished credentials.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
