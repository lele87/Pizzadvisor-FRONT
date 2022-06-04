import { useAppDispatch } from "../../redux/store/hooks";
import { deletePizzeriaThunk } from "../../redux/thunks/pizzeriathunks";
import { IPizzeria } from "../../types/types";
import StyledPizzeria from "./StyledPizzeria";

const Pizzeria = ({
  pizzeria: { id, name, address, image, timetable },
}: {
  pizzeria: IPizzeria;
}) => {
  const dispatch = useAppDispatch();
  const deletePizzeria = () => {
    dispatch(deletePizzeriaThunk(id));
  };

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
        <img
          className="delete-icon"
          src="/images/circle-xmark-solid.svg"
          alt="Circle X to delete pizzeria"
          onClick={deletePizzeria}
        />
      </StyledPizzeria>
    </>
  );
};

export default Pizzeria;
