import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "../features/paginationSlice";
import pizzeriaReducer from "../features/pizzeriaSlice";
import pizzeriasReducer from "../features/pizzeriasSlice";
import userIReducer from "../features/userISlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pizzerias: pizzeriasReducer,
    pizzeria: pizzeriaReducer,
    pages: paginationReducer,
    ui: userIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
