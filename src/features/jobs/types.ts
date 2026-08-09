
import { 
    AVAILABILITY, 
    DATE_POSTED, 
    EXPERIENCE_LEVELS, 
    JOB_CATEGORIES, 
    JOB_STATUS, 
    JOB_TYPES, 
    LOCATION, 
    SORT_OPTIONS, 
    VIEW_MODE 
  } from "../../constants/jobs";
  

  
  export interface JobListing {
    id: string;
    title: string;
    category: JobCategory;
    type: JobType;
    level: ExperienceLevel
    location: string;
    state: string;
    salary?: number;
    postedAt: string;
    status: JobStatus;
    tags: string[]
    feature?: boolean
  }
  
  export type JobCategory = "All" | (typeof JOB_CATEGORIES)[number]
  
  export type JobType = (typeof JOB_TYPES) [number]
  
  export type ExperienceLevel = (typeof EXPERIENCE_LEVELS)[number]
  
  export type SortOption =  (typeof SORT_OPTIONS)[number]
  
  export type Availability = (typeof AVAILABILITY)[number]
  
  export type JobStatus = (typeof JOB_STATUS)[number]
  
  export type Location = (typeof LOCATION)[number]
  
  export type DatePosted = (typeof DATE_POSTED)[number]
  
  export type ViewMode =  (typeof VIEW_MODE)[number]
  
  
  export type JobFilter = "All" | JobCategory