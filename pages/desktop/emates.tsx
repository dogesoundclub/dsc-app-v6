import MainLayout from "@/components/MainLayout";
import SidebarLeft from "@/components/desktop/SidebarLeft";
import SidebarRight from "@/components/desktop/SidebarRight";
import Link from "next/link";

export default function EmatesPage() {
    return (
      <MainLayout>
        <div style={{ display: "flex" }}>
          <SidebarLeft></SidebarLeft>
          <div  style={{ flexBasis: "70%", background: "#fff", color: "#000", display: "flex" }}>
            <div>
              <div >
                <div>GALLERY</div>
              </div>
                <input type="text" placeholder="search..." style={{ padding: "7px", background:"#D9D9D9", border: "none", marginTop: "10px" }} />
                <button style={{ padding: "6px" }}>Go!</button>
                <button><Link href="/bmcs">BMCS</Link></button><button><Link href="/gallery">MATE</Link></button>
                <ul>
                  <li>MY MATES <img src="./one.png"/></li>
                  <li>FACE <img src="./one.png"/></li>
                  <li>FACE DETAIL A <img src="./one.png"/></li>
                  <li>FACE DETAIL B <img src="./one.png"/></li>
                  <li>NECK <img src="./one.png"/></li>
                  <li>MOUTH <img src="./one.png"/></li>
                  <li>EYES <img src="./one.png"/></li>
                  <li>FOREHEAD <img src="./one.png"/></li>
                  <li>HEADWEAR <img src="./one.png"/></li>
                  <li>HEADWEAR DETAILS <img src="./one.png"/></li>
                  <li>EARS <img src="./one.png"/></li>
                  <li>ITEMS <img src="./one.png"/></li>
                </ul>
            </div>
            <div>
              <img src="./pray.png" style={{ width: "100%" }}/>
              <div style={{ display: "flex", width: "100%" }}>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
              </div>
              <div style={{ display: "flex", width: "100%" }}>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
                  <div><img src="https://storage.googleapis.com/emates/klaytn/Emates-0.png" />EMate #000</div>
              </div>
            </div>
            </div>
          <SidebarRight></SidebarRight>
        </div>
      </MainLayout>
    );
  };