import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { ScrollToTop } from "../../components/layout/ScrollToTop";
import { FullTermsOverlay } from "../../features/legal";
import { useScrolled } from "../../hooks/useScrolled";
import { getWhatsAppLink } from "../../utils/whatsappLink";
import { scrollToSection } from "../../utils/scrollToSection";



export default function RootLayout(){
    const [showFullTerms, setShowFullTerms] = useState(false);
    const [activeTab] = useState<'seeker' | 'employer'>('seeker');

    const isScrolled = useScrolled()

    const handleScrollToSection = (id: string) =>{
        scrollToSection(id)
    }


    return(
        <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
            {showFullTerms && (
                <FullTermsOverlay activeTab={activeTab} onClose={() => setShowFullTerms(false)} />
            )}
            <Header
                isScrolled={isScrolled}
                scrollToSection={handleScrollToSection}
                getWhatsAppLink={getWhatsAppLink}
            />

                <main>
                    <Outlet/>
                </main>

            <Footer
                scrollToSection={handleScrollToSection}
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