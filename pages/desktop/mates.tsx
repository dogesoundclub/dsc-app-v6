import MainLayout from "@/components/MainLayout";
import SidebarLeft from "@/components/desktop/SidebarLeft";
import SidebarRight from "@/components/desktop/SidebarRight";
import styles from '@/styles/desktop/Gallery.module.css';
import Link from 'next/link';
import MateParts from "../MateParts.json"

export default function GalleryPage() {

  function mates(){
    let arr = [];
    for (let i=0; i < 6; i++){
      arr.push(
        <div><img src="https://storage.googleapis.com/dsc-mate/336/dscMate-0.png" alt="" />Mate #{i}</div>
      )
    }
    return arr;
  }

    return  (
      <MainLayout>
        <div style={{ display: "flex" }}>
          <SidebarLeft></SidebarLeft>
          <div className={styles.div} style={{ flexBasis: "70%", background: "#fff", color: "#000", display: "flex"}}>
            <div className={styles.cate}>
              <div className={styles.one}>
                <div className={styles.text}>GALLERY</div>
              </div>
                <input type="text" placeholder="search..." style={{padding: "7px", background:"#D9D9D9", border: "none", marginTop: "10px"}}/>
                <button style={{padding: "6px" }}>Go!</button>
                <button><Link href='/bmcs'>BMCS</Link></button><button><Link href='/emates'>EMATES</Link></button>
                <li className={styles.li}>MY MATES <img src="./one.png"/></li>
                {/* {Object.entries(MateParts).map(([key, values]) => (
                  <ul className={styles.li}>{key}<img src="./one.png"/>
                    {values.map((item) => (
                    <li style={{display: "none"}}>{item} </li>
                    ))}
                  </ul>
                ))} */}
            </div>
            <div className={styles.gallery}>
              <img src="./pray.png" style={{width: "100%"}}/>
              <div className={styles.mates} style={{display: "flex", width: "100%"}}>
                  {mates()}
              </div>
            </div>
            </div>
          <SidebarRight></SidebarRight>
        </div>
      </MainLayout>
    );
  };