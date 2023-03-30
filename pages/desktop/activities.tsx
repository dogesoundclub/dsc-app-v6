import MainLayout from "../../components/MainLayout";
import SidebarLeft from "../../components/desktop/SidebarLeft";
import SidebarRight from "../../components/desktop/SidebarRight";

export default function ActivitiesPage(){
    return (
      <MainLayout>
        <div style={{ display: "flex" }}>
          <SidebarLeft></SidebarLeft>
          <div style={{ flexBasis: "70%", background: "#fff", color: "#000", textAlign: "center", overflow:"scroll", height: "90vh"}}>
            <div style={{display: "flex", alignContent: "flex-end", justifyContent: "space-evenly", height: "50px" }}>
              <div style={{color: "#36B167", fontSize: "30px", textDecoration: "underline"}}>ACIVITIES </div>
              <div style={{ marginTop: "20px", marginBottom: "20px"}}>We provide numerous contents that matches DSC&apos;s identity.</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around", background: "url(./activities/5.png)", padding: "10px", backgroundSize: "cover", color: "#fff", fontFamily: "Digital Numbers"}}>
                <span className="dodo">DSC will save the world</span>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <img src="/activities/0.png" style={{width: "100%"}}/>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <div><img src="/activities/1.png" style={{width: "100%"}}/></div>
              <div><img src="/activities/2.png" style={{width: "100%"}}/></div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <div><img src="/activities/3.png" style={{width: "100%"}}/></div>
              <div><img src="/activities/4.png" style={{width: "100%"}}/></div>
            </div>
          </div>
          <SidebarRight></SidebarRight>
        </div>
      </MainLayout>
    );
};