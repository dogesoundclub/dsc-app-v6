import { useEffect, useState } from "react";
import WalletList from "@/components/popup/WalletList";
import { useStore } from "@/components/utils/State";

export default function SidebarRight() {
    const [klaytnAddress, setKlaytnAddress] = useState(false);
    const abc = useStore();

    function main(){
        abc.setView(false);
      }

    useEffect(() => {
        const storedKlaytnAddress = sessionStorage.getItem('klaytn_address');
        if (storedKlaytnAddress) {
            setKlaytnAddress(false);
        }
    }, []);
    return (
        <div style={{ width: "15%", textAlign: "center", background: "#C1C1C1", zIndex: "2" }}>
            <WalletList></WalletList>
            <div>
            <a onClick={main} target="_blank"><img src="/login.png" style={{ width: "100%" }}/></a>
            </div>
            <div style={{padding: "10px"}}>
                <a href="https://discord.gg/dogesoundclub" target="_blank"><img src="/banner.gif" style={{ width: "100%" }}/></a>
            </div>
            <div style={{padding: "10px"}}>
                <a href="https://opensea.io/collection/portal-engine" target="_blank"><img src="/engine.gif" style={{ width: "100%" }}/></a>
            </div>
        </div>
    );
};