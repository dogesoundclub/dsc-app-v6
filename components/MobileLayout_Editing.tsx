import Logo from "./mobile/Logo";
import Nav from "./mobile/Nav";
import Banner from "./mobile/Banner";
import WidgetBotCrate from "@/components/widget/discord";

type LayoutProps = {
    children: React.ReactNode
}

export default function MobileLayout({ children }: LayoutProps){
    return (
        <main style={{ background: "#D9D9D9" }}>
            <Logo />
            <Banner />
            <Nav />
            {children}
            <WidgetBotCrate server="872113947166249041" channel="1056835060113866752" />
        </main>
    );
}