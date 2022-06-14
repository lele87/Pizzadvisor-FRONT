import userISlice, {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "./userISlice";

describe("Given a uiSlice reducer", () => {
  describe("When it receives an initial state and a loaded off action", () => {
    test("Then it should return the state to false", () => {
      const initialState = {
        loaded: true,
      };
      const expectedState = { loaded: false };

      const loadOffAction = loadedOffActionCreator();
      const loadedOff = userISlice(initialState, loadOffAction);

      expect(loadedOff).toEqual(expectedState);
    });
  });

  describe("When it receives an initial state and a loaded on action", () => {
    test("Then it should return the state to true", () => {
      const initialState = {
        loaded: false,
      };
      const expectedState = { loaded: true };

      const loadOnAction = loadedOnActionCreator();
      const loadedOff = userISlice(initialState, loadOnAction);

      expect(loadedOff).toEqual(expectedState);
    });
  });
});
