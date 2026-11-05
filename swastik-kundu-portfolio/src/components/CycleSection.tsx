import React, { useState } from 'react';
import { Lightbulb, Code2, AlertTriangle, GraduationCap, RefreshCw, ArrowRight, ArrowLeft } from 'lucide-react';
import { CYCLE_STAGES, CycleStage } from '../data/portfolioData';

export const CycleSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const activeStage =
    CYCLE_STAGES.find((s) => s.id === activeStageId) || CYCLE_STAGES[0];

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="w-8 h-8 text-[#c8f169]" />;
      case 'code':
        return <Code2 className="w-8 h-8 text-[#c8f169]" />;
      case 'warning':
        return <AlertTriangle className="w-8 h-8 text-[#ffb4ab]" />;
      case 'school':
        return <GraduationCap className="w-8 h-8 text-[#c2c1ff]" />;
      case 'autorenew':
      default:
        return <RefreshCw className="w-8 h-8 text-[#c8f169] animate-spin-slow" />;
    }
  };

  const nextStage = () => {
    setActiveStageId((prev) => (prev < 5 ? prev + 1 : 1));
  };

  const prevStage = () => {
    setActiveStageId((prev) => (prev > 1 ? prev - 1 : 5));
  };

  return (
    <section id="cycle" className="w-full py-20 lg:py-28 bg-[#111318] border-t border-[#1e2025]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#c8f169] uppercase tracking-widest font-bold">
              06 //
            </span>
            <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
              THE CYCLE
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Try. Fail. Learn. Build. Repeat.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#92949D] max-w-2xl mt-1 leading-relaxed">
            Failure isn't glamorous. It's just what happens when you build before you know
            everything. Click each stage to inspect my authentic student mindset.
          </p>
        </div>

        {/* 5-Stage Node Switcher */}
        <div className="w-full flex flex-col gap-6">
          {/* Stage Buttons Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-1.5 rounded-2xl bg-[#1a1b21] border border-[#282a2f] shadow-inner">
            {CYCLE_STAGES.map((stage) => {
              const isSelected = activeStageId === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`py-3 px-2 rounded-xl text-center font-mono text-xs uppercase transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#c8f169] text-[#111318] font-bold shadow-[0_0_16px_rgba(200,241,105,0.25)] scale-[1.02]'
                      : 'text-[#92949D] hover:text-white hover:bg-[#282a2f]/60'
                  } ${stage.id === 5 ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  {stage.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Stage Detail Card */}
          <div
            id="stage-card"
            className="p-6 sm:p-10 rounded-2xl bg-[#1e2025] border border-[#282a2f] shadow-2xl relative overflow-hidden transition-all duration-300"
          >
            {/* Ambient decorative gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c8f169]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#282a2f]">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-[#111318] border border-[#33353a] flex items-center justify-center shrink-0">
                  {getStageIcon(activeStage.icon)}
                </div>
                <div>
                  <span className="font-mono text-xs text-[#c8f169] uppercase tracking-wider block">
                    {activeStage.nodeTag}
                  </span>
                  <span className="font-mono text-xs text-[#92949D] uppercase">
                    {activeStage.frequency}
                  </span>
                </div>
              </div>

              {/* Metric Badge */}
              <div className="flex items-center gap-3 self-start md:self-auto px-4 py-2 rounded-xl bg-[#111318] border border-[#33353a]">
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[10px] text-[#92949D] uppercase tracking-wider">
                    {activeStage.metricLabel}
                  </span>
                  <span className="font-display font-bold text-lg text-[#c8f169] tracking-wider">
                    {activeStage.metricVal}
                  </span>
                </div>
              </div>
            </div>

            {/* Stage Body */}
            <div className="pt-6 flex flex-col gap-4">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                {activeStage.heading}
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#92949D] leading-relaxed max-w-4xl">
                {activeStage.description}
              </p>

              {/* Student Quote Callout */}
              <div className="mt-4 p-4 rounded-xl bg-[#111318]/90 border-l-2 border-[#c8f169] border-y border-r border-[#282a2f] flex items-center justify-between flex-wrap gap-3">
                <span className="font-mono text-sm text-[#e2e2e9] italic">
                  "{activeStage.studentQuote}"
                </span>
                <span className="font-mono text-[11px] text-[#92949D] uppercase">
                  UNFILTERED STUDENT LOG
                </span>
              </div>
            </div>

            {/* Stepper Navigation */}
            <div className="pt-8 mt-6 border-t border-[#282a2f] flex items-center justify-between">
              <button
                onClick={prevStage}
                className="font-mono text-xs uppercase text-[#92949D] hover:text-white flex items-center gap-1.5 transition-colors p-2 rounded-lg hover:bg-[#282a2f]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Stage</span>
              </button>

              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStageId(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeStageId === idx
                        ? 'bg-[#c8f169] w-6'
                        : 'bg-[#33353a] hover:bg-[#92949D]'
                    }`}
                    aria-label={`Jump to stage ${idx}`}
                  />
                ))}
              </div>

              <button
                onClick={nextStage}
                className="font-mono text-xs uppercase text-[#c8f169] hover:underline flex items-center gap-1.5 transition-colors p-2 rounded-lg hover:bg-[#282a2f]"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
