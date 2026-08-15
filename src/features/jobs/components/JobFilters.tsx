import { useState } from "react"
import CheckItem from "../../../components/common/CheckItem"
import JobFilterSection from "./JobFilterSection"

import { 
    DATE_POSTED, 
    EXPERIENCE_LEVELS, 
    JOB_CATEGORIES, 
    JOB_STATUS, 
    JOB_TYPES, 
    TOP_LOCATIONS 
} from "../../../constants/jobs"
import { useShallow } from "zustand/shallow"
import { JobCategory } from "../types"
import { RotateCcw } from "lucide-react"
import { useJobFilters } from "../hooks/useJobFilters"
import { formatCurrency } from "../../../utils/formatCurrency"


const categories = ["All", ...JOB_CATEGORIES] satisfies JobCategory[] 

const JobFilters = () =>{
    const {
        jobType, 
        expLevel,
        location,
        datePosted, 
        salaryRange, 
        category,
        jobStatus,

        setCategory, 
        setJobType, 
        setExpLevel,
        setJobStatus,
        setLocation, 
        setDatePosted, 
        setSalaryRange, 
        clearFilters
    } = useJobFilters()



    return(
        <aside className="w-70 shrink-0 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <header className="flex justify-between p-5 border-b border-gray-100">
                <p className="text-m">Filter</p>
                <p 
                    onClick={clearFilters}
                    className="text-xs font-bold text-brand-600 flex gap-2 cursor-pointer"
                    title="Reset Filter"
                >
                    <RotateCcw size={16}/>
                    {/* Clear All */}
                </p>
            </header>
            <JobFilterSection title="Job Type">
                {
                    JOB_TYPES.map((type) =>(
                        <CheckItem
                            key={type}
                            type="checkbox"
                            label={type}
                            value={type}
                            checked={jobType.includes(type)}
                            onChange={setJobType} 
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Experience">
                {
                    EXPERIENCE_LEVELS.map((exp) =>(
                        <CheckItem
                            key={exp}
                            type="checkbox"
                            label={exp}
                            value={exp}
                            checked={expLevel.includes(exp)}
                            onChange={setExpLevel}
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Job Status">
                {
                    JOB_STATUS.map((status) =>(
                        <CheckItem
                            key={status}
                            type="radio"
                            label={status}
                            value={status}
                            checked={jobStatus.includes(status)}
                            onChange={setJobStatus}
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Top Locations">
                {
                    TOP_LOCATIONS.map((loc) =>(
                        <CheckItem
                            key={loc}
                            type="checkbox"
                            label={loc}
                            value={loc}
                            checked={location.includes(loc)}
                            onChange={setLocation}
                        />
                    ))
                }
            </JobFilterSection>
            <JobFilterSection title="Date Posted">
                {
                    DATE_POSTED.map(([label, value]) =>(
                        <CheckItem
                            key={label}
                            type="radio"
                            label={label}
                            value={value}
                            checked={datePosted === value}
                            onChange={setDatePosted}
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
                            max={300000}
                            step={5000}
                            value={salaryRange}
                            onChange={(e) => setSalaryRange(Number(e.target.value))}
                        />
                        
                        <p className="text-brand-500 font-bold text-lg">Up to<span> {formatCurrency(salaryRange)}</span>/mo</p>
                    </section>
                    <section className="flex items-center justify-between text-gray-400 text-xs">
                        <p>0</p>
                        <p>500k</p>
                    </section>
                </label>
            </JobFilterSection>
            <JobFilterSection title="Category">
                {
                    categories.map((cat) =>(
                        <CheckItem
                            key={cat}
                            type="radio"
                            label={cat}
                            value={cat}
                            checked={category === cat}
                            onChange={setCategory}
                        />
                    ))
                }
            </JobFilterSection>
        </aside>
    )
}
export default JobFilters