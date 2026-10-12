import { useState } from "react";
import { MainContentArea, MainContent } from "./MainContent";
import SideBar from "./SideBar";


export default function PageLayout(){
    const [selected, setSelected] = useState('DashBoard');
    const [todo, setTodo] = useState([
        {id: 1, title: 'baka no kupe', description: "it's a non-chalant anime I made in mah mind", status: 'incomplete'},
    ]);

    return(
        <MainContentArea>
            <SideBar onPageSelect={setSelected}/>
            <MainContent onTask={setTodo} selected={selected} tasks={todo}/>
        </MainContentArea>
    );
}