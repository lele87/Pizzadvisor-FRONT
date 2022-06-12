import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";
import PizzeriaList from "../../components/PizzeriaList/PizzeriaList";
import {
  resetCurrentPageActionCreator,
  resetPaginateActionCreator,
} from "../../redux/features/paginationSlice";
import { filterPizzeriasActionCreator } from "../../redux/features/pizzeriasSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadPizzeriasThunk } from "../../redux/thunks/pizzeriasThunks";
import StyledHomePage from "./StyledHomePage";

const HomePage = (): JSX.Element => {
  const { pagination } = useAppSelector((state) => state.pages);
  const { filter } = useAppSelector((state) => state.pizzerias);
  const { specialty } = useAppSelector((state) => state.pizzeria);
  const dispatch = useAppDispatch();

  const filterBySpecialty = async (specialty: string) => {
    dispatch(filterPizzeriasActionCreator(specialty));
    dispatch(resetPaginateActionCreator());
    dispatch(resetCurrentPageActionCreator());
  };

  const showAll = () => {
    dispatch(resetPaginateActionCreator());
    dispatch(resetCurrentPageActionCreator());
    dispatch(filterPizzeriasActionCreator("All"));
    dispatch(loadPizzeriasThunk("All", pagination));
    debugger;
  };

  useEffect(() => {
    dispatch(loadPizzeriasThunk(filter, pagination));
  }, [dispatch, pagination, specialty, filter]);

  return (
    <>
      <StyledHomePage>
        <div className="content">
          <Header />
          <div className="info-text">
            <h2>The Top Pizzerias in Barcelona</h2>
            <h3>What would you like to eat?</h3>
          </div>
          <div className="filter-buttons">
            <button onClick={() => showAll()}>ALL</button>
            <button onClick={() => filterBySpecialty("Diavola")}>
              DIAVOLA
            </button>
            <button onClick={() => filterBySpecialty("Margherita")}>
              MARGHERITA
            </button>
          </div>
          <PizzeriaList />
          <Pagination />
        </div>
        <Navbar />
      </StyledHomePage>
    </>
  );
};

export default HomePage;
