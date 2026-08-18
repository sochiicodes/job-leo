import { Check, Circle } from "lucide-react"


interface CheckItemProps<T extends string = string>{
    type: "checkbox" | "radio"
    label: string
    onChange: (value: T) => void
    value: T
    checked: boolean
    count: number
}

function CheckItem<T extends string>({type, label, value, checked, count, onChange}: CheckItemProps<T>){

    
    return(
        <label className="flex items-center justify-between">
            <section className="flex gap-2 items-center">
                <input
                    type={type}
                    value={value}
                    checked={checked}
                    onChange={() => onChange(value)}
                    className="sr-only"
                />
                <span className={`flex border border-slate-300 size-4 items-center justify-center  transition-colors
                    ${type === "radio" ? "rounded-full" : "rounded-sm"}
                    ${checked
                        ? "border-brand-600 bg-brand-600" 
                        : "border-brand-600 bg-transparent"
                    }`}>
                    {checked && (
                        type === "radio"
                        ? 
                        <Circle
                            size={12}
                            strokeWidth={3}
                            className="text-white"
                        />
                        :
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


