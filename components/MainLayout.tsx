import React from "react";
import DesktopNav from "./desktop/DesktopNav";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <DesktopNav />
      {children}
    </>
  );
};

export default MainLayout;