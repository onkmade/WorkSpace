import { SelectItem } from "./SelectItem"

export function SelectPopUp({items}){
    return(
        <nav className="bg-black/50 absolute left-0 top-0 grid place-content-center inset-0">
            <ul className="bg-stone-700/50 p-1 rounded-lg w-45">
                {items.map(item => <SelectItem key={item.id} item={item}/> )}
            </ul>
        </nav>
    )
}