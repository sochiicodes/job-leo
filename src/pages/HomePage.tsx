import { useState, useEffect } from 'react';


import { 
  Hero,
  RegisterSection,
  FAQSection,
  TermsSection,
  ContactSection,
  JobsSection,
  ProcessSection
} from '../features/home';
import { FullTermsOverlay } from '../features/legal';
import { JobCategory } from '../features/jobs/types';
import { getWhatsAppLink } from '../utils/whatsappLink';




export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<JobCategory>('All');
  const [activeTab, setActiveTab] = useState<'seeker' | 'employer'>('seeker');
  const [showFullTerms, setShowFullTerms] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, tab?: 'seeker' | 'employer') => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    if (tab) setActiveTab(tab);
    
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      {showFullTerms && (
        <FullTermsOverlay activeTab={activeTab} onClose={() => setShowFullTerms(false)} />
      )}

      <main className="pt-16">
        <Hero scrollToSection={scrollToSection} />
        <ProcessSection />
        <JobsSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          getWhatsAppLink={getWhatsAppLink}
        />
        <RegisterSection />
        <FAQSection openFaqIndex={openFaqIndex} onFaqToggle={setOpenFaqIndex} />
        <TermsSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onViewFullTerms={() => setShowFullTerms(true)}
        />
        <ContactSection getWhatsAppLink={getWhatsAppLink} />
      </main>
    </div>
  );
}
