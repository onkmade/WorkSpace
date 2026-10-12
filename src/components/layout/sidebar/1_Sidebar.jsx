import { SidebarHeader } from "./2_SidebarHeader"
import { SidebarGroups } from "./4_SidebarGroups"
import { SidebarContent } from "./3_SidebarContent"
import {
    IconHome,
    IconLayoutList,
    IconCheckbox
} from '@tabler/icons-react'

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

const mainItems = [
    {label: 'DashBoard', icon: IconHome},
    {label: 'Projects', icon: IconLayoutList},
    {label: 'Tasks', icon: IconCheckbox }
];