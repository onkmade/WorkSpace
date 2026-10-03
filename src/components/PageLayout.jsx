import { SidebarIcon } from "@phosphor-icons/react";
import { SideBar } from "./SideBar";

export default function PageLayout({children}){
    return(
        <div className="min-h-svh bg-stone-900 text-stone-50 flex">
            <Sidebar />
            <main className='flex-1 p-2'>
                <Header/>
                {children}
                <Footer/>
            </main>
        </div>
    )
}

function Sidebar(){
    return(
        <aside className="bg-stone-800 min-w-60 p-1">

            <nav>

            </nav>
            <footer></footer>
        </aside>
    )
}

function Header(){
    return(
        <header>
            <nav></nav>
        </header>
    )
}


function Footer(){
    
}