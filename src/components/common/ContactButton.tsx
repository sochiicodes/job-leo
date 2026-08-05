import { Link } from "react-router-dom"
import { getWhatsAppLink } from "../../utils/whatsappLink"

export const ContactButton = () =>{
    return(
        <Link
            to={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-900/90 transition-all hover:shadow-xl hover:shadow-brand-100 active:scale-95 text-sm font-bold"
        >
            Contact Us
        </Link>
    )
}