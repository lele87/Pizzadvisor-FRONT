import axios from "axios";
import { loadPizzeriasActionCreator } from "../features/pizzeriasSlice";
import { AppDispatch } from "../store";

export const loadPizzeriasThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/list`;

    try {
      const { data: pizzerias } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (pizzerias) {
        dispatch(loadPizzeriasActionCreator(pizzerias));
      }
    } catch (error: any) {
      return error.message;
    }
  };
