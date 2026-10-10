import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Tasks from "./Card";

export function MainContentArea({children}){
    return(
        <div className="flex relative min-h-svh bg-stone-900 text-stone-100">
            {children}
        </div>
    )
}

export function MainContent({selected, tasks}){
    return(
        <main className="flex-1 p-1">
            <MainHeader selected={selected}/>
            <MainArea>
                <MainAreaSection todotask={tasks}/>
            </MainArea>
        </main>
    );
}

function MainHeader({selected}){
    return(
        <header className="py-2">
            <span>{selected}</span>
            <li className="list-none w-full h-px bg-stone-500/50 my-2"></li>
        </header>
    )
}

function MainArea({children}){
    const [isOpen, setIsClose] = useState(false);

    function handleClose(e){
        e.preventDefault();
        setIsClose(!isOpen);
    }

    return(
        <div className="">
            <Button onClick={() => setIsClose(!isOpen)}>Add</Button>
            <Modal isOpen={isOpen} onHandleClose={handleClose}/>
            {children}
        </div>
    );
}

function MainAreaSection({todotask}){
    return(
        <section 
            className="py-1"
        >
            <MainAreaArticle tasks={todotask}/>
        </section>
    );
}

function MainAreaArticle({tasks}){
    return(
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 grid-cols-[repeat(auto-fill, minmax(220px, 1fr))]"
        >
            <Tasks tasks={tasks}/>
        </div>
    );
}