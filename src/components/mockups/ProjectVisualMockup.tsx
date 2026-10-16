import React, { useState, useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { 
  TrendingUp, 
  Layers, 
  Cpu, 
  BookOpen, 
  Radio, 
  BarChart3, 
  Check, 
  Maximize2,
  Sliders,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface MockupProps {
  project: Project;
  isDetailed?: boolean;
}

export const ProjectVisualMockup: React.FC<MockupProps> = ({ project, isDetailed = false }) => {
  switch (project.id) {
    case 'strata-os':
      return <StrataMockup isDetailed={isDetailed} />;
    case 'prism-system':
      return <PrismMockup isDetailed={isDetailed} />;
    case 'aura-canvas':
      return <AuraMockup isDetailed={isDetailed} />;
    case 'vellum-monolith':
      return <VellumMockup isDetailed={isDetailed} />;
    case 'hyperion-telematics':
      return <HyperionMockup isDetailed={isDetailed} />;
    case 'verdant-trace':
      return <VerdantMockup isDetailed={isDetailed} />;
    default:
      return <DefaultMockup project={project} />;
  }
};

/* 1. STRATA OS: High-Frequency Trading Terminal Mockup */
const StrataMockup: React.FC<{ isDetailed: boolean }> = ({ isDetailed }) => {
  const [activeTab, setActiveTab] = useState<'orderbook' | 'depth' | 'latency'>('orderbook');
  const [spread, setSpread] = useState(142.85);

  useEffect(() => {
    const timer = setInterval(() => {
      setSpread(prev => +(prev + (Math.random() * 0.08 - 0.04)).toFixed(2));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[300px] bg-[#06080E] border border-slate-800/80 rounded-xl overflow-hidden flex flex-col font-mono-code text-xs select-none">
      {/* Top Terminal Bar */}
      <div className="bg-[#0D111C] border-b border-slate-800 px-4 py-2 flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="text-slate-300 font-medium ml-2 tracking-wider">STRATA // CORE.DESK.01</span>
        </div>
        <div className="flex items-center gap-3 tabular-nums">
          <span className="text-emerald-400 font-semibold">FEED: LIVE</span>
          <span className="text-slate-500">·</span>
          <span>LATENCY: 1.2ms</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-300 font-bold">${spread}</span>
        </div>
      </div>

      {/* Main Terminal Grid */}
      <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-12 gap-3 bg-[#080B13]/80">
        {/* Left Column: Order Book Streams */}
        <div className="md:col-span-5 bg-[#0D121F] border border-slate-800/90 rounded-lg p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
              <span>SIZE</span>
              <span>BID PRICE</span>
              <span>ASK PRICE</span>
              <span>VOL</span>
            </div>
            
            {/* Ask Rows (Red) */}
            <div className="space-y-1 py-1.5 tabular-nums text-[11px]">
              <div className="flex justify-between text-rose-400 hover:bg-rose-500/10 px-1 rounded transition-colors">
                <span>14,200</span>
                <span className="text-slate-500">—</span>
                <span className="font-semibold">143.10</span>
                <span className="text-slate-400">42K</span>
              </div>
              <div className="flex justify-between text-rose-400 hover:bg-rose-500/10 px-1 rounded transition-colors">
                <span>8,450</span>
                <span className="text-slate-500">—</span>
                <span className="font-semibold">142.98</span>
                <span className="text-slate-400">18K</span>
              </div>
              <div className="flex justify-between text-rose-300 hover:bg-rose-500/10 px-1 rounded transition-colors bg-rose-500/5">
                <span>26,100</span>
                <span className="text-slate-500">—</span>
                <span className="font-bold">142.90</span>
                <span className="text-slate-300">95K</span>
              </div>
            </div>

            {/* Mid Price Spread Divider */}
            <div className="py-1 px-2 my-1 bg-slate-900/90 border-y border-slate-800 flex items-center justify-between text-[11px] text-emerald-300">
              <span className="text-slate-400 font-sans text-[10px]">SPREAD 0.05</span>
              <span className="font-bold tabular-nums">INDEX ${(spread + 0.05).toFixed(2)}</span>
            </div>

            {/* Bid Rows (Green) */}
            <div className="space-y-1 py-1.5 tabular-nums text-[11px]">
              <div className="flex justify-between text-emerald-400 hover:bg-emerald-500/10 px-1 rounded transition-colors bg-emerald-500/5">
                <span>31,400</span>
                <span className="font-bold">142.85</span>
                <span className="text-slate-500">—</span>
                <span className="text-slate-300">114K</span>
              </div>
              <div className="flex justify-between text-emerald-400 hover:bg-emerald-500/10 px-1 rounded transition-colors">
                <span>12,050</span>
                <span className="font-semibold">142.80</span>
                <span className="text-slate-500">—</span>
                <span className="text-slate-400">48K</span>
              </div>
              <div className="flex justify-between text-emerald-500 hover:bg-emerald-500/10 px-1 rounded transition-colors">
                <span>9,800</span>
                <span className="font-semibold">142.72</span>
                <span className="text-slate-500">—</span>
                <span className="text-slate-400">22K</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
            <span>ESC: SAFE LOCK</span>
            <span className="text-emerald-400">MACRO ACTIVE</span>
          </div>
        </div>

        {/* Right Column: Dynamic Depth Vector Chart */}
        <div className="md:col-span-7 bg-[#0D121F] border border-slate-800/90 rounded-lg p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px]">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-200 font-sans font-semibold">Real-Time Depth Topology</span>
            </div>
            <div className="flex gap-1">
              <button 
                onClick={() => setActiveTab('orderbook')}
                className={`px-2 py-0.5 rounded text-[10px] font-sans transition-colors ${activeTab === 'orderbook' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Depth
              </button>
              <button 
                onClick={() => setActiveTab('latency')}
                className={`px-2 py-0.5 rounded text-[10px] font-sans transition-colors ${activeTab === 'latency' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Vol
              </button>
            </div>
          </div>

          {/* SVG Depth Chart */}
          <div className="my-2 h-32 w-full relative flex items-center justify-center">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="bidGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="askGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="0" y1="60" x2="300" y2="60" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="0" y1="90" x2="300" y2="90" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="150" y1="0" x2="150" y2="120" stroke="#334155" strokeWidth="1.5" />

              {/* Bid Area (Left) */}
              <path
                d="M 0 120 L 0 95 Q 40 90 80 70 T 150 40 L 150 120 Z"
                fill="url(#bidGrad)"
              />
              <path
                d="M 0 95 Q 40 90 80 70 T 150 40"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />

              {/* Ask Area (Right) */}
              <path
                d="M 150 120 L 150 40 Q 210 65 250 85 T 300 110 L 300 120 Z"
                fill="url(#askGrad)"
              />
              <path
                d="M 150 40 Q 210 65 250 85 T 300 110"
                fill="none"
                stroke="#F43F5E"
                strokeWidth="2"
              />

              {/* Equilibrium Marker */}
              <circle cx="150" cy="40" r="4" fill="#38BDF8" className="animate-pulse" />
            </svg>

            <div className="absolute inset-x-0 bottom-1 flex justify-between text-[9px] text-slate-500 px-2 tabular-nums">
              <span>BID ACCUMULATION</span>
              <span className="text-slate-400 font-semibold">PARITY: 150.00</span>
              <span>ASK RESISTANCE</span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-[10px] text-slate-400">
            <div>
              <span className="block text-slate-500 text-[9px]">VWAP (1m)</span>
              <span className="text-slate-200 font-bold">$142.88</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[9px]">FILL RATIO</span>
              <span className="text-emerald-400 font-bold">99.96%</span>
            </div>
            <div>
              <span className="block text-slate-500 text-[9px]">DRIFT</span>
              <span className="text-slate-200 font-bold">+0.014 bps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 2. PRISM DESIGN SYSTEM: Interactive Token Inspector & Component Matrix */
const PrismMockup: React.FC<{ isDetailed: boolean }> = ({ isDetailed }) => {
  const [selectedTheme, setSelectedTheme] = useState<'indigo' | 'slate' | 'emerald'>('indigo');
  const [radiusValue, setRadiusValue] = useState<number>(8);
  const [activeVariant, setActiveVariant] = useState<'primary' | 'secondary' | 'ghost'>('primary');

  const themeColors = {
    indigo: { primary: '#6366F1', hover: '#4F46E5', surface: '#1E1B4B' },
    slate: { primary: '#0EA5E9', hover: '#0284C7', surface: '#0C4A6E' },
    emerald: { primary: '#10B981', hover: '#059669', surface: '#064E3B' },
  };

  const current = themeColors[selectedTheme];

  return (
    <div className="w-full h-full min-h-[300px] bg-[#0A0D16] border border-slate-800/80 rounded-xl overflow-hidden flex flex-col font-sans select-none">
      {/* Header Bar */}
      <div className="bg-[#101424] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-slate-200">Prism Tokens & Component Runtime</span>
          <span className="text-slate-500 text-[11px] font-mono-code">v3.4.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-[11px]">Theme:</span>
          {(['indigo', 'slate', 'emerald'] as const).map(t => (
            <button
              key={t}
              onClick={() => setSelectedTheme(t)}
              className={`w-4 h-4 rounded-full transition-transform ${selectedTheme === t ? 'scale-125 ring-2 ring-white/50' : 'opacity-60'}`}
              style={{
                backgroundColor: t === 'indigo' ? '#6366F1' : t === 'slate' ? '#0EA5E9' : '#10B981',
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Token Inspector Controls */}
        <div className="md:col-span-6 bg-[#12172A] border border-slate-800 rounded-lg p-3.5 space-y-3.5">
          <div className="flex items-center justify-between text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-indigo-400" />
              Mathematical Radius Scale
            </span>
            <span className="font-mono-code text-[11px] text-indigo-300">{radiusValue}px</span>
          </div>

          <input
            type="range"
            min="2"
            max="20"
            value={radiusValue}
            onChange={(e) => setRadiusValue(Number(e.target.value))}
            className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
          />

          <div className="space-y-2 pt-2 border-t border-slate-800/80 text-[11px] font-mono-code">
            <div className="flex justify-between items-center text-slate-400">
              <span>--radius-outer:</span>
              <span className="text-slate-200">{radiusValue}px</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>--radius-inner (r - p):</span>
              <span className="text-emerald-400">{Math.max(2, radiusValue - 4)}px</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>--color-semantic-intent:</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: current.primary }} />
                {current.primary}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Live Interactive Components Showcase */}
        <div className="md:col-span-6 bg-[#12172A] border border-slate-800 rounded-lg p-3.5 flex flex-col justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block mb-2">
              Runtime Component Render
            </span>

            <div className="space-y-2.5">
              {/* Primary Action Button */}
              <button
                onClick={() => setActiveVariant('primary')}
                style={{
                  backgroundColor: current.primary,
                  borderRadius: `${radiusValue}px`,
                }}
                className="w-full py-2 px-3 text-xs font-semibold text-white transition-all shadow-lg shadow-indigo-950/40 hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Primary CTA Action</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => setActiveVariant('secondary')}
                style={{
                  borderRadius: `${radiusValue}px`,
                  borderColor: current.primary,
                }}
                className="w-full py-2 px-3 text-xs font-medium text-slate-200 bg-slate-900/60 border hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
              >
                <span>Secondary Surface Form</span>
              </button>
            </div>
          </div>

          <div 
            style={{ borderRadius: `${Math.max(2, radiusValue - 4)}px` }}
            className="p-2.5 mt-3 bg-slate-900/80 border border-slate-800 text-[11px] flex items-center justify-between text-slate-400"
          >
            <span className="flex items-center gap-1 text-emerald-400">
              <Check className="w-3.5 h-3.5" /> WCAG AAA (7.2:1)
            </span>
            <span className="font-mono-code text-[10px]">Zero Pill Discipline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 3. AURA SPATIAL CANVAS: Creative AI Node Graph Mockup */
const AuraMockup: React.FC<{ isDetailed: boolean }> = ({ isDetailed }) => {
  const [activeNode, setActiveNode] = useState<string>('node-prompt');
  const [promptWeight, setPromptWeight] = useState<number>(0.85);

  return (
    <div className="w-full h-full min-h-[300px] bg-[#07090F] border border-slate-800/80 rounded-xl overflow-hidden flex flex-col font-sans select-none relative">
      {/* Canvas Top HUD */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="bg-[#121626]/90 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs pointer-events-auto shadow-xl">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-semibold text-slate-200">Aura Spatial Canvas</span>
          <span className="text-slate-500 font-mono-code text-[10px]">100% · 24 Nodes</span>
        </div>

        <div className="bg-[#121626]/90 backdrop-blur-md border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs pointer-events-auto text-slate-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Realtime Latent Flow</span>
        </div>
      </div>

      {/* Dot Matrix Canvas Surface */}
      <div className="w-full h-full min-h-[300px] p-6 relative flex items-center justify-center bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Connecting Bezier Splines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 120 160 C 180 160, 200 130, 260 130"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="animate-pulse"
          />
          <path
            d="M 260 130 C 330 130, 350 180, 420 180"
            fill="none"
            stroke="#22D3EE"
            strokeWidth="2.5"
          />
        </svg>

        {/* Node Graph Cards */}
        <div className="flex flex-wrap items-center justify-around gap-6 z-10 w-full max-w-xl">
          {/* Node 1: Visual Style Vector */}
          <div 
            onClick={() => setActiveNode('node-prompt')}
            className={`w-44 bg-[#0F1422] border rounded-xl p-3 shadow-2xl transition-all cursor-pointer ${activeNode === 'node-prompt' ? 'border-cyan-400 ring-2 ring-cyan-500/30' : 'border-slate-800 hover:border-slate-700'}`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
              <span className="font-semibold text-slate-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" /> Style Seed
              </span>
              <span className="text-[9px] font-mono-code text-cyan-400">#01</span>
            </div>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p className="line-clamp-2 text-slate-300 font-sans">"Minimalist Bauhaus architectural composition with cold morning window shadows"</p>
              <div className="pt-2 flex justify-between text-[10px] font-mono-code text-slate-500">
                <span>WEIGHT</span>
                <span className="text-cyan-400">{promptWeight}</span>
              </div>
            </div>
          </div>

          {/* Node 2: Parametric Operator HUD */}
          <div 
            onClick={() => setActiveNode('node-operator')}
            className={`w-48 bg-[#0F1422] border rounded-xl p-3 shadow-2xl transition-all cursor-pointer ${activeNode === 'node-operator' ? 'border-cyan-400 ring-2 ring-cyan-500/30' : 'border-slate-800 hover:border-slate-700'}`}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[11px]">
              <span className="font-semibold text-slate-300">Latent Synthesizer</span>
              <span className="text-[9px] font-mono-code text-emerald-400">ACTIVE</span>
            </div>
            <div className="pt-2 space-y-2">
              <div className="h-10 bg-slate-900 rounded-md border border-slate-800 flex items-center justify-center text-[11px] text-cyan-300 font-medium">
                Generating Frame 42 / 60
              </div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Sampling Steps: 40</span>
                <span>Guidance: 7.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 4. VELLUM & MONOLITH: Archival Typography Monograph Mockup */
const VellumMockup: React.FC<{ isDetailed: boolean }> = ({ isDetailed }) => {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#141210] border border-amber-900/40 rounded-xl overflow-hidden flex flex-col font-sans select-none p-4">
      <div className="flex-1 bg-[#F5F2EB] text-[#171615] rounded-lg p-6 shadow-2xl flex flex-col justify-between border border-amber-200/50">
        <div>
          <div className="flex items-center justify-between border-b border-stone-300 pb-3 text-xs tracking-widest uppercase">
            <span className="font-serif font-bold text-amber-950">Monolith Sound Archives</span>
            <span className="font-mono-code text-[11px] text-stone-500">Folio VII · Edition 01</span>
          </div>

          <div className="pt-6 space-y-3">
            <h4 className="font-serif text-2xl lg:text-3xl tracking-tight text-stone-900 font-semibold leading-tight">
              The Vanishing Acoustic Spaces of Northern Antiquity
            </h4>
            <p className="font-serif italic text-sm text-stone-700 max-w-md">
              A comprehensive physical monograph documenting impulse response measurements, resonance dampening, and bespoke typography.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-300/80 flex items-end justify-between text-xs">
          <div className="space-y-1">
            <span className="block text-[10px] tracking-wider uppercase text-stone-500 font-mono-code">SPECIFICATION</span>
            <span className="font-serif text-stone-800">Cold-pressed 320gsm cotton rag · Blind Deboss</span>
          </div>
          <div className="text-right">
            <span className="font-serif font-bold text-lg text-amber-900">RED DOT 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 5. HYPERION TELEMATICS: Cockpit Teleoperation Mockup */
const HyperionMockup: React.FC<{ isDetailed: boolean }> = ({ isDetailed }) => {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#07090F] border border-amber-900/40 rounded-xl overflow-hidden flex flex-col font-mono-code text-xs select-none">
      <div className="bg-[#101420] border-b border-slate-800 px-4 py-2 flex items-center justify-between text-slate-400">
        <span className="text-amber-400 font-semibold flex items-center gap-2">
          <Radio className="w-3.5 h-3.5" /> MISSION CONTROL // FREIGHT-842
        </span>
        <span className="text-emerald-400 font-bold tabular-nums">SPEED: 64.2 MPH · CLEAR</span>
      </div>

      <div className="flex-1 p-4 flex flex-col justify-between bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Radar & Perimeter Grid */}
        <div className="h-32 border border-slate-800 rounded-lg bg-[#0C101C]/90 p-3 relative flex items-center justify-center overflow-hidden">
          {/* Radar Circles */}
          <div className="w-24 h-24 rounded-full border border-slate-700/60 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border border-slate-700/80 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
            </div>
          </div>
          <div className="absolute top-2 left-2 text-[10px] text-slate-400">
            LIDAR OBSTACLE MAPPING: 0 HAZARDS
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-emerald-400">
            LATENCY: 18ms EDGE SYNC
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-[10px] pt-3 text-slate-400">
          <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
            <span className="block text-slate-500">AUTONOMY LEVEL</span>
            <span className="text-slate-200 font-bold">SAE Level 4 Verified</span>
          </div>
          <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
            <span className="block text-slate-500">TRAJECTORY DRIFT</span>
            <span className="text-emerald-400 font-bold">&lt; 0.02m Safe</span>
          </div>
          <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
            <span className="block text-slate-500">PILOT HANDOVER</span>
            <span className="text-slate-200 font-bold">Standby Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 6. VERDANT TRACE: Supply Chain Carbon ESG Mockup */
const VerdantMockup: React.FC<{ isDetailed: boolean }> = ({ isDetailed }) => {
  return (
    <div className="w-full h-full min-h-[300px] bg-[#06110B] border border-emerald-900/40 rounded-xl overflow-hidden flex flex-col font-sans text-xs select-none p-4">
      <div className="flex items-center justify-between pb-3 border-b border-emerald-950 text-slate-300">
        <span className="font-semibold text-emerald-400 flex items-center gap-2">
          <BarChart3 className="w-4 h-4" /> Verdant Trace · Scope 3 Multi-Tier Flows
        </span>
        <span className="text-slate-400 text-[11px] font-mono-code">AUDITED: 2025 COMPLIANT</span>
      </div>

      <div className="flex-1 py-4 flex flex-col justify-between">
        {/* Sankey Style Stream */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Tier 1 Raw Metallurgy</span>
            <span className="font-mono-code text-emerald-300 font-semibold">1,240 MT CO2e</span>
          </div>
          <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden flex">
            <div className="w-[65%] bg-emerald-500" />
            <div className="w-[35%] bg-emerald-700" />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <span>Tier 2 Fabrication & Foundry</span>
            <span className="font-mono-code text-emerald-300 font-semibold">890 MT CO2e</span>
          </div>
          <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden flex">
            <div className="w-[45%] bg-emerald-400" />
            <div className="w-[55%] bg-emerald-600" />
          </div>
        </div>

        <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-lg flex items-center justify-between text-xs text-emerald-300">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Automated GHG Protocol Assurance
          </span>
          <span className="font-mono-code font-bold text-white">100% PASS</span>
        </div>
      </div>
    </div>
  );
};

/* Fallback default mockup */
const DefaultMockup: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="w-full h-full min-h-[260px] bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h4 className="font-display font-semibold text-lg text-white">{project.title}</h4>
        <span className="text-xs text-slate-400 font-mono-code">{project.year}</span>
      </div>
      <p className="text-sm text-slate-400">{project.tagline}</p>
      <div className="text-xs text-slate-500 font-mono-code">
        {project.client} · {project.role}
      </div>
    </div>
  );
};
