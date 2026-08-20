import { HeroJobSection } from "../features/jobs/components/HeroJobSection";
import { JOB_CATEGORIES } from "../constants/jobs";
import { JobCategoryPills, JobFilters, JobLists,  } from "../features/jobs";
import { JobCategoryFilter } from "../features/jobs/types";

const categories = [...JOB_CATEGORIES] satisfies JobCategoryFilter[]

export default function JobsPage(){
    return(
        <main className="pt-16 w-full">
            <HeroJobSection/>
            <JobCategoryPills categories={categories}/>
            <section className="w-full flex items-start px-6 py-10 gap-10 bg-white">
                <JobFilters />
                <JobLists />
            </section>
        </main>
    )
}