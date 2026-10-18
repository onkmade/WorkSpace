import { useContext, useState } from "react"
import { Button } from "../ui/Button"
import { ModalContext } from "@/context/ModalContext";
import { TasksContext } from "@/context/TaskContext";

export default function Modal(){
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext);
    const { tasks, setTasks} = useContext(TasksContext);

    let taskLength = tasks.length;
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
                action=""
            >
                <h1 className="text-2xl font-semibold p-2">Add Task</h1>
                <li className="h-px w-full bg-stone-700/50 list-none"></li>
                <div
                    className="p-2"
                >
                    <label 
                        htmlFor="title"
                        className="grid gap-1"
                    >
                        <span>
                            Title:
                        </span>
                        <input 
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            id="title"
                            type="text" 
                            placeholder="Enter Title" 
                            className="bg-stone-700 p-2 outline-transparent rounded-sm focus-within:outline-stone-600 border-none"
                            required
                        />
                    </label>
                </div>
                <div
                    className="p-2"
                >
                    <label 
                        htmlFor="description"
                        className="grid gap-1"
                    >
                        <span>
                            Description:
                        </span>
                        <input
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            id="description"
                            type="text" 
                            placeholder="Enter Title" 
                            className="bg-stone-700 p-2 outline-transparent rounded-sm focus-within:outline-stone-600 border-none"
                            required
                        />
                    </label>
                </div>
                <div className="flex items-center justify-between gap-2 p-2">
                    <div className="space-x-2">
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                return setStatus(true);
                            }}
                            variant={'secondary'}
                            className={status ? 'outline-2 outline-offset-2 outline-stone-300' : ''}
                        >
                            Complete
                        </Button>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                return setStatus(false);
                            }}
                            variant={'secondary'}
                            className={!status ? 'outline-2 outline-offset-2 outline-stone-300' : ''}
                        >
                            Incomplete
                        </Button>
                    </div>
                    <div className="space-x-1">
                        <Button
                            type="submit" 
                            variant={'secondary'}
                        >
                            Add Task
                        </Button>
                        <Button 
                            onClick={handleClose} 
                            variant={'secondary'}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}