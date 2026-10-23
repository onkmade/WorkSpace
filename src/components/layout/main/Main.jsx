import MainHeader from "./MainHeader"
import { Outlet } from "react-router"

export default function Main(){
    return(
        <div className="p-2 flex-1">
            <MainHeader />
            <Outlet />
        </div>
    )
}