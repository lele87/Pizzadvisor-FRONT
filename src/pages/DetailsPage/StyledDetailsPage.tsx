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
  }

  .image-container {
    display: flex;
    width: 100%;
  }

  img {
    position: relative;
    width: 100%;
    border-radius: 3rem 3rem 0 0;
  }

  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pizzeria-name {
    font-size: 25px;
    position: relative;
    bottom: 20px;
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
  }

  iframe {
    width: 300px;
    height: 250px;
    border: 0;
  }
`;

export default StyledDetailsPage;
