import { create } from "zustand";

type State = {
  view: boolean;
  klip: boolean;
  count: number;
  setView: (view: boolean) => void;
  setklip: (klip: boolean) => void;
  setCnt: (count: number) => void;
};

export const useStateStore = create<State>((set) => ({
  view: true,
  klip: true,
  count: 0,
  setView: (view: boolean) => set((state) => ({ ...state, view })),
  setklip: (klip: boolean) => set((state) => ({ ...state, klip })),
  setCnt: (count: number) => set((state) => ({ ...state, count })),
}));