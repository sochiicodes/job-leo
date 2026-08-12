import JobCard from "./JobCard";
import type { ViewMode } from "../types";

const GRID_LAYOUT: Record<ViewMode, string> = {
    list: "grid-cols-1",
    grid: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
};

const JobLists = () => {
    const viewMode: ViewMode = "grid";

    return (
        <section
            className={`w-3/4 grid items-start gap-4 min-w-0 ${GRID_LAYOUT[viewMode]}`}
        >
            {Array.from({ length: 6 }).map((_, index) => (
                <JobCard key={index} viewMode={viewMode} />
            ))}
        </section>
    );
};

export default JobLists;
