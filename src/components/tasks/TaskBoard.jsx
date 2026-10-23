import { Button } from "../ui/Button"
import { ModalContext } from "@/context/ModalContext"
import { useContext } from "react"
import SearchInput from "../ui/SearchInput";

export default function TaskBoard(){
    const { isModalOpen, setIsModalOpen} = useContext(ModalContext);
    return(
        <section className="xs:flex grid gap-1.5 rounded-lg min-w-">
            <SearchInput />
            <Button 
                variant={'cta'} 
                onClick={() => setIsModalOpen(!isModalOpen)}
            >    
                    Add
                </Button>
        </section>
    )
}