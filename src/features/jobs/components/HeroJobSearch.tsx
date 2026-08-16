import { MapPin, Search} from "lucide-react"
import { useJobFilters } from "../hooks/useJobFilters"

const HeroJobSearch = () =>{
    const {
        jobSearchTerm, 
        locationSearchTerm,
        
        setJobSearchTerm,
        setLocationSearchTerm,
    } = useJobFilters()
    // console.log("Job Search Term:",jobSearchTerm, "City Search Term:",locationSearchTerm )

    return(
        <section 
            className="bg-white rounded-xl shadow-2xl p-1.5 sm:p-2 flex flex-col md:flex-row items-stretch gap-2 text-[#1C1A17]"
        >
            <div className="flex flex-1 gap-2 items-center px-4 border-b  md:border-b-0 md:border-r border-gray-200 ">
                <Search size="18" className="text-brand-400 shrink-0"/>
                <input
                    value={jobSearchTerm}
                    onChange={(e) => setJobSearchTerm(e.target.value)}
                    placeholder="Job title or keyword..."
                    className="flex-1 min-w-0 py-2.5 outline-none placeholder:text-gray-400"
                />
            </div>
            <div className="flex flex-1 gap-2 items-center px-4">
                <MapPin size="18" className="text-brand-400 shrink-0"/>
                <input  
                    value={locationSearchTerm}
                    onChange={(e) => setLocationSearchTerm(e.target.value)}
                    placeholder="Area, City or State.."
                    className="flex-1 min-w-0 py-2.5 outline-none placeholder:text-gray-400"
                />
            </div>
        </section>
    )
}

export default HeroJobSearch 
