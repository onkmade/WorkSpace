import { IconChevronsLeft } from '@tabler/icons-react';

export function SidebarHeader(){
    return(
        <div className='flex bg-stone-700/20 rounded-lg mb-2 gap-2 p-2 items-center'>
            <span>
                <img 
                    src="https://i.pinimg.com/1200x/a3/6c/c3/a36cc331c87495fbba63bb2d62d12bb2.jpg" 
                    alt="Logo"
                    className='size-11 rounded-md object-cover'
                />
            </span>
            <SidebarProfile />
        </div>
    )
}


// ==============================================
//           SIDEBAR PROFILE COMPONENT
// ==============================================

function SidebarProfile(){
    return (
        <p className='grid'>
            <span>Baka</span>
            <span className='text-sm text-stone-400'>Workspace</span>
        </p>
    )
}