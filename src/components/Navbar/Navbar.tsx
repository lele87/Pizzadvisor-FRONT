import { Link, useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/pizzeriaSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import StyledNavbar from "./StyledNavbar";

const Navbar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const createPizzeria = () => {
    dispatch(blankStateActionCreator());
    navigate("/createpizzeria");
  };

  return (
    <>
      <StyledNavbar>
        <ul>
          <li>
            <Link to="/home">
              <img
                src="/images/house-solid.svg"
                alt="Redirect to homepage link home"
              />
            </Link>
          </li>
          <li onClick={createPizzeria}>
            <img
              src="/images/plus-solid.svg"
              alt="Redirect to create a pizzeria link plus"
            />
          </li>
          <li>
            <Link to="/favourites">
              <img
                src="/images/user-solid.svg"
                alt="Redirect to favourites places link user"
              />
            </Link>
          </li>
          <h3 className="info-navbar">© 2022 By Pizzadvisor</h3>
        </ul>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
