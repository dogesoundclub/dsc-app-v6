import "xp.css/dist/XP.css";
import { useState } from "react";

export default function XPPage() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

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
          <div className="title-bar-text">DSC Holder Certification</div>

          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleClose}></button>
          </div>
        </div>
        <div className="window-body">
          <section className="field-row" style={{ justifyContent: "center" }}>
              <img
                src="/certification/hedera.png"
                style={{ width: "32px" }}
              />
            <p>헤데라 체인 인증은 모바일 월립토만 지원합니다</p>
          </section>
          <section className="field-row" style={{ justifyContent: "center" }}>
            <button style={{ color: "#000000" }} onClick={handleClose}>
              OK
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
