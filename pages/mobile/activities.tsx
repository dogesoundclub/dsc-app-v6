import React from 'react';
import Dogesound from "../../components/mobile/Dogesound";
import MobileNav from '../../components/mobile/MobileNav';
import styles from '@/styles/mobile/Ready.module.css';
import Link from 'next/link';

export default function ActivitiesPage() {
  return (
        <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
            <div>
                <img src="dogesoundclub_mobile.png" style={{width: "100%"}}/>
            </div>
            <Dogesound></Dogesound>
            <MobileNav></MobileNav>
            <div className={styles.div} style={{ flexBasis: "70%", background: "#fff", color: "#000", padding: "10px", marginTop: "5px"}}>
                <h3 style={{ marginBottom: "20px"}}>Sorry, We’re under construction</h3>
                <span style={{fontSize: "13px"}}>
                    But we bet something good is coming.<br/>
                    If you want to know more about us, follow us until we’re ready.<br/>
                    We will get back ASAP!<br/>
                </span>
                <button className={styles.button}><Link href="https://twitter.com/dogesoundclub">Our Twitter</Link></button>
                <button className={styles.button}><Link href="https://discord.gg/dogesoundclub">Our Discord</Link></button>
                <button className={styles.button}><Link href="/">Back to home</Link></button>
                <br></br>
                <img src="/construction.png" style={{width: "100%"}}/>
          </div>
        </div>
  );
};