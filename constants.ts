
import { JobCategory, JobListing } from './types';

export const WHATSAPP_NUMBER = '2349128131343';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const FULL_TERMS_URL = '#';

export const FAQS: { question: string; answer: string }[] = [
  { question: "What exactly is JobLeo?", answer: "JobLeo is a premium job referral and placement service based in Nsukka. We act as a bridge between high-quality local talent and businesses, making hiring faster and safer for everyone through direct WhatsApp communication." },
  { question: "How do I register as a job seeker?", answer: "Click on 'Register as Seeker' to fill our registration form. There is a one-time ₦2,000 registration fee. Once paid, we add you to our vetted database and start referring you to relevant job interviews." },
  { question: "What is the 30% referral fee for employees?", answer: "Upon successful employment, JobLeo is entitled to 30% of your first month's salary as a referral fee. This is a one-time payment. After the first month, you keep 100% of your earnings." },
  { question: "How does the ₦5,000 employer subscription work?", answer: "For employers, a ₦5,000 fee covers a yearly service subscription. This grants you access to our recruitment services for an entire year, allowing you to hire multiple staff as needed without paying per referral." },
  { question: "How fast is the placement process?", answer: "Most placements happen within 2–7 days. We prioritize speed and quality, ensuring that employers get vetted candidates and job seekers get legitimate interviews almost instantly." }
];

export const SEEKER_FORM_URL = 'https://forms.gle/mRQMzqV6XpdJT1qi8';
export const EMPLOYER_FORM_URL = 'https://forms.gle/XLC2z6bt4oWVgZL78';

export const CATEGORIES: JobCategory[] = [
  'All',
  'Sales & Retail',
  'Hospitality & Events',
  'Office & Digital',
  'Logistics & Security',
  'Domestic & Care',
  'Education & Beauty',
  'Professional Roles'
];

export const JOB_LISTINGS: JobListing[] = [
  {
    id: 's1',
    title: 'Sales Girl/Boy',
    category: 'Sales & Retail',
    location: 'Ogige Market, Nsukka',
    type: 'Full-time',
    salary: '₦35,000 - ₦45,000',
    postedAt: 'Just now'
  },
  {
    id: 's2',
    title: 'Cashier',
    category: 'Sales & Retail',
    location: 'Enugu Road',
    type: 'Full-time',
    salary: '₦50,000',
    postedAt: '2 hours ago'
  },
  {
    id: 's3',
    title: 'POS Operator',
    category: 'Sales & Retail',
    location: 'UNN Gate Area',
    type: 'Full-time',
    salary: '₦30,000 + Commission',
    postedAt: '1 day ago'
  },
  {
    id: 'h1',
    title: 'Waiter/Waitress',
    category: 'Hospitality & Events',
    location: 'Beach Junction',
    type: 'Full-time',
    salary: '₦40,000',
    postedAt: '5 hours ago'
  },
  {
    id: 'o1',
    title: 'Personal Assistant (PA)',
    category: 'Office & Digital',
    location: 'Odim Gate Area',
    type: 'Full-time',
    salary: '₦70,000',
    postedAt: '1 day ago'
  },
  {
    id: 'l1',
    title: 'Professional Driver',
    category: 'Logistics & Security',
    location: 'Orba Road',
    type: 'Full-time',
    salary: '₦80,000',
    postedAt: '2 days ago'
  }
];

export const TERMS_JOB_SEEKERS = {
  title: "TERMS FOR JOB SEEKERS (EMPLOYEES) – JOBLEO",
  points: [
    "₦2,000 registration fee required before being referred for interviews.",
    "JobLeo is entitled to 30% of the first month’s salary upon employment.",
    "This 30% referral fee is non-negotiable and non-refundable.",
    "Failure to honor the agreement results in blacklisting and legal recovery."
  ],
  fullText: `1. Role of JobLeo
JobLeo is a job placement and referral service that connects job seekers with potential employers.
JobLeo is not the employer and does not guarantee employment, salary amount, job duration, or working conditions.

2. Registration & Accuracy of Information
By registering with JobLeo, you agree that:
● All information provided is true, accurate, and up to date
● Any false or misleading information may result in immediate removal from JobLeo’s database without notice

3. Interviews & Employment
● JobLeo only facilitates job referrals and interview arrangements
● All final hiring decisions are made solely by the employer
● JobLeo is not responsible for interview outcomes or employer decisions

4. Placement Fees (If Applicable)
● Job seekers are required to register with a ₦2,000 registration fee before being referred for interviews
● Upon successful employment, JobLeo is entitled to 30% of the first month’s salary
● This 30% referral fee is non-negotiable and non-refundable
● Failure to honor this agreement may result in:
    ○ Disqualification from JobLeo services
    ○ Blacklisting from future job referrals
    ○ Recovery actions as permitted by law
After the first month, JobLeo has no further claim to your salary, regardless of job duration or promotions.
Some job placements may require additional service or referral fees. Any such fees will be clearly communicated in advance.

5. Conduct & Professionalism
Job seekers are expected to:
● Attend interviews promptly
● Conduct themselves professionally
● Respect employer rules and workplace ethics
Failure to meet these standards may result in:
● Removal from JobLeo’s platform
● Blacklisting from future job opportunities

6. Limitation of Liability
JobLeo is not responsible for:
● Salary delays or non-payment
● Workplace disputes
● Termination, resignation, or disciplinary actions
● Employer conduct or working conditions
All employment-related issues must be resolved directly between the job seeker and the employer.

7. Data Usage & Privacy
By registering with JobLeo, you consent to the collection, storage, and sharing of your information strictly for job placement purposes.

8. Indemnity
Employers agree to indemnify and hold JobLeo harmless against:
● Workplace disputes
● Employee claims
● Legal actions arising from employment relationships

GENERAL TERMS
1. Modification
JobLeo reserves the right to modify these terms at any time.

2. Termination of Service
JobLeo may suspend or terminate access for:
● Fraud
● Abuse
● Non-payment
● Misconduct

3. Jurisdiction
These terms are governed by the laws of the Federal Republic of Nigeria.

✅ Acceptance
By using JobLeo’s services, both job seekers and employers agree to these terms and conditions.`
};

export const TERMS_EMPLOYERS = {
  title: "TERMS FOR JOB GIVERS (EMPLOYERS) – JOBLEO",
  points: [
    "₦5,000 placement fee applies once a candidate is successfully hired.",
    "The fee operates as a yearly service subscription.",
    "Fees are non-refundable once employment begins.",
    "7–14 days replacement policy if an employee resigns or is terminated."
  ],
  fullText: `1. Role of JobLeo
JobLeo provides recruitment and referral services only.
JobLeo vets and pre-screens job seekers based on internal criteria and the general requirements provided by employers.
However, employers are strongly advised to conduct their own independent verification before hiring.
JobLeo is not responsible for an employee’s performance, behavior, or conduct after placement, as individual circumstances may change over time.

2. Job Requests
Employers agree to:
● Provide accurate and complete job descriptions
● Clearly state salary, job location, working hours, and expectations
Any misleading or false job information may result in refusal of service.

3. Interview & Hiring Process
● JobLeo will recommend candidates based on the employer’s stated requirements
● Final hiring decisions remain the sole responsibility of the employer

4. Placement Fees
● A ₦5,000 placement fee applies once a candidate is successfully hired
● This fee operates as a yearly service subscription, granting employers access to JobLeo’s recruitment services within the period
● All fees will be communicated before candidate referral
● Fees are non-refundable once employment begins

5. Bypassing JobLeo
Employers agree not to bypass JobLeo by:
● Hiring referred candidates directly without completing required payments
● Using JobLeo’s candidate database without written consent
Violation of this policy may result in:
● Denial of future services
● Claims for outstanding fees or other remedies permitted by law

6. Employment Responsibility
Employers are solely responsible for:
● Salary payments
● Working conditions
● Final vetting of employees
● Compliance with applicable labor laws
● Employee supervision, discipline, and termination
JobLeo does not act as a guarantor for job seekers.
Employers are strongly advised to request and independently verify a guarantor where required.
JobLeo bears no responsibility once placement is completed.

7. Replacement Policy
● If an employee resigns or is terminated within 7–14 days, JobLeo may provide a replacement subject to availability
● Replacement terms must be clearly agreed upon before placement

8. Indemnity
Employers agree to indemnify and hold JobLeo harmless against:
● Workplace disputes
● Employee claims
● Legal actions arising from employment relationships

9. Limitation of Liability
JobLeo is not responsible for:
● Salary delays or non-payment
● Workplace disputes
● Termination, resignation, or disciplinary actions
● Employer conduct or working conditions
All employment-related issues must be resolved directly between the job seeker and the employer.

GENERAL TERMS
1. Modification
JobLeo reserves the right to modify these terms at any time, with or without prior notice.

2. Termination of Service
JobLeo may suspend or terminate services due to:
● Fraud
● Abuse of service
● Non-payment
● Misconduct or policy violations

3. Jurisdiction
These terms are governed by the laws of the Federal Republic of Nigeria.

✅ Acceptance
By using JobLeo’s services, both job seekers and employers agree to these terms and conditions.`
};
