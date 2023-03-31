import * as React from 'react';

const Banner1 = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(true);


  return open ? <></> :(
    <div style={{maxWidth: "425px", top: "30%", position: "absolute", marginLeft: "15px"}}>
      <div>
          <div style={{background: "#00000080", fontSize: "15px", padding: "3px", textAlign: "right", width: "70%"}}>
            <a onClick={handleClose} style={{color: "white"}}>X</a>
          </div>
          <img src="/fbi_warning.png" style={{width: "70%"}}/>
      </div>
    </div>
  );
};
export default Banner1;