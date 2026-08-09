import { create } from "zustand";
import { Store } from "../types/store";
import { createProductFilterSlice } from "./ProductFilterSlice";


export const useStore = create<Store>()((...a) =>({
    ...createProductFilterSlice(...a),
}))