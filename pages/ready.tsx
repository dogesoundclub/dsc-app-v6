import MainLayout from "@/components/MainLayout";
import SidebarLeft from "@/components/desktop/SidebarLeft";
import SidebarRight from "@/components/desktop/SidebarRight";
import styles from "@/styles/desktop/Ready.module.css";
import MobileReady from "./mobile/ready";
import Link from "next/link";
import useIsMobile from "@/hooks/display";

export default function ReadyPage() {
  const display = useIsMobile();

    return display ? <MobileReady /> : (
      <MainLayout>
        <div style={{ display: "flex" }}>
          <SidebarLeft></SidebarLeft>
          <div className={styles.div} style={{ flexBasis: "70%", background: "#fff", color: "#000" }}>
            <h1 style={{ marginTop: "20px", marginBottom: "20px" }}>Sorry, We’re under construction</h1>
            <span>
                But we bet something good is coming.<br/>
                If you want to know more about us, follow us until we’re ready.<br/>
                We will get back ASAP!<br/>
            </span>
            <button className={styles.button}><Link href="https://twitter.com/dogesoundclub">Our Twitter</Link></button>
            <button className={styles.button}><Link href="https://discord.gg/dogesoundclub">Our Discord</Link></button>
            <button className={styles.button}><Link href="/">Back to home</Link></button>
            <br></br>
            <img src="/construction.png" style={{ width: "500px" }}/>
          </div>
          <SidebarRight></SidebarRight>
        </div>
      </MainLayout>
    );
  };