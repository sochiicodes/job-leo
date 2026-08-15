import { MapPin, Search, SearchIcon } from "lucide-react"
import { useState } from "react"
import { useJobFilters } from "../hooks/useJobFilters"

const HeroJobSearch = () =>{
    const {
        jobSearchTerm, 
        locationSearchTerm,
        setJobSearchTerm,
        setLocationSearchTerm,
        handleSubmit,
    } = useJobFilters()
    console.log("Job Search Term:",jobSearchTerm, "City Search Term:",locationSearchTerm )

    return(
        <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-2xl p-1.5 sm:p-2 flex flex-col md:flex-row items-stretch gap-2 text-[#1C1A17]"
        >
            <div className="flex flex-1 gap-2 items-center px-4 border-r border-gray-200">
                <Search size="18" className="text-brand-400 shrink-0"/>
                <input
                    onChange={(e) => setJobSearchTerm(e.target.value)}
                    placeholder="Job title or keyword..."
                    className="flex-1 min-w-0 py-2.5 outline-none placeholder:text-gray-400"
                />
            </div>
            <div className="flex flex-1 gap-2 items-center px-4">
                <MapPin size="18" className="text-brand-400 shrink-0"/>
                <input  
                    onChange={(e) => setLocationSearchTerm(e.target.value)}
                    placeholder="City or State.."
                    className="flex-1 min-w-0 py-2.5 outline-none placeholder:text-gray-400"
                />
            </div>
            <button 
                type="submit"
                className="flex items-center bg-brand-600 text-slate-900 px-6 gap-2 font-bold rounded-lg cursor-pointer"
            >  
                <SearchIcon size="16"/> Search Jobs
            </button>
        </form>
    )
}

export default HeroJobSearch 
