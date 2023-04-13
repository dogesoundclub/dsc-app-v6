import "xp.css/dist/XP.css";
import { getkaikas } from "../Wallet/kaikas";
import { getKlip  } from "../Wallet/klip";
import { getMetamask } from "../Wallet/metamask";
import { useStore } from "@/components/utils/State";

export default function WalletList() {
  const hook = useStore();
  const handleClose = () => hook.setView(true);
  if(hook.view) return <></>;
  
  async function kaikas(){
    const kaikas = await getkaikas();
    if(kaikas) {
      hook.setView(true)
    }
  }

  function klip(){
    // const data = getKlip();
    getKlip();
  }
  
  function Metamask(){
    getMetamask();
  }
  
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
