import axios from "axios";
import toast from "react-hot-toast";
import { setPagesActionCreator } from "../features/paginationSlice";
import {
  createPizzeriaActionCreator,
  deletePizzeriaActionCreator,
  editPizzeriaActionCreator,
  loadFavouritePizzeriasActionCreator,
  loadPizzeriasActionCreator,
} from "../features/pizzeriasSlice";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../features/userISlice";
import { AppDispatch } from "../store";

export const loadPizzeriasThunk =
  (filter: string, limit: number) => async (dispatch: AppDispatch) => {
    const url: string = `${
      process.env.REACT_APP_API_URL
    }pizzerias/list?filter=${filter === "All" ? "" : filter}&limit=${limit}`;
    const token = localStorage.getItem("token");

    try {
      dispatch(loadedOnActionCreator());
      const {
        data: { pizzerias, pages },
      } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (pizzerias) {
        dispatch(setPagesActionCreator(pages));
        dispatch(loadPizzeriasActionCreator(pizzerias));
        dispatch(loadedOffActionCreator());
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());

      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };

export const deletePizzeriaThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/${id}`;
    const token = localStorage.getItem("token");
    try {
      dispatch(loadedOnActionCreator());
      const { status } = await axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(loadedOffActionCreator());
      if (status === 200) {
        dispatch(deletePizzeriaActionCreator(id));
        toast.dismiss();
        toast.success("You deleted a pizzeria");
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };

export const createPizzeriaThunk =
  (pizzeriaData: any) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}pizzerias/`;
    const token = localStorage.getItem("token");

    try {
      dispatch(loadedOnActionCreator());
      const {
        data: { newPizzeria },
      } = await axios.post(url, pizzeriaData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.dismiss();
      toast.success("You added a pizzeria");

      if (newPizzeria) {
        dispatch(loadedOffActionCreator());
        dispatch(createPizzeriaActionCreator(newPizzeria));
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
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
      dispatch(loadedOnActionCreator());
      const {
        data: { updatedPizzeria },
      } = await axios.patch(url, pizzeriaData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.dismiss();
      toast.success("You edited a pizzeria");

      if (updatedPizzeria) {
        dispatch(loadedOffActionCreator());
        dispatch(editPizzeriaActionCreator(updatedPizzeria));
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };

export const loadFavouritePizzeriasThunk =
  (userId: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}users/${userId}`;
    const token = localStorage.getItem("token");

    try {
      loadedOnActionCreator();
      const {
        data: { pizzerias },
      } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (pizzerias) {
        dispatch(loadFavouritePizzeriasActionCreator(pizzerias));
        dispatch(loadedOffActionCreator());
      }
    } catch (error: any) {
      dispatch(loadedOffActionCreator());
      toast.dismiss();
      toast.error("Something went wrong");
      return error.message;
    }
  };
