import { create } from "zustand";

type StoreProps = {
  currentView: string;
  setCurrentView: (value: string) => void;
};

const useStore = create<StoreProps>((set) => ({
  currentView: "home",
  setCurrentView: (value) => set({ currentView: value }),
}));

export default useStore;
