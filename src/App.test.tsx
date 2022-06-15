import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";

describe("Given an App component function", () => {
  describe("When invoked and the user is not logged", () => {
    test("Then it should render a login form with a 'LOGIN' button", async () => {
      const expectedButton = "LOGIN";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const loginButton = screen.getByRole("button", { name: expectedButton });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When invoked and the user is logged", () => {
    test("Then it should render a header", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const userLoginAction = {
        type: "user/login",
        payload: {
          name: "ciccio",
          username: "ciccio",
          id: "53454354323646362362",
        },
      };

      store.dispatch(userLoginAction);

      jest.mock("jwt-decode", () => () => ({
        name: "ciccio",
        username: "ciccio",
        id: "53454354323646362362",
      }));

      const expectedHeading = screen.getByRole("heading", {
        name: "Pizzadvisor",
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
