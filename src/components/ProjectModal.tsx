import React, { useEffect, useState } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { ProjectVisualMockup } from './mockups/ProjectVisualMockup';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Copy, 
  Sparkles, 
  Layers, 
  Quote, 
  Target, 
  Lightbulb,
  ExternalLink 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onCopyText: (text: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onCopyText,
}) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;

      const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
      if (e.key === 'ArrowRight' && currentIndex < PROJECTS.length - 1) {
        onSelectProject(PROJECTS[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectProject(PROJECTS[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  const handleCopyColor = (hex: string) => {
    onCopyText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#0B0E17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[92vh]">
        
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-[#0E121E]/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-code text-amber-400 font-medium">
              Case Study // {project.categoryLabel}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs font-mono-code text-slate-400">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next buttons */}
            <div className="flex items-center gap-1 mr-2">
              <button
                disabled={!prevProject}
                onClick={() => prevProject && onSelectProject(prevProject)}
                className={`p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ${!prevProject ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                title="Previous Case Study"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                disabled={!nextProject}
                onClick={() => nextProject && onSelectProject(nextProject)}
                className={`p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ${!nextProject ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                title="Next Case Study"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-10">
          
          {/* Header Title Area */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Unboxed Metadata Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 font-mono-code">
              <div>
                <span className="text-slate-500 mr-1.5">CLIENT:</span>
                <span className="text-slate-200">{project.client}</span>
              </div>
              <div className="hidden sm:inline text-slate-700">·</div>
              <div>
                <span className="text-slate-500 mr-1.5">ROLE:</span>
                <span className="text-slate-200">{project.role}</span>
              </div>
              <div className="hidden sm:inline text-slate-700">·</div>
              <div>
                <span className="text-slate-500 mr-1.5">TIMELINE:</span>
                <span className="text-slate-200">{project.timeline}</span>
              </div>
            </div>
          </div>

          {/* Large Interactive Visual Showcase */}
          <div className="w-full aspect-[16/9] min-h-[340px] rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
            <ProjectVisualMockup project={project} isDetailed={true} />
          </div>

          {/* Quantified Impact Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-[#0E1322] border border-slate-800 rounded-xl">
            {project.impactMetrics.map((metric, i) => (
              <div key={i} className="space-y-1">
                <span className="block text-2xl sm:text-3xl font-display font-bold text-amber-400 tabular-nums">
                  {metric.value}
                </span>
                <span className="block text-xs text-slate-400 font-light">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="p-6 bg-[#0D101C] border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono-code uppercase font-semibold">
                <Target className="w-4 h-4" />
                <span>The Core Challenge</span>
              </div>
              <h4 className="text-lg font-display font-bold text-white">
                Friction in Legacy Paradigms
              </h4>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 bg-[#0D101C] border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono-code uppercase font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>The Systems Solution</span>
              </div>
              <h4 className="text-lg font-display font-bold text-white">
                Tactile Ergonomics & Token Architecture
              </h4>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Architectural Decisions */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-white">
              Key Architectural & Interaction Decisions
            </h3>
            <div className="space-y-3">
              {project.keyDecisions.map((decision, dIdx) => (
                <div key={dIdx} className="p-4 bg-slate-900/50 border border-slate-800 rounded-lg flex items-start gap-3">
                  <span className="text-xs font-mono-code text-amber-400 mt-0.5 shrink-0">
                    0{dIdx + 1}.
                  </span>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {decision}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Token Specimen Inspector */}
          <div className="p-6 bg-[#0E121E] border border-slate-800 rounded-xl space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono-code text-slate-300">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Token Hierarchy & Spatial Specifications</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono-code">Click hex to copy</span>
            </div>

            {/* Color Palette Tokens */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {project.tokens.colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => handleCopyColor(c.hex)}
                  className="p-3 bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-lg text-left transition-all hover:-translate-y-0.5 cursor-pointer group"
                >
                  <div className="w-full h-8 rounded mb-2 border border-white/10" style={{ backgroundColor: c.hex }} />
                  <span className="block text-[11px] font-medium text-slate-300 truncate">{c.name}</span>
                  <span className="block text-[10px] font-mono-code text-slate-500 group-hover:text-amber-400 transition-colors">
                    {copiedColor === c.hex ? 'Copied!' : c.hex}
                  </span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-xs font-mono-code text-slate-400">
              <div>
                <span className="block text-slate-500 text-[10px]">TYPOGRAPHY:</span>
                <span className="text-slate-200">{project.tokens.typography}</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[10px]">RADIUS FORMULA:</span>
                <span className="text-slate-200">{project.tokens.radius}</span>
              </div>
              <div>
                <span className="block text-slate-500 text-[10px]">GRID DISCIPLINE:</span>
                <span className="text-slate-200">{project.tokens.grid}</span>
              </div>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-bold text-white">Project Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
              {project.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded bg-slate-900/30 border border-slate-800/60">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-light">{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial (if available) */}
          {project.testimonial && (
            <div className="p-6 bg-amber-400/5 border border-amber-400/20 rounded-xl space-y-4">
              <Quote className="w-6 h-6 text-amber-400/60" />
              <p className="text-base text-slate-200 italic font-serif leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="text-xs font-mono-code text-slate-400">
                <span className="text-slate-200 font-semibold">{project.testimonial.author}</span>
                <span className="mx-1.5">·</span>
                <span>{project.testimonial.title}, {project.testimonial.organization}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer with Nav */}
        <div className="sticky bottom-0 z-20 bg-[#0E121E]/95 backdrop-blur-md border-t border-slate-800 px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Viewer
          </button>

          {nextProject && (
            <button
              onClick={() => onSelectProject(nextProject)}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
