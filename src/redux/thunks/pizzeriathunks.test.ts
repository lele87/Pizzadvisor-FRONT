import axios from "axios";
import { mockPizzerias, mockNewPizzeria } from "../../mocks/mockPizzerias";
import { server } from "../../mocks/server";
import {
  createPizzeriaActionCreator,
  deletePizzeriaActionCreator,
  loadPizzeriasActionCreator,
} from "../features/pizzeriasSlice";
import {
  createPizzeriaThunk,
  deletePizzeriaThunk,
  loadPizzeriasThunk,
} from "./pizzeriathunks";

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

describe("Given a createPizzeriaThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the createPizzeriaActionCreator", async () => {
      const dispatch = jest.fn();
      const newPizzeria = mockPizzerias[0];

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: { newPizzeria: mockNewPizzeria },
        status: 201,
      });

      const createAction = createPizzeriaActionCreator(newPizzeria);
      const thunk = createPizzeriaThunk(newPizzeria);

      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalledWith(createAction);
    });
  });
});
