import { ActiveFilterChip } from "../../../components"

const JobActiveFilterChips = () =>{
    return(
        <section className="flex flex-wrap mb-4 gap-4">
            {
               ["Design", "Tech", "Beauty"].map((label) =>(
                <ActiveFilterChip label={label}/>
               ))
            }
            
        </section>
    )
}
export default JobActiveFilterChips