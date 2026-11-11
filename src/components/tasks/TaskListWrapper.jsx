export default function TaskListWrapper({children}){
    return(
        <div className="flex items-center gap-2 border-b border-stone-700/70 bg-stone-700/20 p-2">
            {children}
        </div>
    )
}