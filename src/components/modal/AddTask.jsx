import { useContext, useState } from "react"
import { LineSeperator } from "../ui/LineSeparator";
import { Button } from "../ui/Button"
import { ModalContext } from "@/context/ModalContext";
import { TasksContext } from "@/context/TaskContext";
import FormField from "../ui/FormField";
import StatusToggle from "./StatusToggle";
import { motion, AnimatePresence } from "motion/react";

export default function Modal(){
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext);
    const { tasks, setTasks} = useContext(TasksContext);

    let taskLength = tasks.length;

    // Three states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ status, setStatus] = useState();
    const [ added, setAdded] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setAdded(true);

        await new Promise((r) => setTimeout(r,1000));
        setTasks(prev => [...prev, { id: taskLength + 1, title, description, status}]);
        setTitle('');
        setDescription('');
        setIsModalOpen(false);
        setStatus(false);
        setAdded(false);
    }

    function handleClose(e){
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    }
    
    return(
        <AnimatePresence>
            {isModalOpen && (
                    <motion.div
                        key={'backdrop'}
                        initial={{opacity:0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.25}}
                        onClick={handleClose}
                        className={`bg-black/50 fixed inset-0 grid place-items-center`}
            
                    >
                        <motion.form
                            onSubmit={handleSubmit}
                            onClick={(e) => e.stopPropagation()}
                            initial={{opacity: 0, y:12, scale: 0 }}
                            animate={{opacity: 1, y:0, scale: 1 }}
                            exit={{opacity: 0, y: -12, scale: 0}}
                            transition={{duration: 0.35, ease: 'easeInOut'}}
                            className="bg-stone-800 rounded-md w-full max-w-md lg:max-w-xl"
                        >
                            <h1 className="text-2xl font-semibold p-2">Add Task</h1>
                            <LineSeperator />
            
                            <FormField element={'input'} label={'Title:'} id={'title'} onChange={setTitle} value={title} placeholder={'Title'} />
                            <FormField element={'textarea'} label={'Description'} id={'description'} onChange={setDescription} value={description} placeholder={'Description'}/>
            
                            <div className="flex items-center justify-between gap-2 p-2">
                                <StatusToggle value={status} onChange={setStatus}/>
                                
                                <div className="space-x-1">
                                    <Button type='button' onClick={handleClose} variant={'secondary'}>Close</Button>
                                    <Button type="submit" variant={'secondary'}>
                                        {
                                            added ? 'Adding' : 'Add Task'
                                        }
                                    </Button>
                                </div>
                            </div>
                        </motion.form>
                    </motion.div>
            )}
        </AnimatePresence>
    )
}