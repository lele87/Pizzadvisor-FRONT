import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Toaster } from "react-hot-toast";
import Controller from "./components/Controller/Controller";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import PizzeriaFormPage from "./pages/PizzeriaFormPage.tsx/PizzeriaFormPage";
import AntiController from "./components/AntiController/AntiController";
import EditPizzeriaPage from "./pages/EditPizzeriaPage.tsx/EditPizzeriaPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { useEffect } from "react";
import { DecodeToken } from "./types/types";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";

function App() {
  const pizzeria = useAppSelector((state) => state.pizzeria);
  const { logged } = useAppSelector((state) => state.user);
  const { loaded } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { name, username, id }: DecodeToken = jwtDecode(token);
      dispatch(loginActionCreator({ name, username, id }));
    }
  }, [dispatch, logged]);

  return (
    <>
      {loaded && <LoadingSpinner />}
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
          element={
            <Controller>
              <EditPizzeriaPage />
            </Controller>
          }
        />
        <Route
          path="/pizzerias/:idPizzeria"
          element={
            <Controller>
              <DetailsPage pizzeria={pizzeria} />
            </Controller>
          }
        />
        <Route
          path="/favourites"
          element={
            <Controller>
              <FavouritesPage />
            </Controller>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
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
