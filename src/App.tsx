import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Toaster } from "react-hot-toast";
import Controller from "./components/Controller/Controller";
import { useAppDispatch } from "./redux/store/hooks";
import { loadPizzeriasThunk } from "./redux/thunks/pizzeriathunks";
import { loginActionCreator } from "./redux/features/userSlice";
import { DecodeToken } from "./types/types";
import jwtDecode from "jwt-decode";
import PizzeriaFormPage from "./pages/PizzeriaFormPage.tsx/PizzeriaFormPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loadPizzeriasThunk());
      const { name, username, id }: DecodeToken = jwtDecode(token);
      dispatch(loginActionCreator({ name, username, id }));
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <Controller>
              <HomePage />
            </Controller>
          }
        />
        <Route
          path="/form"
          element={
            <Controller>
              <PizzeriaFormPage />
            </Controller>
          }
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
