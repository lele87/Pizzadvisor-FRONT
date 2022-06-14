import styled from "styled-components";

const StyledPizzeria = styled.li`
  display: flex;
  align-items: center;
  width: 90%;
  height: 210px;
  background-color: #fafafa;
  border-radius: 4rem;
  margin: 0 auto;
  padding-bottom: 10px;
  letter-spacing: 1px;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  font-family: "Roboto";

  @media (max-width: 316px) {
    flex-direction: column;
  }

  @media (min-width: 601px) and (max-width: 898px) {
    height: 250px;
    margin: 0;
    width: 450px;
    display: flex;
    align-items: center;
    margin-left: 9px;
  }

  @media (min-width: 899px) {
    height: 100%;
    margin: 0;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 9px;
  }

  @media (min-width: 1024px) {
    height: 300px;
    margin: 0;
    width: 45%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 9px;
  }

  .image-container {
    display: flex;
    height: 100%;
    width: 45%;

    @media (min-width: 899px) {
      display: flex;
      height: 100%;
      justify-content: center;
      margin-top: 20px;
      align-items: center;
      margin-left: 2px;
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

    @media (min-width: 495px) and (max-width: 698px) {
      width: 190px;
      height: 190px;
    }

    @media (min-width: 228px) and (max-width: 494px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 227px) {
      width: 120px;
      height: 120px;
    }

    @media (min-width: 699px) {
      width: 210px;
      height: 210px;
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
    gap: 10px;

    @media (min-width: 495px) {
      margin-left: 35px;
    }

    @media (min-width: 699px) {
      margin-left: 21px;
      margin-right: 15px;
      text-align: center;
    }
    @media (min-width: 1024px) {
      margin-left: 8px;
      margin-right: 15px;
      text-align: center;
    }
  }

  .pizzeria-name {
    font-size: 28px;
    margin-left: 5px;
    margin-right: 5px;
    padding-bottom: 10px;
    padding-top: 7px;

    @media (min-width: 699px) {
      font-size: 25px;
    }

    @media (min-width: 461px) and (max-width: 600px) {
      font-size: 15px;
    }

    @media (min-width: 601px) and (max-width: 1279px) {
      font-size: 18px;
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

    @media (min-width: 699px) {
      font-size: 18px;
    }

    @media (min-width: 399px) and (max-width: 600px) {
      font-size: 16px;
    }

    @media (min-width: 601px) and (max-width: 1279px) {
      font-size: 20px;
    }

    @media (max-width: 460px) {
      font-size: 16px;
    }
  }

  .icons {
    padding-top: 8px;
    display: flex;
    gap: 6px;

    @media (max-width: 600px) {
      display: flex;
      justify-content: flex-start;
    }

    @media (min-width: 601px) {
      display: flex;
      justify-content: center;
    }

    @media (min-width: 899px) {
      display: flex;
      justify-content: center;
    }
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
