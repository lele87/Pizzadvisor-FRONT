import axios from "axios";
import mockPizzerias from "../../mocks/mockPizzerias";
import { server } from "../../mocks/server";
import {
  deletePizzeriaActionCreator,
  loadPizzeriasActionCreator,
} from "../features/pizzeriasSlice";
import { deletePizzeriaThunk, loadPizzeriasThunk } from "./pizzeriathunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadPizzeriasThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the loadPizzeriasActionCreator", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { pizzerias: mockPizzerias }, status: 200 });

      const loadAction = loadPizzeriasActionCreator(mockPizzerias);
      const thunk = loadPizzeriasThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });
  });
});

describe("Given a deletePizzeriaThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the deletePizzeriaActionCreator", async () => {
      const dispatch = jest.fn();

      const deleteAction = deletePizzeriaActionCreator(mockPizzerias[0].id);
      const thunk = deletePizzeriaThunk(mockPizzerias[0].id);

      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalledWith(deleteAction);
    });
  });
});
