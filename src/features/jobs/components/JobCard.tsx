import { ChevronRight } from "lucide-react";
import { MetaPill } from "../../../components";
import { Link } from "react-router-dom";
import type { ViewMode } from "../types";

interface JobCardProps {
    viewMode?: ViewMode;
}

const JobCard = ({ viewMode = "grid" }: JobCardProps) => {
    const isAvailable = true;
    const isList = viewMode === "list";
    const isGrid = viewMode === "grid";

    return (
        <section
            className={`relative bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-2xl hover:border-brand-200 transition-all group min-w-0 w-full ${
                isGrid ? "flex flex-col" : ""
            }`}
        >
            <p className="absolute -top-px right-5 whitespace-nowrap px-4 py-1 bg-brand-600/50 text-slate-800 text-xs uppercase rounded-b-lg font-bold">
                Featured
            </p>

            {isGrid ? (
                <div className="flex flex-col gap-4 pt-2">
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-brand-600 transition-colors tracking-tight">
                        Rider Needed in a Hotel
                    </h3>

                    <div className="flex flex-wrap gap-1.5">
                        <MetaPill icon="location">Enugu</MetaPill>
                        <MetaPill icon="briefcase">Expert</MetaPill>
                        <MetaPill icon="clock">Remote</MetaPill>
                    </div>

                    <div className="flex flex-wrap gap-1">
                        <span className="text-[11px] bg-brand-100 text-brand-700 border border-brand-200 rounded-md px-2 py-0.5">
                            Tech
                        </span>
                        {["Design", "Marketing"].map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] bg-page text-gray-400 border border-gray-200 rounded-md px-2 py-0.5"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <span className="font-black text-sm text-brand-600 tracking-tight whitespace-nowrap">
                            $130k/yr
                        </span>
                        <span className="text-[11px] text-gray-400">1 day ago</span>
                    </div>

                    <span className="flex items-center gap-2 text-[11px] bg-brand-100/50 rounded-full px-2 py-0.5 text-brand-600 border border-brand-100 self-start">
                        {isAvailable && (
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                        )}
                        Available
                    </span>
                </div>
            ) : (
                <div className="flex flex-col gap-3 pt-2">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-brand-600 transition-colors tracking-tight">
                            Rider Needed in a Hotel
                        </h3>
                        <span className="font-black text-sm text-brand-600 tracking-tight whitespace-nowrap shrink-0">
                            $130k/yr
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5 min-w-0">
                            <MetaPill icon="location">Enugu</MetaPill>
                            <MetaPill icon="briefcase">Expert</MetaPill>
                            <MetaPill icon="clock">Remote</MetaPill>
                        </div>
                        <span className="text-[11px] text-gray-400 whitespace-nowrap shrink-0">
                            1 day ago
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1 min-w-0">
                            <span className="text-[11px] bg-brand-100 text-brand-700 border border-brand-200 rounded-md px-2 py-0.5">
                                Tech
                            </span>
                            {["Design", "Marketing"].map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[11px] bg-page text-gray-400 border border-gray-200 rounded-md px-2 py-0.5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <span className="flex items-center gap-2 text-[11px] bg-brand-100/50 rounded-full px-2 py-0.5 text-brand-600 border border-brand-100 whitespace-nowrap shrink-0">
                            {isAvailable && (
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                </span>
                            )}
                            Available
                        </span>
                    </div>
                </div>
            )}

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
