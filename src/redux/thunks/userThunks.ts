import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { registerActionCreator } from "../features/userSlice";

interface UserRegister {
  name: string;
  username: string;
  password: string;
}

export const registerThunk =
  (userData: UserRegister) => async (dispatch: Dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}user/register`;

    const { data } = await axios.post(url, userData);
    if (data) {
      const newUser = {
        username: data.username,
        password: data.password,
      };
    }
    dispatch(registerActionCreator(data));
  };
