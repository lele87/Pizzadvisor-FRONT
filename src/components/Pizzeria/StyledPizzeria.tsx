import styled from "styled-components";

const StyledPizzeria = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: #fafafa;
  border-radius: 4rem;
  margin: 0 auto;
  letter-spacing: 1px;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);

  @media (max-width: 316px) {
    flex-direction: column;
  }

  .image-container {
    display: flex;
    height: 100%;
    width: 50%;
  }

  img {
    position: relative;
    bottom: 10px;
    width: 300px;
    height: 300px;
    border-radius: 50%;

    @media (min-width: 1280px) {
      width: 300px;
      height: 300px;
    }

    @media (min-width: 495px) and (max-width: 600px) {
      width: 230px;
      height: 230px;
    }

    @media (min-width: 228px) and (max-width: 494px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 227px) {
      width: 120px;
      height: 120px;
    }
  }

  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pizzeria-name {
    font-family: "Mukta", sans-serif;
    font-size: 28px;
    position: relative;
    bottom: 20px;

    @media (min-width: 1280px) {
      font-size: 20px;
    }

    @media (min-width: 461px) and (max-width: 600px) {
      font-size: 15px;
    }

    @media (max-width: 460px) {
      font-size: 15px;
    }
  }

  .pizzeria-info {
    font-family: "Mukta", sans-serif;
    display: flex;
    font-size: 25px;
    flex-direction: column;
    font-weight: 30px;
    position: relative;
    bottom: 30px;
    gap: 0.7rem;

    @media (min-width: 1280px) {
      font-size: 12px;
    }

    @media (min-width: 461px) and (max-width: 600px) {
      font-size: 10px;
    }

    @media (max-width: 460px) {
      font-size: 12px;
    }
  }

  .delete-icon {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: 60px;
    right: 10px;
  }
`;

export default StyledPizzeria;
