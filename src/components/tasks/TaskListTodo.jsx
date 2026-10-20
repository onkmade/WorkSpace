import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { IconCircleDashed } from "@tabler/icons-react"
import { TaskWrapper } from "./TaskWrapper"

export default function TaskListTodo(){
    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#ff6464'}>
                    <IconCircleDashed size={20} color="#ff6464" />
                </TaskIconWrapper>
                <h1>To-do</h1>
            </TaskListWrapper>
        </TaskWrapper>
    )
}