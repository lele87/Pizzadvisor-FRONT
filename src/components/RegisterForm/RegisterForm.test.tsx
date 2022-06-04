import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a RegisterForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 input fields and 2 buttons", () => {
      const expectedButtons = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const nameInput = screen.getByLabelText("Name");
      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const buttons = screen.getAllByRole("button");

      expect(nameInput).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();

      expect(buttons).toHaveLength(expectedButtons);
    });
  });
  describe("When the user types the name 'lelo' in the input field", () => {
    test("Then it should render the name 'lelo'", () => {
      const expectedInputText = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByLabelText("Name");

      userEvent.type(inputField, expectedInputText);

      expect(inputField).toHaveValue(expectedInputText);
    });
  });
  describe("When the user doesn't type any username, name or password", () => {
    test("Then the register button should be disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button", { name: "SIGN UP" });

      expect(button).toBeDisabled();
    });
  });

  describe("When the user fill the name, username and password input fields", () => {
    test("Then the register button should be enabled", () => {
      const username = "lelo";
      const name = "lelo";
      const password = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );
      const nameInput = screen.getByLabelText("Name");
      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const registerButton = screen.getByRole("button", { name: "SIGN UP" });

      userEvent.type(nameInput, name);

      userEvent.type(usernameInput, username);
      userEvent.type(passwordInput, password);

      expect(registerButton).not.toBeDisabled();
    });
  });
  describe("When the user fill the username and password input fields and the user clicks on the register button", () => {
    test("Then the dispatch should be invoked", () => {
      const username = "lelo";
      const password = "lelo";
      const name = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const nameInput = screen.getByLabelText("Name");
      const usernameInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
      const registerButton = screen.getByRole("button", { name: "SIGN UP" });

      userEvent.type(nameInput, name);
      userEvent.type(usernameInput, username);
      userEvent.type(passwordInput, password);

      userEvent.click(registerButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
