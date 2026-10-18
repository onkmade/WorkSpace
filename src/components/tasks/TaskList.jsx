import TaskCard from "./TaskCard";
import { TasksContext } from "@/context/TaskContext";
import { useContext } from "react";
import EmptyState from "../ui/EmptyState";

export default function TaskList(){
    const { tasks } = useContext(TasksContext); 
    const completed = tasks.filter( t => t.status);
    const incompleted =  tasks.filter(t => !t.status);
    
    return(
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(343px,100%),1fr))] gap-2 items-start">
            {/* Complete Section */}
            <section className="bg-stone-800 rounded-lg">
                <h2 className="p-2">Complete</h2>
                <li className="h-px w-full bg-stone-500/50 list-none"></li>
                <section className="columns-3xs gap-2 p-2 ">
                    {completed.length === 0 
                        ? <EmptyState message={'No Task Addded Yet'}/>
                        : tasks.filter(task => task.status).map( task => <TaskCard key={task.id} task={task} /> )
                    }
                </section>
            </section>

            {/* InComplete Section */}
            <section className="bg-stone-800 rounded-lg">
                <h2 className="p-2">Incomplete</h2>
                <li className="h-px w-full bg-stone-500/50 list-none"></li>
                <section className="columns-3xs gap-2 p-2">
                    {incompleted.length === 0 
                        ? <EmptyState message={'No Task Addded Yet'}/>
                        : tasks.filter(task => !task.status).map( task => <TaskCard key={task.id} task={task} /> )
                    }
                </section>
            </section>
        </div>
    )
}