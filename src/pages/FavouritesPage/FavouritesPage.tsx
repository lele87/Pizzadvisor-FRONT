import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import PizzeriaList from "../../components/PizzeriaList/PizzeriaList";
import StyledFavouritesPage from "./StyledFavouritesPage";

const FavouritesPage = (): JSX.Element => {
  return (
    <>
      <StyledFavouritesPage>
        <div className="content">
          <Header />
          <div className="info-text">
            <h2>My Favourites Places</h2>
          </div>
        </div>
        <Navbar />
      </StyledFavouritesPage>
    </>
  );
};

export default FavouritesPage;
