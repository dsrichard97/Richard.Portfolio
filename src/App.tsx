/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { DesignApproach } from './components/DesignApproach';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { Project } from './types/portfolio';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 2500);
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard?.writeText(text);
    showToast(`Copied "${text.length > 28 ? text.slice(0, 25) + '...' : text}" to clipboard`);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard?.writeText(email);
    showToast(`Email ${email} copied to clipboard`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Layout */}
      <main className="flex-1">
        {/* Split Screen Hero with Full-width Metrics */}
        <Hero
          onExploreClick={() => scrollToSection('works')}
          onResumeClick={() => scrollToSection('resume')}
          onCopyEmail={handleCopyEmail}
        />

        {/* Selected Works Bento Grid */}
        <ProjectsGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Methodology & Design Systems Philosophy */}
        <DesignApproach />

        {/* Full Interactive CV & Career Experience */}
        <ResumeSection onCopyText={handleCopyText} />

        {/* Direct Contact & Scope Consultation Form */}
        <ContactSection onCopyEmail={handleCopyEmail} />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Detailed Case Study Modal / Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onCopyText={handleCopyText}
      />

      {/* Feedback Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
