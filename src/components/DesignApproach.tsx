import React from 'react';
import { DESIGN_PHILOSOPHY, SKILLS_MATRIX } from '../data/portfolioData';
import { Compass, CheckCircle2, Sliders, Eye, Code, Zap } from 'lucide-react';

export const DesignApproach: React.FC = () => {
  return (
    <section id="approach" className="py-20 lg:py-28 border-b border-slate-800/80 bg-[#07090F]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 max-w-2xl">
          <span className="text-xs font-mono-code text-amber-400 uppercase tracking-widest font-semibold block">
            02. Craft & Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            How I Think About Systems & Product Ergonomics
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Interface design is not skin-deep decoration. It is the synthesis of information theory, perceptual ergonomics, and maintainable software architecture.
          </p>
        </div>

        {/* 4 Pillars of Design Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {DESIGN_PHILOSOPHY.map((item) => (
            <div
              key={item.number}
              className="p-8 bg-[#0C101C] border border-slate-800/90 rounded-2xl space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code text-amber-400 font-bold">
                  CHAPTER {item.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-700" />
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Skills & Capabilities Matrix */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="mb-8">
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
              Capabilities & Technical Fluency
            </h3>
            <p className="text-xs text-slate-400 font-mono-code mt-1">
              Cross-disciplinary bridge between senior product leadership and frontend engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS_MATRIX.map((group, gIdx) => (
              <div key={gIdx} className="p-6 bg-[#0B0E18] border border-slate-800/80 rounded-xl space-y-4">
                <h4 className="text-base font-display font-semibold text-amber-300">
                  {group.category}
                </h4>

                <div className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
