import EmptyState from "../ui/EmptyState"
import TaskCard from "./TaskCard";

export function TaskCardContainer({tasks, status}){
    const taskLength = tasks.length;
    return(
        <section className="p-2 bg-stone-800 rounded-xl grid gap-2">
            {
                taskLength === 0 
                ? <EmptyState message={'No Task Added Yet'}/>
                : tasks.filter(task => task.status === status ).map(task => <TaskCard task={task}/>)
            }
        </section>
    )
}