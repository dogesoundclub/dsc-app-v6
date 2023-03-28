import MainLayout from "../components/MainLayout";
import SidebarLeft from "../components/desktop/SidebarLeft";
import SidebarRight from "../components/desktop/SidebarRight";
import styles from '@/styles/desktop/Gallery.module.css';
import React, {useState, useEffect} from 'react';
import MobileReady from './mobile/ready';
import Link from 'next/link';


const GalleryPage = () => {

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
          <div className={styles.div} style={{ flexBasis: "70%", background: "#fff", color: "#000", display: "flex"}}>
            <div className={styles.cate}>
              <div className={styles.one}>
                <div className={styles.text}>GALLERY</div>
              </div>
                <input type="text" placeholder="search..." style={{padding: "7px", background:"#D9D9D9", border: "none", marginTop: "10px"}}/>
                <button style={{padding: "6px" }}>Go!</button>
                <button><Link href='/gallery'>MATE</Link></button><button><Link href='/emates'>EMATES</Link></button>
                <ul>
                  <li className={styles.li}>MY MATES <img src="./one.png"/></li>
                  <li className={styles.li}>FACE <img src="./one.png"/></li>
                  <li className={styles.li}>FACE DETAIL A <img src="./one.png"/></li>
                  <li className={styles.li}>FACE DETAIL B <img src="./one.png"/></li>
                  <li className={styles.li}>NECK <img src="./one.png"/></li>
                  <li className={styles.li}>MOUTH <img src="./one.png"/></li>
                  <li className={styles.li}>EYES <img src="./one.png"/></li>
                  <li className={styles.li}>FOREHEAD <img src="./one.png"/></li>
                  <li className={styles.li}>HEADWEAR <img src="./one.png"/></li>
                  <li className={styles.li}>HEADWEAR DETAILS <img src="./one.png"/></li>
                  <li className={styles.li}>EARS <img src="./one.png"/></li>
                  <li className={styles.li}>ITEMS <img src="./one.png"/></li>
                </ul>
            </div>
            <div className={styles.gallery}>
              <img src="./pray.png" style={{width: "100%"}}/>
              <div className={styles.mates} style={{display: "flex", width: "100%"}}>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
              </div>
              <div className={styles.mates} style={{display: "flex", width: "100%"}}>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
              </div>
              <div className={styles.mates} style={{display: "flex", width: "100%"}}>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-bias/bias/bmcs/bia-0.png" alt="" />BMCS #000</div>
              </div>
            </div>
            </div>
          <SidebarRight></SidebarRight>
        </div>
      </MainLayout>
    );
  };
  
  export default GalleryPage;