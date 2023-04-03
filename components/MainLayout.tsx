import DesktopNav from "./desktop/DesktopNav";

type LayoutProps = {
  user?: any
  loading?: boolean
  children: React.ReactNode
}

export default function MainLayout({ children }: LayoutProps){
  return (
    <>
      <DesktopNav />
      {children}
    </>
  );
}