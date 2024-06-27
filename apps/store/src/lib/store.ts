import { create } from 'zustand'

interface IStore {
  count: number
  increaseCount: () => void
}

export const useStore = create<IStore>((set) => ({
  count: 0,
  increaseCount: () => set(({ count }) => ({ count: count + 1 }))
}))

