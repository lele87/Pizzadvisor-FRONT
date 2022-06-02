import StyledPizzeria from "./StyledPizzeria";

const Pizzeria = (): JSX.Element => {
  return (
    <>
      <StyledPizzeria>
        <div className="image-container">
          <img src="/images/pizza.jpg" alt="neapolitan pizza" />
        </div>
        <div className="info-container">
          <div className="pizzeria-name">
            <h2>Focacceria Toscana</h2>
          </div>
          <div className="pizzeria-info">
            <span>Carrer Ferran 41</span>
            <span>Opening Hours: 15:00 - 23:00</span>
          </div>
        </div>
      </StyledPizzeria>
    </>
  );
};

export default Pizzeria;
