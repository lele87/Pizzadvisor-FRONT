import styled from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-bottom: 15px;

  @media (min-width: 699px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 190px;
  }

  button {
    width: 107px;
    height: 50px;
    border-radius: 4rem;
    color: rgb(38, 50, 56);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: black;
    border: none;
    cursor: pointer;
    font-family: "Roboto";
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 12px;
    border: 1px solid rgb(38, 50, 56);
  }

  button:focus {
    border: 1px solid #ff5b5b;
  }
`;

export default StyledFilter;
