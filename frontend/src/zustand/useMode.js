import { create } from "zustand"

const  useMode = create((set) => ({
    mode: "dark",
    setMode: (mode) => set({ mode })
    
}))

export default useMode