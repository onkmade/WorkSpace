import { initialTasks } from "@/constants/tasks"
import { createContext, useContext, useState } from "react"

export const TasksContext = createContext(null);

export function TaskProvider({children}){
    const [tasks, setTasks] = useState(initialTasks);
    return(
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    );
}