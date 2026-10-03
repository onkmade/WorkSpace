function sideBarProvide({children, defaultOpen = true, onOpenChange}){
    const SIDEBAR_WIDTH = '16rem';
    const SIDEBAR_MOBILE_WIDTH = '18rem';

    return(
        <div
            className={`
                    [--sidebar-width:${SIDEBAR_WIDTH}]
                    [--sidebar-width-mobile: ${SIDEBAR_MOBILE_WIDTH}]
                    flex min-h-screen w-full
            `}
        >
            {children}
        </div>
    )
}

function SidebarHeader({side = 'left'}){
    return(
        <header>
            <UserProfile 
                name={'New Project'}
                subName={'v.11'}
                src={'https://i.pinimg.com/736x/f8/9c/b3/f89cb3ed0ef04521f2493d4cb2a16a1d.jpg'}
            />
        </header>
    );
}


function SidebarContent(){

}

function SidebarGroup(){

}

function UserProfile({name, subName, src}){
    return(
        <div className="p-1 rounded-md border border-stone-700 my-1 flex justify-between items-center text-stone-400 select-none">
            <span className="flex items-center gap-2">
                <img src={src} className="size-10 aspect-square rounded-md overflow-hidden object-cen object-cover" alt="profile" />
                <div>
                    <h4 className="text-sm">{name}</h4>
                    <h5 className="text-[12px]">{subName}</h5>
                </div>
            </span>
        </div>
    )
}