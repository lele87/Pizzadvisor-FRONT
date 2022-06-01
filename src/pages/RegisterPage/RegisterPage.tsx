import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styled from "styled-components";

const StyledRegisterPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const RegisterPage = (): JSX.Element => {
  return (
    <StyledRegisterPage>
      <h1 className="logo-title">Pizzadvisor</h1>
      <RegisterForm />;
    </StyledRegisterPage>
  );
};

export default RegisterPage;
