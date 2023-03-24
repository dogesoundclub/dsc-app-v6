// import React from "react";
import DesktopNav from "./desktop/DesktopNav";

// interface MainLayoutProps {
//   children: React.ReactNode;
// }

// const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
//   return (
//     <>
//       <DesktopNav />
//       {children}
//     </>
//   );
// };

// export default MainLayout;
type LayoutProps = {
  user?: any
  loading?: boolean
  children: React.ReactNode
}
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <DesktopNav />
      {children}
    </>
  );
};
export default MainLayout;