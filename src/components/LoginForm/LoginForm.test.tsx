import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a LoginForm Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 2 input fields and 1 button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const button = screen.getByRole("button");

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user types the username 'lelo' in the input field", () => {
    test("Then it should render the username 'lelo'", () => {
      const expectedInputText = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByLabelText("Username");

      userEvent.type(inputField, expectedInputText);

      expect(inputField).toHaveValue(expectedInputText);
    });
  });
  describe("When the user doesn't type any username or password", () => {
    test("Then the login button should be disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button", { name: "LOGIN" });

      expect(button).toBeDisabled();
    });
  });
  describe("When the user fill the username and password input fields", () => {
    test("Then the login button should be enabled", () => {
      const username = "lelo";
      const password = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const registerButton = screen.getByRole("button", { name: "LOGIN" });

      userEvent.type(usernameInput, username);
      userEvent.type(passwordInput, password);

      expect(registerButton).not.toBeDisabled();
    });
  });
  describe("When the user fill the username and password input fields and the user clicks on the login button", () => {
    test("Then the dispatch should be invoked", () => {
      const username = "lelo";
      const password = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const loginButton = screen.getByRole("button", { name: "LOGIN" });

      userEvent.type(usernameInput, username);
      userEvent.type(passwordInput, password);

      userEvent.click(loginButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
