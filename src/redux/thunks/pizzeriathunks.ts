import axios from "axios";
import { loadPizzeriasActionCreator } from "../features/pizzeriasSlice";
import { AppDispatch } from "../store";
import toast from "react-hot-toast";

export const loadPizzeriasThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/list`;

    try {
      toast.loading("Loading...");
      const { data: pizzerias } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.dismiss();

      if (pizzerias) {
        dispatch(loadPizzeriasActionCreator(pizzerias));
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };
