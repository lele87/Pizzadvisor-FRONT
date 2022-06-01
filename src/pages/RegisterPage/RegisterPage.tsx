import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styled from "styled-components";

const StyledRegisterPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-family: "Abadi MT Condensed";
    letter-spacing: 3px;
    font-weight: 500;
  }
`;

const RegisterPage = (): JSX.Element => {
  return (
    <StyledRegisterPage>
      <h1>Pizzadvisor</h1>
      <RegisterForm />;
    </StyledRegisterPage>
  );
};

export default RegisterPage;
