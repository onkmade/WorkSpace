import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { IconCircleDashed } from "@tabler/icons-react"
import { TaskWrapper } from "./TaskWrapper"
import { TasksContext } from "@/context/TaskContext"
import { useContext } from "react"
import { TaskCardContainer } from "./TaskCardContainer"

export default function TaskListTodo(){
    const { tasks } = useContext(TasksContext);    
    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#ff6464'}>
                    <IconCircleDashed size={20} color="#ff6464" />
                </TaskIconWrapper>
                <h1>To-do</h1>
            </TaskListWrapper>
            <TaskCardContainer tasks={tasks} status={'todo'}/>
        </TaskWrapper>
    )
}