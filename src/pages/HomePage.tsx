import { useState, useEffect } from 'react';
import { JobCategory } from '../types/types';
import { WHATSAPP_BASE_URL } from '../constants/urls';


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

  const getWhatsAppLink = (jobTitle?: string, type?: 'seeker' | 'employer') => {
    let message = "Hello JobLeo, I'd like to inquire about a job role.";
    if (jobTitle) message = `Hello JobLeo, I am interested in the ${jobTitle} role.`;
    else if (type === 'seeker') message = "Hello JobLeo, I want to register as a Job Seeker.";
    else if (type === 'employer') message = "Hello JobLeo, I am looking to hire staff for my business.";
    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
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
