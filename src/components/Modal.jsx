import { useState } from "react";
import Button from "./Button";
import { IconX } from '@tabler/icons-react';

export default function Modal({ onHandleClose, isOpen, onGrab, todo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const index = todo.length;    

    console.log(todo);

    function handleSubmit(e){
        e.preventDefault();
        if(!title.trim()) return;
        onGrab([...todo], {id: index + 1, title, description, status: 'incomplete'});
        setTitle('');
        setDescription('');
    }
    
    return(
        <div 
            onClick={onHandleClose}
            className={`absolute inset-0 bg-black/50 grid place-content-center ${isOpen ? 'block' : 'hidden'} z-40`}
        >
            <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit}
                className="bg-stone-800 max-w-md w-100 h-fit rounded-xl space-y-2 border border-stone-500 p-4 z-50"
            >
                <div className="flex justify-between items-center">
                    <h1 className="p-2 font-semibold text-lg text-white">Add Your Task</h1>
                    <button 
                        type="button"
                        onClick={onHandleClose}
                        className="text-red-400 size-7 bg-stone-700 grid place-content-center mx-2 rounded-md hover:text-red-500 cursor-pointer"
                    >
                        <IconX stroke={2} />
                    </button>
                </div>
                
                <div className="w-full h-px bg-stone-500/50 my-2"></div>

                <div className="space-y-4 flex flex-col">
                    <label htmlFor="title">
                        <span className="text-stone-400 text-sm">Title:</span>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            id="title"
                            placeholder="Enter the Title"
                            className="bg-stone-700 mt-1 px-2 py-1.5 rounded-sm w-full outline-transparent transition duration-150 focus-within:outline-stone-600 text-white"
                        />
                    </label>
                    
                    <label htmlFor="description">
                        <span className="text-stone-400 text-sm">Description:</span>
                        <input 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text" 
                            id="description" 
                            placeholder="Enter the Description"
                            className="bg-stone-700 mt-1 px-2 py-1.5 rounded-sm w-full outline-transparent transition duration-150 focus-within:outline-stone-600 text-white"
                        />
                    </label>
                    
                    <span className="flex items-center justify-end pt-2">
                        <Button
                            type="submit" 
                            className="bg-stone-700 text-white px-4 py-2 rounded"
                            >
                                Add Task
                        </Button>
                    </span>
                </div>
            </form>
        </div>
    );
}