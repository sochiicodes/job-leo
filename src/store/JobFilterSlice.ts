import type { StateCreator } from "zustand"
import type { Store } from "../types/store"
import type { 
    DatePosted, 
    ExperienceLevel, 
    JobCategory, 
    JobStatus, 
    JobType, 
    Location, 
    SortOption, 
    ViewMode
} from "../features/jobs/types"


interface JobFilterState{
    category: JobCategory
    jobType: JobType[]
    expLevel: ExperienceLevel[]
    sort: SortOption
    jobStatus: JobStatus[]
    location: Location[]
    datePosted: DatePosted
    salaryRange: number
    viewMode: ViewMode
}

export interface JobFilterAction{
    setCategory: (category: JobCategory) => void
    setJobType: (type: JobType) => void
    setExpLevel: (level: ExperienceLevel) => void
    setSort: (sort: SortOption) => void
    setJobStatus: (status: JobStatus) => void
    setLocation: (location: Location) => void
    setDatePosted: (date: DatePosted) => void
    setSalaryRange: (salary: number) => void
    setViewMode: (viewMode: ViewMode) => void
}

export type JobFilterSlice = JobFilterState & JobFilterAction

const initialState: JobFilterState = {
    category: "All",
    jobType: [],
    expLevel: [],
    sort: "relevance",
    jobStatus: [],
    location: [],
    datePosted: "any",
    salaryRange: 200,
    viewMode: "grid"
}

export const createJobFilterSlice:StateCreator<Store, [],[], JobFilterSlice> = ((set) =>({
    ...initialState,
    setCategory: (category) => set({category}),
    setJobType: (type) => set((state) => ({
        jobType: state.jobType.includes(type)
        ? state.jobType.filter((item) => item !== type)
        : [...state.jobType, type]
    })),
    setExpLevel: (level) => set((state) =>({
        expLevel: state.expLevel.includes(level)
        ? state.expLevel.filter((item) => item !== level)
        : [...state.expLevel, level]
    })),
    setSort: (sort) => set({sort}),
    setJobStatus: (status) => set({jobStatus: [status]}),
    setLocation: (location) => set((state) =>({
        location: state.location?.includes(location)
        ? state.location.filter((item) => item !== location)
        : [...state.location, location]
    })),
    setDatePosted: (date) => set({datePosted: date}),
    setSalaryRange: (salary) => set({salaryRange: salary}),
    setViewMode: (viewMode) => set({viewMode:  viewMode})
}))