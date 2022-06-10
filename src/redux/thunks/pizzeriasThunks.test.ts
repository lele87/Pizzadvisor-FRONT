import axios from "axios";
import { mockPizzerias, mockNewPizzeria } from "../../mocks/mockPizzerias";
import { server } from "../../mocks/server";
import {
  createPizzeriaActionCreator,
  deletePizzeriaActionCreator,
  editPizzeriaActionCreator,
  loadPizzeriasActionCreator,
} from "../features/pizzeriasSlice";
import {
  createPizzeriaThunk,
  deletePizzeriaThunk,
  editPizzeriaThunk,
  loadPizzeriasThunk,
} from "./pizzeriasThunks";

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
      const thunk = loadPizzeriasThunk(5);

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

describe("Given an editPizzeriaThunk function", () => {
  describe("When it's called with an id of a pizzeria to edit and an updated pizzeria", () => {
    test("Then it should dispatch the editPizzeriaActionCreator with the new updated pizzeria", async () => {
      const dispatch = jest.fn();

      const idToEdit = "1";
      const pizzeriaData = {
        name: "NAP",
        address: "La Rambla",
        timetable: "15-24",
        image: "image3",
        owner: "629684abc46cf477e7ca7008",
        specialty: "Marinara",
        id: "1",
      };

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: {
          name: "NAP 1",
          address: "La Rambla",
          timetable: "15-24",
          image: "image3",
          owner: "629684abc46cf477e7ca7008",
          specialty: "Marinara",
          id: "1",
        },
        status: 200,
      });

      const editPizzeriaAction = editPizzeriaActionCreator(pizzeriaData);

      const thunk = editPizzeriaThunk(idToEdit, pizzeriaData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(editPizzeriaAction);
    });
  });
});
