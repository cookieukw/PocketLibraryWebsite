import { create } from "zustand"

type MobileDrawer = {
  isOpen: boolean
}

type MobileDrawerStoreType = {
  mobileDrawer: MobileDrawer
  setMobileDrawer: (isOpen: boolean) => void
}

export const useMobileDrawerStore = create<MobileDrawerStoreType>((set) => {
  return {
    mobileDrawer: {
      isOpen: false
    },
    setMobileDrawer: (isOpen: boolean) =>
      set((state) => ({ ...state, mobileDrawer: { isOpen } }))
  }
})
