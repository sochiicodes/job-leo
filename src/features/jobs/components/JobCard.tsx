import { ChevronRight, FolderTree, MapPin, Network } from "lucide-react";
import { MetaPill } from "../../../components";
import { Link } from "react-router-dom";
import type { JobListing, ViewMode } from "../types";
import { formatCurrency } from "../../../utils/formatCurrency";

interface JobCardProps {
    jobs: JobListing
    viewMode?: ViewMode;
}

const JobCard = ({ viewMode = "grid", jobs }: JobCardProps) => {
    const isAvailable = true;
    const isList = viewMode === "list";
    const isGrid = viewMode === "grid";

    return (
        <section
            className={`relative bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all group min-w-0 w-full h-full ${
                isGrid ? "flex flex-col justify-between" : ""
            }`}
        >
            {jobs.featured && (<p className="absolute -top-px right-5 whitespace-nowrap px-4 py-1 bg-brand-600/50 text-slate-800 text-xs uppercase rounded-b-lg font-bold">
                Featured
            </p>)}

            {isGrid ? (
                <div className="flex flex-col gap-4 pt-2">
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-brand-600 transition-colors tracking-tight">
                        {jobs.title}
                    </h3>

                    <div className="flex flex-wrap gap-1.5">
                        <span  className="text-[11px] bg-brand-100 text-brand-700 border border-gray-200 rounded-full px-2 py-0.5 flex items-center gap-1">
                            <Network size={12}/> {jobs.category}
                        </span>
                        <MetaPill icon="briefcase" title="Experience Level">{jobs.level}</MetaPill>
                        <MetaPill icon="clock" title="Job Type">{jobs.type}</MetaPill>
                    </div>

                    <div className="flex flex-wrap gap-1">
                        {jobs.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] bg-page text-gray-400 border border-gray-200 rounded-md px-2 py-0.5"
                            >
                                {tag}
                            </span>
                        ))}
                        
                    </div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-[11px] bg-page text-gray-400 py-0.5"> 
                        <MapPin size={12} className="text-brand-600"/>
                        <p>{jobs.area}, {jobs.city}, {jobs.state}</p>
                    </div>
                    
                    

                    <div className="flex items-center justify-between gap-2">
                        <span className="font-black text-sm text-brand-600 tracking-tight whitespace-nowrap">
                        ₦{formatCurrency(jobs.salary)}/mo
                        </span>
                        <span className="text-[11px] text-gray-400">{jobs.postedAt}</span>
                    </div>

                    <span className={`flex items-center gap-2 text-[11px] ${jobs.status === "Available"? "bg-brand-100/50": "bg-red-100/50 text-red-300" }  rounded-full px-2 py-0.5 text-brand-600 border border-brand-100 self-start`}>
                        {jobs.status === "Available" && (
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                        )}
                        {jobs.status}
                    </span>
                </div>
            ) : (
                <div className="flex flex-col gap-3 pt-2">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-brand-600 transition-colors tracking-tight">
                            {jobs.title}
                        </h3>
                        <span className="font-black text-sm text-brand-600 tracking-tight whitespace-nowrap shrink-0">
                            ₦{jobs.salary}/yr
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5 min-w-0">
                            <span  className="text-[11px] bg-brand-100 text-brand-700 border border-gray-200 rounded-full px-2 py-0.5 flex items-center gap-1">
                                <Network size={12}/> {jobs.category}
                            </span>
                            <MetaPill icon="briefcase" title="Experience Level">{jobs.level}</MetaPill>
                            <MetaPill icon="clock" title="Job Type">{jobs.type}</MetaPill>
                        </div>
                        <span className="text-[11px] text-gray-400 whitespace-nowrap shrink-0">
                            {jobs.postedAt}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-col">
                            <div className="flex flex-wrap gap-1 min-w-0">
                                {jobs.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] bg-page text-gray-400 border border-gray-200 rounded-md px-2 py-0.5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] bg-page text-gray-400 py-0.5 mt-4"> 
                                <MapPin size={12} className="text-brand-600"/>
                                <p>{jobs.area}, {jobs.city}, {jobs.state}</p>
                            </div>
                        </div>

                        <span className="flex items-center gap-2 text-[11px] bg-brand-100/50 rounded-full px-2 py-0.5 text-brand-600 border border-brand-100 whitespace-nowrap shrink-0">
                            {jobs.status && (
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                            )}
                            {jobs.status}
                        </span>
                    </div>
                </div>
            )}
            {/* Location */}
            
            <Link
                to="/"
                target="_blank"
                className={`mt-5 py-3 bg-slate-900 text-white text-center rounded-2xl font-black transition-all flex items-center justify-center gap-2 hover:bg-brand-500 ${
                    isList ? "w-fit px-6" : "w-full"
                }`}
            >
                Apply Now <ChevronRight className="w-5 h-5" />
            </Link>
        </section>
    );
};

export default JobCard;
