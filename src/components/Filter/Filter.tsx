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
    <>
      <StyledFilter className="filter-details">
        <details className="custom-select">
          <summary className="radios">
            <input
              type="radio"
              name="item"
              id="default"
              title="Filter for specialty"
              defaultChecked
            />
            <input
              type="radio"
              name="item"
              id="item1"
              title="All"
              onClick={() => filterBySpecialty("All")}
            />
            <input
              type="radio"
              name="item"
              id="item2"
              title="Diavola"
              onClick={() => filterBySpecialty("Diavola")}
            />
            <input
              type="radio"
              name="item"
              id="item3"
              title="Margherita"
              onClick={() => filterBySpecialty("Margherita")}
            />
            <input
              type="radio"
              name="item"
              id="item4"
              title="4 Cheese"
              onClick={() => filterBySpecialty("4 Cheese")}
            />
            <input
              type="radio"
              name="item"
              id="item5"
              title="Ham and Mushrooms"
              onClick={() => filterBySpecialty("Ham and Mushrooms")}
            />
          </summary>
          <ul className="list">
            <li>
              <label htmlFor="item1">
                All
                <span></span>
              </label>
            </li>
            <li>
              <label htmlFor="item2">Diavola</label>
            </li>
            <li>
              <label htmlFor="item3">Margherita</label>
            </li>
            <li>
              <label htmlFor="item4">4 Cheese</label>
            </li>
            <li>
              <label htmlFor="item5">Ham and Mushrooms</label>
            </li>
          </ul>
        </details>
      </StyledFilter>
    </>
  );
};

export default Filter;
