import { ArrowBigLeft, ArrowBigRightDash, ChevronDown } from "lucide-react"
import { ReactNode, useState } from "react"

interface JobFilterSectionProps{
    title: string
    children: ReactNode
}

const JobFilterSection = ({title,children}: JobFilterSectionProps) =>{
    const [openSection, setOpenSection] = useState(false)
    return(
        <section className="p-5 border-b border-gray-100">
            <button 
                className="flex justify-between items-center w-full text-slate-400 cursor-pointer "
                onClick={() => setOpenSection(!openSection)}
            >
                <span className="font-medium uppercase text-sm">{title}</span> 
                <ChevronDown size="16" className={`${openSection? "-rotate-180 transition-all" : ""}`}/>
            </button>
            {openSection &&(
                <section className="mt-4 text-slate-600 text-sm space-y-2">
                    {children}
                </section>
            )}
            
        </section>
    )
}

export default JobFilterSection