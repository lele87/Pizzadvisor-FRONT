import axios from "axios";
import { mockNewPizzeria, mockPizzerias } from "../../mocks/mockPizzerias";
import { server } from "../../mocks/server";
import {
  createPizzeriaActionCreator,
  deletePizzeriaActionCreator,
  editPizzeriaActionCreator,
  loadFavouritePizzeriasActionCreator,
  loadPizzeriasActionCreator,
} from "../features/pizzeriasSlice";
import {
  createPizzeriaThunk,
  deletePizzeriaThunk,
  editPizzeriaThunk,
  loadFavouritePizzeriasThunk,
  loadPizzeriasThunk,
} from "./pizzeriasThunks";

describe("Given a loadPizzeriasThunk function", () => {
  describe("When it's called with an authorized token but the api responds with an error", () => {
    test("Then it should call the tost's error method", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockRejectedValue({});

      const loadAction = loadPizzeriasActionCreator(mockPizzerias);

      const thunk = loadPizzeriasThunk("Margherita", 5);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(loadAction);
    });
  });
});

describe("Given a deletePizzeriaThunk function", () => {
  describe("When it's called to delete the pizzeria's id but there is an error", () => {
    test("Then it shouldn't dispatch the deletePizzeriaActionCreator", async () => {
      const dispatch = jest.fn();

      const deleteAction = deletePizzeriaActionCreator(mockPizzerias[1].id);
      const thunk = deletePizzeriaThunk(mockPizzerias[0].id);

      await thunk(dispatch);
      expect(dispatch).not.toHaveBeenCalledWith(deleteAction);
    });
  });
});

describe("Given a createPizzeriaThunk function", () => {
  describe("When it's called but there is an error creating a pizzeria", () => {
    test("Then it shouldn't dispatch the createPizzeriaActionCreator", async () => {
      const dispatch = jest.fn();
      const newPizzeria = mockPizzerias[0];

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: { newPizzeria: mockNewPizzeria },
        status: 400,
      });

      const createAction = createPizzeriaActionCreator(newPizzeria);
      const thunk = createPizzeriaThunk(newPizzeria);

      await thunk(dispatch);
      expect(dispatch).not.toHaveBeenCalledWith(createAction);
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

      axios.get = jest.fn().mockRejectedValue({});

      const editPizzeriaAction = editPizzeriaActionCreator(pizzeriaData);

      const thunk = editPizzeriaThunk(idToEdit, pizzeriaData);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(editPizzeriaAction);
    });
  });
});

describe("Given a loadFavouritePizzeriasThunk function", () => {
  describe("When it's called with an authorized token but the api responds with an error", () => {
    test("Then it should call the tost's error method", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockRejectedValue({});

      const loadAction = loadFavouritePizzeriasActionCreator(mockPizzerias);

      const thunk = loadFavouritePizzeriasThunk("1");

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(loadAction);
    });
  });
});
