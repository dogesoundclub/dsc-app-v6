import MainLayout from "../components/MainLayout";
import SidebarLeft from "../components/desktop/SidebarLeft";
import SidebarRight from "../components/desktop/SidebarRight";
export default function Page404() {
    return (
        <MainLayout>
            <div style={{ display: "flex" }}>
                <SidebarLeft></SidebarLeft>
                <div style={{ flexBasis: "70%", background: "#fff", color: "#000", textAlign: "center", height: "90vh"}}>
                    <h1>404 Error - Page Not Found</h1>
                </div>
                <SidebarRight></SidebarRight>
            </div>
        </MainLayout>
    );
  };
