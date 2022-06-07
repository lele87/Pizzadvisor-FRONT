import { configureStore } from "@reduxjs/toolkit";
import pizzeriaReducer from "../features/pizzeriaSlice";
import pizzeriasReducer from "../features/pizzeriasSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pizzerias: pizzeriasReducer,
    pizzeria: pizzeriaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
