import DesktopNav from "@/components/desktop/DesktopNav";
import SidebarLeft from "@/components/desktop/SidebarLeft";
import SidebarRight from "@/components/desktop/SidebarRight";

type LayoutProps = {
  children: React.ReactNode
}

export default function DesktopLayout({ children }: LayoutProps){
  return (
    <>
      <DesktopNav />
      <div style={{ display: "flex" }}>
        <SidebarLeft></SidebarLeft>
          <div style={{ flexBasis: "70%", background: "#fff", color: "#000", display: "flex", textAlign: "left" }}>
            {children}
          </div>
        <SidebarRight></SidebarRight>
      </div>
    </>
  );
}