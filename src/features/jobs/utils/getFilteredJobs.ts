import { JobFilters } from "../../../store/JobFilterSlice"
import { JobListing } from "../types"


export const filterJobs = (jobs: JobListing[], filters: JobFilters ) => {
    const {
        category,
        jobType,
        expLevel,
        jobStatus,
        location,
        datePosted,
        salaryRange,
        jobSearchTerm,
        locationSearchTerm,
    } = filters

    return jobs.filter((job) =>{
        const search = jobSearchTerm.toLowerCase().trim()
        const locationSearch = locationSearchTerm.toLowerCase().trim()

        const matchesJobSearch = 
        !search 
        || job.title
                .toLowerCase()
                .includes(search)
        || job.tags.some((tag) =>
                tag.toLowerCase().includes(search)
            )

        const matchesLocationSearch =
        !locationSearchTerm ||
        job.area
            .toLowerCase()
            .includes(locationSearch) ||
        job.city
            .toLowerCase()
            .includes(locationSearch) ||
        job.state
            .toLowerCase()
            .includes(locationSearch)

        const matchesJobType = 
            jobType.length === 0 ||
            jobType.some((type) => job.type === type)

        const matchesJobExperience = 
            expLevel.length === 0 ||
            expLevel.some((level) => job.level === level)
        
        const matchesJobStatus = 
            jobStatus === "All" ||
            job.status === jobStatus

        const matchesJobLocation = 
            location.length === 0 ||
            location.some((loc) => 
                job.state === loc ||
                job.city === loc ||
                job.area === loc
            )
        
        const matchesJobDatePosted =
            datePosted === "any" ||
            (() =>{
                const days = Number(datePosted)

                const cutoffDate = new Date()
                cutoffDate.setDate(cutoffDate.getDate() - days)
                
                const jobDate = new Date(job.postedAt)

                return jobDate>= cutoffDate
            })()
            

        const matchesJobSalary = 
            job.salary <= salaryRange

        const matchesJobCategory = 
            category === "All" ||
            job.category === category
        
        
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
}
