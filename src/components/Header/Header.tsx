import { NavLink, useNavigate } from "react-router-dom";
import {
  resetCurrentPageActionCreator,
  resetPaginateActionCreator,
} from "../../redux/features/paginationSlice";
import { blankStateActionCreator } from "../../redux/features/pizzeriaSlice";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import StyledHeader from "./StyledHeader";

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logoutActionCreator());
    dispatch(resetPaginateActionCreator());
    dispatch(resetCurrentPageActionCreator());
    localStorage.removeItem("token");
    navigate("/");
  };

  const createPizzeria = () => {
    dispatch(blankStateActionCreator());
    navigate("/createpizzeria");
  };

  return (
    <>
      <StyledHeader>
        <NavLink className="navlink-home" to="/home">
          <h1 className="logo-title">Pizzadvisor</h1>
        </NavLink>
        <button className="create-button" onClick={createPizzeria}>
          CREATE PIZZERIA
        </button>
        <button className="logout-button" onClick={logOut}>
          LOGOUT
        </button>
      </StyledHeader>
    </>
  );
};

export default Header;
