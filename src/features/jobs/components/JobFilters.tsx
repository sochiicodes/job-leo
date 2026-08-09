import { useState } from "react"
import CheckItem from "../../../components/common/CheckItem"
import { DATE_POSTED, EXPERIENCE_LEVELS, JOB_CATEGORIES, JOB_TYPES, LOCATION } from "../../../constants/jobs"
import JobFilterSection from "./JobFilterSection"


const JobFilters = () =>{
    const [salary, setSalary] = useState(200)

    return(
        <aside className="w-1/4 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <header className="flex justify-between p-5 border-b border-gray-100">
                <p className="text-m">Filter</p>
                <p className="text-xs font-bold text-brand-600">Clear All</p>
            </header>
            <JobFilterSection title="Job Type">
                {
                    JOB_TYPES.map((jobType) =>(
                        <CheckItem
                            type="checkbox"
                            label={jobType}
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Experience">
                {
                    EXPERIENCE_LEVELS.map((exp) =>(
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
                            className="salary-range w-full h-3 accent-brand outline-none"
                            min={0}
                            max={500}
                            step={10}
                            value={salary}
                            onChange={(e) => setSalary(Number(e.target.value))}
                        />
                        
                        <p className="text-brand-500 font-bold text-lg">Up to<span> {salary}k</span>/yr</p>
                    </section>
                    <section className="flex items-center justify-between text-gray-400 text-xs">
                        <p>0</p>
                        <p>500k</p>
                    </section>
                </label>
            </JobFilterSection>
            <JobFilterSection title="Location">
                {
                    LOCATION.map((loc) =>(
                        <CheckItem
                            type="checkbox"
                            label={loc}
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Date Posted">
                {
                    DATE_POSTED.map(([label, value]) =>(
                        <CheckItem
                            type="radio"
                            value={value}
                            label={label}
                            key={value}
                        />
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