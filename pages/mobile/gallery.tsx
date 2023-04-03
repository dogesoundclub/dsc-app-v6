import React from 'react';
import styles from '@/styles/mobile/Gallery.module.css';
import MobileNav from "../../components/mobile/MobileNav";
import Dogesound from "../../components/mobile/Dogesound";
import Footer from "../../components/mobile/Footer";

export default function Gallery() {

  return (
        <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
            <div>
                <img src="dogesoundclub_mobile.png" style={{width: "100%"}}/>
            </div>
            <Dogesound></Dogesound>
            <MobileNav></MobileNav>
            <div style={{textAlign: "center"}}>
                <button>Filter</button>
                <input type="text" placeholder='Search...'/>
                <button>Go</button>
                <div className={styles.mates} style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                </div>
                <div className={styles.mates} style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                </div>
                <div className={styles.mates} style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                    <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
  );
};
