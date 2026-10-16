import React, { useState } from 'react';
import { WORK_EXPERIENCES, EDUCATION, AWARDS, DESIGNER_INFO, SKILLS_MATRIX } from '../data/portfolioData';
import { 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Calendar, 
  MapPin, 
  ChevronRight,
  FileText
} from 'lucide-react';

interface ResumeSectionProps {
  onCopyText: (text: string) => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onCopyText }) => {
  const [viewMode, setViewMode] = useState<'timeline' | 'condensed'>('timeline');
  const [copiedResume, setCopiedResume] = useState(false);

  const generateMarkdownResume = () => {
    return `# ${DESIGNER_INFO.name}
${DESIGNER_INFO.title} · ${DESIGNER_INFO.location}
Contact: ${DESIGNER_INFO.email}

## Executive Summary
${DESIGNER_INFO.bio}

## Work Experience
${WORK_EXPERIENCES.map(w => `
### ${w.role} — ${w.company}
${w.period} | ${w.location}
${w.description}
Key Achievements:
${w.achievements.map(a => `- ${a}`).join('\n')}
Technologies: ${w.technologies.join(', ')}
`).join('\n')}

## Education
${EDUCATION.map(e => `
- ${e.degree}, ${e.institution} (${e.period})
  ${e.notes}
`).join('\n')}

## Awards & Recognition
${AWARDS.map(a => `- ${a.title} (${a.year}) for ${a.project}`).join('\n')}
`;
  };

  const handleCopyMarkdown = () => {
    const md = generateMarkdownResume();
    onCopyText(md);
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 lg:py-28 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-xs font-mono-code text-amber-400 uppercase tracking-widest font-semibold block">
              03. Career & Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Curriculum Vitae
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl font-light">
              8+ years leading design systems, high-density telemetry workbenches, and zero-to-one product initiatives.
            </p>
          </div>

          {/* Resume Utilities Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${viewMode === 'timeline' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'}`}
              >
                Detailed
              </button>
              <button
                onClick={() => setViewMode('condensed')}
                className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${viewMode === 'condensed' ? 'bg-amber-400 text-slate-950 font-semibold' : 'text-slate-400 hover:text-white'}`}
              >
                Executive
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print / PDF</span>
            </button>

            {/* Copy Markdown Resume Button */}
            <button
              onClick={handleCopyMarkdown}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy formatted Markdown resume to clipboard"
            >
              {copiedResume ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedResume ? 'Copied MD!' : 'Copy Markdown'}</span>
            </button>
          </div>
        </div>

        {/* Experience Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Experience Column */}
          <div className="lg:col-span-8 space-y-10">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <h3 className="text-lg font-display font-bold text-white tracking-tight">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-12">
              {WORK_EXPERIENCES.map((work) => (
                <div key={work.id} className="relative group">
                  {/* Unboxed Metadata (NO PILLS) */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono-code text-slate-400 mb-1.5">
                    <span className="text-slate-300 font-semibold">{work.company}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-amber-400/90 font-medium">{work.period}</span>
                    <span className="text-slate-600">·</span>
                    <span>{work.location}</span>
                  </div>

                  {/* Role Title */}
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                    {work.role}
                  </h4>

                  {/* Summary */}
                  <p className="mt-2 text-sm text-slate-300 font-light leading-relaxed">
                    {work.description}
                  </p>

                  {/* Achievements List (Shown in detailed mode) */}
                  {viewMode === 'timeline' && (
                    <div className="mt-4 space-y-2">
                      {work.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-light leading-relaxed">
                          <span className="text-amber-400/80 mt-0.5 shrink-0 text-sm leading-none">›</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies row */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono-code text-slate-400">
                    <span className="text-slate-500">Tech:</span>
                    {work.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="text-slate-400">
                        {tech}{tIdx < work.technologies.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Column: Education & Honors */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <h3 className="text-lg font-display font-bold text-white tracking-tight">
                  Education
                </h3>
              </div>

              {EDUCATION.map((edu, eIdx) => (
                <div key={eIdx} className="p-5 bg-[#0C101C] border border-slate-800/90 rounded-xl space-y-2">
                  <span className="text-xs font-mono-code text-amber-400/90 block">
                    {edu.period}
                  </span>
                  <h4 className="text-base font-display font-bold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    {edu.institution} · {edu.location}
                  </p>
                  <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
                    {edu.notes}
                  </p>
                </div>
              ))}
            </div>

            {/* Honors & Awards */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800">
                <Trophy className="w-4 h-4 text-amber-400" />
                <h3 className="text-lg font-display font-bold text-white tracking-tight">
                  Honors & Recognition
                </h3>
              </div>

              <div className="space-y-3">
                {AWARDS.map((award, aIdx) => (
                  <div key={aIdx} className="p-4 bg-[#0C101C] border border-slate-800/90 rounded-xl space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono-code">
                      <span className="text-amber-400 font-semibold">{award.year}</span>
                      <span className="text-slate-500">{award.issuer}</span>
                    </div>
                    <h4 className="text-sm font-display font-semibold text-white">
                      {award.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 block">
                      Project: {award.project}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
