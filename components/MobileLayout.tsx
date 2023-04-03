import MobileNav from "./mobile/MobileNav";

type LayoutProps = {
  user?: any
  loading?: boolean
  children: React.ReactNode
}

export default function MobileLayout({ children }: LayoutProps){
  return (
    <>
      <MobileNav />
      {children}
    </>
  );
}