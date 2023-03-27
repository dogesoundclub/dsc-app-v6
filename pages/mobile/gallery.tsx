import React from 'react';
import styles from '@/styles/mobile/Gallery.module.css';

const Ready = () => {
  return (
        <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
            <button>Filter</button>
            <input type="text" placeholder='Search...'/>
            <button>Go</button>
            <div className={styles.mates} style={{display: "flex", width: "100%"}}>
                  <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                  <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
            </div>
            <div className={styles.mates} style={{display: "flex", width: "100%"}}>
                <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
            </div>
            <div className={styles.mates} style={{display: "flex", width: "100%"}}>
                <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
                <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #000</div>
            </div>
        </div>
  );
};

export default Ready;