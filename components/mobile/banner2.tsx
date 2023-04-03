import * as React from 'react';

export default function Banner2() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(true);


  return open ? <></> :(
    <div style={{maxWidth: "425px", top: "60%", position:"absolute",marginLeft: "100px"}}>
      <div>
          <div style={{background: "#00000080", fontSize: "15px", padding: "3px", textAlign: "right", width:"90%"}}>
            <a onClick={handleClose} style={{color: "white"}}>X</a>
          </div>
          <img src="/banner.gif" style={{width: "90%"}}/>
      </div>
    </div>
  );
};