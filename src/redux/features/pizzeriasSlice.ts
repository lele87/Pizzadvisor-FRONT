import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizzeria } from "../../types/types";

const initialState: IPizzeria[] = [];

const pizzeriasSlice = createSlice({
  name: "pizzerias",
  initialState,
  reducers: {
    loadPizzerias: (pizzerias, action: PayloadAction<IPizzeria[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadPizzerias: loadPizzeriasActionCreator } =
  pizzeriasSlice.actions;

export default pizzeriasSlice.reducer;
