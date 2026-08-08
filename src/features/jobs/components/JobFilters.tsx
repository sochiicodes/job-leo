import JobFilterSection from "./JobFilterSection"


const JobFilters = () =>{
    return(
        <aside className="w-1/4 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <header className="flex justify-between p-5 border-b border-gray-100">
                <p className="text-m">Filter</p>
                <p className="text-xs font-bold text-brand-600">Clear All</p>
            </header>
            <JobFilterSection title="Job Type">
                <p>Part-Time</p>
                <p>Full-Time</p>
                <p>Remote</p>
                <p>Contract</p>
            </JobFilterSection>
            <JobFilterSection title="Experience">
                <p>Junior</p>
                <p>Senior</p>
                <p>Intermediate</p>
                <p>Expert</p>
            </JobFilterSection>
            <JobFilterSection title="Salary Range">
                Salary Range
            </JobFilterSection>
            <JobFilterSection title="Location">
                Location
            </JobFilterSection>
            <JobFilterSection title="Date Posted">
                Date Posted
            </JobFilterSection>
            <JobFilterSection title="Category">
                Category
            </JobFilterSection>
        </aside>
    )
}
export default JobFilters