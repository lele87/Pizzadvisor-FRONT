import axios from "axios";
import { loadPizzeriaActionCreator } from "../features/pizzeriaSlice";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../features/userISlice";
import { AppDispatch } from "../store";

export const loadPizzeriaThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/${id}`;
    const token = localStorage.getItem("token");

    try {
      dispatch(loadedOnActionCreator());
      const { data: pizzeria } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (pizzeria) {
        dispatch(loadPizzeriaActionCreator(pizzeria));
        dispatch(loadedOffActionCreator());
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      return error.message;
    }
  };
