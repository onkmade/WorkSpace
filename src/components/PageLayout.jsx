import Sidebar from "./layout/sidebar/1_Sidebar";
import Main from "./layout/main/1_main";

export default function PageLayout(){
    return(
        <div>
            <Sidebar />
            <Main />
        </div>
    );
}