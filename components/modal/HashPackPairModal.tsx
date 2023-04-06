import { getHederaMsg } from "@/services/discord";
import { verifyStore } from "@/stores/verify.store";
import { useEffect, useRef } from "react";
import { BiCopy } from "react-icons/bi";
import { useQRCode } from "next-qrcode";
import { HashConnect } from "hashconnect";
import { useRouter } from "next/router";

type HashPackPairModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  code: string | string[] | undefined;
};

export default function HashPackPairModal({
  open,
  setOpen,
  code,
}: HashPackPairModalProps) {
  const { Canvas } = useQRCode();
  // let hashConnect: HashConnect;
  const hashConnect = useRef<HashConnect>();
  const hook = verifyStore();
  const router = useRouter();

  const copyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (e) {
      alert("복사에 실패하였습니다");
    }
  };

  useEffect(() => {
    if (open && code && typeof code === "string") {
      hashConnect.current = new HashConnect();
      const appMetadata = {
        name: "Monshoecl Holder Verify",
        description: "Monshoecl Holder Verify",
        icon: "https://dogesound.club/favicon.ico",
        url: "https://dogesound.club",
      };
      hashConnect.current
        .init(appMetadata, "mainnet", true)
        .then((res) => hook.setPairingString(res.pairingString));
      getHederaMsg(code, hashConnect.current, hook.setResult, setOpen);
    }
  }, [code, open]);
  // hashConnect = getHederaMsg(code, hook.setResult, hook.setPairingString);

  if (!open || !code) return <></>;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "brightness(0.5)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
      }}
    >
      <div className=" w-[500px] h-[500px] bg-[#1f1d2b] rounded-2xl flex flex-col p-5 text-white relative overflow-hidden gap-1">
        <p>Pair with code:</p>
        <div className="h-[40px] w-[200px] bg-[#252836] rounded-lg flex items-center justify-between px-3 overflow-hidden">
          <div className="w-[150px] overflow-hidden ">
            <p className="overflow-ellipsis overflow-hidden">
              {hook.pairingString}
            </p>
          </div>
          <BiCopy
            size={20}
            color="white"
            className="hover:opacity-80 cursor-pointer"
            onClick={() =>
              hook.pairingString && copyClipBoard(hook.pairingString)
            }
          />
        </div>
        <div className="h-[40px] w-[200px] bg-[#252836] rounded-lg flex items-center justify-between px-3 overflow-hidden">
          <div className="w-[150px] overflow-hidden ">
            <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">
              {location.origin + router.asPath}
            </p>
          </div>
          <BiCopy
            size={20}
            color="white"
            className="hover:opacity-80 cursor-pointer"
            onClick={() =>
              hook.pairingString &&
              copyClipBoard(location.origin + router.asPath)
            }
          />
        </div>
        <p>Pair with installed extension:</p>
        <div
          className="w-[180px] h-[40px] flex items-center justify-center bg-[#525298] rounded-lg cursor-pointer hover:bg-[#52529850]"
          onClick={() =>
            hashConnect.current && hashConnect.current.connectToLocalWallet()
          }
        >
          <p>Pair with Hashpack</p>
        </div>
        <p>Pair with QR:</p>
        <div>
          {hook.pairingString && (
            <Canvas
              text={hook.pairingString}
              options={{
                level: "M",
                margin: 3,
                scale: 4,
                width: 220,
                color: {
                  dark: "#000",
                  light: "#fff",
                },
              }}
            />
          )}
        </div>
        <div className="w-full absolute bottom-0 left-0 bg-[#252836] h-[50px] border-t border-[#2e314b] flex items-center justify-end px-5">
          <div
            className="cursor-pointer bg-[#c62828] hover:bg-[#c6282890] h-[30px] px-5 flex justify-center items-center rounded-lg"
            onClick={() => (location.href = "/activities")}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
