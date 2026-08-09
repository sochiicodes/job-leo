import { Check } from "lucide-react"

interface CheckItemProps{
    type: string
    label: string
    value?: string
}

const CheckItem = ({label}: CheckItemProps) =>{
    const count = 4
    const checked = false
    return(
        <label className="flex items-center justify-between">
            <section className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    checked={checked}
                    className="sr-only"
                />
                <span className={`flex border border-slate-300 size-4 items-center justify-center rounded-sm transition-colors
                    ${checked
                        ? "border-brand-600 bg-brand-600" 
                        : "border-brand-600 bg-transparent"
                    }`}>
                    {checked &&(
                        <Check
                            size={12}
                            strokeWidth={3}
                            className="text-white"
                        />
                    )}
                </span>
                {count !== undefined && (
                    <span>{label}</span>
                )}
            </section>
            <p className="bg-slate-200 rounded-full px-2 py-0.5 text-xs">{count}</p>
        </label>
    )
}
export default CheckItem


