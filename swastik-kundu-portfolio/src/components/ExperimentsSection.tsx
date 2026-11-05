import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowRight,
  Video,
  LineChart,
  BarChart3,
  Mic,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { EXPERIMENTS } from '../data/portfolioData';

export const ExperimentsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'cv-ml' | 'data' | 'voice' | 'bi'>('all');

  const filteredExperiments =
    filter === 'all'
      ? EXPERIMENTS
      : EXPERIMENTS.filter((exp) => exp.category === filter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'videocam':
        return <Video className="w-5 h-5 text-[#92949D]" />;
      case 'query_stats':
        return <LineChart className="w-5 h-5 text-[#92949D]" />;
      case 'monitoring':
        return <BarChart3 className="w-5 h-5 text-[#92949D]" />;
      case 'mic':
      default:
        return <Mic className="w-5 h-5 text-[#92949D]" />;
    }
  };

  return (
    <section
      id="experiments"
      className="w-full py-20 lg:py-28 bg-[#0c0e13] border-t border-[#1e2025]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with GitHub link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#c8f169] uppercase tracking-widest font-bold">
                03 //
              </span>
              <span className="font-mono text-xs text-[#92949D] uppercase tracking-wider">
                EXPERIMENTS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              I have more ideas than finished projects.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#92949D] max-w-2xl mt-1 leading-relaxed">
              I keep getting ideas. Some become prototypes. Some remain unfinished. Some don't work
              as expected. Sometimes I lack the resources, sometimes the skills, sometimes the
              motivation or time. But every experiment teaches me something.
            </p>
          </div>

          <a
            href="https://github.com/Swastik-2006"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-[#282a2f] text-white hover:text-[#c8f169] font-mono text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 self-start md:self-auto shadow-sm border border-[#33353a] hover:border-[#c8f169]/50 transition-all hover:scale-[1.02]"
          >
            <span>GITHUB: Swastik-2006</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Experiments' },
            { id: 'cv-ml', label: 'Computer Vision & ML' },
            { id: 'data', label: 'Data Engines' },
            { id: 'bi', label: 'BI & Analytics' },
            { id: 'voice', label: 'Audio / Voice' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors ${
                filter === tab.id
                  ? 'bg-[#c8f169] text-[#111318] font-bold shadow-[0_0_12px_rgba(200,241,105,0.2)]'
                  : 'bg-[#1a1b21] text-[#92949D] hover:text-white border border-[#282a2f]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExperiments.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#1e2025] border border-[#282a2f] p-6 shadow-xl flex flex-col justify-between group hover:border-[#c8f169]/50 transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                {/* Tag & Category */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[11px] font-semibold tracking-wider ${
                      project.id === 'vc-signal-scout'
                        ? 'text-[#c2c1ff]'
                        : project.id === 'business-overview-dashboard'
                        ? 'text-[#92949D]'
                        : 'text-[#c8f169]'
                    }`}
                  >
                    {project.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#33353a] font-mono text-[10px] text-[#c4c9b2] uppercase tracking-wider">
                    {project.categoryBadge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-display font-semibold text-xl text-white transition-colors ${
                    project.id === 'vc-signal-scout'
                      ? 'group-hover:text-[#c2c1ff]'
                      : 'group-hover:text-[#c8f169]'
                  }`}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#92949D] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-xs text-white">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-[#282a2f] border border-[#33353a]/40 px-2 py-0.5 rounded text-[#e2e2e9]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="pt-6 mt-4 border-t border-[#282a2f]/60 flex items-center justify-between">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase text-white hover:text-[#c8f169] flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>{project.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                ) : (
                  <span className="font-mono text-xs uppercase text-[#92949D] flex items-center gap-1.5">
                    <span>{project.actionText}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#c8f169]" />
                  </span>
                )}

                <div className="text-[#92949D] group-hover:text-white transition-colors">
                  {getIcon(project.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Realness Assurance Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#1a1b21] border border-[#282a2f] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-[#c8f169]/10 text-[#c8f169] border border-[#c8f169]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="font-mono text-xs text-[#92949D]">
              No fabricated metrics. No abandoned repos disguised as finished enterprise apps. Just
              genuine experiments.
            </p>
          </div>
          <span className="font-mono text-xs text-[#c8f169] font-medium tracking-wide">
            GITHUB.COM/SWASTIK-2006
          </span>
        </div>
      </div>
    </section>
  );
};
