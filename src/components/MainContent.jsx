import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Tasks from "./Card";
import ComponentA from "../practice/ComponentA";
import ComponentB from "../practice/ComponentB";
import ComponentC from "../practice/ComponentC";
import ComponentD from "../practice/ComponentD";

export function MainContentArea({children}){
    return(
        <div className="flex relative min-h-svh bg-stone-900 text-stone-100">
            {children}
        </div>
    )
}

export function MainContent({selected, tasks, onTask}){
    return(
        <main className="flex-1 p-1">
            <MainHeader selected={selected}/>
            <MainArea todo={tasks} onTask={onTask}>
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

function MainArea({children, onTask, todo}){
    const [isOpen, setIsClose] = useState(false);

    function handleClose(e){
        e.preventDefault();
        setIsClose(!isOpen);
    }

    return(
        <div className="">
            <Button onClick={() => setIsClose(!isOpen)}>Add</Button>
            <Modal todo={todo} onGrab={onTask} isOpen={isOpen} onHandleClose={handleClose}/>
            {children}
        </div>
    );
}

function MainAreaSection({todotask}){
    return(
        <section 
            className="py-1 space-y-2"
        >
            <MainAreaArticle tasks={todotask}/>
            <div className="flex gap-1">
                <ComponentA />
            </div>
        </section>
    );
}

function MainAreaArticle({tasks, onTask}){
    return(
        <div
            className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,275px),1fr))] items-start gap-1.5"
        >
            <Tasks tasks={tasks}/>
        </div>
    );
}