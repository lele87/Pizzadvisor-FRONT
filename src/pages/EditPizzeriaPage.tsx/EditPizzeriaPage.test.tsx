import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PizzeriaForm from "../../components/PizzeriaForm/PizzeriaForm";
import store from "../../redux/store";
import EditPizzeriaPage from "./EditPizzeriaPage";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given an EditPizzeriaPage", () => {
  describe("When it's invoked", () => {
    test("Then it should render a form with 4 input fields and 2 buttons", () => {
      const expectedNumberInput = 4;
      const expectedNumberButtons = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditPizzeriaPage />
          </Provider>
        </BrowserRouter>
      );

      const inputs = screen.getAllByRole("textbox");
      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(expectedNumberButtons);
      expect(inputs).toHaveLength(expectedNumberInput);
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
