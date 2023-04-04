import MainLayout from "@/components/MainLayout";
import SidebarLeft from "@/components/desktop/SidebarLeft";
import SidebarRight from "@/components/desktop/SidebarRight";

export default function Board() {
    return (
        <MainLayout>
            <div style={{ display: "flex" }}>
                <SidebarLeft></SidebarLeft>
                <div style={{ width: "70%", background: "#ffea00", color: "#000", display: "flex", height: "40px", alignItems: "center"}}>
                    <div style={{ width: "30%"}}>
                        <div><img src="/pfp.png" style={{height: "30px"}}/><span>DSC Live Chat</span></div>
                        <div><img src="/avatar.png" style={{height: "30px"}}/></div>
                    </div>
                    <div style={{ width: "70%"}}>
                        <img src="/pfp.png" style={{height: "30px"}}/> 
                        <span>DSC Live Chat</span>
                        <div>sss</div>
                    </div>
                </div>
                <SidebarRight></SidebarRight>
            </div>
        </MainLayout>
    )
}