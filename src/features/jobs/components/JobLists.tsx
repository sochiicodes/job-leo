import JobCard from "./JobCard";
import type { ViewMode } from "../types";
import { JOB_LISTINGS, VIEW_MODE } from "../../../constants/jobs";
import { ActiveFilterChip, SortDropDown, ToggleSwitch } from "../../../components";
import { useJobFilters } from "../hooks/useJobFilters";
import { useActiveFilterChips } from "../hooks/useActiveJobFilterChips";
import { filterJobs } from "../utils/filterJobs";

const GRID_LAYOUT: Record<ViewMode, string> = {
    list: "grid-cols-1",
    grid: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
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
        setViewMode,
    } = useJobFilters()


    const chips = useActiveFilterChips()
    
    const filteredJobs = JOB_LISTINGS.filter((job) =>{
        const search = jobSearchTerm.toLowerCase().trim()
        const locationSearch = locationSearchTerm.toLowerCase().trim()
        // const jobTypeToggle = jobType.toLowerCase().trim()

        const matchesJobSearch = 
        !search 
        || job.title
                .toLowerCase()
                .includes(search)
        || job.tags.some((tag) =>{
            tag
                .toLowerCase()
                .includes(search)
        });

        const matchesLocationSearch =
        !locationSearchTerm
        ||  job.area
                .toLowerCase()
                 .includes(locationSearch)
        ||  job.city
                .toLowerCase()
                .includes(locationSearch)
        ||  job.state
                .toLowerCase()
                .includes(locationSearch)

        const matchesJobType = 
            jobType.length === 0
            || jobType.some((type) => job.type === type)

        const matchesJobExperience = 
            expLevel.length === 0
            || expLevel.some((level) => job.level === level)
        
        const matchesJobStatus = 
            jobStatus === "All"
            || job.status === jobStatus

        const matchesJobLocation = 
            location.length === 0
            || location.some((loc) => job.state === loc)
            || location.some((loc) => job.city === loc)
            location.some((loc) => job.area === loc)
        
        const matchesJobDatePosted =
            datePosted === "any"
            || datePosted === job.postedAt

        const matchesJobSalary = 
            job.salary <= salaryRange

        const matchesJobCategory = 
            category === "All"
            || job.category === category
        
        // const matchesSortedJobs = 
        //     sort === "Most Relevant"
        //     || sortedJob === sort
        
        
        return matchesJobSearch 
            && matchesLocationSearch
            && matchesJobType
            && matchesJobExperience
            && matchesJobStatus
            && matchesJobLocation
            && matchesJobCategory
            && matchesJobSalary
            && matchesJobDatePosted
    })

    const sortedJobs = [...filteredJobs].sort((a, b) =>{
        switch (sort){
            case "Highest Salary":
                return b.salary - a.salary

            case "Lowest Salary":
                return a.salary - b.salary

            case "Most Recent": 
                return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
            
                default: 
                return 0
        }
    })

    return (
        <section className="grow min-w-0 flex flex-col gap-4">
            <section className="flex items-center justify-between flex-wrap gap-3">
                {/* Count */}
                <p className="text-sm text-gray-500">
                    Showing <strong className="text-gray-900">{filteredJobs.length}</strong> job
                    {filteredJobs.length > 1 ? 's' : ''}
                </p>
                
                <div className="flex items-center gap-2">
                    {/* Sort dropdown */}
                    <SortDropDown/>
                    
                    {/* View toggle */}
                    <div className="flex">
                    {VIEW_MODE.map((v) => (
                        <button
                            onClick={() => setViewMode(v)}
                            className={`w-8 h-8 border flex items-center justify-center text-xs transition-colors first:rounded-l-lg last:rounded-r-lg ${
                                viewMode === v
                                ? 'bg-brand-light text-brand-500 border-brand-500'
                                : 'bg-white text-gray-400 border-gray-200 hover:bg-page'
                            }`}
                            title={`${v} view`}
                        >
                        {v === 'list' ? '☰' : '⊞'}
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
