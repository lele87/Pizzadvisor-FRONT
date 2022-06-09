import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { deletePizzeriaThunk } from "../../redux/thunks/pizzeriasThunks";
import { IPizzeria } from "../../types/types";
import StyledPizzeria from "./StyledPizzeria";

const Pizzeria = ({
  pizzeria: { id, name, address, image, timetable, owner },
}: {
  pizzeria: IPizzeria;
}) => {
  const dispatch = useAppDispatch();
  const deletePizzeria = () => {
    dispatch(deletePizzeriaThunk(id));
  };
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const navigateToDetails = (id: string): void => {
    navigate(`/pizzerias/${id}`);
  };

  return (
    <>
      <StyledPizzeria
        className="pizza-container"
        onClick={() => navigateToDetails(id)}
      >
        <div className="image-container">
          <img
            src={
              image.split("/")[0] !== "pizzerias"
                ? image
                : `${process.env.REACT_APP_API_URL}${image}`
            }
            alt="neapolitan pizza"
          />
        </div>
        <div className="info-container">
          <div className="pizzeria-name">
            <h2>{name}</h2>
          </div>
          <div className="pizzeria-info">
            <span>{address}</span>
            <span>Opening Hours</span>
            <span>{timetable}</span>
          </div>
        </div>
        {user.userInfo.id === owner ? (
          <img
            className="delete-icon"
            src="/images/circle-xmark-solid.svg"
            alt="Circle X to delete pizzeria"
            onClick={deletePizzeria}
          />
        ) : (
          ""
        )}
      </StyledPizzeria>
    </>
  );
};

export default Pizzeria;
