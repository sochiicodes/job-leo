import { JOB_LISTINGS } from "../../../constants/jobs"
import { JobListing } from "../types"

// interface JobFilters {
//     category: JobCategory
//     jobType: JobType[]
//     expLevel: ExperienceLevel[]
//     jobStatus: JobStatus | null
//     location: Location[]
// }

export const filterJobs = (jobs: JobListing[], filters: {
    jobSearchTerm: string,
    locationSearchTerm: string,
} ) => {
    const {
        jobSearchTerm,
        locationSearchTerm,
    } = filters

    return jobs.filter((job) =>{
        const search = jobSearchTerm.toLowerCase().trim()
        const locationSearch = locationSearchTerm.toLowerCase().trim()

        const matchesJobSearch = 
            !search 
            || job.title.toLowerCase().includes(search)
            || job.tags.some((tag) =>(
                tag.toLowerCase().includes(search)
            ))
    
        const  matchesLocationSearch = 
            !locationSearch 
            || job.area.toLowerCase().includes(locationSearch)
            || job.city.toLowerCase().includes(locationSearch)
            || job.state.toLowerCase().includes(locationSearch)
    
        return matchesJobSearch && matchesLocationSearch
    })
}
