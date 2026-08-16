import { useEffect, useRef, useState } from "react"
import CategoryPill from "../../../components/common/CategoryPill"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useJobFilters } from "../hooks/useJobFilters"
import { JobCategory } from "../types"

interface categoryPillsProp{
    categories: readonly JobCategory[]
}

const JobCategoryPills = ({categories}: categoryPillsProp) =>{
    const { setCategory, category } = useJobFilters()

    const scrollRef = useRef<HTMLElement | null>(null)

    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const checkOverflow = () =>{
        const el = scrollRef.current

        if (!el) return

        setCanScrollLeft(el.scrollLeft > 0)
        setCanScrollRight(
            el.scrollLeft < el.scrollWidth - el.clientWidth
        )
    }
    const scrollLeft = () =>{
        scrollRef.current?.scrollBy({
            left: -250,
            behavior: "smooth"
        })
    }
    const scrollRight = () =>{
        scrollRef.current?.scrollBy({
            left: 250,
            behavior: "smooth"
        })
    }

    useEffect(() =>{
        checkOverflow()
    },[categories])

    return(
        <section className="relative flex px-2">
            {canScrollLeft &&(
            <button
                type="button"
                onClick={scrollLeft}
                className="absolute left-0 top-0 z-10 hidden md:flex h-full w-16 items-center justify-start bg-linear-to-r from-white via-white/90 to-transparent pl-2 text-slate-500 transition-colors hover:text-brand-500"
             >
                 <ChevronLeft size={18}/>
             </button>
           )}
            <section 
                className="min-w-0 flex justify-start align-center overflow-x-auto scrollbar-hide p-4 gap-2 "
                ref={scrollRef}
                onScroll={checkOverflow}
            >
                {
                    categories.map((cat) =>(
                        <CategoryPill cat={cat} key={cat} onClick={() =>setCategory(cat)}/>
                    ))
                }
            </section>

            {canScrollRight &&(
            <button
                type="button"
                onClick={scrollRight}
                className="absolute right-0 top-0 z-10 hidden md:flex h-full w-16 items-center justify-end bg-linear-to-l from-white via-white/90 to-transparent pr-2 text-slate-500 transition-colors hover:text-brand-500"
            >
                <ChevronRight size={18}/>
            </button>
            )}
        </section>
    )
}

export default JobCategoryPills