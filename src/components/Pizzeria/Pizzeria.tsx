import { IPizzeria } from "../../types/types";
import StyledPizzeria from "./StyledPizzeria";

const Pizzeria = ({
  pizzeria: { name, address, image, timetable },
}: IPizzeria) => {
  return (
    <>
      <StyledPizzeria>
        <div className="image-container">
          <img src={image} alt="neapolitan pizza" />
        </div>
        <div className="info-container">
          <div className="pizzeria-name">
            <h2>{name}</h2>
          </div>
          <div className="pizzeria-info">
            <span>{address}</span>
            <span>Opening Hours: {timetable}</span>
          </div>
        </div>
      </StyledPizzeria>
    </>
  );
};

export default Pizzeria;
