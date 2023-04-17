import MobileNav from "./mobile/MobileNav";
import WidgetBotCrate from "@/components/widget/discord";

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
      <WidgetBotCrate server="872113947166249041" channel="1056835060113866752" />
    </>
  );
}