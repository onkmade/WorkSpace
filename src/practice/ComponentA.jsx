import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
export const DescriptionContext = createContext('');

export default function ComponentA(){
    const [user, setUser ] = useState('BakaCode');
    const [para, setPara ] = useState('');

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <p>hello, {user}</p>
            <p>{para}</p>
            <UserContext.Provider value={{user,setUser}}>
                <DescriptionContext.Provider value={{para,setPara}}>
                    <ComponentB />
                </DescriptionContext.Provider>
            </UserContext.Provider>
        </div>
    );
}