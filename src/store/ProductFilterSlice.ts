import { StateCreator } from "zustand"
import { 
    DatePosted, 
    ExperienceLevel, 
    JobCategory, 
    JobStatus, 
    JobType, 
    Location, 
    SortOption 
} from "../features/jobs/types"
import { Store } from "../types/store"

interface ProductFilterState{
    category: JobCategory
    jobType: JobType
    expLevel: ExperienceLevel
    sort: SortOption
    jobStatus: JobStatus
    location: Location
    datePosted: DatePosted
    salaryRange: number
}

export interface ProductFilterAction{
    setCategory: (cat: "All" | JobCategory) => void
    jobType: (type: JobType) => void
    expLevel: (level: ExperienceLevel) => void
    sort: (sort: SortOption) => void
    jobStatus: (status: JobStatus) => void
    location: (loc: Location) => void
    datePosted: (date: DatePosted) => void
}

export type ProductFiltertSlice = ProductFilterState & ProductFilterAction

const initialState: ProductFilterState = {
    category: "All",
    jobType: [],
    expLevel: [],
    sort: [],
    jobStatus: [],
    location: "",
    datePosted: "any",
    salaryRange: 20
}

export const createProductFilterSlice:StateCreator<Store, [],[], ProductFiltertSlice> = ((set) =>({
    ...initialState,
    
}))