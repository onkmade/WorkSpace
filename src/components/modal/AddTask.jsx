import { useContext, useState } from "react"
import { Button } from "../ui/Button"
import { ModalContext } from "@/context/ModalContext";
import { TasksContext } from "@/context/TaskContext";
import FormField from "../ui/FormField";
import StatusToggle from "./StatusToggle";

export default function Modal(){
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext);
    const { tasks, setTasks} = useContext(TasksContext);

    let taskLength = tasks.length;

    // Three states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ status, setStatus] = useState();

    function handleSubmit(e){
        e.preventDefault();
        setTasks(prev => [...prev, { id: taskLength + 1, title, description, status}]);
        setTitle('');
        setDescription('');
        setIsModalOpen(false);
        setStatus(false);
    }

    function handleClose(e){
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    }
    
    return(
        <div
            onClick={handleClose}
            className={`${isModalOpen ? 'block' : 'hidden'} bg-black/50 absolute inset-0 grid place-content-center`}
        >
            <form
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()}
                className="bg-stone-800 rounded-md w-md"
            >
                <h1 className="text-2xl font-semibold p-2">Add Task</h1>
                <li className="h-px w-full bg-stone-700/50 list-none"></li>

                <FormField element={'input'} label={'Title:'} id={'title'} onChange={setTitle} value={title} placeholder={'Title'} />
                <FormField element={'textarea'} label={'Description'} id={'description'} onChange={setDescription} value={description} placeholder={'Description'}/>

                <div className="flex items-center justify-between gap-2 p-2">
                    <StatusToggle value={status} onChange={setStatus}/>
                    
                    <div className="space-x-1">
                        <Button type="submit" variant={'secondary'}>Add TasK</Button>
                        <Button onClick={handleClose} variant={'secondary'}>Close</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}