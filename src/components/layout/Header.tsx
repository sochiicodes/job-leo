import React, { useState } from 'react';
import { Menu, X, PlusCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { EMPLOYER_FORM_URL } from '../../constants/urls';
import { PostJobButton } from '../../features/jobs/components/PostJobButton';
import { ContactButton } from '../common/ContactButton';


interface HeaderProps {
  isScrolled: boolean;
  scrollToSection: (id: string, tab?: 'seeker' | 'employer') => void;
  getWhatsAppLink: (jobTitle?: string, type?: 'seeker' | 'employer') => string;
}

export function Header({
  isScrolled,
  scrollToSection,
  getWhatsAppLink,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //know current page
  const {pathname} = useLocation()
  const showHomeLinks = pathname === "/"

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
          {showHomeLinks && (
            <>
              <button onClick={() => scrollToSection('faq')} className="hover:text-brand-600 transition-colors font-semibold">FAQ</button>
              <button onClick={() => scrollToSection('terms')} className="hover:text-brand-600 transition-colors font-semibold">Terms</button>
            </>
          )}
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
            <ContactButton/>
            <PostJobButton/>
          </div>
        </div>

        <button 
          className="md:hidden p-2 text-slate-600 active:bg-slate-50 rounded-lg" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <Link to="/#how-it-works" className="text-left py-2 font-bold text-slate-700">Process</Link>
            <Link to="/jobs" className="text-left py-2 font-bold text-slate-700">Browse Jobs</Link>
            <Link to="/#register" className="text-left py-2 font-bold text-slate-700">Join Network</Link>
            <Link to="/#faq" className="text-left py-2 font-bold text-slate-700">FAQ</Link>
            <Link to="/#terms" className="text-left py-2 font-bold text-slate-700">Terms</Link>
            <hr className="border-slate-100" />
            <Link to={getWhatsAppLink()} target="_blank" className="w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-bold" >Contact Us</Link>
            <Link to={EMPLOYER_FORM_URL} target="_blank" className="w-full text-center py-4 bg-brand-500 border-brand-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2">
              <PlusCircle className="w-5 h-5" /> Post Job
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
