import * as React from 'react';
import styles from '@/styles/mobile/Fixed.module.css';


const Fixed = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(true);


  return open ? <></> :(
    <div style={{maxWidth: "425px"}}>
      <div className={styles.div}>
          <div style={{background: "#00000080", fontSize: "25px", padding: "5px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <a onClick={handleClose} style={{color: "white"}}>X</a>
          </div>
          <a href="https://discord.gg/dogesoundclub"><img src="/sns/discord.png" style={{width: "32px"}}/></a>
          <a href="https://www.instagram.com/dogesoundclub/"><img src="/sns/instagram.png" style={{width: "32px"}}/></a>
          <a href="https://twitter.com/dogesoundclub"><img src="/sns/twitter.png" style={{width: "32px"}}/></a>
          <a href="mailto:support@dsclabel.co.kr"><img src="/sns/email.png" style={{width: "32px"}}/></a>
          <a href="https://t.me/dogesoundclub"><img src="/sns/telegram.png" style={{width: "32px"}}/></a>
          <a href="https://www.youtube.com/@dosocl"><img src="/sns/youtube.png" style={{width: "32px"}}/></a>
      </div>
    </div>
  );
};
export default Fixed;