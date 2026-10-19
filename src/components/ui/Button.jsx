import { twMerge } from "tailwind-merge"

const styles = {
    cta: 'bg-stone-800 px-3 py-1.5 rounded-md cursor-pointer text-stone-300 hover:text-stone-50 transition-colors duration-300 outline-transparent outline-2 outline-offset-2 hover:outline-stone-600',
    primary: 'bg-stone-800 text-stone-200 hover:text-stone-50 px-2 py-1 rounded-sm border border-stone-700 cursor-pointer',
    secondary: 'bg-stone-700 text-stone-200 hover:text-stone-50 px-2 py-1 rounded-sm border border-stone-600 cursor-pointer'
}

export function Button({children, onClick, variant, className, icon, iconSize, iconStroke}){
    const Icon = icon;
    return(
        <button
            onClick={onClick}
            className={twMerge(
                styles[variant],
                className
            )}
        >
            {children}
            {icon && <Icon size={iconSize} stroke={iconStroke}/>}
        </button>
    )
}