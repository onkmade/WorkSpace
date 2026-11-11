import TaskListTodo from "./TaskListTodo"
import TaskListComplete from "./TaskListComplete"
import TaskListProgress from "./TaskListProgress"

export default function TaskList(){
    return(
        <div className="grid items-start gap-3 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
            <TaskListTodo />
            <TaskListProgress />
            <TaskListComplete />
        </div>
    )
}