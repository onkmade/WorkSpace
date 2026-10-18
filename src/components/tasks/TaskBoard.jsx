import TaskList from "./TaskList"
import { Button } from "../ui/Button"
import { ModalContext } from "@/context/ModalContext"
import { useContext } from "react"

export default function TaskBoard(){
    const { isModalOpen, setIsModalOpen} = useContext(ModalContext);
    return(
        <section className="bg-stone-800 p-2 rounded-lg">
            <Button variant={'primary'} onClick={() => setIsModalOpen(!isModalOpen)}>Add</Button>
        </section>
    )
}