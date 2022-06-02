import { mockUserRegister } from "../../mocks/mockUser";
import userSlice, {
  loginActionCreator,
  logoutActionCreator,
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

describe("Given a user logout reducer", () => {
  describe("When it receives a state status and a logout action with the logged user credentials", () => {
    test("Then it should return the initial user state and the logged property false", () => {
      const initialState = {
        userInfo: {
          username: "lelo",
          name: "lelo",
          id: "1",
        },
        logged: true,
      };

      const expectedState = {
        userInfo: {
          username: "",
          name: "",
          id: "",
        },
        logged: false,
      };

      const logoutAction = logoutActionCreator();
      const userStatus = userSlice(initialState, logoutAction);

      expect(userStatus).toEqual(expectedState);
    });
  });
});
