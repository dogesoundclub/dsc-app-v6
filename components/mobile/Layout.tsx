import WidgetBotCrate from "@/components/widget/discord";

type LayoutProps = {
    user?: any
    loading?: boolean
    children: React.ReactNode
  }
export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <div style={{ maxWidth: "425px", margin: "0 auto", background: "#D9D9D9" }}>
                {children}
            </div>
            <WidgetBotCrate server="872113947166249041" channel="1056835060113866752" />
        </>
    )
}
