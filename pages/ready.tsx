import MainLayout from "../components/MainLayout";
import SidebarLeft from "../components/desktop/SidebarLeft";
import SidebarRight from "../components/desktop/SidebarRight";
import styles from '@/styles/desktop/Ready.module.css';
import { Abel, Yantramanav } from 'next/font/google'
import React, {useState, useEffect} from 'react';
import MobileReady from './mobile/ready';

const abel = Abel({ 
  weight: '400',
  subsets: ['latin']
})

const ReadyPage = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

    return isMobile ? <MobileReady /> : (
      <MainLayout>
        <div style={{ display: "flex" }}>
          <SidebarLeft></SidebarLeft>
          <div className={styles.div} style={{ flexBasis: "70%", background: "#fff", color: "#000"}}>
            <h1 style={{ marginTop: "20px", marginBottom: "20px"}}>Sorry, We’re under construction</h1>
            <span>
                But we bet something good is coming.<br/>
                If you want to know more about us, follow us until we’re ready.<br/>
                We will get back ASAP!<br/>
            </span>
            <button className={styles.button}><a href="https://twitter.com/dogesoundclub">Our Twitter</a></button>
            <button className={styles.button}><a href="https://discord.gg/dogesoundclub">Our Discord</a></button>
            <button className={styles.button}><a href="/">Back to home</a></button>
            <br></br>
            <img src="/construction.png" style={{width: "500px"}}/>
          </div>
          <SidebarRight></SidebarRight>
        </div>
      </MainLayout>
    );
  };
  
  export default ReadyPage;