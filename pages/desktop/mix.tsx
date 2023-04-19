import MainLayout from "@/components/MainLayout";
import SidebarLeft from "@/components/desktop/SidebarLeft";
import SidebarRight from "@/components/desktop/SidebarRight";

export default function Faq() {
    return (
        <MainLayout>
            <div style={{ display: "flex" }}>
                <SidebarLeft></SidebarLeft>

                <SidebarRight></SidebarRight>
            </div>
        </MainLayout>
    )
}