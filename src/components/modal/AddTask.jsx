import { useContext } from "react"
import { Button } from "../ui/Button"
import { ModalContext } from "@/context/ModalContext";

export default function Modal(){
    const {isModalOpen, setIsModalOpen} = useContext(ModalContext);
    
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
                            id="title"
                            type="text" 
                            placeholder="Enter Title" 
                            className="bg-stone-700 p-2 outline-transparent rounded-sm focus-within:outline-stone-600 border-none"
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
                            id="description"
                            type="text" 
                            placeholder="Enter Title" 
                            className="bg-stone-700 p-2 outline-transparent rounded-sm focus-within:outline-stone-600 border-none"
                        />
                    </label>
                </div>
                <div className="flex items-center justify-end gap-2 p-2">
                    <Button type="submit" variant={'secondary'}>Add Task</Button>
                    <Button onClick={handleClose} variant={'secondary'}>Close</Button>
                </div>
            </form>
        </div>
    )
}