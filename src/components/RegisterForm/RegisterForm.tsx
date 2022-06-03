import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { registerThunk } from "../../redux/thunks/userThunks";
import StyledRegisterForm from "./StyledRegisterForm";

const RegisterForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(blankFields);
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const register = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setFormData(blankFields);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <StyledRegisterForm>
        <span className="welcome">Create account</span>
        <form className="register-form" autoComplete="off" noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={formData.name}
            type="text"
            onChange={changeData}
            placeholder="NAME"
          />
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={formData.username}
            type="text"
            onChange={changeData}
            placeholder="USERNAME"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={changeData}
            value={formData.password}
            placeholder="PASSWORD"
          />

          <div className="form-buttons">
            <button
              className="signup"
              disabled={
                formData.username === "" ||
                formData.password === "" ||
                formData.name === ""
              }
              type="submit"
              onClick={register}
            >
              SIGN UP
            </button>
            <span className="signup-info">Do you have an account?</span>
            <button className="button-secondary" onClick={navigateToLogin}>
              LOGIN
            </button>
          </div>
        </form>
      </StyledRegisterForm>
    </>
  );
};

export default RegisterForm;
