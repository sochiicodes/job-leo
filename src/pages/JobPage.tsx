import { HeroJobSection } from "../features/jobs/components/HeroJobSection";
import { JOB_CATEGORIES } from "../constants/jobs";
import { JobCategoryPills } from "../features/jobs";

export default function JobsPage(){
    return(
        <main className="pt-16">
            <HeroJobSection/>
            <JobCategoryPills categories={JOB_CATEGORIES}/>
        </main>
    )
}