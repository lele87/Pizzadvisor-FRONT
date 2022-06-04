import axios from "axios";
import {
  deletePizzeriaActionCreator,
  loadPizzeriasActionCreator,
} from "../features/pizzeriasSlice";
import { AppDispatch } from "../store";

export const loadPizzeriasThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}pizzerias/list`;
  const token = localStorage.getItem("token");
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

export const deletePizzeria = (id: string) => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}pizzerias/${id}`;
  const token = localStorage.getItem("token");
  try {
    const { status } = await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (status === 200) {
      dispatch(deletePizzeriaActionCreator(id));
    }
  } catch (error: any) {
    return error.message;
  }
};
