import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

interface State {
  userInfo: User;
  logged: boolean;
}

const initialState: State = {
  userInfo: {
    username: "",
    name: "",
    id: "",
  },
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (user, action: PayloadAction<User>) => ({
      userInfo: { ...action.payload },
      logged: false,
    }),
    login: (user, action: PayloadAction<User>) => ({
      userInfo: { ...action.payload },
      logged: true,
    }),
    logout: (user) => ({
      userInfo: {
        username: "",
        name: "",
        id: "",
      },
      logged: false,
    }),
  },
});

export const {
  register: registerActionCreator,
  login: loginActionCreator,
  logout: logoutActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
