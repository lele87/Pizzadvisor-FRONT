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
    createPizzeria: (pizzerias, action: PayloadAction<IPizzeria>) => [
      ...pizzerias,
      action.payload,
    ],
    editPizzeria: (pizzerias, action: PayloadAction<IPizzeria>) =>
      pizzerias.map((pizzeria) =>
        pizzeria.id === action.payload.id ? action.payload : pizzeria
      ),
  },
});

export const {
  loadPizzerias: loadPizzeriasActionCreator,
  deletePizzeria: deletePizzeriaActionCreator,
  createPizzeria: createPizzeriaActionCreator,
  editPizzeria: editPizzeriaActionCreator,
} = pizzeriasSlice.actions;

export default pizzeriasSlice.reducer;
