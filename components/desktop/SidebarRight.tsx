import { useEffect, useState } from "react";
import Wallet from "@/components/popup/Wallet";
import { useStateStore } from "@/components/utils/StateStore";

export default function SidebarRight() {
    const [klaytnAddress, setKlaytnAddress] = useState(false);
    const [address, setAddress] = useState('');
    const StateStore = useStateStore();

    function WalletPopup(){
        StateStore.setView(false);
    }

    function sessionRemove(){
        sessionStorage.removeItem('klaytn_klip_address');
        sessionStorage.removeItem('klaytn_kaikas_address');
        location.reload();
    }

    useEffect(() => {
        const klaytn_klip_address = sessionStorage.getItem('klaytn_klip_address');
        const klaytn_kaikas_address = sessionStorage.getItem('klaytn_kaikas_address');
        if (klaytn_klip_address || klaytn_kaikas_address) {
            setKlaytnAddress(true);
            if(klaytn_klip_address) setAddress(klaytn_klip_address);
            if(klaytn_kaikas_address) setAddress(klaytn_kaikas_address);
        }
    }, []);
    return (
        <div style={{ width: "15%", textAlign: "center", background: "#C1C1C1", zIndex: "2" }}>
            <Wallet></Wallet>
            <div>
            { klaytnAddress ? <>{ address } <a onClick={ sessionRemove }>Logout</a></> : <a onClick={ WalletPopup } target="_blank"><img src="/login.png" style={{ width: "100%" }}/></a> }
            </div>
            <div style={{ padding: "10px" }}>
                <a href="https://discord.gg/dogesoundclub" target="_blank"><img src="/banner.gif" style={{ width: "100%" }}/></a>
            </div>
            <div style={{ padding: "10px" }}>
                <a href="https://opensea.io/collection/portal-engine" target="_blank"><img src="/engine.gif" style={{ width: "100%" }}/></a>
            </div>
        </div>
    );
};