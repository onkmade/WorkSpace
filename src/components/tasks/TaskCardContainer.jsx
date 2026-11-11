import EmptyState from "../ui/EmptyState"
import { TasksContext } from "@/context/TasksContext";
import { useContext } from "react";
import TaskCard from "./TaskCard";

export function TaskCardContainer({tasks, status}){
    const { searchQuery } = useContext(TasksContext);
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const visibleTasks = tasks.filter((task) => {
        if (task.status !== status) return false;
        if (!normalizedQuery) return true;

        return `${task.title} ${task.description}`.toLowerCase().includes(normalizedQuery);
    });

    return(
        <div className="grid content-start gap-2 p-2">
            {
                visibleTasks.length === 0
                ? <EmptyState message={normalizedQuery ? "No matching tasks" : "No tasks yet"}/>
                : visibleTasks.map(task => <TaskCard key={task.id} task={task}/>)
            }
        </div>
    )
}