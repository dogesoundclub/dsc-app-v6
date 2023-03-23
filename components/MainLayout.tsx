import React from "react";
import DesktopNav from "./desktop/DesktopNav";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <DesktopNav />
      <div style={{ display: "flex" }}>
        <div style={{ flexBasis: "432px" }}>Left content</div>
        <div style={{ flexBasis: "1488px" }}>{children}</div>
        <div style={{ flexBasis: "382px" }}>Right content</div>
      </div>
    </div>
  );
};

export default MainLayout;