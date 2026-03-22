import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Zap,
  Layers,
  Sparkles,
  ChevronRight,
  MessageSquareWarning,
  UserCheck,
  Cpu
} from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Tracking mouse for the dynamic radial gradient glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden relative">

      {/* --- DYNAMIC BACKGROUND ENGINE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.08), transparent 40%)`
          }}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/10 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* --- HEADER --- */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 py-4 border-b border-white/5 bg-[#030014]/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex justify-between items-center">

            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Layers size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white tracking-tighter">
                  Mentor<span className="text-cyan-400">Sync</span> Support
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Made For Easy</span>
              </div>
            </div>

            <button className="group relative px-6 py-2 rounded-full text-xs font-bold text-white overflow-hidden transition-all border border-white/10 bg-white/5">
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest">
                Login / Register <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </header>

        {/* --- HERO SECTION --- */}
        <main className="flex-grow flex flex-col items-center justify-center pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">

          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 mb-8">
              <Sparkles size={14} className="text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                Mentorship & Technical Integrity
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-medium mb-8 tracking-tighter leading-[0.9]">
              Your Voice &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Matters to us
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Whether your mentor is unresponsive, your review is delayed, or you're facing <strong>critical technical hurdles</strong>, our internal system ensures your progress remains uninterrupted.
            </p>
          </div>

          {/* --- BENTO GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl">

            {/* Primary Action: Dispute & Tech Escalation */}
            <div className="md:col-span-8 bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 md:p-14 hover:border-cyan-500/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cpu size={180} className="text-cyan-400" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20">
                    <MessageSquareWarning size={28} className="text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest leading-none mb-1">Priority Support</span>
                    <span className="text-xs text-slate-500 italic">Average resolution: 14m</span>
                  </div>
                </div>

                <h2 className="text-4xl font-bold mb-6 tracking-tight text-white leading-tight">Report an Issue <br />or Platform Bug</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                  Log mentor inactivity, delayed project reviews, or <strong>platform technical errors</strong>. Our leads will investigate the bottleneck immediately.
                </p>

                {/* SLIM BUTTONS */}
                <div className="flex flex-wrap gap-3">
                  <button className="relative group px-7 py-2.5 rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 flex items-center gap-2 text-white text-sm font-semibold tracking-wide">
                      Create Incident
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </button>

                  <button className="px-7 py-2.5 rounded-xl text-sm font-semibold border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 tracking-wide">
                    View My History
                  </button>
                </div>
              </div>
            </div>

            {/* Urgency Card: Review Dispatch */}
            <div className="md:col-span-4 bg-gradient-to-br from-indigo-950/40 to-[#030014] border border-indigo-500/20 rounded-[3rem] p-10 flex flex-col justify-between hover:border-indigo-500/40 transition-all relative overflow-hidden group">

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center border border-indigo-500/30">
                    <Zap className="text-indigo-400" fill="currentColor" size={20} />
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span className="text-[10px] font-black text-red-500 tracking-tighter uppercase">Queue Active</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white leading-tight">Review <br />Priority Dispatch</h3>
                <p className="text-indigo-200/50 text-sm leading-relaxed mb-6">
                  For projects that have exceeded the <strong>24h window</strong>. Automated lead reassignment is currently active.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400/60">
                  <span>SLA Response Rate</span>
                  <span>98.2%</span>
                </div>
                <div className="h-1.5 bg-indigo-900/50 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[98.2%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                </div>
              </div>
            </div>

          </div>
        </main>

        <footer className="py-12 text-center border-t border-white/5">
          <div className="text-slate-600 text-[10px] uppercase tracking-[0.5em] font-bold">
            MentorSync Support &bull; @Copyright Made For Easy 2026
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;