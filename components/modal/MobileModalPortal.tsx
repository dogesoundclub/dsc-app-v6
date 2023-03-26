import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Button onClick={handleClose}>X</Button> */}
          <div style={{background: "#00000080", fontSize: "15px", padding: "3px", textAlign: "center"}}>
            <span>Saturday Live Gaesori</span>
            <a onClick={handleClose} style={{color: "white"}}>X</a>
          </div>
          <a href="https://twitter.com/medo_NFP/status/1638039507399512064"><img src="/poster.png" style={{width: "100%"}}/></a>
        </Box>
      </Modal>
    </div>
  );
}
