import { useNavigate } from "react-router-dom";
import StyledPageNotFound from "./StyledPageNotFound";

const PageNotFound = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <>
      <StyledPageNotFound>
        <div className="content">
          <span className="message">Sorry</span>
          <span className="message">Page not found</span>
          <img src="/images/pizza-pagenotfound.png" alt="Pizza slice" />
          <button className="backhome-button" onClick={navigateToHome}>
            BACK TO HOMEPAGE
          </button>
        </div>
      </StyledPageNotFound>
    </>
  );
};

export default PageNotFound;
