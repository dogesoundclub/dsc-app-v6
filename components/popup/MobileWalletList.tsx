import "xp.css/dist/XP.css";
import { useState, useEffect } from "react";
import { kaikasConnect } from "../Wallet/kaikas";
import { getMobileKlip } from "../Wallet/mobileklip";
import { getMetamask } from "../Wallet/metamask";

export default function WalletList() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  if(!open) return <></>;
  
  async function kaikas(){
    await kaikasConnect();
  }

  function Mobileklip(){
    // const data = getKlip();
    getMobileKlip();
  }
  
  function Metamask(){
    getMetamask();
  }

  useEffect(() => {
  
  }, []);
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "brightness(0.5)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
      }}
    >
      <div className="window" style={{ margin: "32px", width: "300px" }}>
        <div className="title-bar" style={{ padding: "12px 3px 12px 3px" }}>
          <div className="title-bar-text">Wallet Connect</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleClose}></button>
          </div>
        </div>
        <div className="window-body">
            <section className="field-row" style={{ justifyContent: "center" }}>
                <button style={{ color: "#000000" }} onClick={kaikas}>
                Connect to Kaikas
                </button>
            </section>
            <section className="field-row" style={{ justifyContent: "center" }}>
                <button style={{ color: "#000000" }} onClick={Mobileklip}>
                Connect to Klip
                </button>
            </section>
          {/* <section className="field-row" style={{ justifyContent: "center" }}>
            <button style={{ color: "#000000" }} onClick={Metamask}>
                Connect to Metamask
            </button>
          </section> */}
            <section className="field-row" style={{ justifyContent: "center" }}>
                <button style={{ color: "#000000" }} onClick={handleClose}>
                연결하지 않고 닫기
                </button>
            </section>
        </div>
      </div>
    </div>
  );
}
