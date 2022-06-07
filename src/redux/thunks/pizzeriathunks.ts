import axios from "axios";
import { loadPizzeriaActionCreator } from "../features/pizzeriaSlice";
import { AppDispatch } from "../store";

export const loadPizzeriaThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/:${id}`;
    const token = localStorage.getItem("token");
    try {
      const {
        data: { pizzeria },
      } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (pizzeria) {
        dispatch(loadPizzeriaActionCreator(pizzeria));
      }
    } catch (error: any) {
      return error.message;
    }
  };
