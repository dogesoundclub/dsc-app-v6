import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/mobile/MobileNav";
import Dogesound from "@/components/mobile/Dogesound";
import Footer from "@/components/mobile/Footer";
import { useRouter } from "next/router";
import { verifyStore } from "@/stores/verify.store";
import { identityURL, redirectURI } from "@/components/utils/discord";
import { getHederaMsg, getKlaytnMsg } from "@/services/discord";
import MobileWalletList from "@/components/popup/MobileWalletList";
import XPPage from "@/components/xp";

export default function ActivitiesPage() {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [klaytnAddress, setKlaytnAddress] = useState(true);

  const router = useRouter();
  const hook = verifyStore();
  const { error, code, network } = router.query;
  useEffect(() => {
    if (!router.isReady) return;
    if (error === "access_denied") window.open(redirectURI);
    if (code && typeof code == "string" && network) {
      if (network === "klaytn") {
        getKlaytnMsg(code).then((res) => {
          // console.log(res);
          if (res) hook.setResult("success", "klaytn");
          else hook.setResult("fail", "klaytn");
        });
      } else if (network === "hedera") getHederaMsg(code, hook.setResult);
    }
    // setVerifyMsg({ state: "select", msg: "네트워크 선택" });
    // if (code && typeof code === "string" && address)
    //   getUserInfo(code, address).then((res) => setInit(res));
    const storedKlaytnAddress = sessionStorage.getItem('klaytn_address');
    if (storedKlaytnAddress) {
      setKlaytnAddress(false);
    }
  }, [router.isReady, code, error]);

  return (
    <div
      style={{
        maxWidth: "425px",
        margin: "0 auto",
        background: "#D9D9D9",
      }}
    >
      <div>
        <img src="dogesoundclub_mobile.png" style={{ width: "100%" }} />
      </div>
      <Dogesound></Dogesound>
      <Navbar></Navbar>
      <XPPage />
      {klaytnAddress && <MobileWalletList />}
      <img src="/activities_mobile/0.png" style={{ width: "100%" }} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img
          src="/activities_mobile/0_1.png"
          style={{ width: "50%" }}
          onClick={() => (location.href = identityURL("klaytn"))}
        />

        <img src="/activities_mobile/0_2.png" style={{ width: "50%" }} />
      </div>
      <div
        style={{ width: "100%" }}
        onMouseEnter={() => (isShown1 ? setIsShown1(false) : setIsShown1(true))}
      >
        {!isShown1 && (
          <img
            src="/activities_mobile/1.png"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        {isShown1 && (
          <img
            className="imghover"
            src="/activities_mobile/1hover.png"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <div
        style={{ width: "100%" }}
        onMouseEnter={() => (isShown2 ? setIsShown2(false) : setIsShown2(true))}
      >
        {!isShown2 && (
          <img
            src="/activities_mobile/2.png"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        {isShown2 && (
          <img
            className="imghover"
            src="/activities_mobile/2hover.png"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <div
        style={{ width: "100%" }}
        onMouseEnter={() => (isShown3 ? setIsShown3(false) : setIsShown3(true))}
      >
        {!isShown3 && (
          <img
            src="/activities_mobile/3.png"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        {isShown3 && (
          <img
            className="imghover"
            src="/activities_mobile/3hover.png"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <div
        style={{ width: "100%" }}
        onMouseEnter={() => (isShown4 ? setIsShown4(false) : setIsShown4(true))}
      >
        {!isShown4 && (
          <img
            src="/activities_mobile/4.png"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        {isShown4 && (
          <img
            className="imghover"
            src="/activities_mobile/4hover.png"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
