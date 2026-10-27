import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { TaskWrapper } from "./TaskWrapper"
import { IconProgress } from "@tabler/icons-react"
import { TaskCardContainer } from "./TaskCardContainer"
import { TasksContext } from "@/context/TaskContext"
import { useContext } from "react"
import TaskCard from "./TaskCard"

export default function TaskListProgress(){
    const { tasks } = useContext(TasksContext);

    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#ff7f08'}>
                    <IconProgress color="#ff7f08" size={20}/>
                </TaskIconWrapper>
                <h1>In-Progress</h1>
            </TaskListWrapper>
                <TaskCardContainer>
                    {
                        tasks.filter(item => item.status === 'inprogress').map(item => <TaskCard task={item}/> )
                    }
                </TaskCardContainer>
        </TaskWrapper>
    )
}