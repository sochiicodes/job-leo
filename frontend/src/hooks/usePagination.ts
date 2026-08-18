import { useState } from "react"
import { JOBS_PER_PAGE } from "../constants/jobs"
import { JobListing } from "../features/jobs/types"

export const usePagination = (jobs: JobListing[]) =>{
    const [currentPage, setCurrentPage] = useState(1)

    const startIndex = (currentPage - 1) * JOBS_PER_PAGE

    const paginatedJobs = jobs.slice(startIndex, startIndex + JOBS_PER_PAGE)

    const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE )

    return{
        currentPage,
        setCurrentPage,
        paginatedJobs,
        totalPages
    }
}