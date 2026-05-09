
export type JobCategory = 
  | 'All'
  | 'Sales & Retail'
  | 'Hospitality & Events'
  | 'Office & Digital'
  | 'Logistics & Security'
  | 'Domestic & Care'
  | 'Education'
  | 'Beauty & Fashion'
  | 'Professional Roles';

export interface JobListing {
  id: string;
  title: string;
  category: JobCategory;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salary?: string;
  postedAt: string;
  status: "Available" | "Not Available"
}

export interface TermsContent {
  title: string;
  points: string[];
}
