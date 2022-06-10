import styled from "styled-components";

const StyledPizzeria = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  height: 210px;
  background-color: #fafafa;
  border-radius: 4rem;
  margin: 0 auto;
  letter-spacing: 1px;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  font-family: "Roboto";

  @media (max-width: 316px) {
    flex-direction: column;
  }

  @media (min-width: 699px) {
    width: 90%;
    height: 100%;
  }

  .image-container {
    display: flex;
    height: 100%;
    width: 45%;

    @media (min-width: 699px) {
      margin-left: 9px;
    }
  }

  img {
    position: relative;
    bottom: 3.9px;
    right: 1px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0px 11px 35px 2px rgb(0 0 0 / 14%);
    border: 1px solid grey;

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
    margin-left: 4px;
    margin-right: 3px;
    margin-top: 20px;

    @media (min-width: 699px) {
      margin-left: 18px;
    }
  }

  .pizzeria-name {
    font-size: 28px;
    position: relative;
    bottom: 20px;
    margin-left: 5px;

    @media (min-width: 1280px) {
      font-size: 20px;
    }

    @media (min-width: 461px) and (max-width: 600px) {
      font-size: 15px;
    }

    @media (min-width: 601px) and (max-width: 1279px) {
      font-size: 35px;
    }

    @media (max-width: 460px) {
      font-size: 15px;
    }
  }

  .pizzeria-info {
    display: flex;
    font-size: 25px;
    flex-direction: column;
    font-weight: 30px;
    position: relative;
    bottom: 30px;
    gap: 0.5rem;
    margin-left: 5px;

    @media (min-width: 1280px) {
      font-size: 16px;
    }

    @media (min-width: 461px) and (max-width: 600px) {
      font-size: 16px;
    }

    @media (min-width: 601px) and (max-width: 1279px) {
      font-size: 30px;
    }

    @media (max-width: 460px) {
      font-size: 16px;
    }
  }

  .icons {
    padding-top: 8px;
    display: flex;
    gap: 6px;
  }

  .delete-icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  .info-icon {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
`;

export default StyledPizzeria;
