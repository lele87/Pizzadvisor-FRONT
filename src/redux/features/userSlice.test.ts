import { mockUserRegister } from "../../mocks/mockUser";
import userSlice, {
  loginActionCreator,
  registerActionCreator,
} from "./userSlice";

describe("Given a user login reducer", () => {
  describe("When it receives an initial state status and a login action with the login user credentials", () => {
    test("Then it should return the new user state with the received user credentials and the logged property true", () => {
      const initialState = {
        userInfo: {
          username: "",
          name: "",
          id: "",
        },
        logged: false,
      };

      const userInfo = mockUserRegister;

      const expectedState = {
        userInfo: mockUserRegister,
        logged: true,
      };

      const loginAction = loginActionCreator(userInfo);
      const userStatus = userSlice(initialState, loginAction);

      expect(userStatus).toEqual(expectedState);
    });
  });
});

describe("Given a user register reducer", () => {
  describe("When it receives an initial state status and a register action with the register user credentials", () => {
    test("Then it should return the new user state with the received user credentials and the logged property false", () => {
      const initialState = {
        userInfo: {
          username: "",
          name: "",
          id: "",
        },
        logged: false,
      };

      const userInfo = mockUserRegister;

      const expectedState = {
        userInfo: mockUserRegister,
        logged: false,
      };

      const registerAction = registerActionCreator(userInfo);
      const userStatus = userSlice(initialState, registerAction);

      expect(userStatus).toEqual(expectedState);
    });
  });
});
