import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const SCROLL_THRESHOLD = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY);
      setVisible(window.scrollY > SCROLL_THRESHOLD)
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-full
        bg-brand-500 text-white shadow-lg
        hover:bg-brand-600 active:scale-95
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
    >
      <ChevronUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
}
