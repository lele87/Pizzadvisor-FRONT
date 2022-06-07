import { mockPizzerias } from "../../mocks/mockPizzerias";
import { server } from "../../mocks/server";
import { loadPizzeriaActionCreator } from "../features/pizzeriaSlice";
import axios from "axios";
import { loadPizzeriaThunk } from "./pizzeriaThunks";

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
});
