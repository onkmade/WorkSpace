import { twMerge } from "tailwind-merge";

export function SelectTrigger({option, children, onClick}){
    const color = option?.color || '#44403b';

    function handleClick(e){
        e.preventDefault();
        onClick();
    }
    
    return(
        <button
            className={twMerge(`bg-(--color-bg)/20 p-0.5 rounded-sm`)}
            style={{'--color-bg': color}}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}