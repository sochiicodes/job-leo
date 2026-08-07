import { HeroJobSection } from "../features/jobs/components/HeroJobSection";
import { JOB_CATEGORIES } from "../constants/jobs";
import CategoryPill from "../components/common/CategoryPill";

export default function JobsPage(){
    return(
        <main className="pt-16">
            <HeroJobSection/>
            <section className="w-full flex justify-center align-center overflow-hidden p-4 gap-2 ">
                {
                    JOB_CATEGORIES.map((cat: string, index) =>(
                        <CategoryPill cat={cat} key={index}/>
                    ))
                }
            </section>
        </main>
    )
}