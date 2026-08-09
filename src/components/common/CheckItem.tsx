interface CheckItemProps{
    type: string
    label: string
    value?: string
    min?: number
    max?: number
    step?: number
}

const CheckItem = ({label}: CheckItemProps) =>{
    const count = 4
    return(
        <label className="flex items-center justify-between">
            <section className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    checked={true}
                    className="w-3.5 h-3.5 accent-brand"
                />
                {count !== undefined && (
                    <span>{label}</span>
                )}
            </section>
            <p className="bg-slate-200 rounded-full px-2 py-0.5 text-xs">{count}</p>
        </label>
    )
}
export default CheckItem


