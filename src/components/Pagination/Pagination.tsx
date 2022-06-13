import {
  setCurrentPageActionCreator,
  setPaginateActionCreator,
} from "../../redux/features/paginationSlice";
import { useAppDispatch } from "../../redux/store/hooks";

import StyledPagination from "./StyledPagination";

const Pagination = () => {
  const dispatch = useAppDispatch();

  const loadMore = () => {
    dispatch(setPaginateActionCreator());
    dispatch(setCurrentPageActionCreator());
  };

  return (
    <StyledPagination>
      <button className="loadmore-button" onClick={loadMore}>
        Load More
      </button>
    </StyledPagination>
  );
};

export default Pagination;
