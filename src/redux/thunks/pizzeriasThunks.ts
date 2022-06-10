import axios from "axios";
import toast from "react-hot-toast";
import {
  createPizzeriaActionCreator,
  deletePizzeriaActionCreator,
  editPizzeriaActionCreator,
  loadPizzeriasActionCreator,
} from "../features/pizzeriasSlice";
import { AppDispatch } from "../store";

export const loadPizzeriasThunk =
  (limit: number) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/list?limit=${limit}`;
    const token = localStorage.getItem("token");

    try {
      const {
        data: { pizzerias },
      } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (pizzerias) {
        dispatch(loadPizzeriasActionCreator(pizzerias));
      }
    } catch (error: any) {
      return error.message;
    }
  };

export const deletePizzeriaThunk =
  (id: string) => async (dispatch: AppDispatch) => {
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

export const createPizzeriaThunk =
  (pizzeriaData: any) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/`;
    const token = localStorage.getItem("token");

    try {
      toast.loading("Loading...");
      const {
        data: { newPizzeria },
      } = await axios.post(url, pizzeriaData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.dismiss();
      toast.success("You added a pizzeria");

      if (newPizzeria) {
        dispatch(createPizzeriaActionCreator(newPizzeria));
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };

export const editPizzeriaThunk =
  (id: string, pizzeriaData: any) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/${id}`;
    const token = localStorage.getItem("token");

    try {
      const {
        data: { updatedPizzeria },
      } = await axios.patch(url, pizzeriaData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.dismiss();
      toast.success("You edited a pizzeria");

      if (updatedPizzeria) {
        dispatch(editPizzeriaActionCreator(updatedPizzeria));
      }
    } catch (error: any) {
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };
