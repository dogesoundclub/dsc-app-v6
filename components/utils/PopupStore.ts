import { create } from "zustand";

type State = {
  popup1: boolean;
  popup2: boolean;
  popup3: boolean;
  popup4: boolean;
  setPopup1: (popup1: boolean) => void;
  setPopup2: (popup2: boolean) => void;
  setPopup3: (popup3: boolean) => void;
  setPopup4: (popup4: boolean) => void;
};

export const usePopupStore = create<State>((set) => ({
  popup1: true,
  popup2: true,
  popup3: true,
  popup4: true,
  setPopup1: (popup1: boolean) => set((state) => ({ ...state, popup1 })),
  setPopup2: (popup2: boolean) => set((state) => ({ ...state, popup2 })),
  setPopup3: (popup3: boolean) => set((state) => ({ ...state, popup3 })),
  setPopup4: (popup4: boolean) => set((state) => ({ ...state, popup4 })),
}));