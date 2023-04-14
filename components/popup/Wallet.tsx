import "xp.css/dist/XP.css";
import { kaikasConnect } from "../Wallet/kaikas";
import Klip from "../Wallet/klip";
import { useStateStore } from "@/components/utils/StateStore";

export default function Wallet() {
  const StateStore = useStateStore();
  
  const Close = () => StateStore.setView(true);
  const kaikas = async () => { await kaikasConnect(); }
  const klip = () =>  { StateStore.setklip(false); const count = StateStore.count + 1; StateStore.setCnt(count); }
  if(StateStore.view) return <></>;

  return (
    <>
    <Klip></Klip>
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
            <button aria-label="Close" onClick={ Close }></button>
          </div>
        </div>
        <div className="window-body">
          <section className="field-row" style={{ justifyContent: "center" }}>
            <button style={{ color: "#000000" }} onClick={ kaikas }>Connect to Kaikas</button>
          </section>
          <section className="field-row" style={{ justifyContent: "center" }}>
            <button style={{ color: "#000000" }} onClick={ klip }>Connect to Klip</button>
          </section>
          <section className="field-row" style={{ justifyContent: "center" }}>
            <button style={{ color: "#000000" }} onClick={ Close }>Don&apos;t Connect</button>
          </section>
        </div>
      </div>
    </div>
    </>
  );
}
