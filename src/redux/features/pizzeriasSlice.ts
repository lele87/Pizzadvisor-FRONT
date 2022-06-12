import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizzeria, IPizzeriaState } from "../../types/types";

const initialState: IPizzeriaState = {
  pizzeriaInfo: [],
  filter: "All",
};

const pizzeriasSlice = createSlice({
  name: "pizzerias",
  initialState,
  reducers: {
    loadPizzerias: (pizzerias, action: PayloadAction<IPizzeria[]>) => ({
      ...pizzerias,
      pizzeriaInfo: [...action.payload],
    }),

    deletePizzeria: (pizzerias, action: PayloadAction<string>) => ({
      ...pizzerias,
      pizzeriaInfo: pizzerias.pizzeriaInfo.filter(
        (pizzeria) => pizzeria.id !== action.payload
      ),
    }),
    createPizzeria: (pizzerias, action: PayloadAction<IPizzeria>) => ({
      ...pizzerias,
      pizzeriaInfo: [...pizzerias.pizzeriaInfo, action.payload],
    }),
    editPizzeria: (pizzerias, action: PayloadAction<IPizzeria>) => ({
      ...pizzerias,
      pizzeriaInfo: pizzerias.pizzeriaInfo.map((pizzeria) =>
        pizzeria.id === action.payload.id ? action.payload : pizzeria
      ),
    }),
    filterPizzerias: (pizzerias, action: PayloadAction<string>) => ({
      ...pizzerias,
      filter: action.payload,
    }),
  },
});

export const {
  loadPizzerias: loadPizzeriasActionCreator,
  deletePizzeria: deletePizzeriaActionCreator,
  createPizzeria: createPizzeriaActionCreator,
  editPizzeria: editPizzeriaActionCreator,
  filterPizzerias: filterPizzeriasActionCreator,
} = pizzeriasSlice.actions;

export default pizzeriasSlice.reducer;
