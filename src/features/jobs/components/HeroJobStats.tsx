import { SearchIcon } from "lucide-react"

const HeroJobStats = () =>{
    return(
        <section className="flex gap-10 align-start">
            <p className="text-xs text-white font-bold">
                63 <span className="text-xs text-gray-400 font-normal">jobs found</span>
            </p>
            <p className="text-xs text-white font-bold">
                380+ <span className="text-xs text-gray-400 font-normal">companies hiring</span>
            </p>
            <p className="text-xs text-white font-bold">
                63 <span className="text-xs text-gray-400 font-normal">New jobs added today</span>
            </p>
        </section>
    )
}
export default HeroJobStats;
            
