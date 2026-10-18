import TaskCard from "./TaskCard";
import { TasksContext } from "@/context/TaskContext";
import { useContext } from "react";

export default function TaskList(){
    const { tasks } = useContext(TasksContext); 
    return(
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(343px,100%),1fr))] gap-2 items-start">
            {/* Complete Section */}
            <section className="bg-stone-800 rounded-md">
                <h2 className="p-2">Complete</h2>
                <li className="h-px w-full bg-stone-500/50 list-none"></li>
                <section className="columns-3xs gap-2 p-2 ">
                    {tasks.filter(task => task.status === true ).map( task => <TaskCard key={task.id} task={task} /> )}
                </section>
            </section>

            {/* InComplete Section */}
            <section className="bg-stone-800 rounded-md">
                <h2 className="p-2">Incomplete</h2>
                <li className="h-px w-full bg-stone-500/50 list-none"></li>
                <section className="grid gap-1 p-2 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
                    {tasks.filter(task => task.status === false ).map( task => <TaskCard key={task.id} task={task} /> )}
                </section>
            </section>
        </div>
    )
}