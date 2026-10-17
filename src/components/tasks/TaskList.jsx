import TaskCard from "./TaskCard";
import { TasksContext } from "@/context/TaskContext";
import { useContext } from "react";

export default function TaskList(){
    const { tasks } = useContext(TasksContext); 
    return(
        <section>
            {tasks.map( task => <TaskCard key={task.id} task={task} /> )}
        </section>
    )
}