import DesktopNav from "./desktop/DesktopNav";
import WidgetBotCrate from "@/components/widget/discord";

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
      <WidgetBotCrate server="872113947166249041" channel="1056835060113866752" />
    </>
  );
}