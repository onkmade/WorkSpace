import TaskBoard from "./TaskBoard";
import TaskList from "./TaskList";

export default function TaskSection(){
    return(
        <div className="space-y-2">
            <TaskBoard />
            <TaskList />
        </div>
    );
}