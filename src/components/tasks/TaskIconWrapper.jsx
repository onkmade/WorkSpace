import { twMerge } from "tailwind-merge";

export function TaskIconWrapper({children, color, className}){
    return (
        <button
            className={twMerge('bg-(--task-color)/20 p-1 rounded-sm', className)}
            style={{'--task-color': color}}
        >
            {children}
        </button>
    )
}