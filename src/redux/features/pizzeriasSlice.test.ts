import { mockPizzerias } from "../../mocks/mockPizzerias";
import { IPizzeriaState } from "../../types/types";
import pizzeriasSlice, {
  createPizzeriaActionCreator,
  deletePizzeriaActionCreator,
  editPizzeriaActionCreator,
  filterPizzeriasActionCreator,
  loadPizzeriasActionCreator,
} from "./pizzeriasSlice";

describe("Given a load pizzerias reducer", () => {
  describe("When it receives an initial state and a load action with the pizzerias info", () => {
    test("Then it should return the new pizzerias state with the received info", () => {
      const initialState: IPizzeriaState = {
        pizzeriaInfo: [],
        filter: "All",
      };

      const pizzeriasInfo = mockPizzerias;

      const expectedState = {
        pizzeriaInfo: [...mockPizzerias],
        filter: "All",
      };

      const loadAction = loadPizzeriasActionCreator(pizzeriasInfo);
      const pizzeriaStatus = pizzeriasSlice(initialState, loadAction);

      expect(pizzeriaStatus).toEqual(expectedState);
    });
  });
});

describe("Given a delete pizzeria reducer", () => {
  describe("When it receives an initial state with 2 pizzerias and a delete action with an id", () => {
    test("Then it should return one pizzeria", () => {
      const idToDelete = "2";

      const deleteAction = deletePizzeriaActionCreator(idToDelete);

      const initialState = {
        pizzeriaInfo: [mockPizzerias[0], mockPizzerias[1]],
        filter: "All",
      };

      const expectedState = {
        pizzeriaInfo: [
          {
            name: "Pizza Pazza",
            address: "Carrer Ample",
            timetable: "15-23",
            image: "image",
            owner: "629684abc46cf477e7ca7009",
            specialty: "Margherita",
            id: "1",
          },
        ],
        filter: "All",
      };
      const pizzeriaStatus = pizzeriasSlice(initialState, deleteAction);
      expect(pizzeriaStatus).toEqual(expectedState);
    });
  });
});

describe("Given a createPizzeria reducer", () => {
  describe("When it receives an initial state with 2 pizzerias and a create action with the pizzeria's info", () => {
    test("Then it should return 3 pizzerias", () => {
      const initialState = {
        pizzeriaInfo: [mockPizzerias[0]],
        filter: "All",
      };
      const createAction = createPizzeriaActionCreator(mockPizzerias[1]);

      const expectedState = {
        pizzeriaInfo: [mockPizzerias[0], mockPizzerias[1]],
        filter: "All",
      };

      const pizzeriaStatus = pizzeriasSlice(initialState, createAction);
      expect(pizzeriaStatus).toEqual(expectedState);
    });
  });
});

describe("Given a edit Pizzeria Reducer", () => {
  describe("When it receives an initial state with an array of 2 pizzerias and a edit pizzeria action with the updated pizzeria", () => {
    test("Then it should return a new pizzeria state with the array with the updated pizzeria", () => {
      const initialState = {
        pizzeriaInfo: [mockPizzerias[0], mockPizzerias[1]],
        filter: "All",
      };

      const updatedPizzeria = {
        name: "Pizza Circuus 1",
        address: "Carrer Ample 1",
        timetable: "15-23",
        image: "image",
        owner: "629684abc46cf477e7ca7009",
        specialty: "Margherita",
        id: "2",
      };

      const editPizzeriaAction = editPizzeriaActionCreator(updatedPizzeria);

      const expectedNewState = {
        pizzeriaInfo: [mockPizzerias[0], updatedPizzeria],
        filter: "All",
      };

      const pizzeriaStatus = pizzeriasSlice(initialState, editPizzeriaAction);

      expect(pizzeriaStatus).toEqual(expectedNewState);
    });
  });
});

describe("Given a filter Pizzeria Reducer", () => {
  describe("When it receives an initial state with an array of 2 pizzerias and a filter pizzeria action with the filter action", () => {
    test("Then it should return a new pizzeria state with the array with the filtered pizzerias", () => {
      const initialState = {
        pizzeriaInfo: [mockPizzerias[0], mockPizzerias[1]],
        filter: "All",
      };

      const filterPizzeriaAction = filterPizzeriasActionCreator("Margherita");

      const expectedNewState = {
        pizzeriaInfo: [mockPizzerias[0], mockPizzerias[1]],
        filter: "Margherita",
      };

      const pizzeriaStatus = pizzeriasSlice(initialState, filterPizzeriaAction);

      expect(pizzeriaStatus).toEqual(expectedNewState);
    });
  });
});
