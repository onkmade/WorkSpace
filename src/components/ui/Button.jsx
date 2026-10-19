import { twMerge } from "tailwind-merge"

const styles = {
    cta: 'bg-stone-800 text-stone-300 hover:text-stone-50 border-2 border-stone-500 py-[0.35em] px-[0.75em] rounded-md outline-transparent hover:outline hover:outline-offset-2 hover:outline-stone-500 transition-outline duration-300',
    primary: 'bg-stone-800 text-stone-200 hover:text-stone-50 px-2 py-1 rounded-sm border border-stone-700 cursor-pointer',
    secondary: 'bg-stone-700 text-stone-200 hover:text-stone-50 px-2 py-1 rounded-sm border border-stone-600 cursor-pointer'
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