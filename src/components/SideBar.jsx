import { useState } from "react";
import Button from "./Button";

export default function SideBar(){
    return(
        <aside className="bg-stone-800 w-full max-w-[16rem] min-w-56 p-1">
            <SideBarContent/>
        </aside>
    )
}

function SideBarContent(){
    return(
        <h1>Something better</h1>
    )
}