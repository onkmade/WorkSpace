import { initialTasks } from "@/constants/tasks"
import { useEffect, useState } from "react"
import { TasksContext } from "./TasksContext";

const STORAGE_KEY = "workspace.tasks";

function readTasks() {
    try {
        const storedTasks = localStorage.getItem(STORAGE_KEY);
        if (!storedTasks) return initialTasks;

        const parsedTasks = JSON.parse(storedTasks);
        if (!Array.isArray(parsedTasks)) {
            throw new TypeError("Saved tasks must be an array.");
        }
        if (!parsedTasks.every((task) =>
            task &&
            typeof task.id === "string" &&
            typeof task.title === "string" &&
            typeof task.description === "string" &&
            typeof task.status === "string"
        )) {
            throw new TypeError("Saved tasks contain an invalid task.");
        }

        return parsedTasks;
    } catch (error) {
        console.error("Could not load saved tasks.", error);
        return initialTasks;
    }
}

export function TaskProvider({children}){
    const [tasks, setTasks] = useState(readTasks);
    const [searchQuery, setSearchQuery] = useState("");
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        } catch (error) {
            console.error("Could not save tasks.", error);
        }
    }, [tasks]);

    return(
        <TasksContext.Provider value={{
            tasks,
            setTasks,
            searchQuery,
            setSearchQuery,
            editingTask,
            setEditingTask,
        }}>
            {children}
        </TasksContext.Provider>
    );
}