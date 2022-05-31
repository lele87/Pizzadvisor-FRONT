import axios from "axios";
import { registerActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store";

interface UserRegister {
  name: string;
  username: string;
  password: string;
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
    }
    dispatch(registerActionCreator(data));
  };
