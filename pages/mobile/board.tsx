import React, { useEffect, useState } from "react";
import Nav from "@/components/mobile/MobileNav";
import Dogesound from "@/components/mobile/Dogesound";
import WalletList from "@/components/popup/MobileWalletList";
import { useStateStore } from "@/components/utils/StateStore";

export default function Board() {
    const [klaytnAddress, setKlaytnAddress] = useState(true);
    const StateStore = useStateStore();

    function WalletPopup(){
        StateStore.setView(false);
    }

    useEffect(() => {
        const klaytn_klip_address = sessionStorage.getItem('klaytn_klip_address');
        const klaytn_kaikas_address = sessionStorage.getItem('klaytn_kaikas_address');
        if (klaytn_klip_address || klaytn_kaikas_address) { setKlaytnAddress(false); }
    }, [])

    return (
        klaytnAddress ? 
        <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
            <div>
                <img src="dogesoundclub_mobile.png" style={{width: "100%"}}/>
            </div>
            <Dogesound></Dogesound>
            <Nav></Nav>
            <WalletList></WalletList>
            <div style={{height: "100px", textAlign: "center", lineHeight: "100px"}}>
                <button style={{paddingRight: "50px", paddingLeft: "50px", paddingTop: "15px", paddingBottom: "15px", fontSize: "15px", color: "#000000", background: "#9F9F9F", border: "none" }}onClick={()=> WalletPopup() }>Login</button>
            </div>
            <div><img src="/pray.png" style={{width: "100%"}}/></div>
            <div style={{display: "flex"}}>
                <div style={{width: "28%"}}><img src="/test.png" style={{width: "100%"}}/></div>
                <div style={{width: "72%"}}><img src="/banner.gif" style={{width: "100%"}}/></div>
            </div>
        </div> 
        : 
        <>
            <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
                <div>
                    <img src="dogesoundclub_mobile.png" style={{width: "100%"}}/>
                </div>
                <Dogesound></Dogesound>
                <Nav></Nav>
                <WalletList></WalletList>
                <div style={{height: "100px", textAlign: "center", lineHeight: "100px"}}>
                    <img src="/avatar.png" style={{ width: "50px" }}/> User {klaytnAddress}
                </div>
                <div>
                    <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
                        <img src="/pfp.png" style={{ height: "30px" }}/>
                        <span style={{ paddingLeft: "10px" }}>DSC Live Chat</span>
                    </div>
                </div>
            </div> 
        </>
    )
}