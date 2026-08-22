
import { JobListing } from "../types"

interface FilterCountProps<K extends keyof JobListing>{
    jobs: JobListing[]
    field: K
    value: JobListing[K] | "All"
}

export const getJobFilterCount = <K extends keyof JobListing> ({jobs, field, value}:FilterCountProps<K>) =>{
    if (value === "All") {
        return jobs.length;
    }
    return jobs.filter(
        (job) => job[field] === value
    ).length
}