import LoginForm from "../../components/LoginForm/LoginForm";
import styled from "styled-components";

const StyledLoginPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginPage = (): JSX.Element => {
  return (
    <StyledLoginPage>
      <h1 className="logo-title">Pizzadvisor</h1>
      <LoginForm />
    </StyledLoginPage>
  );
};

export default LoginPage;
