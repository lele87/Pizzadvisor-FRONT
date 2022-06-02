import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
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
