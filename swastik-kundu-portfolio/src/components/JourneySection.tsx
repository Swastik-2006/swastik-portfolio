import React, { useState } from 'react';
import { Palette, Users, Mail, ArrowUpRight, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { EXPERIENCES, Experience } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'palette':
        return <Palette className="w-5 h-5" />;
      case 'group_search':
        return <Users className="w-5 h-5" />;
      case 'mark_email_read':
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="journey" className="w-full py-20 lg:py-28 bg-[#111318] border-t border-[#1e2025]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#c2c1ff] uppercase tracking-widest font-bold">
              02 //
            </span>
            <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
              THE JOURNEY
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight max-w-3xl leading-tight">
            I wanted to learn. I also wanted to earn.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#92949D] max-w-2xl mt-1 leading-relaxed">
            Not every opportunity was directly connected to Computer Science. Some were about
            gaining experience, some about learning how businesses work, and some simply about
            earning money while studying.
          </p>
        </div>

        {/* Timeline Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className="p-6 sm:p-7 rounded-2xl bg-[#1a1b21] border border-[#282a2f] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-[#c8f169]/40 cursor-pointer relative"
            >
              <div className="flex flex-col gap-4">
                {/* Top Row: Period + Icon */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-1 rounded bg-[#282a2f] font-mono text-[11px] font-semibold tracking-wider ${
                      exp.badgeColor || 'text-[#c8f169]'
                    }`}
                  >
                    {exp.period}
                  </span>
                  <div className="text-[#92949D] group-hover:text-white transition-colors">
                    {getIcon(exp.icon)}
                  </div>
                </div>

                {/* Company & Role */}
                <div>
                  <h3 className="font-display font-semibold text-xl text-white group-hover:text-[#c8f169] transition-colors flex items-center justify-between">
                    <span>{exp.company}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#c8f169]" />
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#c2c1ff] mt-1">
                    {exp.role}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-[#92949D] leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Skills Footer */}
              <div className="pt-6 mt-4 border-t border-[#282a2f]/60 flex flex-wrap gap-1.5 items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full bg-[#1e2025] border border-[#33353a]/60 font-mono text-[11px] text-[#c4c9b2]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#92949D] group-hover:text-[#c8f169] flex items-center gap-0.5 shrink-0">
                  <span>Details</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Details Modal */}
      {selectedExp && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className="w-full max-w-xl bg-[#1e2025] border border-[#33353a] rounded-2xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#111318] text-[#92949D] hover:text-white border border-[#33353a] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded bg-[#282a2f] font-mono text-xs text-[#c8f169]">
                {selectedExp.period}
              </span>
              <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
                FIELD EXPERIENCE
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white">
              {selectedExp.company}
            </h3>
            <p className="font-mono text-sm uppercase text-[#c2c1ff] mt-0.5 mb-4">
              {selectedExp.role}
            </p>

            <p className="font-sans text-sm text-[#e2e2e9] leading-relaxed mb-6">
              {selectedExp.fullDetails?.scope || selectedExp.description}
            </p>

            {selectedExp.fullDetails?.achievements && (
              <div className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#92949D] mb-3">
                  KEY DELIVERABLES & IMPACT
                </h4>
                <ul className="space-y-2">
                  {selectedExp.fullDetails.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#c4c9b2]">
                      <CheckCircle2 className="w-4 h-4 text-[#c8f169] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedExp.fullDetails?.learnings && (
              <div className="p-4 rounded-xl bg-[#111318] border border-[#282a2f] mb-6">
                <span className="font-mono text-[11px] text-[#c8f169] uppercase tracking-wider block mb-1">
                  HONEST STUDENT TAKEAWAY
                </span>
                <p className="font-sans text-sm text-[#92949D]">
                  "{selectedExp.fullDetails.learnings}"
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {selectedExp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-[#282a2f] font-mono text-xs text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
