import React, { useState } from 'react';
import { Menu, X, PlusCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { EMPLOYER_FORM_URL } from '../../constants/urls';
import { ContactButton } from '../common/ContactButton';
import { PostJobButton } from '../../features/jobs';
import { handleNavClick } from '../../utils/handleNavClick';
import { getWhatsAppLink } from '../../utils/whatsappLink';


interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({isScrolled,}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //know current page
  const navigate = useNavigate()
  const {pathname} = useLocation()
  // const showHomeLinks = pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 ease-out w-full flex items-center justify-between px-6 ${
          isScrolled
            ? 'mt-4 mx-4 rounded-full bg-white/80 backdrop-blur-xl shadow-lg border border-slate-100 py-2.5'
            : 'mt-0 rounded-none bg-white  border-slate-100 py-3.5'
        }`}
      >
        <Link to="/">
          <section
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => {
              window.scrollTo({top: 0, behavior: "smooth"})
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            <img
              src="/logo.png"
              alt="JobLeo"
              className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-bold text-slate-900 tracking-tight">JobLeo</span>
          </section>
        </Link>

        <section className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/jobs" className="hover:text-brand-600 transition-colors font-semibold">Explore Jobs</Link>

          <button onClick={() => handleNavClick("faq", navigate, pathname)}  className="hover:text-brand-600 transition-colors font-semibold">FAQ</button>
          <button onClick={() => handleNavClick("terms", navigate, pathname)}  className="hover:text-brand-600 transition-colors font-semibold">Terms</button>

          <section className="flex items-center gap-3 pl-4 border-l border-slate-100">
              <button
                onClick={() => handleNavClick("contact", navigate, pathname)}
                rel="noopener noreferrer"
                className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-900/90 transition-all hover:shadow-xl hover:shadow-brand-100 active:scale-95 text-sm font-bold"
              >
                Contact Us
              </button>
            <PostJobButton/>
          </section>
        </section>

        <button 
          className="md:hidden p-2 text-slate-600 active:bg-slate-50 rounded-lg" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* mobile menu */}
        {isMenuOpen && (
          <section className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white border border-slate-100 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <Link 
              to="/jobs"
              onClick={() => setIsMenuOpen(false)}
              className="text-left py-2 font-bold text-slate-700 hover:text-brand-600 cursor-pointer transition-colors"
            >Browse Jobs</Link>
            
            <button 
              onClick={() => {
                handleNavClick("process", navigate, pathname) 
                setIsMenuOpen(false)
              }}
              className="text-left py-2 font-bold text-slate-700 hover:text-brand-600 transition-colors cursor-pointer"
            >Process</button>
            <button 
              onClick={() => {
                handleNavClick("join-network", navigate, pathname)
                setIsMenuOpen(false)
              }} 
              className="text-left py-2 font-bold text-slate-700 hover:text-brand-600 transition-colors cursor-pointer"
            >Join Network</button>
            <button 
              onClick={() => {
                handleNavClick("faq", navigate, pathname)
                setIsMenuOpen(false)
              }} className="text-left py-2 font-bold text-slate-700 hover:text-brand-600 transition-colors cursor-pointer"
            >FAQ</button>
            <button 
              onClick={() => {
                handleNavClick("terms", navigate, pathname)
                setIsMenuOpen(false)
              }} 
              className="text-left py-2 font-bold text-slate-700 hover:text-brand-600 transition-colors cursor-pointer"
            >Terms</button>
            
            <hr className="border-slate-100" />
            <Link 
              to={getWhatsAppLink()} 
              onClick={() => setIsMenuOpen(false)}
              target="_blank" 
              className="w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-bold" 
            >Contact Us</Link>
            <Link 
              to={EMPLOYER_FORM_URL} 
              onClick={() => setIsMenuOpen(false)}
              target="_blank" 
              className="w-full text-center py-4 bg-brand-500 border-brand-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-5 h-5" /> Post Job
            </Link>
          </section>
        )}
      </nav>
    </header>
  );
}

export default Header