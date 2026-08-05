import { JOB_CATEGORIES } from "../constants/jobs";


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

export type JobType =
  | 'Full-time'
  | 'Part-time'
  | 'Contract'
  | 'Internship'
  | 'Freelance';

 export type ExperienceLevel = 
  | 'Internship'
  | 'Junior'
  | 'Mid'
  | 'Senior'
  | 'Lead'
  | 'Director';

  export type SortOption = 
    | 'relevance'
    | 'date'
    | 'salary_high'
    | 'salary_low'
    | 'available' 
    | 'unavailable'


export type JobStatus = 'available' | 'unavailable'

export type ViewMode = 'list' | 'grid'

export type JobFilter = "All" | JobCategory




//Legal - Terms and Conditions
export interface TermsContent {
  title: string;
  points: string[];
}
