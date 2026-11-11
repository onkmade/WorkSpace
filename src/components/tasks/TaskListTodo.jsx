import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { IconCircleDashed } from "@tabler/icons-react"
import { TaskWrapper } from "./TaskWrapper"
import { TasksContext } from "@/context/TasksContext"
import { useContext } from "react"
import { TaskCardContainer } from "./TaskCardContainer"

export default function TaskListTodo(){
    const { tasks } = useContext(TasksContext);    
    const taskCount = tasks.filter((task) => task.status === "todo").length;
    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#ff6464'}>
                    <IconCircleDashed size={20} color="#ff6464" />
                </TaskIconWrapper>
                <h1>To-do <span className="text-sm text-stone-400">({taskCount})</span></h1>
            </TaskListWrapper>
            <TaskCardContainer tasks={tasks} status={'todo'}/>
        </TaskWrapper>
    )
}