import styled from "styled-components";

const StyledPizzeriaList = styled.div`
  @media (min-width: 699px) {
    justify-content: center;
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 0px;

    @media (min-width: 601px) {
      flex-direction: row;
      margin: 0;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }

    @media (min-width: 899px) {
      flex-direction: row;
      margin: 0;
      width: 80vw;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
    }
  }
`;

export default StyledPizzeriaList;
