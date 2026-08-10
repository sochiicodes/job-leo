import { StateCreator } from "zustand"
import { Store } from "../types/store"
import { 
    DatePosted, 
    ExperienceLevel, 
    JobCategory, 
    JobStatus, 
    JobType, 
    Location, 
    SortOption 
} from "../features/jobs/types"


interface JobFilterState{
    category: JobCategory
    jobType: JobType[]
    expLevel: ExperienceLevel[]
    sort: SortOption
    jobStatus: JobStatus[]
    location: Location | null
    datePosted: DatePosted
    salaryRange: number
}

export interface JobFilterAction{
    setCategory: (category: JobCategory) => void
    setJobType: (type: JobType) => void
    setExpLevel: (level: ExperienceLevel) => void
    setSort: (sort: SortOption) => void
    setJobStatus: (status: JobStatus) => void
    setLocation: (location: Location | null) => void
    setDatePosted: (date: DatePosted) => void
    setSalaryRange: (salary: number) => void
}

export type JobFilterSlice = JobFilterState & JobFilterAction

const initialState: JobFilterState = {
    category: "All",
    jobType: [],
    expLevel: [],
    sort: "relevance",
    jobStatus: [],
    location: null,
    datePosted: "any",
    salaryRange: 20
}

export const createJobFilterSlice:StateCreator<Store, [],[], JobFilterSlice> = ((set) =>({
    ...initialState,
    setCategory: (category) => set({category}),
    setJobType: (type) => set({jobType: [type]}),
    setExpLevel: (level) => set({expLevel: [level]}),
    setSort: (sort) => set({sort}),
    setJobStatus: (status) => set({jobStatus: [status]}),
    setLocation: (location) => set({location}),
    setDatePosted: (date) => set({datePosted: date}),
    setSalaryRange: (salary) => set({salaryRange: salary})
}))