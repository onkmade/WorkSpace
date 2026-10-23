const onLabel = 'bg-stone-800 flex rounded-md items-center w-full max-w-md transition-colors duration-300 outline-transparent outline-2 outline-offset-2 focus-within:outline-stone-600'
const onInput = 'outline-none w-full p-2'
import { IconListSearch } from '@tabler/icons-react';

export default function SearchInput(){
    return(
        <label htmlFor='search' className={`${onLabel}`}>
            <IconListSearch className='ml-2' stroke={1.5} />
            <input type="search" id='search' placeholder="Search Task" className={`${onInput}`} />
        </label>
    )
}