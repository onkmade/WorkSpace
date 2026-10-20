import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { TaskWrapper } from "./TaskWrapper"
import { IconProgressCheck } from "@tabler/icons-react"

export default function TaskListComplete(){
    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#17afff'}>
                    <IconProgressCheck color="#17afff" size={20}/>
                </TaskIconWrapper>
                <h1>Completed</h1>
            </TaskListWrapper>
        </TaskWrapper>
    )
}