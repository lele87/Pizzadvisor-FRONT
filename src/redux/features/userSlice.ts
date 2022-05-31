import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

interface State {
  userInfo: User;
  logged: Boolean;
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
  },
});

export const { register: registerActionCreator } = userSlice.actions;

export default userSlice.reducer;
