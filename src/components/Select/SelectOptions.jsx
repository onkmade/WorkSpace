import { Select } from "./Select"
import { SelectTrigger } from "./SelectTrigger"
import { useState } from "react";
import { SelectOption } from "@/context/SelectOption";
import { SelectItems } from "@/constants/SelectOptions";
import { SelectPopUp } from "./SelectPopup";
import { AnimatePresence, motion } from "motion/react";
import { createContext } from "react";
export const IsOptionContext = createContext(null);

export default function SelectOptions(){
    const [ isOption, setIsOption] = useState(false);
    const [ option, setOption ] = useState('');
    const [ items, setItems ] = useState(SelectItems);
    const Icon = option.icon || null;
    const color = option.color || null;

    function handleOption(){
        setIsOption(!isOption);
    }

    return(
        <AnimatePresence>
            <Select>
                <IsOptionContext.Provider value={{isOption, setIsOption}}>
                    <SelectOption.Provider value={{option, setOption}}>
                        <SelectTrigger onClick={handleOption} >
                            {option 
                            ? (
                            <span className="flex items-center gap-1 p-1">
                                <Icon size={18} stroke={1.5} color={color}/>
                                <h5>{option.label}</h5>
                            </span>)
                            : 'Select'}
                        </SelectTrigger>
                        {isOption && <SelectPopUp items={items}/>}
                    </SelectOption.Provider>
                </IsOptionContext.Provider>
            </Select>
        </AnimatePresence>
    )
}