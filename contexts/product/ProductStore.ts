import { create } from "zustand"

type ProductStoreType = {
  color: string,
  setColor: (color: string) => void,
  size: string ,
  setSize: (size: string) => void,
  active: boolean,
  setActive: (state: boolean) => void,
  message: string,
  setMessage: (msg: string) => void,
  messageHeading:string,
  setMessageHeading:(msg:string)=>void
}

export const useProductStore = create<ProductStoreType>((set) => ({
  color: "",
  setColor: (color) => set({ color }),

  size: "",
  setSize: (size) => set({ size }),

  active: false,
  setActive: (state) => set({ active: state }),

  message: "",
  setMessage: (msg) => set({ message: msg }),

  messageHeading:"",
  setMessageHeading:(msg)=>set({messageHeading:msg})
}))
