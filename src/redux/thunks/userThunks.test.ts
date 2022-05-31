import { mockUserRegister } from "../../mocks/mockUser";
import { server } from "../../mocks/server";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";
import { loginThunk, registerThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => () => ({
  username: "lillo",
  name: "lillo",
  id: "1",
}));

describe("Given a registerThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the registerActionCreator", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "lelo",
        name: "lelo",
        password: "lelo",
      };

      const registerAction = registerActionCreator(mockUserRegister);

      const thunk = registerThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(registerAction);
    });
  });
});

describe("Given a loginThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the loginActionCreator", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "lillo",
        password: "lillo",
      };

      const loginAction = loginActionCreator(mockUserRegister);

      const thunk = loginThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loginAction);
    });
  });
});
