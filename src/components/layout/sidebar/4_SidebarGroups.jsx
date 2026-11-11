import { useContext } from "react"
import { SelectedContext } from "../../../context/BreadCrumb"
import { NavLink } from "react-router";

export function SidebarGroups({items}){
    const {setSelectPage} = useContext(SelectedContext);
    return(
        <nav className="grid gap-1">
            {items.map(item => {
                const Icon = item.icon
                return (
                    <NavLink
                        key={item.label}
                        to={item.to}
                        end={item.to === '/'}
                        onClick={() => setSelectPage(item)}
                        className={({ isActive }) =>
                            `${
                                isActive ? 'border border-stone-700/50 text-stone-100' : 'border border-transparent text-stone-400'
                            } bg-stone-700/20 p-1  rounded-sm flex items-center gap-2 `
                        }
                    >
                        <Icon size={18} stroke = {1.5} className='size-5'/>
                        <span>{item.label}</span>
                    </NavLink>
                )
            })}
        </nav>
    )
}