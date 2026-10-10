import { useState } from "react";
import Button from "./Button";

export function MainContentArea({children}){
    return(
        <div className="flex min-h-svh bg-stone-900 text-stone-100">
            {children}
        </div>
    )
}

export function MainContent(){
    return(
        <main className="flex-1 p-1">
            <MainHeader />
            <MainArea />
        </main>
    );
}

function MainHeader(){
    return(
        <header>
            <h4>Hello</h4>
        </header>
    )
}

function MainArea(){
    return(
        <MainAreaSection/>
    );
}

function MainAreaSection(){

}

