import React, { useState } from 'react';
import { ArrowDown, Copy, Check, ExternalLink, Sparkles, SlidersHorizontal, Terminal } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onResumeClick: () => void;
  onCopyEmail: (email: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onResumeClick, onCopyEmail }) => {
  const [copied, setCopied] = useState(false);
  const [activeInteractiveTab, setActiveInteractiveTab] = useState<'tokens' | 'grid' | 'physics'>('tokens');

  const handleCopy = () => {
    onCopyEmail(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Quiet unboxed kicker with clean typographic separator */}
              <div className="flex items-center gap-2 text-xs font-medium text-amber-400/90 tracking-wider uppercase font-mono-code">
                <span>Senior Product & Systems Designer</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">San Francisco & Remote</span>
              </div>

              {/* Dominant Headline with balanced wrap */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08] [text-wrap:balance]">
                Crafting tactile interfaces, tokenized design systems & strategic digital products.
              </h1>

              {/* Lead Body Copy (65-75ch measure) */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
                {DESIGNER_INFO.bio}
              </p>

              {/* Availability Notice (Unboxed clean text) */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-slate-300 font-medium">{DESIGNER_INFO.availability}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Response time &lt; 24h</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all duration-150 active:scale-[0.98] shadow-lg shadow-amber-400/10 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onResumeClick}
                className="px-5 py-3 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>View Full Resume</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </button>

              {/* Quick Copy Email Button */}
              <button
                onClick={handleCopy}
                className="px-4 py-3 text-xs font-mono-code text-slate-300 bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                title="Click to copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{DESIGNER_INFO.email}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Design Studio Specimen Container at matching height */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full min-h-[380px] bg-[#0E121E] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between relative shadow-2xl overflow-hidden group">
              
              {/* Studio Specimen Top Tab */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span className="font-mono-code font-medium text-slate-200">
                    diaz.craft.specimen
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-md border border-slate-800">
                  <button
                    onClick={() => setActiveInteractiveTab('tokens')}
                    className={`px-2 py-1 text-[11px] rounded transition-colors ${activeInteractiveTab === 'tokens' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Tokens
                  </button>
                  <button
                    onClick={() => setActiveInteractiveTab('grid')}
                    className={`px-2 py-1 text-[11px] rounded transition-colors ${activeInteractiveTab === 'grid' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setActiveInteractiveTab('physics')}
                    className={`px-2 py-1 text-[11px] rounded transition-colors ${activeInteractiveTab === 'physics' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Rhythm
                  </button>
                </div>
              </div>

              {/* Specimen Visual Content */}
              <div className="py-6 flex-1 flex flex-col justify-center">
                {activeInteractiveTab === 'tokens' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block">
                        Primitive Scale & Contrast
                      </span>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-[#090A0F] border border-slate-800 p-2 rounded-lg text-center">
                          <div className="w-4 h-4 rounded-full bg-[#F59E0B] mx-auto mb-1" />
                          <span className="text-[10px] font-mono-code text-slate-400 block">AMBER</span>
                          <span className="text-[9px] font-mono-code text-slate-500 block">#F59E0B</span>
                        </div>
                        <div className="bg-[#090A0F] border border-slate-800 p-2 rounded-lg text-center">
                          <div className="w-4 h-4 rounded-full bg-[#6366F1] mx-auto mb-1" />
                          <span className="text-[10px] font-mono-code text-slate-400 block">INDIGO</span>
                          <span className="text-[9px] font-mono-code text-slate-500 block">#6366F1</span>
                        </div>
                        <div className="bg-[#090A0F] border border-slate-800 p-2 rounded-lg text-center">
                          <div className="w-4 h-4 rounded-full bg-[#10B981] mx-auto mb-1" />
                          <span className="text-[10px] font-mono-code text-slate-400 block">EMERALD</span>
                          <span className="text-[9px] font-mono-code text-slate-500 block">#10B981</span>
                        </div>
                        <div className="bg-[#090A0F] border border-slate-800 p-2 rounded-lg text-center">
                          <div className="w-4 h-4 rounded-full bg-[#06B6D4] mx-auto mb-1" />
                          <span className="text-[10px] font-mono-code text-slate-400 block">CYAN</span>
                          <span className="text-[9px] font-mono-code text-slate-500 block">#06B6D4</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-xs space-y-1.5 font-mono-code">
                      <div className="flex justify-between text-slate-400">
                        <span>--font-display:</span>
                        <span className="text-amber-300">Outfit (Geometric)</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>--font-body:</span>
                        <span className="text-slate-200">Plus Jakarta Sans</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>--math-radius:</span>
                        <span className="text-emerald-400">r_inner = r_outer - p</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeInteractiveTab === 'grid' && (
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block">
                      8pt Baseline Architectural Alignment
                    </span>
                    <div className="grid grid-cols-6 gap-1.5 h-24 p-2 bg-[#080B13] border border-slate-800 rounded-lg">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="bg-slate-800/40 border border-dashed border-slate-700/50 rounded flex items-center justify-center text-[10px] text-slate-500 font-mono-code">
                          col_{i + 1}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-400 font-light">
                      Strict mathematical container padding exceeding internal gaps for zero visual crowding.
                    </p>
                  </div>
                )}

                {activeInteractiveTab === 'physics' && (
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider block">
                      Motion Latency & Easing Curve
                    </span>
                    <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-2">
                      <div className="flex justify-between text-xs text-slate-300 font-mono-code">
                        <span>cubic-bezier(0.16, 1, 0.3, 1)</span>
                        <span className="text-emerald-400">&lt; 180ms</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-amber-400 origin-left animate-pulse" />
                      </div>
                      <span className="text-[11px] text-slate-400 block">
                        Strict compositor-only transforms for silky 120Hz display refresh.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Specimen Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                  Zero-Pill Architecture
                </span>
                <span className="font-mono-code text-slate-400">v2026.04</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Metric Strip Below the Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-8">
          {DESIGNER_INFO.keyMetrics.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <span className="block text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight tabular-nums">
                {metric.value}
              </span>
              <span className="block text-xs sm:text-sm text-slate-400 font-normal">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
