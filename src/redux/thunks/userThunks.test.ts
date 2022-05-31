import { mockUserRegister } from "../../mocks/mockUser";
import { server } from "../../mocks/server";
import { registerActionCreator } from "../features/userSlice";
import { registerThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
