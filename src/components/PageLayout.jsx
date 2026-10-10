import { useState } from "react";
import { MainContentArea, MainContent } from "./MainContent";
import SideBar from "./SideBar";

export default function PageLayout(){
    const [selected, setSelected] = useState('DashBoard');
    const [todo, setTodo] = useState([
        {id: 1, title: 'baka no kupe', description: "it's a non-chalant anime I made in mah mind", status: 'incomplete'},
        {id: 2, title: 'Naruto', description: 'Soemthing I love to do', status: 'complete'},
        {id: 2, title: 'Another World', description: 'Story seems to be the saddest one', status: 'complete'},
        {id: 2, title: 'PokeMon', description: 'Finished Airing', status: 'incomplete'},
    ])

    return(
        <MainContentArea>
            <SideBar onPageSelect={setSelected}/>
            <MainContent selected={selected} tasks={todo}/>
        </MainContentArea>
    );
}