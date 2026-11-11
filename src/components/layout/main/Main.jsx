import { Outlet } from "react-router"

export default function Main(){
    return(
        <div className="p-2 flex-1">
            <Outlet />
        </div>
    )
}