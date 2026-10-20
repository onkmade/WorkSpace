import TaskListTodo from "./TaskListTodo"
import TaskListComplete from "./TaskListComplete"
import TaskListProgress from "./TaskListProgress"

export default function TaskList(){
    return(
        <div className="grid gap-1 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
            <TaskListTodo />
            <TaskListComplete />
            <TaskListProgress />
        </div>
    )
}