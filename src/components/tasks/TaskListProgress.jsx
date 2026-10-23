import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { TaskWrapper } from "./TaskWrapper"
import { IconProgress } from "@tabler/icons-react"

export default function TaskListProgress(){
    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#ff7f08'}>
                    <IconProgress color="#ff7f08" size={20}/>
                </TaskIconWrapper>
                <h1>In-Progress</h1>
            </TaskListWrapper>
        </TaskWrapper>
    )
}