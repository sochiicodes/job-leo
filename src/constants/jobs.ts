import { JobListing } from "../features/jobs/types";


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
  "Mid",
  "Senior",
  "Lead",
  "Director",
] as const;

export const SORT_OPTIONS = [
  "Most Relevant",
  "Most Recent",
  "Salary High to Low",
  "Salary Low to High",
] as const;

export const JOB_STATUS = [
  'available', 
  'unavailable'
] as const

export const LOCATION = [
  "Remote Only", 
  "Lagos", 
  "Abuja", 
  "London", 
  "USA", 
  "Nigeria"
] as const

export const DATE_POSTED = [
  ['Any time', 'any'], 
  ['Last 24 hours', '1'],
  ['Last 3 days', '3'], 
  ['Last week', '7'], 
  ['Last month', '30'],
] as const

export const VIEW_MODE = [
  'list',
  'grid'
] as const

export const JOB_LISTINGS: JobListing[] = [
    {
      id: crypto.randomUUID(),
      title: 'Waitress',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Total Roundabout',
      state: "Enugu",
      salary: 25000,
      postedAt: 'Tuesday, 23 June 2026',
      status: 'unavailable',
      tags: ['Waitress', 'Cashier', 'Sales Rep']
    },
    {
      id: crypto.randomUUID(),
      title: 'Bar Man/Woman',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Total Roundabout',
      state: "Enugu",
      salary: 35000,
      postedAt: 'Wed, 24 June 2026',
      status: 'available',
      tags: ['Bar Man', 'Bar Lady', 'Sales Rep']
    },
    {
      id: crypto.randomUUID(),
      title: 'Snooker Attendant',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Total Roundabout',
      state: "Enugu",
      salary: 35000,
      postedAt: 'Monday, 22 June 2026',
      status: 'unavailable',
      tags: ['Snooker Attendant', 'Games', 'Hospitality']
    },
    {
      id: crypto.randomUUID(),
      title: 'POS Attendant',
      category: 'Sales',
      type: 'Full-time',
      level: 'Mid',
      location: 'Nsukka Town',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Sunday, 21 June 2026',
      status: 'available',
      tags: ['POS Attendant', 'Cashier', 'Sales']
    },
    {
      id: crypto.randomUUID(),
      title: 'Computer Operator',
      category: 'Office',
      type: 'Full-time',
      level: 'Mid',
      location: 'UNN First Gate',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Saturday, 20 June 2026',
      status: 'unavailable',
      tags: ['Computer Operator', 'Data Entry', 'IT Support']
    },
    {
      id: crypto.randomUUID(),
      title: 'Cyber Assistant',
      category: 'Office',
      type: 'Full-time',
      level: 'Mid',
      location: 'UNN First Gate',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Friday, 19 June 2026',
      status: 'unavailable',
      tags: ['Cyber Assistant', 'Cafe Attendant', 'Computer Operator']
    },
    {
      id: crypto.randomUUID(),
      title: 'Basic Computer Tutor',
      category: 'Education',
      type: 'Full-time',
      level: 'Mid',
      location: 'UNN First Gate',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Thursday, 18 June 2026',
      status: 'unavailable',
      tags: ['Computer Tutor', 'Trainer', 'Education']
    },
    {
      id: crypto.randomUUID(),
      title: 'Nail Technician',
      category: 'Beauty & Fashion',
      type: 'Full-time',
      level: 'Mid',
      location: 'UNN Malima',
      state: "Enugu",
      salary: 40000,
      postedAt: 'Wednesday, 17 June 2026',
      status: 'available',
      tags: ['Nail Technician', 'Beautician', 'Manicurist']
    },
    {
      id: crypto.randomUUID(),
      title: 'Barber',
      category: 'Beauty & Fashion',
      type: 'Full-time',
      level: 'Mid',
      location: 'UNN Malima',
      state: "Enugu",
      salary: 45000,
      postedAt: 'Tuesday, 16 June 2026',
      status: 'available',
      tags: ['Barber', 'Haircut', 'Grooming']
    },
    {
      id: crypto.randomUUID(),
      title: 'Shawarma Sales Rep',
      category: 'Sales',
      type: 'Full-time',
      level: 'Mid',
      location: 'Orba Road',
      state: "Enugu",
      salary: 25000,
      postedAt: 'Monday, 15 June 2026',
      status: 'available',
      tags: ['Shawarma', 'Sales Rep', 'Food Vendor']
    },
    {
      id: crypto.randomUUID(),
      title: 'Kitchen Chef',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'UNN Nsukka',
      state: "Enugu",
      salary: 40000,
      postedAt: 'Sunday, 14 June 2026',
      status: 'available',
      tags: ['Kitchen Chef', 'Cook', 'Culinary']
    },
    {
      id: crypto.randomUUID(),
      title: 'Nurse / Primary School Tutor',
      category: 'Education',
      type: 'Contract',
      level: 'Mid',
      location: 'Fen Park',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Saturday, 13 June 2026',
      status: 'unavailable',
      tags: ['Nurse', 'School Tutor', 'Caregiver']
    },
    {
      id: crypto.randomUUID(),
      title: 'Sales Representative',
      category: 'Sales',
      type: 'Full-time',
      level: 'Mid',
      location: 'Opp Shanaha',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Friday, 12 June 2026',
      status: 'unavailable',
      tags: ['Sales Representative', 'Retail', 'Customer Service']
    },
    {
      id: crypto.randomUUID(),
      title: 'Sales Rep / Cashier',
      category: 'Sales',
      type: 'Full-time',
      level: 'Mid',
      location: 'Aku Road',
      state: "Enugu",
      salary: 40000,
      postedAt: 'Thursday, 11 June 2026',
      status: 'available',
      tags: ['Sales Rep', 'Cashier', 'Retail']
    },
    {
      id: crypto.randomUUID(),
      title: 'Sales Rep',
      category: 'Sales',
      type: 'Full-time',
      level: 'Mid',
      location: 'UNN',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Wednesday, 10 June 2026',
      status: 'available',
      tags: ['Sales Rep', 'Marketing', 'Retail']
    },
    {
      id: crypto.randomUUID(),
      title: 'Live-in House Help',
      category: 'Domestic & Care',
      type: 'Full-time',
      level: 'Mid',
      location: 'Ofulonu',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Tuesday, 9 June 2026',
      status: 'available',
      tags: ['House Help', 'Domestic', 'Caregiver']
    },
    {
      id: crypto.randomUUID(),
      title: 'Restaurant Chef',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Aku Road',
      state: "Enugu",
      salary: 30000,
      postedAt: 'Monday, 8 June 2026',
      status: 'available',
      tags: ['Restaurant Chef', 'Cook', 'Kitchen']
    },
    {
      id: crypto.randomUUID(),
      title: 'Restaurant Waitress',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Aku Road',
      state: "Enugu",
      salary: 25000,
      postedAt: 'Sunday, 7 June 2026',
      status: 'available',
      tags: ['Waitress', 'Server', 'Hospitality']
    },
    {
      id: crypto.randomUUID(),
      title: 'Primary School Maths Teacher',
      category: 'Education',
      type: 'Full-time',
      level: 'Mid',
      location: 'Onuiyi, Nsukka',
      state: "Enugu",
      salary: 40000,
      postedAt: 'Saturday, 6 June 2026',
      status: 'available',
      tags: ['Maths Teacher', 'Primary School', 'Tutor']
    },
    {
      id: crypto.randomUUID(),
      title: 'Hotel Receptionist',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Orba Road',
      state: "Enugu",
      salary: 45000,
      postedAt: 'Friday, 5 June 2026',
      status: 'unavailable',
      tags: ['Receptionist', 'Front Desk', 'Hospitality']
    },
    {
      id: crypto.randomUUID(),
      title: 'Hotel Waitress',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Orba Road',
      state: "Enugu",
      salary: 45000,
      postedAt: 'Thursday, 4 June 2026',
      status: 'unavailable',
      tags: ['Hotel Waitress', 'Server', 'Hospitality']
    },
    {
      id: crypto.randomUUID(),
      title: 'Kitchen Chef',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Nsukka',
      state: "Enugu",
      salary: 60000,
      postedAt: 'Tuesday, 19 May 2026',
      status: 'available',
      tags: ['Kitchen Chef', 'Cook', 'Culinary']
    },
    {
      id: crypto.randomUUID(),
      title: 'Cashier',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Nsukka',
      state: "Enugu",
      salary: 55000,
      postedAt: 'Tuesday, 19 May 2026',
      status: 'unavailable',
      tags: ['Cashier', 'POS', 'Sales']
    },
    {
      id: crypto.randomUUID(),
      title: 'Supervisor',
      category: 'Hospitality',
      type: 'Full-time',
      level: 'Mid',
      location: 'Nsukka',
      state: "Enugu",
      salary: 75000,
      postedAt: 'Tuesday, 19 May 2026',
      status: 'available',
      tags: ['Supervisor', 'Manager', 'Operations']
    },
    {
      id: crypto.randomUUID(),
      title: 'Office Assistant',
      category: 'Office',
      type: 'Full-time',
      level: 'Mid',
      location: 'Total Roundabout',
      state: "Enugu",
      salary: 40000,
      postedAt: 'Wednesday, 3 June 2026',
      status: 'unavailable',
      tags: ['Office Assistant', 'Admin', 'Clerical']
    },
    {
      id: crypto.randomUUID(),
      title: 'Live-in House Help',
      category: 'Domestic & Care',
      type: 'Full-time',
      level: 'Mid',
      location: 'Nru Nsukka',
      state: "Enugu",
      salary: 40000,
      postedAt: 'Tuesday, 2 June 2026',
      status: 'available',
      tags: ['House Help', 'Domestic', 'Live-in']
    },
    {
      id: crypto.randomUUID(),
      title: 'Sales Rep',
      category: 'Sales',
      type: 'Full-time',
      level: 'Mid',
      location: 'UNN',
      state: "Enugu",
      salary: 40000,
      postedAt: 'Monday, 1 June 2026',
      status: 'available',
      tags: ['Sales Rep', 'Retail', 'Customer Service']
    },
    {
      id: crypto.randomUUID(),
      title: 'Live-in Security',
      category: 'Sales',
      type: 'Full-time',
      level: 'Mid',
      location: 'Ugwuoye Nsukka',
      state: "Enugu",
      salary: 60000,
      postedAt: 'Tuesday, 26 May 2026',
      status: 'available',
      tags: ['Security', 'Guard', 'Live-in']
    },
];


