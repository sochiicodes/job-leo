import { HeroJobSection } from "../features/jobs/components/HeroJobSection";
import { JOB_CATEGORIES } from "../constants/jobs";
import { JobCategoryPills, JobFilters, JobLists,  } from "../features/jobs";

export default function JobsPage(){
    return(
        <main className="pt-16">
            <HeroJobSection/>
            <JobCategoryPills categories={JOB_CATEGORIES}/>
            <section className="w-full flex px-6 py-10 gap-10 bg-gray-100">
                <JobFilters/>
                <JobLists/>
            </section>
        </main>
    )
}