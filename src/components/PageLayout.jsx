import Main from "./layout/main/Main";
import { useState } from "react";
import { ModalContext } from "@/context/ModalContext";
import { TaskProvider } from "@/context/TaskContext";
import Modal from "@/components/modal/AddTask";


export default function PageLayout(){
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    return(
        <div className="relative min-h-screen bg-stone-900 text-stone-50">
            <TaskProvider>
                <ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
                    <Main />
                    <Modal />
                </ModalContext.Provider>
            </TaskProvider>
        </div>
    );
}