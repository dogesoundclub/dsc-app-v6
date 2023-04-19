import Layout from "@/components/mobile/Layout";
import MobileNav from "@/components/mobile/MobileNav";
import Dogesound from "@/components/mobile/Dogesound";
import Footer from "@/components/mobile/Footer";
import Popup from "@/components/mobile/Popup";

export default function Faq() {
    return (
        <Layout>
            <div>
                <img src="dogesoundclub_mobile.png" style={{ width: "100%" }}/>
            </div>
            <Popup></Popup>
            <Dogesound></Dogesound>
            <MobileNav></MobileNav>


            
            <Footer></Footer>
        </Layout>
    );
}