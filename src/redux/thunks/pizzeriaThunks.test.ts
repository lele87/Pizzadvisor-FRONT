import { mockPizzerias } from "../../mocks/mockPizzerias";
import { server } from "../../mocks/server";
import { loadPizzeriaActionCreator } from "../features/pizzeriaSlice";
import axios from "axios";
import { loadPizzeriaThunk } from "./pizzeriaThunks";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../features/userISlice";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadPizzeriaThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the loadPizzeriaActionCreator", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: mockPizzerias[0], status: 200 });

      const loadAction = loadPizzeriaActionCreator(mockPizzerias[0]);
      const thunk = loadPizzeriaThunk(mockPizzerias[0].id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadAction);
    });
  });
  describe("When it's called with a pizzeria with id 3 not present in the database", () => {
    test("Then it should not dispatch the loadPizzeriaActionCreator", async () => {
      const dispatch = jest.fn();
      const idPizzeria = "3";

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      const thunk = loadPizzeriaThunk(idPizzeria);

      const loadedOnAction = loadedOnActionCreator();
      const loadedOffAction = loadedOffActionCreator();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadedOnAction);
      expect(dispatch).toHaveBeenCalledWith(loadedOffAction);
    });
  });
});
