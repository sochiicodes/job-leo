import { MapIcon, MapPin, Search, SearchIcon } from "lucide-react"

const HeroJobSearch = () =>{
    return(
        <form className="flex rounded-2xl overflow-hidden shadow-md bg-white text-gray-900">
            <div className="flex flex-1 gap-2 items-center px-4 border-r border-gray-200">
                <Search size="18" className="text-brand-400 shrink-0"/>
                <input
                    placeholder="Job title or keyword..."
                    className="flex-1 min-w-0 py-4 outline-none placeholder:text-gray-400"
                />
            </div>
            <div className="flex flex-1 gap-2 items-center px-4">
                <MapPin size="18" className="text-brand-400 shrink-0"/>
                <input  
                    placeholder="City or State.."
                    className="flex-1 min-w-0 py-4 outline-none placeholder:text-gray-400"
                />
            </div>
            <button className="flex items-center bg-orange-600 text-black px-4 gap-2 font-bold">  
                <SearchIcon size="16"/> Search Jobs
            </button>
        </form>
    )
}

export default HeroJobSearch 
