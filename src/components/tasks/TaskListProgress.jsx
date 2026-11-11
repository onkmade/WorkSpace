import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { TaskWrapper } from "./TaskWrapper"
import { IconProgress } from "@tabler/icons-react"
import { TaskCardContainer } from "./TaskCardContainer"
import { TasksContext } from "@/context/TasksContext"
import { useContext } from "react"

export default function TaskListProgress(){
    const { tasks } = useContext(TasksContext);
    const taskCount = tasks.filter((task) => task.status === "inprogress").length;

    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#ff7f08'}>
                    <IconProgress color="#ff7f08" size={20}/>
                </TaskIconWrapper>
                <h1>In-Progress <span className="text-sm text-stone-400">({taskCount})</span></h1>
            </TaskListWrapper>
            <TaskCardContainer tasks={tasks} status={'inprogress'}/>
        </TaskWrapper>
    )
}