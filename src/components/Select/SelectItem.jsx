import { SelectOption } from "@/context/SelectOption";
import { useContext } from "react";
import { IsOptionContext } from "./SelectOptions";

export function SelectItem({item}){
    const {setOption} = useContext(SelectOption);
    const {setIsOption} = useContext(IsOptionContext);
    const Icon = item.icon;
    const color = item.color;

    const handleClick = () => {
        setOption(item);
        setIsOption(false);
    } 
    return(
        <li
            key={`${item.id}, ${item.value}`}
            className="flex gap-1 items-center p-1 cursor-pointer hover:bg-(--task-color)/20 rounded-sm select-none"
            style={{'--task-color': color}}
            onClick={handleClick}
        >
            <Icon size={18} stroke={1.5} color={color}/>
            <h1 className="text-sm">{item.label}</h1>
        </li>
    )
}