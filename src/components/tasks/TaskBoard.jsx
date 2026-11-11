import { Button } from "../ui/Button"
import { ModalContext } from "@/context/ModalContext"
import { TasksContext } from "@/context/TasksContext"
import { useContext } from "react"
import SearchInput from "../ui/SearchInput";

export default function TaskBoard(){
    const { isModalOpen, setIsModalOpen} = useContext(ModalContext);
    const { setEditingTask } = useContext(TasksContext);

    function openNewTaskForm() {
        setEditingTask(null);
        setIsModalOpen(!isModalOpen);
    }

    return(
        <section className="xs:flex grid gap-1.5 rounded-lg min-w-">
            <SearchInput />
            <Button 
                variant={'cta'} 
                onClick={openNewTaskForm}
            >    
                Add task
            </Button>
        </section>
    )
}