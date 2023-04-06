import { create } from "zustand";
export type VerifyResult = "ready" | "success" | "fail";
export type VerifyNetwork = "hedera" | "klaytn";
type VerifyStore = {
  modal: boolean;
  result: VerifyResult;
  resultMsg: string;
  pairingString: string | null;
  network: VerifyNetwork | null;
  setPairingString: (pairingString: string) => void;
  setResult: (result: VerifyResult, network: VerifyNetwork) => void;
  init: () => void;
};
const msgs = ["Certification successfully finished!", "Certification failed"];
export const verifyStore = create<VerifyStore>((set, get) => ({
  modal: false,
  result: "ready",
  resultMsg: "",
  pairingString: null,
  network: null,
  setPairingString: (pairingString) => set({ pairingString: pairingString }),
  setResult: (result, network) => {
    if (result !== "ready") {
      const msg = result === "fail" ? msgs[1] : msgs[0];
      set(() => ({
        modal: true,
        result: result,
        resultMsg: msg,
        network: network,
      }));
    } else
      set(() => ({
        modal: false,
        result: result,
        resultMsg: "",
        network: null,
      }));
  },
  init: () =>
    set(() => ({
      modal: false,
      result: "ready",
      resultMsg: "",
      network: null,
    })),
}));
