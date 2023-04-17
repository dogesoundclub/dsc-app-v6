import MainLayout from "@/components/MainLayout";
import SidebarLeft from "@/components/desktop/SidebarLeft";
import SidebarRight from "@/components/desktop/SidebarRight";

export default function Board() {
    return (
        <MainLayout>
            <div style={{ display: "flex" }}>
                <SidebarLeft></SidebarLeft>
                <div style={{ width: "70%", border: "2px solid", borderColor: "#C1B564" }}>
                    <div style={{ width: "100%", background: "#ffea00", color: "#000", display: "flex", height: "40px", alignItems: "center" }}>
                        <div style={{ width: "30%" }}>
                            <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                                <img src="/pfp.png" style={{ height: "30px" }}/>
                                <span style={{ paddingLeft: "10px" }}>DSC Live Chat</span>
                            </div>
                        </div>
                        <div style={{ width: "70%" }}>
                            <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                                <img src="/pfp.png" style={{ height: "30px" }}/> 
                                <span style={{ paddingLeft: "10px" }}>DSC Live Chat</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "100vh", background: "#ffffff", color: "#000", display: "flex", alignItems: "center" }}>
                        <div style={{ width: "30%" }}>
                            <div style={{ width: "100%", textAlign: "center" }}>
                                <img src="/avatar.png" style={{ width: "50%" }}/>
                            </div>
                        </div>
                        <div style={{ width: "70%" }}></div>
                    </div>
                </div>
                <SidebarRight></SidebarRight>
            </div>
        </MainLayout>
    )
}