import { useState } from "react";
import { useAppDispatch } from "../../redux/store/hooks";
import { registerThunk } from "../../redux/thunks/userThunks";
import StyledRegisterForm from "./StyledRegisterForm";

const RegisterForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const dispatch = useAppDispatch();

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
            <button className="button-secondary" onClick={() => {}}>
              LOGIN
            </button>
          </div>
        </form>
      </StyledRegisterForm>
    </>
  );
};

export default RegisterForm;
