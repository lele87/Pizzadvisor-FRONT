import { useEffect, useState } from "react";

import { useAppDispatch } from "../../redux/store/hooks";
import { loadPizzeriasThunk } from "../../redux/thunks/pizzeriasThunks";
import StyledPaginationButton from "./StyledPaginationButton";

const PaginationButton = () => {
  const [limit, setLimit] = useState(5);
  const dispatch = useAppDispatch();

  const loadMore = () => {
    setLimit(limit + 5);
  };

  useEffect(() => {
    dispatch(loadPizzeriasThunk(limit));
  }, [dispatch, limit]);

  return (
    <StyledPaginationButton>
      <button className="loadmore-button" onClick={loadMore}>
        Load More
      </button>
    </StyledPaginationButton>
  );
};

export default PaginationButton;
