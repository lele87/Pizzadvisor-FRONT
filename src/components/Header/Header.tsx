import { useNavigate } from "react-router-dom";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import StyledHeader from "./StyledHeader";

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logoutActionCreator());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <StyledHeader>
        <h1 className="logo-title">Pizzadvisor</h1>
        <button className="logout-button" onClick={logOut}>
          LOGOUT
        </button>
      </StyledHeader>
    </>
  );
};

export default Header;
