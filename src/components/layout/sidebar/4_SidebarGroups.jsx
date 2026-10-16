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
                        href="#"
                        className={({ isActive }) =>
                            `bg-stone-700/20 p-1 rounded-sm flex items-center gap-2 text-stone-300
                            ${
                                isActive ? 'border border-stone-600' : ''
                            }`
                        }
                    >
                        <Icon size={18} stroke = {2} className='size-5'/>
                        <span>{item.label}</span>
                    </NavLink>
                )
            })}
        </nav>
    )
}