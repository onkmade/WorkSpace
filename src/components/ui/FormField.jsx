import { twMerge } from "tailwind-merge";

export default function FormField({element = 'input', label, id, onChange, placeholder, value, className}){
    const Element = element;
    const ontextarea = 'h-35 resize-none'
    
    return(
        <div className="p-2">
            <label htmlFor={id} className="grid gap-1">
                <span>{label}</span>
                <Element
                    id={id}
                    onChange={(e) => onChange(e.target.value)}
                    type="text" 
                    value={value}
                    name={label} 
                    placeholder={`Enter ${placeholder}`}
                    className={twMerge(
                        `${element === 'textarea' ? ontextarea : '' } bg-stone-700 p-2 outline-transparent rounded-sm focus-within:outline-stone-600 border-none`,
                        className

                    )}
                    required
                />
            </label>
        </div>
    )
}