import {
  setCurrentPageActionCreator,
  setPaginateActionCreator,
} from "../../redux/features/paginationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";

import StyledPagination from "./StyledPagination";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { pages, currentPage } = useAppSelector((state) => state.pages);

  const loadMore = () => {
    dispatch(setPaginateActionCreator());
    dispatch(setCurrentPageActionCreator());

    console.log(pages);
    console.log(currentPage);
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
