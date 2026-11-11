import { SelectItems } from "@/constants/SelectOptions";
import SelectOptions from "../Select/SelectOptions";
import { SelectOptionDisplay } from "../Select/SelectOptionDisplay";
import { TasksContext } from "@/context/TasksContext";
import { useContext } from "react";

export function TaskCardStatus({ task }) {
    const { setTasks } = useContext(TasksContext);

    const option = SelectItems.find(
        (item) => item.value === task.status
    );

    if (!option) return null;

    function setOption(nextOption) {
        setTasks((currentTasks) =>
            currentTasks.map((currentTask) =>
                currentTask.id === task.id
                    ? { ...currentTask, status: nextOption.value }
                    : currentTask
            )
        );
    }

    const { icon: Icon, color } = option;
    const fallback = Icon ? <Icon size={18} color={color} /> : null;

    return (
        <SelectOptions
            option={option}
            setOption={setOption}
            triggerClassName="flex size-7 shrink-0 items-center justify-center p-0"
        >
            <SelectOptionDisplay
                option={option}
                fallback={fallback}
                iconOnly
            />
        </SelectOptions>
    );
}