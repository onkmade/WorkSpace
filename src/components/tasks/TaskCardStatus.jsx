
import { twMerge } from "tailwind-merge";
import { SelectItems } from "@/constants/SelectOptions";
import { useState } from "react";
import SelectOptions from "../Select/SelectOptions";

export function TaskCardStatus({ task }) {
    const item = SelectItems.find(option => option.value === task.status);
    const [clicked, isClicked] = useState(false);
    if (!item) return null;

    const { icon: Icon, color } = item;
    return (
        <div>
            <button
                className={twMerge('bg-(--task-color)/20 p-1 rounded-sm cursor-pointer')}
                style={{'--task-color': color}}
            >
                {Icon && <Icon color={color} size={16} />}
            </button>
        </div>
    );
}
