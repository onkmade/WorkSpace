import { useContext, useState } from "react";
import { UserContext, DescriptionContext } from "./ComponentA";

export default function ComponentD(){
    const {user, setUser} = useContext(UserContext);
    const {para, setPara} = useContext(DescriptionContext)
    const [input, setInput] = useState('');
    const [title, setTitle] = useState('')
    return(
        <div className="box w-100 h-50">
            <h1>ComponentD</h1>
            <input 
                onChange={(e) => setInput(e.target.value)}
                type="text"  
                placeholder="Change Name"
                className="my-1 mx-1 bg-stone-700 outline-none border-none rounded-sm p-2"
            />
            <button onClick={() => setUser(input)}>Click Me</button>
            <input 
                onChange={(e) => setTitle(e.target.value)}
                type="text"  
                placeholder="Text para"
                className="my-1 mx-1 bg-stone-700 outline-none border-none rounded-sm p-2"
            />
            <button onClick={() => setPara(title)}>Click for Para</button>
        </div>
    );
}