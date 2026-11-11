import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { TaskWrapper } from "./TaskWrapper"
import { IconProgressCheck } from "@tabler/icons-react"
import { TaskCardContainer } from "./TaskCardContainer"
import { TasksContext } from "@/context/TasksContext"
import { useContext } from "react"

export default function TaskListComplete(){
    const { tasks } = useContext(TasksContext);
    const taskCount = tasks.filter((task) => task.status === "completed").length;
    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#17afff'}>
                    <IconProgressCheck color="#17afff" size={20}/>
                </TaskIconWrapper>
                <h1>Completed <span className="text-sm text-stone-400">({taskCount})</span></h1>
            </TaskListWrapper>
            <TaskCardContainer tasks={tasks} status={'completed'}/>
        </TaskWrapper>
    )
}