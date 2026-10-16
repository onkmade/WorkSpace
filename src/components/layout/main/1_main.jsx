import MainHeader from "./2_Header"
import { Outlet } from "react-router"

export default function Main(){
    return(
        <div className="p-2">
            <MainHeader />
            <Outlet />
        </div>
    )
}