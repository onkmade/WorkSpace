import { useContext } from "react"
import { SelectedContext } from "../../../context/BreadCrumb"

export default function MainHeader(){
    const {selectPage} = useContext(SelectedContext);
    return(
        <h1>{selectPage}</h1>
    )
}