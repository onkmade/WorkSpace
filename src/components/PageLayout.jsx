import Sidebar from "./layout/sidebar/1_Sidebar";
import Main from "./layout/main/1_main";

export default function PageLayout(){
    return(
        <div className="flex bg-stone-900 min-h-screen text-stone-50">
            <Sidebar />
            <Main />
        </div>
    );
}