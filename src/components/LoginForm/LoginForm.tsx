import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loginThunk } from "../../redux/thunks/userThunks";
import StyledLoginForm from "./StyledLoginForm";

const LoginForm = (): JSX.Element => {
  const blankFields = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState(blankFields);
  const dispatch = useAppDispatch();

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const navigateToRegister = () => {
    navigate("/register");
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    dispatch(loginThunk(formData));
    setFormData(blankFields);
  };

  return (
    <>
      <StyledLoginForm>
        <span className="welcome">Login Section</span>
        <form
          className="login-form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
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
            value={formData.password}
            type="password"
            onChange={changeData}
            placeholder="PASSWORD"
          />
          <div className="form-buttons">
            <button
              className="login"
              disabled={formData.username === "" || formData.password === ""}
              type="submit"
            >
              LOGIN
            </button>
            <span className="signup-info">Don't you have an account?</span>
            <button className="button-secondary" onClick={navigateToRegister}>
              SIGN UP
            </button>
          </div>
        </form>
      </StyledLoginForm>
    </>
  );
};

export default LoginForm;
