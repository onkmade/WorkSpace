import { Button } from "@/components/ui/Button"
import { TaskProvider } from "@/context/TaskContext"
import TaskSection from "@/components/tasks/TaskSection"
import Modal from "@/components/modal/AddTask"
import { ModalContext } from "@/context/ModalContext"
import { useContext } from "react"

export default function Dashboard(){
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    return(
        <div>
            <Button
                onClick={(e) => setIsModalOpen(!isModalOpen)}
                variant={'primary'}
            >
                Add
            </Button>
            
            <TaskProvider>
                <TaskSection />
                <Modal />
            </TaskProvider>
        </div>
    )
}