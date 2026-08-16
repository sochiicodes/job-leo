import JobCard from "./JobCard";
import type { ViewMode } from "../types";
import { JOB_LISTINGS, VIEW_MODE } from "../../../constants/jobs";
import { ActiveFilterChip, SortDropDown} from "../../../components";
import { useJobFilters } from "../hooks/useJobFilters";
import { useActiveFilterChips } from "../hooks/useActiveJobFilterChips";
import { filterJobs } from "../utils/filteredJobs";
import {  sortJobs } from "../utils/sortedJobs";


const GRID_LAYOUT: Record<ViewMode, string> = {
    List: "grid-cols-1",
    Grid: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
};



const JobLists = () => {
    const {
        category,
        jobType,
        expLevel,
        sort,
        jobStatus,
        location,
        datePosted,
        salaryRange,
        viewMode,
        jobSearchTerm,
        locationSearchTerm,
        openMobileFilter,

        setOpenMobileFilter,
        setViewMode,
    } = useJobFilters()

    const filters = {
        category,
        jobType,
        expLevel,
        jobStatus,
        location,
        datePosted,
        salaryRange,
        jobSearchTerm,
        locationSearchTerm,
        openMobileFilter,
    };
    
    const chips = useActiveFilterChips()
    const filteredJobs = filterJobs(JOB_LISTINGS, filters)
    const sortedJobs = sortJobs(filteredJobs, sort)

    return (
        <section className="grow min-w-0 flex flex-col gap-4">
            <section className="flex items-center justify-between flex-wrap gap-3">
                {/* Count */}
                <p className="text-sm text-gray-500">
                    Showing <strong className="text-gray-900">{filteredJobs.length}</strong> job
                    {filteredJobs.length > 1 ? 's' : ''}
                </p>
                
                <div className="flex items-center gap-2">
                    {/* Open Mobile Filter */}
                    <button
                        onClick={() => setOpenMobileFilter(true)}
                        className="md:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-sm font-medium text-gray-700 cursor-pointer"
                    >
                        <span>☰</span> Filters  
                    </button>

                    {/* Sort dropdown */}
                    <SortDropDown/>
                    
                    {/* View toggle */}
                    <div className="flex">
                    {VIEW_MODE.map((v) => (
                        <button
                            onClick={() => setViewMode(v)}
                            className={`w-8 h-8 border flex items-center justify-center text-xs transition-colors first:rounded-l-lg last:rounded-r-lg bg-white ${
                                viewMode === v
                                ? 'bg-brand-light text-brand-500 border-brand-500'
                                : 'bg-white text-gray-400 border-gray-200 hover:bg-page'
                            }`}
                            title={`${v} View`}
                        >
                        {v === 'List' ? '☰' : '⊞'}
                        </button>
                    ))}
                </div>
            </div>
            </section>
            {/* Filter Chips */}
            <section className="flex flex-wrap gap-4">
                { chips.map((chip) =>(
                    <ActiveFilterChip
                        key={chip.label} 
                        label={chip.label}
                        onRemove={chip.onRemove}
                    />
                )) }
             </section>
             
            <section
                className={`grid w-full items-start gap-4 min-w-0 ${GRID_LAYOUT[viewMode]}`}
            >
                {sortedJobs.map((jobs) => (
                    <JobCard 
                        jobs={jobs}
                        key={jobs.id} 
                        viewMode={viewMode} 
                    />
                ))}
            </section>
        </section>
    );
};

export default JobLists;
