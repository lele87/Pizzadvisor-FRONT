import { useState } from "react";

const LoginForm = (): JSX.Element => {
  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <span className="welcome">Login Section</span>
      <form className="login-form" autoComplete="off" noValidate>
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
            className="signup"
            disabled={formData.username === "" || formData.password === ""}
            type="submit"
            onClick={() => {}}
          >
            LOGIN
          </button>
          <span>Don't you have an account?</span>
          <button className="button-secondary" onClick={() => {}}>
            SIGN UP
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
