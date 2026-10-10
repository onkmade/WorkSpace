import { useState } from "react";
import Button from "./Button";
import { IconX } from '@tabler/icons-react';

export default function Modal({onHandleClose, isOpen}){
    return(
        <div 
            onClick={onHandleClose}
            className={`absolute inset-0 bg-black/50 grid place-content-center ${isOpen ? 'block' : 'hidden'}`}
        >
            <form
            onClick={(e) => e.stopPropagation()}
                className="bg-stone-800 max-w-100 w-full min-w-100 h-fit rounded-xl space-y-2 border border-stone-500"
            >
                <div className="flex justify-between items-center">
                    <h1 className="p-2">Add Your Task</h1>
                    <button className="text-red-400 size-7 bg-stone-700 grid place-content-center mx-2 rounded-md hover:text-red-500 cursor-pointer" >
                        <IconX
                            stroke={2}
                            onClick={onHandleClose}
                        />
                    </button>
                </div>
                <li className="list-none w-full h-px bg-stone-500/50 my-2"></li>

                <div className="space-y-2 flex flex-col p-2">
                    <label htmlFor="title">
                        <span className="text-stone-400/50 text-[16px]">
                            Title:
                        </span> <br />
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter the Title"
                            className="bg-stone-700 px-2 py-1.5 rounded-sm w-full outline-transparent transition duration-150 focus-within:outline-stone-600"
                        />
                    </label>
                    <label htmlFor="description">
                        <span className="text-stone-400/50 text-[16px]">
                            Description:
                        </span> <br />
                        <input 
                            type="text" 
                            id="description" 
                            placeholder="Enter the Description"
                            className="bg-stone-700 px-2 py-1.5 rounded-sm w-full outline-transparent transition duration-150 focus-within:outline-stone-600"
                        />
                    </label>
                    <span className="flex items-center justify-end">
                        <Button className={'bg-stone-700'}>Add Task</Button>
                    </span>
                </div>
            </form>
        </div>
    );
}