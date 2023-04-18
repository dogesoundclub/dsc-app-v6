import React from 'react';
import styles from '@/styles/mobile/Gallery.module.css';
import MobileNav from "@/components/mobile/MobileNav";
import Dogesound from "@/components/mobile/Dogesound";
import Footer from "@/components/mobile/Footer";
import Dasdasd from '@/components/mobile/Filter';
import { useStateStore } from "@/components/utils/StateStore";

export default function Gallery() {

    const StateStore = useStateStore();

    function Filter(){
        StateStore.setfilter(false);
      }

    return (
        <>
            <div style={{ maxWidth: "425px", margin: "0 auto", background: "#D9D9D9", height: "100vh"}}>
                <div>
                    <img src="dogesoundclub_mobile.png" style={{ width: "100%" }}/>
                </div>
                <Dogesound></Dogesound>
                <MobileNav></MobileNav>
                <Dasdasd/>
                <div style={{ textAlign: "center" }}>
                    <button onClick={()=> Filter() } style={{ color: "#000000" }}>Filter</button>
                    <input type="text" placeholder='Search...'/>
                    <button  style={{ color: "#000000" }}>Go</button>
                    <div className={styles.mates} style={{ display: "flex", width: "100%", justifyContent: "center"}}>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    </div>
                    <div className={styles.mates} style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    </div>
                    <div className={styles.mates} style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    </div>
                    <div className={styles.mates} style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};
