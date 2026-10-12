import { useState } from "react";
import Button from "./Button";

export default function SideBar({onPageSelect}){
    return(
        <aside className="bg-stone-800 w-full max-w-[16rem] min-w-56 p-1">
            <SideBarContent onPageClick={onPageSelect}/>
        </aside>
    );
}

function SideBarContent({onPageClick}){    
    return(
        <nav>
            <li onClick={() => onPageClick('DashBoard')} >DashBoard</li>
            <li onClick={() => onPageClick('Tasks')} >Tasks</li>
            <li onClick={() => onPageClick('Projects')} >Projects</li>
        </nav>
    )
}