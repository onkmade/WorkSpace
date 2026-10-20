export default function TaskListWrapper({children}){
    return(
        <div className={
            `bg-stone-800 p-2 rounded-md`
        }>
            {children}
        </div>
    )
}