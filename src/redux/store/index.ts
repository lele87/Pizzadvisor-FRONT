import { configureStore } from "@reduxjs/toolkit";
import pizzeriasReducer from "../features/pizzeriasSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    pizzerias: pizzeriasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
