import styled from "styled-components";

const StyledPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";

  span {
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 3px;
  }

  .content {
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 200px;
    height: 200px;
  }

  .backhome-button {
    width: 210px;
    height: 80px;
    border-radius: 4rem;
    color: rgb(38, 50, 56);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    color: black;
    border: none;
    cursor: pointer;
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 25px;
    border: 1px solid rgb(38, 50, 56);
    margin-top: 150px;
  }
`;

export default StyledPageNotFound;
