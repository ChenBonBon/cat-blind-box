import { create } from "zustand";

export type Checker = number | null;

interface State {
  luckyColor: number | null;
  luckyColorsVisible: boolean;
  colorsInBag: Record<number, number>;
  chanceCount: number;
  checkerboard: Checker[];
  lastRoundCheckerBoard: Checker[];
  music: boolean;
  setLuckyColor: (color: number | null) => void;
  setLuckyColorsVisible: (visible: boolean) => void;
  setColorsInBag: (colors: Record<number, number>) => void;
  setChanceCount: (count: number) => void;
  addChanceCount: (count?: number) => void;
  reduceChance: (count: number) => void;
  setCheckerboard: (checkerboard: Checker[]) => void;
  setLastRoundCheckerBoard: (checkerboard: Checker[]) => void;
  setMusic: (music: boolean) => void;
}

const useStore = create<State>()((set) => ({
  luckyColor: null,
  luckyColorsVisible: false,
  colorsInBag: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 },
  chanceCount: 0,
  checkerboard: new Array(9).fill(null),
  lastRoundCheckerBoard: new Array(9).fill(null),
  music: false,
  setLuckyColor: (color) => set({ luckyColor: color }),
  setLuckyColorsVisible: (visible) => set({ luckyColorsVisible: visible }),
  setColorsInBag: (colors) => set({ colorsInBag: colors }),
  setChanceCount: (count) => set({ chanceCount: count }),
  addChanceCount: (count) =>
    set((state) => ({ chanceCount: state.chanceCount + (count ?? 1) })),
  reduceChance: (count: number) =>
    set((state) => ({ chanceCount: state.chanceCount - count })),
  setCheckerboard: (checkerboard) => set({ checkerboard }),
  setLastRoundCheckerBoard: (checkerboard) =>
    set({ lastRoundCheckerBoard: checkerboard }),
  setMusic: (music) => set({ music }),
}));

export default useStore;
