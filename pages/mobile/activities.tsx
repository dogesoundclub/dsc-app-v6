import React from 'react';
import Navbar from "../../components/mobile/MobileNav";
import Footer from "../../components/mobile/Footer";

export default function ActivitiesPage() {
  return (
        <div style={{maxWidth: "425px", margin: "0 auto", background: "#D9D9D9"}}>
            <Navbar></Navbar>
            <img src="/activities_mobile/0.png" style={{width: "100%"}}/>
            <img src="/activities_mobile/1.png" style={{width: "100%"}}/>
            <img src="/activities_mobile/2.png" style={{width: "100%"}}/>
            <img src="/activities_mobile/3.png" style={{width: "100%"}}/>
            <img src="/activities_mobile/4.png" style={{width: "100%"}}/>
            <Footer></Footer>
        </div>
  );
};