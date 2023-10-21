import { create } from 'zustand'

interface ClickState {
  isClicked: boolean
  setIsClick: (value: ClickState['isClicked']) => void
}

export const useOnClickStore = create<ClickState>((set) => ({
  isClicked: false,
  setIsClick: (value: any) => set(() => ({ isClicked: value })),
}))

interface State {}

export const useStateStore = create<State>((set) => ({}))
