import { SearchIcon } from "lucide-react"

const HeroJobSearch = () =>{
    return(
        <form className="max-w-[860px] flex bg-white rounded overflow-hidden align-center shadow-md">
            <input 
                name="" 
                id="" 
                placeholder="Job title or keyword..."
                className="py-4  px-5 flex-1 border-r border-gray-200 outline-none"
            />
            <input 
                name="" 
                id="" 
                placeholder="City or State.."
                className="py-4 px-5 outline-none"
               
            />
            <button className="flex h-[56px] w-[200px] bg-orange-600 text-black">  
                <p className="flex align-center justify-center   px-8 py-0 text-m gap-4"><SearchIcon size="16"/> Search Jobs</p>
            </button>
        </form>
    )
}

export default HeroJobSearch 
