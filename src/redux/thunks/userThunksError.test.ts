import axios from "axios";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../features/userISlice";
import { loginThunk, registerThunk } from "./userThunks";

describe("Given a loginsThunk function", () => {
  describe("When it's called and the there's no username match", () => {
    test("Then it should call the toast's error method", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "lillo",
        password: "lillo",
      };

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      const loadingOn = loadedOnActionCreator();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadingOn);
    });
  });
});

describe("Given a registerThunk function", () => {
  describe("When it's called and the there's is already a username in the database", () => {
    test("Then it should call the toast's error method", async () => {
      const dispatch = jest.fn();

      axios.post = jest.fn().mockRejectedValue({});

      const userData = {
        name: "lillo",
        username: "lillo",
        password: "lillo",
      };

      const thunk = registerThunk(userData);
      const loadingOn = loadedOnActionCreator();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadingOn);
    });
  });
});
