const onLabel = 'bg-stone-800 flex rounded-md items-center w-full max-w-md transition-colors duration-300 outline-transparent outline-2 outline-offset-2 focus-within:outline-stone-600'
const onInput = 'outline-none w-full p-2'
import { IconListSearch } from '@tabler/icons-react';
import { useContext } from "react";
import { TasksContext } from "@/context/TasksContext";

export default function SearchInput(){
    const { searchQuery, setSearchQuery } = useContext(TasksContext);

    return(
        <label htmlFor='search' className={`${onLabel}`}>
            <IconListSearch className='ml-2' stroke={1.5} />
            <input
                type="search"
                id='search'
                placeholder="Search tasks"
                className={`${onInput}`}
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
            />
        </label>
    )
}