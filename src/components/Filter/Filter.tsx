import {
  resetCurrentPageActionCreator,
  resetPaginateActionCreator,
} from "../../redux/features/paginationSlice";
import { filterPizzeriasActionCreator } from "../../redux/features/pizzeriasSlice";
import { useAppDispatch } from "../../redux/store/hooks";
import StyledFilter from "./StyledFilter";

const Filter = () => {
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
  };
  return (
    <StyledFilter className="filter-buttons">
      <button onClick={() => showAll()}>ALL</button>
      <button onClick={() => filterBySpecialty("Diavola")}>DIAVOLA</button>
      <button onClick={() => filterBySpecialty("Margherita")}>
        MARGHERITA
      </button>
    </StyledFilter>
  );
};

export default Filter;
