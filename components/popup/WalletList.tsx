import "xp.css/dist/XP.css";
import { useState, useEffect } from "react";
import { getkaikas } from "../Wallet/kaikas";
import { getKlip, connect } from "../Wallet/klip";
import { getMetamask } from "../Wallet/metamask";

export default function WalletList() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  
  async function kaikas(){
    const kaikas = await getkaikas();
    if(kaikas) {
      setOpen(false);
    }
  }

  function klip(){
    // const data = getKlip();
    connect();
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
        display: open ? "flex" : "none",
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
            <button style={{ color: "#000000" }} onClick={klip}>
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
