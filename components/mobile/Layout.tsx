type LayoutProps = {
    user?: any
    loading?: boolean
    children: React.ReactNode
  }
export default function Layout({ children }: LayoutProps) {
    return (
        <div style={{ maxWidth: "425px", margin: "0 auto", background: "#D9D9D9" }}>
            {children}
        </div>
    )
}
