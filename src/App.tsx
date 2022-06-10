import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Toaster } from "react-hot-toast";
import Controller from "./components/Controller/Controller";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { loadPizzeriasThunk } from "./redux/thunks/pizzeriasThunks";
import { loginActionCreator } from "./redux/features/userSlice";
import { DecodeToken } from "./types/types";
import jwtDecode from "jwt-decode";
import PizzeriaFormPage from "./pages/PizzeriaFormPage.tsx/PizzeriaFormPage";
import AntiController from "./components/AntiController/AntiController";
import EditPizzeriaPage from "./pages/EditPizzeriaPage.tsx/EditPizzeriaPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user.logged);
  const pizzeria = useAppSelector((state) => state.pizzeria);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loadPizzeriasThunk(5));
      const { name, username, id }: DecodeToken = jwtDecode(token);
      dispatch(loginActionCreator({ name, username, id }));
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <AntiController>
              <LoginPage />
            </AntiController>
          }
        />
        <Route
          path="/register"
          element={
            <AntiController>
              <RegisterPage />
            </AntiController>
          }
        />
        <Route
          path="/home"
          element={
            <Controller>
              <HomePage />
            </Controller>
          }
        />
        <Route
          path="/createpizzeria"
          element={
            <Controller>
              <PizzeriaFormPage />
            </Controller>
          }
        />
        <Route
          path="/editpizzeria/:idPizzeria"
          element={<EditPizzeriaPage />}
        />
        <Route
          path="/pizzerias/:idPizzeria"
          element={<DetailsPage pizzeria={pizzeria} />}
        />
      </Routes>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "2px solid #ff5b5b",
            padding: "16px",
            color: "#ff5b5b",
            background: "white",
          },
        }}
        containerStyle={{
          top: 100,
          left: 100,
          right: 100,
        }}
      />
    </>
  );
}

export default App;
