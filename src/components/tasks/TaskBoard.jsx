import { Button } from "../ui/Button"
import { ModalContext } from "@/context/ModalContext"
import { useContext } from "react"

export default function TaskBoard(){
    const { isModalOpen, setIsModalOpen} = useContext(ModalContext);
    return(
        <section className="p-2 rounded-lg">
            <Button variant={'cta'} onClick={() => setIsModalOpen(!isModalOpen)}>Add</Button>
        </section>
    )
}