import { twMerge } from "tailwind-merge"

const styles = {
    primary: 'bg-stone-800 text-stone-200 hover:text-stone-50 px-2 py-1 rounded-sm border border-stone-700'
}

export function Button({children, onClick, variant, className}){
    return(
        <button
            onClick={onClick}
            className={twMerge(
                styles[variant],
                className
            )}
        >
            {children}
        </button>
    )
}