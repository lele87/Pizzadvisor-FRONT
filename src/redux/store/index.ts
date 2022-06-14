import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../features/paginationSlice";
import pizzeriaReducer from "../features/pizzeriaSlice";
import pizzeriasReducer from "../features/pizzeriasSlice";
import userReducer from "../features/userSlice";
import uiReducer from "../thunks/uiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pizzerias: pizzeriasReducer,
    pizzeria: pizzeriaReducer,
    pages: paginationReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
