import { createSlice } from "@reduxjs/toolkit";
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
    setPages: (pages) => ({
      ...pages,
      pages: pages.pages + 1,
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
