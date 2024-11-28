import { create } from "zustand";

export interface CounterStore {
    count: number;

    incrementBy: (value: number) => void;
}

export const useCounterStore = create<CounterStore>()((set, get) => ({
    count: 0,

    incrementBy: (value: number) => set((state) => ({ count: state.count + value }))
}))