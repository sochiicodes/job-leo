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
    jobStatus: JobStatus
    location: Location[]
    datePosted: DatePosted
    salaryRange: number
    viewMode: ViewMode
    jobSearchTerm: string
    locationSearchTerm: string
    openMobileFilter: boolean
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
    clearFilters: () => void
    setJobSearchTerm: (value: string) => void
    setLocationSearchTerm: (value: string) => void
    setOpenMobileFilter: (value: boolean) => void
}

export type JobFilters = Pick<JobFilterState,
    | "category"
    | "jobType"
    | "expLevel"
    | "jobStatus"
    | "location"
    | "datePosted"
    | "salaryRange"
    | "jobSearchTerm"
    | "locationSearchTerm"
>
export type JobFilterSlice = JobFilterState & JobFilterAction

const initialState: Omit<JobFilterState, "viewMode"> = {
    category: "All",
    jobType: [],
    expLevel: [],
    sort: "Most Relevant",
    jobStatus: "All",
    location: [],
    datePosted: "any",
    salaryRange: 250000,
    jobSearchTerm: "",
    locationSearchTerm: "",
    openMobileFilter: false
}

export const createJobFilterSlice:StateCreator<Store, [],[], JobFilterSlice> = ((set) =>({
    ...initialState,
    viewMode: "grid",

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
    setJobStatus: (jobStatus) => set({jobStatus}),
    setLocation: (location) => set((state) =>({
        location: state.location?.includes(location)
        ? state.location.filter((item) => item !== location)
        : [...state.location, location]
    })),
    setDatePosted: (date) => set({datePosted: date}),
    setSalaryRange: (salary) => set({salaryRange: salary}),
    setViewMode: (viewMode) => set({viewMode:  viewMode}),
    clearFilters: () => set((state) => ({...initialState, viewMode: state.viewMode})),

    setJobSearchTerm: (value: string) => set({jobSearchTerm: value}),
    setLocationSearchTerm: (value: string) => set({locationSearchTerm: value}),
    setOpenMobileFilter: (openMobileFilter: boolean) => set({openMobileFilter: true})
}))