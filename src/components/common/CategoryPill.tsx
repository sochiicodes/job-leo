import { Dot } from "lucide-react"

const CategoryPill = ({cat}) =>{
    return(
        <button className=" flex py-2 px-4 border border-gray-200 rounded-3xl justify-center align-center text-gray-400">
            <Dot/> 
            {cat}
        </button>
    )
}
export default CategoryPill