import { HeroJobSection } from "../features/jobs/components/HeroJobSection";
import { JOB_CATEGORIES } from "../constants/jobs";
import CategoryPill from "../components/common/CategoryPill";

export default function JobsPage(){
    return(
        <main className="pt-16">
            <HeroJobSection/>
            <section className="w-full flex overflow-hidden p-4 gap-6">
                {
                    JOB_CATEGORIES.map((cat: string, index) =>(
                        <CategoryPill cat={cat} key={index}/>
                    ))
                }
            </section>
        </main>
    )
}