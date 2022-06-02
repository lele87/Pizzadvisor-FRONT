import styled from "styled-components";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  background-color: #fafafa;
  justify-content: space-around;
  align-items: center;
  border-radius: 4rem;
  margin-bottom: 30px;
  margin-top: 10px;

  h1 {
    @media (max-width: 320px) {
      font-size: 18px;
    }
  }

  button {
    width: 120px;
    height: 50px;
    border-radius: 4rem;
    background-color: #ff5b5b;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: white;
    border: none;
    cursor: pointer;
    font-family: "Abadi MT Condensed Light";
    letter-spacing: 1px;

    @media (max-width: 320px) {
      width: 70px;
      height: 20px;
    }
  }
`;

export default StyledHeader;
