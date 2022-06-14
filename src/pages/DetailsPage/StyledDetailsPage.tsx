import styled from "styled-components";

const StyledDetailsPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Roboto";

  .content {
    min-height: calc(100vh - 70px);
  }

  .pizza-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    background-color: #fafafa;
    border-radius: 4rem;
    margin: 0 auto;
    letter-spacing: 1px;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    height: 100%;
    margin-top: 30px;
    padding-bottom: 30px;

    @media (min-width: 699px) {
      width: 70%;
    }
  }

  .image-container {
    display: flex;
    width: 100%;

    @media (min-width: 699px) {
      width: 70%;
      display: flex;
      align-items: center;
      margin-top: 20px;
    }
  }

  img {
    position: relative;
    width: 100%;
    border-radius: 3rem 3rem 0 0;

    @media (min-width: 699px) {
      border-radius: 3rem;
      margin-top: 20px;
    }
  }

  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 4px;
    margin-right: 4px;
    gap: 4px;
  }

  .pizzeria-name {
    font-size: 25px;
    margin-bottom: 10px;
    text-align: center;
  }

  .pizzeria-info {
    display: flex;
    font-size: 23px;
    flex-direction: column;
    font-weight: 30px;
    position: relative;
    bottom: 30px;
    gap: 0.5rem;
    text-align: center;

    @media (min-width: 699px) {
      gap: 0.9rem;
    }
  }

  .submit-button {
    width: 75%;
    height: 45px;
    justify-content: center;
    display: block;
    color: #fff;
    background: #ff5b5b;
    font-size: 1em;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    border-radius: 20px;
    transition: 0.2s ease-in;
    cursor: pointer;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 20px;
    font-weight: 400;

    @media (min-width: 699px) {
      width: 40%;
    }
  }

  .map-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    border: 0;
    margin-bottom: 20px;

    @media (min-width: 460px) and (max-width: 550px) {
      width: 415px;
    }

    @media (min-width: 551px) and (max-width: 698px) {
      width: 505px;
    }

    @media (min-width: 699px) {
      width: 490px;
    }

    @media (min-width: 1000px) {
      width: 700px;
    }
  }

  iframe {
    @media (min-width: 460px) and (max-width: 550px) {
      width: 415px;
    }

    @media (min-width: 551px) and (max-width: 698px) {
      width: 505px;
    }

    @media (min-width: 699px) {
      width: 490px;
      height: 350px;
    }

    @media (min-width: 1000px) {
      width: 700px;
    }
  }
`;

export default StyledDetailsPage;
