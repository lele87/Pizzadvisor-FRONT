import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadPizzeriaThunk } from "../../redux/thunks/pizzeriaThunks";
import { IPizzeria } from "../../types/types";
import StyledDetailsPage from "./StyledDetailsPage";

const DetailsPage = ({
  pizzeria: {
    id,
    name,
    address,
    image,
    timetable,
    specialty,
    imageBackup,
    owner,
  },
}: {
  pizzeria: IPizzeria;
}): JSX.Element => {
  const { idPizzeria } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadPizzeriaThunk(idPizzeria as string));
  }, [dispatch, idPizzeria]);

  const navigateToEdit = (id: string): void => {
    navigate(`/editpizzeria/${id}`);
  };

  return (
    <>
      <StyledDetailsPage>
        <div className="content">
          <Header />
          <div className="pizza-container">
            <div className="image-container">
              <img
                src={image ? `${imageBackup}` : "no-image-icon.png"}
                // src={image === "" ? "no-image-icon.png" : `${imageBackup}`}
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
                <span>Special Pizza</span>
                <span>{specialty}</span>
              </div>
              <div className="map-container">
                {address && (
                  <iframe
                    title="map"
                    width="300"
                    height="250"
                    frameBorder="0"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=${address}`}
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
            {user.userInfo.id === owner ? (
              <button
                className="submit-button"
                onClick={() => navigateToEdit(id)}
              >
                EDIT DETAILS
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <Navbar />
      </StyledDetailsPage>
    </>
  );
};

export default DetailsPage;
