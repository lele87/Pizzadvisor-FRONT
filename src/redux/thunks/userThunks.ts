import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";
import { AppDispatch } from "../store";

interface UserRegister {
  name: string;
  username: string;
  password: string;
}

interface UserLogin {
  username: string;
  password: string;
}

interface ResponseApi {
  data: {
    token: string;
  };
}

interface DecodeToken {
  name: string;
  username: string;
  id: string;
}

export const registerThunk =
  (userData: UserRegister) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;
    const { data } = await axios.post(url, userData);
    if (data) {
      const newUser = {
        username: data.username,
        password: data.password,
      };
      dispatch(loginThunk(newUser));
    }
    dispatch(registerActionCreator(data));
  };

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;

    try {
      const {
        data: { token },
      }: ResponseApi = await axios.post(url, userData);

      if (token) {
        const { name, username, id }: DecodeToken = jwtDecode(token);
        dispatch(loginActionCreator({ name, username, id }));
        localStorage.setItem("token", token);
      }
    } catch (error: any) {
      return error.message;
    }
  };
