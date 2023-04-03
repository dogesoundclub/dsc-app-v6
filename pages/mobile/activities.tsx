import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "../../components/mobile/MobileNav";
import Dogesound from "../../components/mobile/Dogesound";
import Footer from "../../components/mobile/Footer";


export default function ActivitiesPage() {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  return (
        <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
            <div>
              <img src="dogesoundclub_mobile.png" style={{width: "100%"}}/>
            </div>
            <Dogesound></Dogesound>
            <Navbar></Navbar>
            <img src="/activities_mobile/0.png" style={{width: "100%"}}/>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <Link href='https://dogesound.club/activities'>
                  <img src="/activities_mobile/0_1.png" style={{width: "100%"}}/>
                </Link>
                <Link href='https://dogesound.club/activities'>
                  <img src="/activities_mobile/0_2.png" style={{width: "100%"}}/>
                </Link>
            </div>
            <div style={{width: "100%"}} onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>
              {!isShown1 && (
                <img className="img" src="/activities_mobile/1.png" style={{width: "100%", height:"100%"}}/>
              )}
              {isShown1 && (
                <img className="imghover" src="/activities_mobile/1hover.png" style={{width: "100%", height:"100%"}}/>
              )}
            </div>
            <div style={{width: "100%"}} onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
              {!isShown2 && (
                <img src="/activities_mobile/2.png" style={{width: "100%", height:"100%"}}/>
              )}
              {isShown2 && (
                <img className="imghover" src="/activities_mobile/2hover.png" style={{width: "100%", height:"100%"}}/>
              )}
            </div>
            <div style={{width: "100%"}} onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
              {!isShown3 && (
                <img src="/activities_mobile/3.png" style={{width: "100%", height:"100%"}}/>
              )}
              {isShown3 && (
                <img className="imghover" src="/activities_mobile/3hover.png" style={{width: "100%", height:"100%"}}/>
              )}
            </div>
            <div style={{width: "100%"}} onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}>
              {!isShown4 && (
                <img src="/activities_mobile/4.png" style={{width: "100%", height:"100%"}}/>
              )}
              {isShown4 && (
                <img className="imghover" src="/activities_mobile/4hover.png" style={{width: "100%", height:"100%"}}/>
              )}
            </div>
            <Footer></Footer>
        </div>
  );
};