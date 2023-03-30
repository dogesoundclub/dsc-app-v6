import DesktopNav from "./desktop/DesktopNav";

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