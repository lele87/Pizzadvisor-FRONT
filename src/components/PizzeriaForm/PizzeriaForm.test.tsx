import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import PizzeriaForm from "./PizzeriaForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a PizzeriaForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 5 input fields and 2 buttons", () => {
      const expectedButtons = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PizzeriaForm />
          </Provider>
        </BrowserRouter>
      );

      const nameInput = screen.getByLabelText("Name");
      const addressInput = screen.getByLabelText("Address");
      const timetableInput = screen.getByLabelText("Opening Hours");
      const specialtyInput = screen.getByLabelText("Special Pizza");
      const imageInput = screen.getByLabelText("Image");
      const buttons = screen.getAllByRole("button");

      expect(nameInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
      expect(timetableInput).toBeInTheDocument();
      expect(specialtyInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();

      expect(buttons).toHaveLength(expectedButtons);
    });
  });
  describe("When the user types the name 'lelo' in the input field", () => {
    test("Then it should render the name 'lelo'", () => {
      const expectedInputText = "lelo";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PizzeriaForm />
          </Provider>
        </BrowserRouter>
      );

      const inputField = screen.getByLabelText("Name");

      userEvent.type(inputField, expectedInputText);

      expect(inputField).toHaveValue(expectedInputText);
    });
  });
  describe("When the user doesn't type any address, name or timetable", () => {
    test("Then the create pizzeria button and edit pizzeria button should be disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PizzeriaForm />
          </Provider>
        </BrowserRouter>
      );

      const createButton = screen.getByRole("button", {
        name: "CREATE PIZZERIA",
      });
      const editButton = screen.getByRole("button", {
        name: "EDIT PIZZERIA",
      });

      expect(createButton).toBeDisabled();
      expect(editButton).toBeDisabled();
    });
  });
  describe("When invoked and the user clicks on the create pizzeria button", () => {
    test("Then the dispatch and the setFormData should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PizzeriaForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const button = screen.getByRole("button", { name: "CREATE PIZZERIA" });

      inputs.forEach((input) => {
        userEvent.type(input, "hola");
      });

      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
