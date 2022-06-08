import styled from "styled-components";

const StyledPizzeriaForm = styled.div`
  background-color: #ffffff;
  width: 380px;
  height: 100%;
  border-radius: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 4rem;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  background-color: #fafafa;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  padding-top: 30px;
  font-family: "Roboto";

  .welcome-form {
    font-style: normal;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 1px;
    color: #2d2a2a;
    padding-bottom: 15px;
    margin-bottom: 15px;
    margin-top: 10px;
    padding-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 16rem;
    margin: 0 2rem;
  }

  input {
    color: rgb(38, 50, 56);
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #ff5b5b;
    margin-bottom: 50px;
    text-align: center;
    margin-bottom: 27px;
    font-weight: 300;
  }

  label {
    margin: 0;
    text-align: center;
    padding-bottom: 10px;
    font-weight: 300;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: 1px;
  }

  input:focus,
  input:focus {
    border: 1px solid rgba(0, 0, 0, 0.18);
  }

  .form-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .submit-button {
    width: 75%;
    height: 45px;
    justify-content: center;
    display: block;
    color: #fff;
    background: #ff5b5b;
    font-size: 1em;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 20px;
    transition: 0.2s ease-in;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 20px;
    font-weight: 400;
  }

  input::placeholder {
    color: #ff5b5b;
    font-family: "Roboto";
    margin-top: 20px;
  }

  .signup-info {
    position: relative;
    font-size: 14px;
    top: 10px;
    cursor: pointer;
  }
`;

export default StyledPizzeriaForm;
