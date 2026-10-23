import { SelectItem } from "./SelectItem"
import { motion } from "motion/react"

export function SelectPopUp({items}){
    return(
        <motion.nav 
            className="bg-black/50 backdrop-blur-xs rounded-sm absolute left-0 top-0 grid place-content-center inset-0"
            initial={{opacity:0}}
            animate={{opacity: 1}}
            exit={{opacity:0}}
            transition={{duration: 0.35}}
        >
            <motion.ul 
                className="bg-stone-700/20 p-1 rounded-lg w-45 outline-2 outline-offset-2 outline-stone-700/50"
                initial={{opacity: 0, y: 0}}
                animate={{opacity: 1, y: 12}}
                exit={{opacity: 0, y: 0}}
                transition={{duration: 0.35}}
            >
                {items.map(item => <SelectItem key={item.id} item={item}/> )}
            </motion.ul>
        </motion.nav>
    )
}