import { twMerge } from "tailwind-merge"


const styles = {
    complete: 'bg-green-400/20 text-green-400 outline outline-offset-2 outline-green-400 px-1.5 py-0.5 rounded-sm text-sm select-none',
    incomplete: 'bg-red-400/20 text-red-400 px-1.5 py-0.5 outline-offset-2 rounded-sm text-sm select-none outline outline-red-400'
}

export function Tag({children, variant, className}){
    return(
        <button
            className={twMerge(
                styles[variant],
                className
            )}
        >
            {children}
        </button>
    )
}