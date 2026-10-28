import { twMerge } from "tailwind-merge";
import { SelectItems } from "@/constants/SelectOptions";
import SelectOptions from "../Select/SelectOptions";
import { SelectOptionDisplay } from "../Select/SelectOptionDisplay";
import { useState } from "react";

export function TaskCardStatus({ task }) {
    const item = SelectItems.find(
        (option) => option.value === task.status
    );

    const [option, setOption] = useState(item ?? null);
    if (!item) return null;

    const { icon: Icon, color } = item;
    const fallback = Icon
        ? <Icon size={18} color={color} />
        : null;

    return (
        <SelectOptions option={option} setOption={setOption}>
            <SelectOptionDisplay
                option={option}
                fallback={fallback}
                iconOnly
            />
        </SelectOptions>
    );
}