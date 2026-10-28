import { Select } from "./Select"
import { SelectTrigger } from "./SelectTrigger"
import { useState, createContext } from "react";
import { SelectOption } from "@/context/SelectOption";
import { SelectItems } from "@/constants/SelectOptions";
import { SelectPopUp } from "./SelectPopup";
import { AnimatePresence } from "motion/react";

export const IsOptionContext = createContext(null);

export default function SelectOptions({ option, setOption, children}){
    const [isOption, setIsOption] = useState(false);
    const [items] = useState(SelectItems);

    function handleOption(){
        setIsOption(!isOption);
    }

    return(
        <Select>
            <IsOptionContext.Provider value={{isOption, setIsOption}}>
                <SelectOption.Provider value={{option, setOption}}>
                    <SelectTrigger option={option} onClick={handleOption}>
                        {/* Main Line which shows the thing */}
                        {children}
                    </SelectTrigger>
                    <AnimatePresence>
                        {isOption && <SelectPopUp items={items}/>}
                    </AnimatePresence>
                </SelectOption.Provider>
            </IsOptionContext.Provider>
        </Select>
    )
}