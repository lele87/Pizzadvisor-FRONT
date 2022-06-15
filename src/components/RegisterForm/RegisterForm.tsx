import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

  return (
    <>
      <StyledRegisterForm>
        <span className="welcome">Create account</span>
        <form className="register-form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            formNoValidate
            autoComplete="off"
            value={formData.name}
            type="text"
            onChange={changeData}
            placeholder="NAME"
          />
          <label htmlFor="username">Username</label>
          <input
            id="username"
            formNoValidate
            autoComplete="off"
            value={formData.username}
            type="text"
            onChange={changeData}
            placeholder="USERNAME"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            formNoValidate
            autoComplete="off"
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
            <NavLink to={"/login"} style={{ textDecoration: "none" }}>
              <span className="change-form__link">Log In</span>
            </NavLink>
          </div>
        </form>
      </StyledRegisterForm>
    </>
  );
};

export default RegisterForm;
