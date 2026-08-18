import { create } from "zustand";
import { Store } from "../types/store";
import { createJobFilterSlice } from "./JobFilterSlice";


export const useStore = create<Store>()((...a) =>({
    ...createJobFilterSlice(...a),
}))