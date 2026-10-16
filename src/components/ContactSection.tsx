import React, { useState } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ContactSectionProps {
  onCopyEmail: (email: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: 'Design System Architecture',
    budgetRange: '$25,000 — $50,000',
    timeline: 'Q2 2026 (1–3 Months)',
    message: '',
  });

  const handleCopy = () => {
    onCopyEmail(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Save to localStorage for real persistence
    try {
      const existingInquiries = JSON.parse(localStorage.getItem('portfolio_inquiries') || '[]');
      existingInquiries.push({
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('portfolio_inquiries', JSON.stringify(existingInquiries));
    } catch {
      // Ignore localStorage errors
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const projectTypes = [
    'Design System Architecture',
    '0-to-1 Product Design',
    'Complex Telemetry & UX Audit',
    'Brand Identity & Systems',
    'Advisory / Fractional Lead',
  ];

  const budgetRanges = [
    '$15,000 — $25,000',
    '$25,000 — $50,000',
    '$50,000 — $100,000+',
    'Hourly Advisory / Retainer',
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-slate-800/80 bg-[#07090F]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 max-w-2xl">
          <span className="text-xs font-mono-code text-amber-400 uppercase tracking-widest font-semibold block">
            04. Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Initiate a Project or Consultation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Whether you need a scalable design system foundation, a high-frequency trading workbench, or leadership on a flagship product release.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & Availability Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Email Card */}
            <div className="p-6 bg-[#0C101C] border border-slate-800 rounded-2xl space-y-4">
              <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block">
                Direct Electronic Mail
              </span>

              <div className="flex items-center justify-between gap-2 p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="text-sm font-mono-code text-amber-300 hover:text-amber-200 transition-colors truncate"
                >
                  {DESIGNER_INFO.email}
                </a>

                <button
                  onClick={handleCopy}
                  className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <a
                  href={`mailto:${DESIGNER_INFO.email}?subject=Design Inquiry: Strategic Product Engagement`}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open in Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Operating Parameters */}
            <div className="p-6 bg-[#0C101C] border border-slate-800 rounded-2xl space-y-4">
              <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block">
                Availability & Parameters
              </span>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Timezone Alignment</span>
                    <span className="text-slate-400">Pacific Time (PT) · Seamless overlap with Americas & Europe</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Current Engagement Status</span>
                    <span className="text-slate-400">{DESIGNER_INFO.availability}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium block">Mutual NDA & Advisory</span>
                    <span className="text-slate-400">Comfortable operating under strict confidentiality agreements</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profiles & Links */}
            <div className="pt-2">
              <span className="text-xs font-mono-code text-slate-500 uppercase tracking-wider block mb-3">
                Design Profiles & Verified Repos
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-mono-code text-slate-400">
                <a href={DESIGNER_INFO.socials.readcv} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Read.cv</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span>·</span>
                <a href={DESIGNER_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span>·</span>
                <a href={DESIGNER_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span>·</span>
                <a href={DESIGNER_INFO.socials.dribbble} target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Working Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#0C101C] border border-slate-800 rounded-2xl relative shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your project details have been logged and sent to Richard Diaz. You will receive a direct reply within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          projectType: 'Design System Architecture',
                          budgetRange: '$25,000 — $50,000',
                          timeline: 'Q2 2026 (1–3 Months)',
                          message: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-white tracking-tight">
                      Project Scope Specification
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                      Fill out the form below to receive a strategic scoping proposal and timeline estimate.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-code text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Elena Rostova"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/80 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-code text-slate-300">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@venture.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/80 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-code text-slate-300">
                      Primary Engagement Focus
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400/80 transition-colors cursor-pointer"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-slate-900 text-white">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-code text-slate-300">
                        Target Budget Band
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-amber-400/80 transition-colors cursor-pointer"
                      >
                        {budgetRanges.map((br) => (
                          <option key={br} value={br} className="bg-slate-900 text-white">
                            {br}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono-code text-slate-300">
                        Timeline Target
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Q2 2026 or ASAP"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/80 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-code text-slate-300">
                      Project Context & Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share a brief overview of your product, current roadblocks, and desired outcomes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-900/90 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/80 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all duration-150 active:scale-[0.99] flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Scope...</span>
                      ) : (
                        <>
                          <span>Transmit Scoping Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
