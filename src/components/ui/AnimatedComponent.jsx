import { motion } from "motion/react"

export function Animated(){
    return(
        <motion.button
            initial={{ scale: 0}}
            animate={{ scale: 1}}

        >
            Add
        </motion.button>
    )
}