import { useContext } from "react"
import { SelectedContext } from "../../../context/BreadCrumb"

export function SidebarGroups({items}){
    const {setSelectPage} = useContext(SelectedContext);
    return(
        <nav className="grid gap-1">
            {items.map(item => {
                const Icon = item.icon
                return <a 
                    onClick={() => setSelectPage(item)}
                    href="#"
                    key={item.label}
                    className="bg-stone-700/50 p-1 rounded-sm flex items-center gap-2 text-stone-300"
                >
                    <Icon size={18} stroke = {2} className='size-5'/>
                    <span>{item.label}</span>
                </a>
            })}
        </nav>
    )
}