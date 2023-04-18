import { useState } from "react";

export default function Popup() {

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(true);

  return open ? <></> :(
    <div style={{ maxWidth: "425px", top: "30%", position: "absolute", marginLeft: "15px" }}>
      <div>
          <div style={{ background: "#00000080", fontSize: "15px", padding: "3px", textAlign: "right", width: "40%" }}>
            <a onClick={ handleClose } style={{ color: "white" }}>X</a>
          </div>
          <img src="/faq_mobile/popup.png" style={{ width: "40%" }}/>
      </div>
    </div>
  );
};