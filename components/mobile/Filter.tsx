import { useState } from 'react';
import MateParts from "@/pages/MateParts.json"
// {Object.entries(MateParts).map(([key, values]) => (
//   <ul>{key}<img src="./one.png"/>
//     {values.map((item) => (
//     <li style={{display: "none"}}>{item} </li>
//     ))}
//   </ul>
// ))}
export default function Filter() {

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(true);

  return open ? <></> :(
    <div style={{maxWidth: "425px", top: "55%", position:"absolute", marginLeft: "30px"}}>
      <div>
          <div style={{background: "#00000080", fontSize: "15px", padding: "3px", textAlign: "right", width:"70%"}}>
            <a onClick={handleClose} style={{color: "white"}}>X</a>
          </div>
      </div>
    </div>
  );
};