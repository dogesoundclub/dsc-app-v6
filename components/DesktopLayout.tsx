import DesktopNav from "./desktop/DesktopNav";

type LayoutProps = {
  user?: any
  loading?: boolean
  children: React.ReactNode
}

export default function DesktopLayout({ children }: LayoutProps){
  return (
    <>
      <DesktopNav />
      {children}
    </>
  );
}