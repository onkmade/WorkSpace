import TaskBoard from "./TaskBoard";
import TaskList from "./TaskList";
import TaskHeader from "./TaskHeader";
import { Animated } from "../ui/AnimatedComponent";

export default function TaskSection(){
    return(
        <div className="flex flex-col gap-2 mt-8">
            <TaskHeader />
            <TaskBoard />
            <TaskList />
        </div>
    );
}