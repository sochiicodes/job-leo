interface ActiveFilterChipProps{
    label: string
    onRemove: () => void
}

const ActiveFilterChip = ({label, onRemove}: ActiveFilterChipProps) => {
  
    return (
        <button
            className="flex items-center gap-3 bg-brand-light text-brand-dark border border-green-200 rounded-full text-xs font-medium px-3 py-1 hover:bg-green-100 transition-colors group"
        >
            {label}
        <span 
            className="text-brand-slate/60 text-xs group-hover:text-brand-900 transition-colors "
            onClick={onRemove}
        >✕</span>
        </button>
    );
  }
  export default ActiveFilterChip