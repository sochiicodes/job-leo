import React from 'react';
import { Menu, X, PlusCircle } from 'lucide-react';
import { EMPLOYER_FORM_URL } from '../../data/constants';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  scrollToSection: (id: string, tab?: 'seeker' | 'employer') => void;
  getWhatsAppLink: (jobTitle?: string, type?: 'seeker' | 'employer') => string;
}

export function Header({
  isScrolled,
  isMenuOpen,
  onMenuToggle,
  scrollToSection,
  getWhatsAppLink,
}: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 ease-out w-full max-w-7xl flex items-center justify-between px-6 ${
          isScrolled
            ? 'mt-4 mx-4 rounded-full bg-white/80 backdrop-blur-xl shadow-lg border border-slate-100 py-2.5'
            : 'mt-0 rounded-none bg-white border-b border-slate-100 py-4'
        }`}
      >
        <Link to="/">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/logo.png"
              alt="JobLeo"
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold text-slate-900 tracking-tight">JobLeo</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/jobs" className="hover:text-brand-600 transition-colors font-semibold">Explore Jobs</Link>
          <button onClick={() => scrollToSection('/#faq')} className="hover:text-brand-600 transition-colors font-semibold">FAQ</button>
          <button onClick={() => scrollToSection('/#terms')} className="hover:text-brand-600 transition-colors font-semibold">Terms</button>
          <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-900/90 transition-all hover:shadow-xl hover:shadow-brand-100 active:scale-95 text-sm font-bold"
            >
              Contact Us
            </a>
            <a
              href={EMPLOYER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-brand-500 text-white rounded-full hover:bg-brand-600 transition-all hover:shadow-xl hover:shadow-brand-100 active:scale-95 text-sm font-bold flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Post Job
            </a>
          </div>
        </div>

        <button className="md:hidden p-2 text-slate-600 active:bg-slate-50 rounded-lg" onClick={onMenuToggle}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 font-bold text-slate-700">Process</button>
            <button onClick={() => scrollToSection('jobs')} className="text-left py-2 font-bold text-slate-700">Browse Jobs</button>
            <button onClick={() => scrollToSection('register')} className="text-left py-2 font-bold text-slate-700">Join Network</button>
            <button onClick={() => scrollToSection('faq')} className="text-left py-2 font-bold text-slate-700">FAQ</button>
            <button onClick={() => scrollToSection('terms')} className="text-left py-2 font-bold text-slate-700">Terms</button>
            <hr className="border-slate-100" />
            <a href={getWhatsAppLink()} className="w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-bold">Contact Us</a>
            <a href={EMPLOYER_FORM_URL} target="_blank" className="w-full text-center py-4 bg-brand-500 border-brand-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2">
              <PlusCircle className="w-5 h-5" /> Post Job
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
