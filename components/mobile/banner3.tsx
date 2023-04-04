import { useState } from "react";

export default function Banner3() {

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(true);

  return open ? <></> :(
    <div style={{ maxWidth: "425px", top: "55%", position:"absolute", marginLeft: "30px" }}>
      <div>
          <div style={{ background: "#00000080", fontSize: "15px", padding: "3px", textAlign: "right", width:"70%" }}>
            <a onClick={handleClose} style={{ color: "white" }}>X</a>
          </div>
          <img src="/engine.gif" style={{ width: "70%" }}/>
      </div>
    </div>
  );
};