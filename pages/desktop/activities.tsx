import MainLayout from "../../components/MainLayout";
import SidebarLeft from "../../components/desktop/SidebarLeft";
import SidebarRight from "../../components/desktop/SidebarRight";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { identityURL, redirectURI } from "@/components/utils/discord";
import { getHederaMsg, getKlaytnMsg } from "@/services/discord";
import XPPage from "@/components/xp";
import { verifyStore } from "@/stores/verify.store";
import HashPackPairModal from "@/components/modal/HashPackPairModal";

export default function ActivitiesPage() {
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [open, setOpen] = useState(false);

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
      } else if (network === "hedera") setOpen(true);
      // getHederaMsg(code, hook.setResult, hook.setPairingString);
    }
    // setVerifyMsg({ state: "select", msg: "네트워크 선택" });
    // if (code && typeof code === "string" && address)
    //   getUserInfo(code, address).then((res) => setInit(res));
  }, [router.isReady, code, error]);

  return (
    <MainLayout>
      <XPPage />
      <HashPackPairModal open={open} setOpen={setOpen} code={code} />
      <div style={{ display: "flex" }}>
        <SidebarLeft></SidebarLeft>
        <div
          style={{
            flexBasis: "70%",
            background: "#fff",
            color: "#000",
            textAlign: "center",
            overflow: "scroll",
            height: "90vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "flex-end",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignContent: "flex-end",
                justifyContent: "flex-start",
                height: "50px",
                alignItems: "flex-end",
                width: "100%",
                fontFamily: "Audiowide",
              }}
            >
              <div
                style={{
                  color: "#36B167",
                  fontSize: "30px",
                  textDecoration: "underline",
                  paddingLeft: "40px",
                }}
              >
                ACTIVITIES{" "}
              </div>
              <div style={{ fontFamily: "Abel", paddingLeft: "20px" }}>
                We provide numerous contents that matches DSC&apos;s identity.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                background: "url(./activities/5.png)",
                padding: "10px",
                backgroundSize: "cover",
                color: "#fff",
                fontFamily: "Digital Numbers",
                width: "100%",
              }}
            >
              <span className="dodo">
                OPEN YOUR UNIVERSE. DSC WILL WELCOME YOU.
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <img src="/activities/0-0.png" style={{ width: "60%" }} />
              <img
                src="/activities/0-1.png"
                style={{ width: "20%" }}
                onClick={() => (location.href = identityURL("klaytn"))}
              />
              <img
                src="/activities/0-2.png"
                style={{ width: "20%" }}
                onClick={() => (location.href = identityURL("hedera"))}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{ width: "100%" }}
                onMouseEnter={() => setIsShown1(true)}
                onMouseLeave={() => setIsShown1(false)}
              >
                {!isShown1 && (
                  <img
                    className="img"
                    src="/activities/1.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
                {isShown1 && (
                  <img
                    className="imghover"
                    src="/activities/1hover.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>
              <div
                style={{ width: "100%" }}
                onMouseEnter={() => setIsShown2(true)}
                onMouseLeave={() => setIsShown2(false)}
              >
                {!isShown2 && (
                  <img
                    src="/activities/2.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
                {isShown2 && (
                  <img
                    className="imghover"
                    src="/activities/2hover.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{ width: "100%" }}
                onMouseEnter={() => setIsShown3(true)}
                onMouseLeave={() => setIsShown3(false)}
              >
                {!isShown3 && (
                  <img
                    src="/activities/3.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
                {isShown3 && (
                  <img
                    className="imghover"
                    src="/activities/3hover.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>
              <div
                style={{ width: "100%" }}
                onMouseEnter={() => setIsShown4(true)}
                onMouseLeave={() => setIsShown4(false)}
              >
                {!isShown4 && (
                  <img
                    src="/activities/4.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
                {isShown4 && (
                  <img
                    className="imghover"
                    src="/activities/4hover.png"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <SidebarRight></SidebarRight>
      </div>
    </MainLayout>
  );
}
