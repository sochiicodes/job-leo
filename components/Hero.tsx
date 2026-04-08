import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="relative py-24 md:py-10 px-4 overflow-hidden bg-white ">
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-brand-700 text-[11px] font-black mb-8 uppercase tracking-[0.15em] border border-slate-100 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
          Nsukka's Leading Placement Hub
        </div>
        <h1 className="text-5xl md:text-7xl xl:text-9xl font-black text-slate-900 mb-8 leading-[1.02] tracking-tighter max-w-5xl">
          Hire Fast. <br />
          Work <span className="text-brand-500">Faster.</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
          Connecting Nsukka's best candidates with top local businesses directly through WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollToSection('jobs')}
            className="w-full sm:w-auto px-12 py-6 bg-brand-500 text-white rounded-[1.5rem] font-bold text-xl hover:bg-brand-600 transition-all shadow-xl shadow-brand-100 border-none"
          >
            See All Jobs
          </button>
          <button
            onClick={() => scrollToSection('register')}
            className="w-full sm:w-auto px-12 py-6 bg-white border-2 border-slate-200 text-slate-900 rounded-[1.5rem] font-bold text-xl hover:border-brand-500 transition-all flex items-center justify-center gap-2"
          >
            Join the Network <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
