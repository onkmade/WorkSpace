export default function FormField({label, id, onChange, placeholder, value}){
    return(
        <div className="p-2">
            <label htmlFor={id} className="grid gap-1">
                <span>{label}</span>
                <input 
                    id={id}
                    onChange={(e) => onChange(e.target.value)}
                    type="text" 
                    value={value}
                    name={label} 
                    placeholder={`Enter ${placeholder}`}
                    className="bg-stone-700 p-2 outline-transparent rounded-sm focus-within:outline-stone-600 border-none"
                    required
                />
            </label>
        </div>
    )
}