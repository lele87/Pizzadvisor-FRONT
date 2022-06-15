import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { deletePizzeriaThunk } from "../../redux/thunks/pizzeriasThunks";
import { IPizzeria } from "../../types/types";
import StyledPizzeria from "./StyledPizzeria";

const Pizzeria = ({
  pizzeria: { id, name, address, image, timetable, owner, imageBackup },
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
      <StyledPizzeria className="pizza-container">
        <div className="image-container">
          <img
            src={image ? `${imageBackup}` : "no-image-icon.png"}
            alt="neapolitan pizza"
            width={300}
            height={300}
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
            <div className="icons">
              <img
                className="info-icon"
                src="/images/circle-info-solid.svg"
                alt="Circle Info to navigate to pizzeria details page"
                onClick={() => navigateToDetails(id)}
              />
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
            </div>
          </div>
        </div>
      </StyledPizzeria>
    </>
  );
};

export default Pizzeria;
