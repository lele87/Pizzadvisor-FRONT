import paginationSlice, {
  resetCurrentPageActionCreator,
  resetPaginateActionCreator,
  setCurrentPageActionCreator,
  setPagesActionCreator,
  setPaginateActionCreator,
} from "./paginationSlice";

describe("Given a pagination reducer", () => {
  describe("When it receives an initial state with a setPaginate action", () => {
    test("Then it should return the new pagination state with a value 10", () => {
      const initialState = {
        currentPage: 1,
        pages: 0,
        pagination: 5,
      };

      const expectedStatus = {
        currentPage: 1,
        pages: 0,
        pagination: 10,
      };

      const setPaginateAction = setPaginateActionCreator();

      const newStatus = paginationSlice(initialState, setPaginateAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });
  describe("When it receives an initial state with a setCurrentPage action", () => {
    test("Then it should return the new currentPage state with value 2", () => {
      const initialState = {
        currentPage: 1,
        pages: 0,
        pagination: 5,
      };

      const expectedStatus = {
        currentPage: 2,
        pages: 0,
        pagination: 5,
      };

      const currentPageAction = setCurrentPageActionCreator();

      const newStatus = paginationSlice(initialState, currentPageAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });
  describe("When it receives an initial state with a setPages action", () => {
    test("Then it should return the new setPage state with value 2", () => {
      const initialState = {
        currentPage: 1,
        pages: 0,
        pagination: 5,
      };

      const expectedStatus = {
        currentPage: 1,
        pages: 1,
        pagination: 5,
      };

      const currentPageAction = setPagesActionCreator(1);

      const newStatus = paginationSlice(initialState, currentPageAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });
  describe("When it receives a state with a resetPaginate action", () => {
    test("Then it should return the initial state with value 5", () => {
      const initialState = {
        currentPage: 1,
        pages: 0,
        pagination: 10,
      };

      const expectedStatus = {
        currentPage: 1,
        pages: 0,
        pagination: 5,
      };

      const currentPageAction = resetPaginateActionCreator();

      const newStatus = paginationSlice(initialState, currentPageAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });
  describe("When it receives a state with a resetCurrentPage action", () => {
    test("Then it should return the initial state with value 1", () => {
      const initialState = {
        currentPage: 2,
        pages: 0,
        pagination: 5,
      };

      const expectedStatus = {
        currentPage: 1,
        pages: 0,
        pagination: 5,
      };

      const currentPageAction = resetCurrentPageActionCreator();

      const newStatus = paginationSlice(initialState, currentPageAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });
});
