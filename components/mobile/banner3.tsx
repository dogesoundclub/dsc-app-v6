import * as React from 'react';

const Banner3 = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(true);

  return open ? <></> :(
    <div style={{maxWidth: "425px", top: "135%", position:"absolute", marginLeft: "15px"}}>
      <div>
          <div style={{background: "#00000080", fontSize: "15px", padding: "3px", textAlign: "right", width:"70%"}}>
            <a onClick={handleClose} style={{color: "white"}}>X</a>
          </div>
          <img src="/engine.gif" style={{width: "70%"}}/>
      </div>
    </div>
  );
};
export default Banner3;