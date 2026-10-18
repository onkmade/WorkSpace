import { TaskProvider } from "@/context/TaskContext"
import TaskSection from "@/components/tasks/TaskSection"
import Modal from "@/components/modal/AddTask"
import { ModalContext } from "@/context/ModalContext"
import { useContext } from "react"

export default function Dashboard(){
    return(
        <div>
            <TaskProvider>
                <TaskSection />
                <Modal />
            </TaskProvider>
        </div>
    );
}