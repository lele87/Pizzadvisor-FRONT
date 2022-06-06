import styled from "styled-components";

const StyledHomePage = styled.div`
  font-family: "Roboto";

  .info-text h2 {
    text-align: center;
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 30px;
  }

  .info-text h3 {
    font-size: 21px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 3px;
    padding-bottom: 5px;
  }

  .content {
    min-height: calc(100vh - 70px);
  }
`;

export default StyledHomePage;
