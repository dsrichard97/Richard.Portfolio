import React, { useEffect, useState } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ArrowUp, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [sfTime, setSfTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setSfTime(`${timeStr} PT`);
      } catch {
        setSfTime('14:00 PT');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#06080D] border-t border-slate-900 text-xs text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-display font-bold text-white text-sm">
            {DESIGNER_INFO.name}
          </span>
          <span className="hidden sm:inline text-slate-700">·</span>
          <span>© {new Date().getFullYear()} Richard Diaz. All rights reserved.</span>
        </div>

        {/* Center: Live Local SF Time */}
        <div className="flex items-center gap-2 font-mono-code text-slate-400">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>San Francisco: <strong className="text-slate-200 tabular-nums">{sfTime}</strong></span>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer py-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
