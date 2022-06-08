import { mockPizzerias } from "../../mocks/mockPizzerias";
import { IPizzeria } from "../../types/types";
import pizzeriasSlice, {
  createPizzeriaActionCreator,
  deletePizzeriaActionCreator,
  editPizzeriaActionCreator,
  loadPizzeriasActionCreator,
} from "./pizzeriasSlice";

describe("Given a load pizzerias reducer", () => {
  describe("When it receives an initial state and a load action with the pizzerias info", () => {
    test("Then it should return the new pizzerias state with the received info", () => {
      const initialState: IPizzeria[] = [];

      const pizzeriasInfo = mockPizzerias;

      const expectedState = [...pizzeriasInfo];

      const loadAction = loadPizzeriasActionCreator(pizzeriasInfo);
      const pizzeriaStatus = pizzeriasSlice(initialState, loadAction);

      expect(pizzeriaStatus).toEqual(expectedState);
    });
  });
});

describe("Given a delete pizzeria reducer", () => {
  describe("When it receives an initial state with 2 pizzerias and a delete action with an id", () => {
    test("Then it should return one pizzeria", () => {
      const expectedLength = 1;

      const deleteAction = deletePizzeriaActionCreator(mockPizzerias[0].id);

      const initialState = mockPizzerias;

      const pizzeriaStatus = pizzeriasSlice(initialState, deleteAction);

      expect(pizzeriaStatus).toHaveLength(expectedLength);
    });
  });
});

describe("Given a createPizzeria reducer", () => {
  describe("When it receives an initial state with 2 pizzerias and a create action with the pizzeria's info", () => {
    test("Then it should return 3 pizzerias", () => {
      const expectedLength = 3;

      const initialState = mockPizzerias;

      const newPizzeria = {
        name: "Nap",
        address: "Carrer Ferran",
        timetable: "15-23",
        image: "image",
        owner: "629684abc46cf477e7ca7009",
        specialty: "Margherita",
        id: "3",
      };

      const createAction = createPizzeriaActionCreator(newPizzeria);

      const pizzeriaStatus = pizzeriasSlice(initialState, createAction);

      expect(pizzeriaStatus).toHaveLength(expectedLength);
    });
  });
});

describe("Given a edite Pizzeria Reducer", () => {
  describe("When it receives an initial state with an array of 2 pizzerias and a edit pizzeria action with the updated pizzeria", () => {
    test("Then it should return a new pizzeria state with the array with the updated pizzeria", () => {
      const initialStatus: IPizzeria[] = [mockPizzerias[0], mockPizzerias[1]];

      const updatedPizzeria = {
        name: "Pizza Pazza 1",
        address: "Carrer Ample 1",
        timetable: "15-23",
        image: "image",
        owner: "629684abc46cf477e7ca7009",
        specialty: "Margherita",
        id: "1",
      };
      const expectedNewState = [updatedPizzeria, mockPizzerias[1]];

      const editPizzeriaAction = editPizzeriaActionCreator(updatedPizzeria);

      const newState = pizzeriasSlice(initialStatus, editPizzeriaAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
