import React, { useState, useEffect } from "react";

export default function Banner() {
    const [isDogesound, setDogesound] = useState("");
    const [isMix, setMix] = useState("");

    async function getDogesound(){
        try {
            const res = await fetch("https://api.dogesound.club/dogesoundwinner")
            const data = await res.json()
            setDogesound(data.dogesound)
        } catch {
            setDogesound("개소리우승작 보러가기")
        }
    }

    async function getMix(){
        try {
            const res = await fetch("https://api.dogesound.club/mix/price")
            const data = await res.json()
            setMix(data)
        } catch {
            setMix("믹스가격 보러가기")
        }
    }

    useEffect(()=>{
        getDogesound()
        getMix()
    },[])

    return (
        <>
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "10px" }}>
            <div style={{ color: "#ffffff", border: "10px solid #F7D701", position: "relative", width: "100%", maxWidth: "100%", height: "100px", overflowX: "hidden", overflow: "hidden", display: "flex", alignItems: "center", background: "url('background.jpeg')" }}>
                <div style={{ animation: "marquee 20s linear infinite", fontFamily: "NeoDunggeunmo", position: "absolute", whiteSpace: "nowrap", willChange: "transform" }}>
                    <div style={{ fontSize: "17px" }}>{isDogesound}</div>
                </div>
            </div>
            <div style={{ width:"100%", textAlign: "center", border: "10px solid #F7D701", height: "100px", lineHeight: "80px", background: "url('/background.jpeg')", color: "#ffffff" }}>
                <a href="https://dexata.kr/#/?tokenA=0xdd483a970a7a7fef2b223c3510fac852799a88bf" target="_blank"  style={{ color: "#ffffff", fontSize: "18px" }}>MIX: &#8361; {Math.ceil(Number(isMix)*1000)/1000}</a>
            </div>
        </div>
        <style jsx>{`
            @keyframes marquee {
                from {
                    transform: translateX(90%);
                }

                to {
                    transform: translateX(-100%);
                }
            }
        `}</style>
        </>
    );
  };