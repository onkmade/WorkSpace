import TaskBoard from "./TaskBoard";
import TaskList from "./TaskList";
import TaskHeader from "./TaskHeader";

export default function TaskSection(){
    return(
        <div className="flex flex-col gap-2 mt-8">
            <TaskHeader />
            <TaskBoard />
            <TaskList />
        </div>
    );
}