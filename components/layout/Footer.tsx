import React from 'react';
import { Zap, Mail } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string, tab?: 'seeker' | 'employer') => void;
  onOpenSeekerTerms: () => void;
  onOpenEmployerTerms: () => void;
}

export function Footer({ scrollToSection, onOpenSeekerTerms, onOpenEmployerTerms }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img
                src="/logo.png"
                alt="JobLeo"
                className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
              />
            <span className="text-2xl font-black text-white tracking-tight">JobLeo</span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
            Nsukka's premier job placement partner. Vetted. Local. Direct.
          </p>
          <a
            href="mailto:jobleohq@gmail.com"
            className="text-sm font-bold text-slate-500 hover:text-brand-400 transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            jobleohq@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-brand-400 transition-colors">
                  Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('jobs')} className="hover:text-brand-400 transition-colors">
                  Browse Jobs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('register')} className="hover:text-brand-400 transition-colors">
                  Registration
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-brand-400 transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm ">
              <li>
                <button onClick={onOpenSeekerTerms} className="hover:text-brand-400 transition-colors">
                  Job Seeker Terms
                </button>
              </li>
              <li>
                <button onClick={onOpenEmployerTerms} className="hover:text-brand-400 transition-colors">
                  Employer Terms
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.3em]">
        &copy; {new Date().getFullYear()} JobLeo Placement. Nsukka, Enugu State, Nigeria.
      </div>
      <div className='text-center text-sm font-sm text-slate-500 py-4'>Made with 💚 by <a href="https://x.com/Sochillion" className="text-brand-400 hover:text-white transition-colors">Sochima</a></div>
    </footer>
  );
}
