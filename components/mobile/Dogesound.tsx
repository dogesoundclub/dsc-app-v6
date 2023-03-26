import React, { useState, useEffect } from 'react';
import styles from '@/styles/mobile/Dogesound.module.css';

const Dogesound = () => {
    const [isData, setData] = useState('');
    const [isMix, setMix] = useState('');

    async function getDogesound(){
        const res = await fetch("https://api.dogesound.club/dogesoundwinner")
        const data = await res.json()
        setData(data.dogesound)
    }
    async function getMixprice(){
        const res = await fetch("https://api.dogesound.club/mix/price")
        const data = await res.json()
        setMix(data)
    }

    useEffect(()=>{
        getDogesound()
        getMixprice()
    },[])

    return (
        <div style={{display: "flex", justifyContent: "space-around", marginBottom: "10px"}}>
            <div className={styles.animated}>
                <div className={styles.track}>
                    <div className={styles.content}>{isData}</div>
                </div>
            </div>
            <div style={{width:"100%", textAlign: "center", border: "10px solid #F7D701", height: "100px", lineHeight: "80px", background: "url('/background.jpeg')", color: "#ffffff"}}>
                <a href="https://dexata.kr/#/?tokenA=0xdd483a970a7a7fef2b223c3510fac852799a88bf">MIX: <span style={{fontSize: "12px"}}>&#8361; </span>{Math.ceil(Number(isMix)*1000)/1000}</a>
            </div>
        </div>
    );
  };
  export default Dogesound;