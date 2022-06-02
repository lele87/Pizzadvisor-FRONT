import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";
import { AppDispatch } from "../store";
import toast from "react-hot-toast";

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

    try {
      toast.loading("Loading...");
      const { data } = await axios.post(url, userData);

      toast.dismiss();
      toast.success("You have succesfully registered!");

      if (data) {
        const newUser = {
          username: userData.username,
          password: userData.password,
        };
        dispatch(loginThunk(newUser));
      }
      dispatch(registerActionCreator(data));
    } catch (error: any) {
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };

export const loginThunk =
  (userData: UserLogin) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/login`;

    try {
      toast.loading("Loading...");
      const {
        data: { token },
      }: ResponseApi = await axios.post(url, userData);

      if (token) {
        const { name, username, id }: DecodeToken = jwtDecode(token);
        dispatch(loginActionCreator({ name, username, id }));
        localStorage.setItem("token", token);
        toast.dismiss();
        toast.success("Successfully logged");
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error("Wrong username or password");
      return error.message;
    }
  };
