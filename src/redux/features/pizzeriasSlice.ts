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
    deletePizzeria: (pizzerias, action: PayloadAction<string>) =>
      pizzerias.filter((pizzeria) => pizzeria.id !== action.payload),
  },
});

export const {
  loadPizzerias: loadPizzeriasActionCreator,
  deletePizzeria: deletePizzeriaActionCreator,
} = pizzeriasSlice.actions;

export default pizzeriasSlice.reducer;
