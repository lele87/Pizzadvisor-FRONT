import StyledHeader from "./StyledHeader";

const Header = (): JSX.Element => {
  return (
    <>
      <StyledHeader>
        <h1 className="logo-title">Pizzadvisor</h1>
        <button className="logout-button">LOGOUT</button>
      </StyledHeader>
    </>
  );
};

export default Header;
