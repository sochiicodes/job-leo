import JobCard from "./JobCard";
import type { ViewMode } from "../types";
import { VIEW_MODE } from "../../../constants/jobs";
import { ActiveFilterChip, SortDropDown } from "../../../components";
import { useJobFilters } from "../useJobFilters";

const GRID_LAYOUT: Record<ViewMode, string> = {
    list: "grid-cols-1",
    grid: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
};

const JobLists = () => {
    const {
        viewMode, 
        setViewMode,
        category,
        setCategory,
        jobType,
        setJobType,
        expLevel,
        setExpLevel,
        location,
        setLocation,
        datePosted,
        setDatePosted,
        jobStatus,
        setJobStatus,
    } = useJobFilters()
    // const viewMode: ViewMode = "list";
    const filterLength = 20

    const chips = [
        ...(category !== "All"
            ? [{label: category, onRemove: () => setCategory("All")}]
            : []),
        
            ...jobType.map((type) =>({
                label: type,
                onRemove: () => setJobType(type)
            })),

            ...expLevel.map((level) =>({
                label: level,
                onRemove: () => setExpLevel(level)
            })),

            ...location.map((loc) =>({
                label: loc,
                onRemove: () => setLocation(loc)
            })),

            ...(datePosted !== "any" 
                ? [{
                    label: `Last ${datePosted} ${datePosted === "1" ? "day" : " days"}`,
                    onRemove: () => setDatePosted("any")
                }] 
                : []),
            
            // ...jobStatus?.map((status) =>({
            //     label: status,
            //     onRemove: () => setJobStatus(status)
            // }))
    ]


    return (
        <section className="grow min-w-0 flex flex-col gap-4">
            <section className="flex items-center justify-between flex-wrap gap-3">
                {/* Count */}
                <p className="text-sm text-gray-500">
                    Showing <strong className="text-gray-900">{filterLength}</strong> job
                    {filterLength > 1 ? 's' : ''}
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
                {
                // ["Design", "Tech", "Beauty"].map((label) =>(
                //     <ActiveFilterChip label={label}/>
                // ))
                chips.map((chip) =>(
                    <ActiveFilterChip
                        key={chip.label} 
                        label={chip.label}
                        onRemove={chip.onRemove}
                    />
                ))
                }

             </section>
            <section
                className={`grid w-full items-start gap-4 min-w-0 ${GRID_LAYOUT[viewMode]}`}
            >
                {Array.from({ length: 6 }).map((_, index) => (
                    <JobCard key={index} viewMode={viewMode} />
                ))}
            </section>
        </section>
    );
};

export default JobLists;
