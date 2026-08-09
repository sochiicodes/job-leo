import CheckItem from "../../../components/common/CheckItem"
import { JOB_CATEGORIES } from "../../../constants/jobs"
import JobFilterSection from "./JobFilterSection"


const JobFilters = () =>{

    return(
        <aside className="w-1/4 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <header className="flex justify-between p-5 border-b border-gray-100">
                <p className="text-m">Filter</p>
                <p className="text-xs font-bold text-brand-600">Clear All</p>
            </header>
            <JobFilterSection title="Job Type">
                {
                    ["Part-Time", "Full-Time", "Remote", "Contract"].map((jobType) =>(
                        <CheckItem
                            type="checkbox"
                            label={jobType}
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Experience">
                {
                    ["Junior", "Senior", "Intermediate", "Expert"].map((exp) =>(
                        <CheckItem
                            type="checkbox"
                            label={exp}
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Salary Range">
                <label className="flex flex-col justify-start gap-2">
                    <section className="flex flex-col gap-4 items-center">
                        <input
                            type="range"
                            className="w-full h-3 accent-brand outline-none"
                            min={0}
                            max={500000}
                        />
                        
                        <p className="text-brand-500 font-bold text-lg">Up to<span> {300}</span>/yr</p>
                    </section>
                    <section className="flex items-center justify-between text-gray-400 text-xs">
                        <p>0</p>
                        <p>500k</p>
                    </section>
                </label>
            </JobFilterSection>
            <JobFilterSection title="Location">
                {
                    ["Remote Only", "Lagos", "Abuja", "London", "USA", "Nigeria"].map((loc) =>(
                        <CheckItem
                            type="checkbox"
                            label={loc}
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Date Posted">
                {
                    [
                        ['Any time', 'any'], 
                        ['Last 24 hours', '1'],
                        ['Last 3 days', '3'], 
                        ['Last week', '7'], 
                        ['Last month', '30'],
                    ].map(([label, value]) =>(
                        <label className="flex items-center justify-between" key={value}>
                            <section className="flex gap-2 items-center">
                                <CheckItem
                                    type="radio"
                                    value={value}
                                    label={label}
                                />
                            </section>
                            <p className="bg-slate-200 rounded-full px-2 py-0.5 text-xs">{4}</p>
                        </label>
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Category">
                {
                    JOB_CATEGORIES.map((cat) =>(
                        <CheckItem
                            type="radio"
                            label={cat} 
                            key={cat} 
                            value={cat}
                        />
                    ))
                }
            </JobFilterSection>
        </aside>
    )
}
export default JobFilters