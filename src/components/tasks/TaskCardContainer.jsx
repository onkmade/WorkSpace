import EmptyState from "../ui/EmptyState"
import TaskCard from "./TaskCard";

export function TaskCardContainer({tasks, status}){
    const redefinedTasks = tasks.filter(task => task.status === status);
    const redefinedTasksLength = redefinedTasks.length;
    return(
        <section className="p-2 bg-stone-800 rounded-lg grid gap-2">
            {
                redefinedTasksLength === 0 
                ? <EmptyState message={'No Task Added Yet'}/>
                : redefinedTasks.map(task => <TaskCard task={task}/>)
            }
        </section>
    )
}