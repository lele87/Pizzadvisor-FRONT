import { useState } from "react";

const RegisterForm = (): JSX.Element => {
  const blankFields = {
    name: "",
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
      <p className="welcome">Create account</p>
      <form className="register-form" autoComplete="off" noValidate>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={formData.name}
          type="text"
          onChange={changeData}
          placeholder="Name"
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={formData.username}
          type="text"
          onChange={changeData}
          placeholder="Username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={changeData}
          value={formData.password}
          placeholder="Password"
        />

        <div className="form-buttons">
          <button className="signup" type="submit">
            SIGN UP
          </button>
          <button className="button-secondary">LOGIN</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
