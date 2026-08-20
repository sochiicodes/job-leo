import {  ArrowRight,  LucideIcon,  PiIcon } from "lucide-react"

interface WhatsPopularCardProps{
    count: number,
    title: string,
    description: string
    footerText: string
    icon: LucideIcon
    onClick?: () => void;
}

const WhatsPopularCard = ({
    count,
    title,
    description,
    footerText,
    icon: Icon,
    onClick
}: WhatsPopularCardProps) =>{
    
    return (
        <section 
            className="border border-slate-200 p-6 rounded-2xl flex flex-col grow gap-6 group transition-all cursor-pointer"
            onClick={onClick}
        >
            <header className="flex justify-between items-center">
                <div className="p-2.5 bg-brand-100/20 border border-brand-100 justify-self rounded-xl group-hover:bg-brand-100/40 group-hover:border-brand-200 transition-colors">
                    <Icon className="group-hover:text-brand-600"/>
                </div>
                <p className="text-slate-400 text-xs font-medium  group-hover:text-brand-600 transition-colors">{count} openings</p> 
            </header>
            <article className="space-y-2">
                <h1 className="font-bold group group-hover:text-brand-600 transition-colors"> {title}</h1>
                <p className="text-sm text-slate-500">{description}</p>
            </article>
            <footer className="text-brand-600 lg:text-slate-800 flex items-center justify-between text-xs font-bold border-t border-t-slate-200 pt-4 group-hover:text-brand-600 transition-colors">
                <p>{footerText}</p> 
                <div className="group-hover:bg-brand-600 p-2 rounded-full duration-200 group-hover:translate-x-1 transition-colors group-hover:shadow-xl">
                    <ArrowRight size={14} className="text-brand-600 lg:text-slate-800 group-hover:text-white transition-colors"/>
                </div>
            </footer>
        </section>
    )
}
export default WhatsPopularCard