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

  useEffect(() =>{
    const sectionId = window.location.hash.slice(1)

    if(!sectionId) return

    const element = document.getElementById(sectionId)

    if(element){
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  },[])

  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      {showFullTerms && (
        <FullTermsOverlay activeTab={activeTab} onClose={() => setShowFullTerms(false)} />
      )}

      <main className="pt-16">
        <Hero/>
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
