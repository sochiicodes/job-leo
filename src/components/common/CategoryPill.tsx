
interface CategoryPillProps{
    cat: string
}

const CategoryPill = ({cat}: CategoryPillProps) =>{
    const selectedCategory = "Design"
    return(
        <button
            key={cat}
            className={`px-2 py-2 rounded-2xl text-xs border transition-all ${
                selectedCategory === cat
                ? 'bg-brand-500 text-white border-brand-500 shadow-xl shadow-brand-100'
                : 'bg-white text-slate-500 border-slate-200 hover:border-brand-400'
            }`}
            >
            {cat}
        </button>
    )
}
export default CategoryPill
