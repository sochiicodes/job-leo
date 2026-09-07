  
  export type JobCategory = "All" | (typeof JOB_CATEGORIES)[number]
  
  export type JobType = (typeof JOB_TYPES) [number]
  
  export type ExperienceLevel = (typeof EXPERIENCE_LEVELS)[number]
  
  export type SortOption =  (typeof SORT_OPTIONS)[number]
 
  export type JobStatus = (typeof JOB_STATUS)[number]
  
  export type Location = (typeof TOP_LOCATIONS)[number]
  
  export type DatePosted = (typeof DATE_POSTED)[number][1]
  
  export type ViewMode =  (typeof VIEW_MODE)[number]
  


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

export const JOB_CATEGORIES = [
    'Technology',
    'Design',
    'Marketing',
    'Finance',
    'Healthcare',
    'Education',
    'Sales',
    'Operations',
    'Engineering',
    'Legal',
    'Hospitality',
    'Domestic & Care',
    'Office',
    'Events',
    'Beauty & Fashion',
  ] as const
  
export const JOB_TYPES = [
  "Full-time", 
  "Part-time", 
  "Contract", 
  "Internship", 
  "Freelance"
] as const

export const EXPERIENCE_LEVELS = [
  "Internship",
  "Junior",
  "Intermediate",
  "Senior",
  "Lead",
  "Director",
] as const;

export const SORT_OPTIONS = [
  "Most Relevant",
  "Most Recent",
  "Highest Salary",
  "Lowest Salary",
] as const;

export const JOB_STATUS = [
  "All",
  'Available', 
  'Unavailable'
] as const

export const TOP_LOCATIONS = [
  "Lagos",
  "Abuja",
  "Enugu",
  "Port Harcourt",
  "Ibadan",
] as const

export const DATE_POSTED = [
  ['Any time', 'any'], 
  ['Last 24 hours', '1'],
  ['Last 3 days', '3'], 
  ['Last week', '7'], 
  ['Last month', '30'],
] as const

export const VIEW_MODE = [
  'List',
  'Grid'
] as const

export const JOBS_PER_PAGE = 9;


export const jobs: JobListing[] = [
  {
    id: crypto.randomUUID(),
    title: "Waitress",
    category: "Hospitality",
    type: "Part-time",
    level: "Junior",
    city: "Nsukka",
    state: "Enugu",
    area: "Total Roundabout",
    salary: 25000,
    postedAt: "2026-08-17",
    status: "Unavailable",
    featured: true,
    tags: ["Waitress", "Cashier", "Sales Rep"],
  },
  {
    id: crypto.randomUUID(),
    title: "Bar Man/Woman",
    category: "Hospitality",
    type: "Full-time",
    level: "Intermediate",
    city: "Nsukka",
    state: "Enugu",
    area: "Total Roundabout",
    salary: 35000,
    postedAt: "2026-08-16",
    status: "Available",
    featured: true,
    tags: ["Bar Man", "Bar Lady", "Sales Rep"],
  },

  {
    id: crypto.randomUUID(),
    title: "POS Attendant",
    category: "Sales",
    type: "Full-time",
    level: "Junior",
    city: "Nsukka",
    state: "Enugu",
    area: "Nsukka Town",
    salary: 30000,
    postedAt: "2026-08-14",
    status: "Available",
    featured: false,
    tags: ["POS Attendant", "Cashier", "Sales"],
  },

];

export default jobs