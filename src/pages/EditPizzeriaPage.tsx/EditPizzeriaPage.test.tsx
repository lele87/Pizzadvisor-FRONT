import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PizzeriaForm from "../../components/PizzeriaForm/PizzeriaForm";
import store from "../../redux/store";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given an EditPizzeriaPage", () => {
  describe("When it's invoked", () => {
    test("Then it should render a form", () => {
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
  describe("When invoked and the user clicks on the edit pizzeria button", () => {
    test("Then the dispatch should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PizzeriaForm />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const button = screen.getByRole("button", { name: "EDIT PIZZERIA" });

      inputs.forEach((input) => {
        userEvent.type(input, "hola");
      });

      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
