import MainLayout from "../../components/MainLayout";
import SidebarLeft from "../../components/desktop/SidebarLeft";
import SidebarRight from "../../components/desktop/SidebarRight";
import { useState } from 'react';
import Link from 'next/link';

export default function ActivitiesPage(){
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);

    return (
      <MainLayout>
        <div style={{ display: "flex" }}>
          <SidebarLeft></SidebarLeft>
          <div style={{ flexBasis: "70%", background: "#fff", color: "#000", textAlign: "center", overflow:"scroll", height: "90vh"}}>
            <div style={{display: "flex", alignContent: "flex-end", justifyContent: "flex-start", height: "50px", alignItems: "flex-end" }}>
              <div style={{color: "#36B167", fontSize: "30px", textDecoration: "underline", paddingLeft: "40px"}}>ACIVITIES </div>
              <div style={{fontFamily: "Abel", paddingLeft: "20px"}}>We provide numerous contents that matches DSC&apos;s identity.</div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around", background: "url(./activities/5.png)", padding: "10px", backgroundSize: "cover", color: "#fff", fontFamily: "Digital Numbers"}}>
                <span className="dodo">DSC will save the world</span>
            </div>
            <div className="actImg01"  style={{display: "flex", justifyContent: "space-around"}}>
                <Link href='https://dogesound.club/activities'><img src="/activities/0.png" style={{width: "100%"}}/></Link>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <div style={{width: "100%"}} onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
              {!isShown1 && (
                <img className="img" src="/activities/1.png" style={{width: "100%", height:"100%"}}/>
              )}
              {isShown1 && (
                <img className="imghover" src="/activities/1hover.png" style={{width: "100%", height:"100%"}}/>
              )}
              </div>
              <div style={{width: "100%"}} onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
              {!isShown2 && (
                <img src="/activities/2.png" style={{width: "100%", height:"100%"}}/>
              )}
              {isShown2 && (
                <img className="imghover" src="/activities/2hover.png" style={{width: "100%", height:"100%"}}/>
              )}
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <div style={{width: "100%"}} onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
              {!isShown3 && (
                <img src="/activities/3.png" style={{width: "100%", height:"100%"}}/>
              )}
              {isShown3 && (
                <img className="imghover" src="/activities/3hover.png" style={{width: "100%", height:"100%"}}/>
              )}
              </div>
              <div style={{width: "100%"}} onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}>
                {!isShown4 && (
                  <img src="/activities/4.png" style={{width: "100%", height:"100%"}}/>
                )}
                {isShown4 && (
                  <img className="imghover" src="/activities/4hover.png" style={{width: "100%", height:"100%"}}/>
                )}
              </div>
            </div>
          </div>
          <SidebarRight></SidebarRight>
        </div>
      </MainLayout>
    );
};