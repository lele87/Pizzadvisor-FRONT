import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Pizzeria from "../../components/Pizzeria/Pizzeria";
import PizzeriaList from "../../components/PizzeriaList/PizzeriaList";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadFavouritePizzeriasThunk } from "../../redux/thunks/pizzeriasThunks";
import StyledFavouritesPage from "./StyledFavouritesPage";

const FavouritesPage = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.user.userInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadFavouritePizzeriasThunk(id as string));
  }, [dispatch, id]);

  return (
    <>
      <StyledFavouritesPage>
        <div className="content">
          <Header />
          <div className="info-text">
            <h2>My Favourite Places</h2>
          </div>
          <PizzeriaList />
        </div>
        <Navbar />
      </StyledFavouritesPage>
    </>
  );
};

export default FavouritesPage;
