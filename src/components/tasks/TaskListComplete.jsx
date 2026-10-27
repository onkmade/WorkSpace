import TaskListWrapper from "./TaskListWrapper"
import { TaskIconWrapper } from "./TaskIconWrapper"
import { TaskWrapper } from "./TaskWrapper"
import { IconProgressCheck } from "@tabler/icons-react"
import { TaskCardContainer } from "./TaskCardContainer"
import { TasksContext } from "@/context/TaskContext"
import { useContext } from "react"
import TaskCard from "./TaskCard"

export default function TaskListComplete(){
    const { tasks } = useContext(TasksContext);
    return(
        <TaskWrapper>
            <TaskListWrapper>
                <TaskIconWrapper color={'#17afff'}>
                    <IconProgressCheck color="#17afff" size={20}/>
                </TaskIconWrapper>
                <h1>Completed</h1>
            </TaskListWrapper>
                <TaskCardContainer>
                    {
                        tasks.filter(item => item.status === 'completed').map(item => <TaskCard task={item}/> )
                    }
                </TaskCardContainer>
        </TaskWrapper>
    )
}