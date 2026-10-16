import { Button } from "@/components/ui/Button"
import TaskBoard from "@/components/tasks/TaskBoard"
import { initialTasks } from "@/constants/tasks"
import { useState } from "react"


export default function Dashboard(){
    const [tasks, setTasks] = useState(initialTasks);
    return(
        <div>
            <Button 
                variant={'primary'}
            >
                Add
            </Button>

            <TaskBoard task={tasks} />
        </div>
    )
}