
import { 
    DATE_POSTED, 
    EXPERIENCE_LEVELS, 
    JOB_CATEGORIES, 
    JOB_STATUS, 
    JOB_TYPES, 
    TOP_LOCATIONS, 
    SORT_OPTIONS, 
    VIEW_MODE 
  } from "../../constants/jobs";
  

  
  export interface JobListing {
    id: string
    title: string

    category: JobCategory
    type: JobType
    level: ExperienceLevel

    city: string
    state: string
    area: string

    salary: number
    postedAt: string
    status: JobStatus
    featured: boolean
    
    tags: string[]
  }
  
  export type JobCategory = "All" | (typeof JOB_CATEGORIES)[number]
  
  export type JobType = (typeof JOB_TYPES) [number]
  
  export type ExperienceLevel = (typeof EXPERIENCE_LEVELS)[number]
  
  export type SortOption =  (typeof SORT_OPTIONS)[number]
 
  export type JobStatus = (typeof JOB_STATUS)[number]
  
  export type Location = (typeof TOP_LOCATIONS)[number]
  
  export type DatePosted = (typeof DATE_POSTED)[number][1]
  
  export type ViewMode =  (typeof VIEW_MODE)[number]
  
  
  export type JobFilter = "All" | JobCategory