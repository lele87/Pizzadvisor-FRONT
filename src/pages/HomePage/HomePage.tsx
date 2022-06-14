import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import PizzeriaList from "../../components/PizzeriaList/PizzeriaList";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadPizzeriasThunk } from "../../redux/thunks/pizzeriasThunks";
import StyledHomePage from "./StyledHomePage";

const HomePage = (): JSX.Element => {
  const { pagination } = useAppSelector((state) => state.pages);
  const { currentPage, pages } = useAppSelector((state) => state.pages);
  const { filter } = useAppSelector((state) => state.pizzerias);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPizzeriasThunk(filter, pagination));
  }, [dispatch, pagination, filter]);

  return (
    <>
      <StyledHomePage>
        <div className="content">
          <Header />
          <div className="info-text">
            <h2>The Top Pizzerias in Barcelona</h2>
            <h3>What would you like to eat?</h3>
          </div>
          <Filter />
          <PizzeriaList />
          {currentPage === pages ? "" : <Pagination />}
        </div>
        <Navbar />
      </StyledHomePage>
    </>
  );
};

export default HomePage;
