import { Briefcase, ChevronRight, MapPin } from "lucide-react";
import { MetaPill } from "../../../components";
import { Link } from "react-router-dom";



const JobCard = () => {

  return (
        <section
            className="relative max-w-7xl bg-white rounded-3xl border border-slate-100 p-6 flex flex-col gap-4 shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all group"
        >   {/* Futured */}
            <section className="flex">
                <p className="absolute -top-px right-5 whitespace-nowrap px-4 py-1 bg-brand-600/50 text-slate-800 text-xs uppercase rounded-b-lg font-bold self-end">Featured</p>
            </section>
        
            <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-0.5 group-hover:text-brand-600 transition-colors tracking-tight">
                Rider Needed in a Hotel
            </h3>
            
            <div className="space-y-3">
                {/* Meta pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                    <MetaPill icon="location">Enugu</MetaPill>
                    <MetaPill icon="briefcase">Expert</MetaPill>
                    <MetaPill icon="clock">Remote</MetaPill>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                    <span className="text-[11px] bg-brand-100 text-brand-700 border border-brand-200 rounded-md px-2 py-0.5">
                        Tech
                    </span>
                    {["Design", "Marketing", "Supervisor"].map((tag) => (
                        <span key={tag} className="text-[11px] bg-page text-gray-400 border border-gray-200 rounded-md px-2 py-0.5">
                        {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Salary side */}
            <div className={`flex items-center justify-between gap-1.5`}>
                <span className=" font-black text-xl text-brand-600 tracking-tight text-brand whitespace-nowrap">
                    30k/yr
                </span>
                <span className="text-[11px] text-gray-400">3 days ago</span>
            </div>

            <Link
            to={'/'}
            target="_blank"
            className="w-full py-4 bg-slate-900 text-white text-center rounded-2xl font-black transition-all flex items-center justify-center gap-2 hover:bg-brand-500"
            >
                Apply Now <ChevronRight className="w-5 h-5" />
            </Link>
        </section>     
  );
}

export default JobCard