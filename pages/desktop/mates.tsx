import DesktopLayout from "@/components/DesktopLayout";
import GalleryCate from "@/components/desktop/GalleryCate";
import Link from "next/link";


export default function GalleryPage() {

  return (
    <DesktopLayout>
      <div style={{ background: "#E73C83", textAlign: "center", padding: "10px" }}>
        <div style={{ 
          width: "200px", 
          height: "100px", 
          background: "linear-gradient( to bottom, #ffffff 20%,yellow 70%)", 
          borderRadius: "50%", 
          margin: "0 auto", 
          textShadow: "-3px 3px black, 3px 3px black, 3px 3px black, 3px -3px black", 
          fontFamily: "Sunflower" 
          }}
        >
          <div style={{ 
            lineHeight: "100px", 
            color: "#36B167", 
            fontSize: "35px", 
            textShadow: "-1px 1px white, 1px 1px white, 1px 1px white, 1px -1px white;" 
            }}
          >GALLERY</div>
        </div>
        <input type="text" placeholder="search..." style={{ padding: "7px", background: "#D9D9D9", border: "none", marginTop: "10px" }} />
        <button style={{ padding: "6px" }}>Go!</button>
        <button><Link href="/bmcs">BMCS</Link></button><button><Link href="/emates">EMATES</Link></button>
        <li style={{ padding: "10px", color: "#ffffff", listStyle: "none", textAlign: "right" }}>MY MATES <img src="./one.png" style={{ width: "10px" }} /></li>
        <GalleryCate />
      </div>
      <div>
        <img src="./pray.png" style={{ width: "100%" }} />
        <div style={{ display: "flex", width: "100%" }}>
          
        </div>
      </div>
    </DesktopLayout>
  );
};