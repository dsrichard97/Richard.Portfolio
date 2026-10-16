import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { ProjectVisualMockup } from './mockups/ProjectVisualMockup';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'product', label: 'Product & UI/UX' },
    { id: 'systems', label: 'Design Systems' },
    { id: 'creative_tech', label: 'Creative Tech & AI' },
    { id: 'brand', label: 'Brand & Identity' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="works" className="py-20 lg:py-28 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-mono-code text-amber-400 uppercase tracking-widest font-semibold block">
              01. Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Selected Works & Case Studies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-light">
              Deep dive into multi-quarter product initiatives, enterprise design systems, and spatial interfaces built for scale.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Button Controls) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            // Give top 2 projects wide span
            const isWide = index === 0 || index === 1;
            const colSpanClass = isWide 
              ? 'md:col-span-12 lg:col-span-6' 
              : 'md:col-span-6 lg:col-span-6';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`${colSpanClass} group bg-[#0D101A] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/5 cursor-pointer relative overflow-hidden`}
              >
                {/* Visual Interface Preview Showcase */}
                <div className="w-full aspect-[16/10] sm:aspect-[16/9] mb-6 rounded-xl overflow-hidden bg-slate-950/80 border border-slate-800/80 group-hover:border-slate-700 transition-colors">
                  <ProjectVisualMockup project={project} isDetailed={false} />
                </div>

                {/* Content Box */}
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed clean metadata with typographic separators (NO PILLS) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-code mb-2.5">
                      <span className="text-amber-400/90 font-medium">{project.categoryLabel}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-300">{project.client}</span>
                    </div>

                    {/* Title & Arrow */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 flex items-center justify-center text-slate-400 group-hover:text-amber-300 transition-all shrink-0">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="mt-2 text-sm text-slate-300 font-light leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Impact Metrics Row */}
                  <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                    {project.impactMetrics.slice(0, 2).map((metric, mIdx) => (
                      <div key={mIdx}>
                        <span className="block text-base font-display font-bold text-white tabular-nums">
                          {metric.value}
                        </span>
                        <span className="block text-[11px] text-slate-400 truncate">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-slate-400">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};
