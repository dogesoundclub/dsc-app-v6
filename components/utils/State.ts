import { create } from "zustand";

type State = {
  view: boolean;
  qrCode: string;
  setView: (view: boolean) => void;
  setQrCode: (qrCode: string) => void;
};

export const useStore = create<State>((set) => ({
  view: true,
  qrCode: "",
  setView: (view: boolean) => set((state) => ({ ...state, view })),
  setQrCode: (qrCode: string) => set((state) => ({ ...state, qrCode })),
}));