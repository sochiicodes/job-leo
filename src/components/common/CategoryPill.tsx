import { useJobFilters } from "../../features/jobs/hooks/useJobFilters"

interface CategoryPillProp{
    cat: string
    onClick: () => void
}

const CategoryPill = ({cat, onClick}: CategoryPillProp) =>{
    const { category } = useJobFilters()

    return(
        <button
            key={cat}
            className={`group flex items-center gap-2 px-5 py-2 space-x-2 whitespace-nowrap rounded-2xl text-xs border transition-all cursor-pointer ${
                category === cat
                ? 'bg-brand-500 text-white border-brand-500 shadow-xl shadow-brand-100'
                : 'bg-white text-slate-500 border-slate-200 hover:border-brand-400'
            }`}
            onClick={onClick}
        >
            {/* <span className="flex rounded-full h-2 w-2 bg-slate-500 group-hover:bg-brand-400"></span> */}
            {cat}
        </button>
    )
}
export default CategoryPill