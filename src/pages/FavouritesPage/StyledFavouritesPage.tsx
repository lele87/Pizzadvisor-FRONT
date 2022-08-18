import styled from "styled-components";

const StyledFavouritesPage = styled.div`
  font-family: "Roboto";
  display: flex;
  flex-direction: column;

  .info-text h2 {
    text-align: center;
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 30px;
  }

  .content {
    min-height: calc(100vh - 70px);

    @media (min-width: 699px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default StyledFavouritesPage;
