import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import {
  resetCurrentPageActionCreator,
  resetPaginateActionCreator,
} from "../../redux/features/paginationSlice";
import { blankStateActionCreator } from "../../redux/features/pizzeriaSlice";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import StyledHeader from "./StyledHeader";

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logoutActionCreator());
    dispatch(resetPaginateActionCreator());
    dispatch(resetCurrentPageActionCreator());
    localStorage.removeItem("token");
    toast.dismiss();
    toast.success("You have succesfully logged out");
    navigate("/");
  };

  const createPizzeria = () => {
    dispatch(blankStateActionCreator());
  };

  return (
    <>
      <StyledHeader className="header--container">
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <NavLink className="menu__item" to="/home">
                <h3>Home</h3>
              </NavLink>
            </li>
            <li>
              <NavLink className="menu__item" to="/favourites">
                <h3>My Favourites places</h3>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="menu__item"
                to="/createpizzeria"
                onClick={createPizzeria}
              >
                <h3>Add pizzeria</h3>
              </NavLink>
            </li>
            <li>
              <NavLink className="menu__item" to="/login" onClick={logOut}>
                <div className="logout--container">
                  <h3>Logout</h3>
                  <i className="fa fa-sign-out"></i>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="navlink-home" to="/home">
          <h1 className="logo-title">Pizzadvisor</h1>
        </NavLink>
      </StyledHeader>
    </>
  );
};

export default Header;
