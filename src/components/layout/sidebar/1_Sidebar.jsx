import { SidebarHeader } from "./2_SidebarHeader"
import { SidebarGroups } from "./4_SidebarGroups"
import { SidebarContent } from "./3_SidebarContent"
import { mainItems } from "../../../constants/navItems"

export default function Sidebar(){
    return(
        <aside className="hidden md:block w-64 bg-stone-800 shrink-0 p-1">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroups items={mainItems} />
            </SidebarContent>
        </aside>
    )
}