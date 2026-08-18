import { useShallow } from "zustand/shallow"
import { SORT_OPTIONS } from "../../constants/jobs"
import { useStore } from "../../store/store"

const SortDropDown = () =>{
    const {sort, setSort} = useStore(
        useShallow((state) =>({
            sort: state.sort,
            setSort: state.setSort
        }))
    ) 
    // console.log(sort)
    return(
        <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="border border-gray-200 rounded-lg font-bold text-sm px-3 py-1.5 text-gray-700 bg-white cursor-pointer outline-none"
        >
            {SORT_OPTIONS.map((label) =>(
                <option key={label} value={label}>{label}</option>
            ))}
            
        </select>
    )
}
export default SortDropDown