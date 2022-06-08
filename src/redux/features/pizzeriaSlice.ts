import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizzeria } from "../../types/types";

const initialState: IPizzeria = {
  name: "",
  address: "",
  image: "",
  timetable: "",
  specialty: "",
  owner: "",
  id: "",
};

const pizzeriaSlice = createSlice({
  name: "pizzeria",
  initialState,
  reducers: {
    loadPizzeria: (pizzeria, action: PayloadAction<IPizzeria>) => ({
      ...action.payload,
    }),
    blankState: () => initialState,
  },
});

export const {
  loadPizzeria: loadPizzeriaActionCreator,
  blankState: blankStateActionCreator,
} = pizzeriaSlice.actions;

export default pizzeriaSlice.reducer;
