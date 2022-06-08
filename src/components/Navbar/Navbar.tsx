import { Link } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const Navbar = (): JSX.Element => {
  return (
    <>
      <StyledNavbar>
        <ul>
          <li>
            <Link to="/login">
              <img
                src="/images/house-solid.svg"
                alt="Redirect to homepage link home"
              />
            </Link>
          </li>
          <li>
            <Link to="/createpizzeria">
              <img
                src="/images/plus-solid.svg"
                alt="Redirect to create a pizzeria link plus"
              />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="/images/user-solid.svg"
                alt="Redirect to favourites places link user"
              />
            </Link>
          </li>
        </ul>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
