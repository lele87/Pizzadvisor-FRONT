import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActionType } from "react-hot-toast/dist/core/store";
import { IPagination } from "../../types/types";

const initialState: IPagination = {
  currentPage: 1,
  pages: 0,
  pagination: 5,
};

const paginationSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPaginate: (pages) => ({
      ...pages,
      pagination: pages.pagination + 5,
    }),
    setCurrentPage: (pages) => ({
      ...pages,
      currentPage: pages.currentPage + 1,
    }),
    setPages: (pages, action: PayloadAction<number>) => ({
      ...pages,
      pages: action.payload,
    }),
    resetPaginate: (pages) => ({
      ...pages,
      pagination: 5,
    }),
    resetCurrentPage: (pages) => ({
      ...pages,
      currentPage: 1,
    }),
  },
});

export const {
  setPaginate: setPaginateActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setPages: setPagesActionCreator,
  resetPaginate: resetPaginateActionCreator,
  resetCurrentPage: resetCurrentPageActionCreator,
} = paginationSlice.actions;

export default paginationSlice.reducer;
