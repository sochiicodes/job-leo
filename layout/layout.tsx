import { Outlet } from "react-router-dom";
import { Footer, FullTermsOverlay, Header, ScrollToTop } from "../components";
import { useEffect, useState } from "react";
import { WHATSAPP_BASE_URL } from "../data/constants";



export default function Layout(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showFullTerms, setShowFullTerms] = useState(false);
    const [activeTab, setActiveTab] = useState<'seeker' | 'employer'>('seeker');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const scrollToSection = (id: string, tab?: 'seeker' | 'employer') => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });

        setIsMenuOpen(false);
      };
    
      const getWhatsAppLink = (jobTitle?: string, type?: 'seeker' | 'employer') => {
        let message = "Hello JobLeo, I'd like to inquire about a job role.";
        if (jobTitle) message = `Hello JobLeo, I am interested in the ${jobTitle} role.`;
        else if (type === 'seeker') message = "Hello JobLeo, I want to register as a Job Seeker.";
        else if (type === 'employer') message = "Hello JobLeo, I am looking to hire staff for my business.";
        return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
      };


    return(
        <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
            {showFullTerms && (
                <FullTermsOverlay activeTab={activeTab} onClose={() => setShowFullTerms(false)} />
            )}
            <Header
                isScrolled={isScrolled}
                isMenuOpen={isMenuOpen}
                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                scrollToSection={scrollToSection}
                getWhatsAppLink={getWhatsAppLink}
            />

                <main>
                    <Outlet/>
                </main>

            <Footer
                scrollToSection={scrollToSection}
                onOpenSeekerTerms={() => {
                scrollToSection('terms', 'seeker');
                setShowFullTerms(true);
                }}
                onOpenEmployerTerms={() => {
                scrollToSection('terms', 'employer');
                setShowFullTerms(true);
                }}
            />
            <ScrollToTop />
        </div>
    )
}