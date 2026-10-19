import { useContext } from "react"
import { SelectedContext } from "../../../context/BreadCrumb"

export default function MainHeader(){
    const {selectPage} = useContext(SelectedContext);
    const Icon = selectPage.icon
    return(
        <h1 className="flex items-center gap-2 opacity-55 font-thin">
            <Icon size={18} stroke={1}/>
            <span>
                {selectPage.label}
            </span>
        </h1>
    )
}