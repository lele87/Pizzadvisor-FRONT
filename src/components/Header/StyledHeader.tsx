import styled from "styled-components";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  background-color: #fafafa;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 3rem 3rem;
  margin-bottom: 30px;
  margin-top: 10px;
  margin: 0 auto;
  width: 100%;
  z-index: 999;

  .navlink-home {
    text-decoration: none;
    color: black;
  }

  h1 {
    @media (max-width: 320px) {
      font-size: 18px;
    }
  }

  .logout-button {
    width: 120px;
    height: 50px;
    border-radius: 4rem;
    background-color: #ff5b5b;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: black;
    border: none;
    cursor: pointer;
    font-family: "Roboto";
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 18px;

    @media (max-width: 320px) {
      width: 70px;
      height: 20px;
    }
  }

  .create-button {
    width: 140px;
    height: 50px;
    border-radius: 4rem;
    background-color: #189d11;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: black;
    border: none;
    cursor: pointer;
    font-family: "Roboto";
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 18px;
    @media (max-width: 699px) {
      display: none;
    }
  }
`;

export default StyledHeader;
