import Sidebar from "./layout/sidebar/1_Sidebar";
import Main from "./layout/main/1_main";
import { useState } from "react";
import { mainItems } from "../constants/navItems";
import { SelectedContext } from "../context/BreadCrumb";
import { ModalContext } from "@/context/ModalContext";


export default function PageLayout(){
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [selectPage, setSelectPage] = useState(mainItems[0]);
    return(
        <div className="relative flex bg-stone-900 min-h-screen text-stone-50">
            <SelectedContext.Provider value={{selectPage, setSelectPage}}>
                <ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
                    <Sidebar />
                    <Main />
                </ModalContext.Provider>
            </SelectedContext.Provider>
        </div>
    );
}