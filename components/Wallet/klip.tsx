import { useEffect, useState } from "react";
import { useStateStore } from "@/components/utils/StateStore";
import QRCode from "qrcode";

export default function Klip() {
    const StateStore = useStateStore();
    const [data, setData] = useState('');

    useEffect(() => {
        const klipSDK = require("klip-sdk");
        async function KlipConnect(): Promise<any> {
            const res = await klipSDK.prepare.auth({ bappName: "도지사운드클럽" });
            await klipSDK.request(res, async () => {
              const qr = await QRCode.toDataURL(`https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`);
              setData(qr);
              return new Promise((resolve) => {
                  const interval = setInterval(async () => {
                      const result = await klipSDK.getResult(res.request_key);
                      if (result.result !== undefined) {
                          clearInterval(interval);
                          setTimeout(() => resolve(result.result), 2000);
                          sessionStorage.setItem('klaytn_klip_address', result.result.klaytn_address);
                          location.reload();
                      }
                  }, 1000);
              });
          });
        }
        KlipConnect();
    }, [StateStore.count]);
    
    if(StateStore.klip) return <></>;
    const Close = () => StateStore.setklip(true);

    return (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                zIndex: "11",
              }}
            >
              <div className="window" style={{ margin: "32px", width: "300px" }}>
                <div className="title-bar" style={{ padding: "12px 3px 12px 3px" }}>
                  <div className="title-bar-text">Klip QRCode</div>
                  <div className="title-bar-controls">
                    <button aria-label="Close" onClick={ Close }></button>
                  </div>
                </div>
                <div className="window-body">
                  <section className="field-row" style={{ justifyContent: "center" }}>
                    <img src={data}/>
                  </section>
                  <section className="field-row" style={{ justifyContent: "center" }}>
                    Klip
                  </section>
                  <section className="field-row" style={{ justifyContent: "center" }}>
                    <button style={{ color: "#000000" }} onClick={ Close }>Close</button>
                  </section>
                </div>
              </div>
            </div>
    )
}