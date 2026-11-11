import { twMerge } from "tailwind-merge";

export function SelectTrigger({option, children, onClick, className = ""}){
    const color = option?.color || '#44403b';

    function handleClick(e){
        e.preventDefault();
        onClick();
    }
    
    return(
        <button
            className={twMerge("bg-(--color-bg)/20 rounded-sm p-0.5", className)}
            style={{'--color-bg': color}}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}