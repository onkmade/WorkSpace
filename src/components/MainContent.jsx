import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export function MainContentArea({children}){
    return(
        <div className="flex relative min-h-svh bg-stone-900 text-stone-100">
            {children}
        </div>
    )
}

export function MainContent({selected}){
    return(
        <main className="flex-1 p-1">
            <MainHeader selected={selected}/>
            <MainArea>
                <MainAreaSection />
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
        <div>
            <Button onClick={() => setIsClose(!isOpen)}>Add</Button>
            <Modal isOpen={isOpen} onHandleClose={handleClose}/>
            {children}
        </div>
    );
}

function MainAreaSection(){
    return(
        <section 
            className="py-1"
        >
            
        </section>
    );
}