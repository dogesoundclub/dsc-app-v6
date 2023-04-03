import MobileNav from "@/components/mobile/MobileNav";
import Dogesound from "@/components/mobile/Dogesound";

export default function Board() {
    return (
        <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
            <div>
                <img src="dogesoundclub_mobile.png" style={{width: "100%"}}/>
            </div>
            <Dogesound></Dogesound>
            <MobileNav></MobileNav>
            <div style={{height: "100px", textAlign: "center", lineHeight: "100px"}}>
                <button style={{paddingRight: "50px", paddingLeft: "50px", paddingTop: "15px", paddingBottom: "15px", fontSize: "15px", color: "#000000", background: "#9F9F9F", border: "none" }}>Login</button>
            </div>
            <div><img src="/pray.png" style={{width: "100%"}}/></div>
            <div style={{display: "flex"}}>
                <div style={{width: "28%"}}><img src="/test.png" style={{width: "100%"}}/></div>
                <div style={{width: "72%"}}><img src="/banner.gif" style={{width: "100%"}}/></div>
            </div>
        </div>
    )
}