import MainLayout from "../components/MainLayout";
import React, {useState, useEffect} from 'react';
import MobileReady from './mobile/activities';
import SidebarLeft from "../components/desktop/SidebarLeft";
import SidebarRight from "../components/desktop/SidebarRight";
import styles from '@/styles/desktop/Ready.module.css';
import Link from 'next/link';

const ActivitiesPage = () => {

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
            <div style={{display: "flex"}}>
              <span style={{color: "#36B167", fontSize: "30px"}}>ACIVITIES </span>
              <span style={{ marginTop: "20px", marginBottom: "20px"}}>We provide numerous contents that matches DSC's identity.</span>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <div>
                <img src="/activities/5.png" style={{width: "100%"}}/>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <div><img src="/activities/0.png" style={{width: "100%"}}/></div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <div><img src="/activities/1.png" style={{width: "100%"}}/></div>
              <div><img src="/activities/2.png" style={{width: "100%"}}/></div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <div><img src="/activities/3.png" style={{width: "100%"}}/></div>
              <div><img src="/activities/4.png" style={{width: "100%"}}/></div>
            </div>
          </div>
          <SidebarRight></SidebarRight>
        </div>
      </MainLayout>
    );

  return (
    <MainLayout>
      <h1>Activities Page</h1>
    </MainLayout>
  );
};

export default ActivitiesPage;