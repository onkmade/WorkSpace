import { Select } from "./Select"
import { SelectTrigger } from "./SelectTrigger"
import { useState } from "react";
import { SelectOption } from "@/context/SelectOption";
import { IsOptionContext } from "@/context/IsOption";
import { SelectItems } from "@/constants/SelectOptions";
import { SelectPopUp } from "./SelectPopup";
import { AnimatePresence } from "motion/react";

export default function SelectOptions({ option, setOption, children, triggerClassName }){
    const [isOption, setIsOption] = useState(false);
    const [items] = useState(SelectItems);

    function handleOption(){
        setIsOption(!isOption);
    }

    return(
        <Select>
            <IsOptionContext.Provider value={{isOption, setIsOption}}>
                <SelectOption.Provider value={{option, setOption}}>
                    <SelectTrigger
                        option={option}
                        onClick={handleOption}
                        className={triggerClassName}
                    >
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