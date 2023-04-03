import React, { useState, useEffect } from 'react';
import Caver from 'caver-js';
import styles from '@/styles/desktop/Dogesound.module.css';

export default function Dogesound() {
    const [isData, setData] = useState('');
    const [isMix, setMix] = useState('');
    const [isCaver, setCaver] = useState('');

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

    // async function getCaver(){
    //     const caver = new Caver("wss://public-en-cypress.klaytn.net/ws");
    //     const res = await caver.rpc.klay.getClientVersion()
    //     // setCaver(res)
    // }

    useEffect(()=>{
        getDogesound()
        getMixprice()
        // getCaver()
    },[])

    return (
        <>
            <div className={styles.animated}>
                <div className={styles.track}>
                    <div className={styles.content}>{isData}</div>
                </div>
            </div>
            {/* {isMix} {isCaver} */}
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{width: "50%"}}><img src="/banner1.png" style={{width: "100%"}}/></div>
                <div className={styles.mix} style={{width: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <a href="https://dexata.kr/#/?tokenA=0xdd483a970a7a7fef2b223c3510fac852799a88bf" target='_blank'>MIX: <span style={{fontSize: "12px"}}>&#8361; </span>{Math.ceil(Number(isMix)*1000)/1000}</a>
                </div>
            </div> 
        </>
    );
  };