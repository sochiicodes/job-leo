interface CategoryPillProp{
    cat: string
}

const CategoryPill = ({cat}: CategoryPillProp) =>{
    const selectedCategory = 'Design'
    return(
        <button
            key={cat}
            className={`group flex items-center gap-2 px-5 py-2 space-x-2 whitespace-nowrap rounded-2xl text-xs border transition-all ${
                selectedCategory === cat
                ? 'bg-brand-500 text-white border-brand-500 shadow-xl shadow-brand-100'
                : 'bg-white text-slate-500 border-slate-200 hover:border-brand-400'
            }`}
        >
            <span className="flex rounded-full h-2 w-2 bg-slate-500 group-hover:bg-brand-400"></span>
            {cat}
        </button>
    )
}
export default CategoryPill