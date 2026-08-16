import { HeroJobSection } from "../features/jobs/components/HeroJobSection";
import { JOB_CATEGORIES } from "../constants/jobs";
import { JobCategoryPills, JobFilters, JobLists,  } from "../features/jobs";
import { JobCategory } from "../features/jobs/types";

const categories = ["All", ...JOB_CATEGORIES] satisfies JobCategory[]

export default function JobsPage(){
    return(
        <main className="pt-16 w-full">
            <HeroJobSection/>
            <JobCategoryPills categories={categories}/>
            <section className="w-full flex items-start px-6 py-10 gap-10 bg-slate-200/90">
                <JobFilters />
                <JobLists />
            </section>
        </main>
    )
}