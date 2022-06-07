import { mockPizzerias } from "../../mocks/mockPizzerias";
import { IPizzeria } from "../../types/types";
import pizzeriaSlice, { loadPizzeriaActionCreator } from "./pizzeriaSlice";

describe("Given a load pizzeria reducer", () => {
  describe("When it receives an initial state and a load action with the pizzeria info", () => {
    test("Then it should return the new pizzerias state with the received info", () => {
      const initialState: IPizzeria = {
        name: "",
        address: "",
        image: "",
        timetable: "",
        specialty: "",
        owner: "",
        id: "",
      };

      const pizzeriaPayload = mockPizzerias[0];

      const expectedState = { ...pizzeriaPayload };

      const loadAction = loadPizzeriaActionCreator(pizzeriaPayload);
      const pizzeriaStatus = pizzeriaSlice(initialState, loadAction);

      expect(pizzeriaStatus).toEqual(expectedState);
    });
  });
});
