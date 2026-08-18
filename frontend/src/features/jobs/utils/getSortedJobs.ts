import { JobListing, SortOption } from "../types"




export const sortJobs = (jobs: JobListing[], sort: SortOption) =>{
    const sortedJobs = [...jobs].sort((a, b) =>{
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
    return sortedJobs
}