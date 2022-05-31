import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 input fields and 2 buttons", () => {
      const expectedButtons = 2;

      render(<RegisterForm />);

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

      render(<RegisterForm />);

      const inputField = screen.getByLabelText("Name");

      userEvent.type(inputField, expectedInputText);

      expect(inputField).toHaveValue(expectedInputText);
    });
  });
});
