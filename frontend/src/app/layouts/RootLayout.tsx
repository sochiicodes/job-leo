import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FullTermsOverlay } from "../../features/legal";
import { useScrolled } from "../../hooks/useScrolled";
import { getWhatsAppLink } from "../../utils/whatsappLink";
import { handleNavClick } from "../../utils/handleNavClick";
import { Footer, Header, ScrollToHash, ScrollToTop, ScrollToTopOnRouteChange } from "../../components";



export default function RootLayout(){
    const [showFullTerms, setShowFullTerms] = useState(false);
    const [activeTab] = useState<'seeker' | 'employer'>('seeker');

    const isScrolled = useScrolled()

    const navigate = useNavigate()
    const {pathname} = useLocation()

    const handleScrollToSection = (id: string) =>{
        handleNavClick(id, navigate, pathname)
    }


    return(
        <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
            {showFullTerms && (
                <FullTermsOverlay activeTab={activeTab} onClose={() => setShowFullTerms(false)} />
            )}
            <Header
                isScrolled={isScrolled}
            />

                <main>
                    <Outlet/>
                </main>

            <Footer
                scrollToSection={handleScrollToSection}
                onOpenSeekerTerms={() => {
                handleNavClick("terms", navigate, pathname)
                setShowFullTerms(true);
                }}
                onOpenEmployerTerms={() => {
                handleNavClick("terms", navigate, pathname);
                setShowFullTerms(true);
                }}
            />
            <ScrollToHash />
            <ScrollToTop />
            <ScrollToTopOnRouteChange/>
        </div>
    )
}