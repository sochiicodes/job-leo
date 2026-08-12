interface ActiveFilterChipsProps{
    label: string
}

const ActiveFilterChips = ({label}: ActiveFilterChipsProps) => {
  
    return (
      <div className="flex flex-wrap gap-2 mb-3">
          <button
            className="flex items-center gap-1.5 bg-brand-light text-brand-dark border border-green-200 rounded-full text-xs font-medium px-3 py-1 hover:bg-green-100 transition-colors"
          >
            {label}
            <span className="text-brand-dark/60">✕</span>
          </button>
      </div>
    );
  }