import { MainContentArea, MainContent } from "./MainContent";
import SideBar from "./SideBar";

export default function PageLayout(){
    return(
        <MainContentArea>
            <SideBar />
            <MainContent />
        </MainContentArea>
    );
}