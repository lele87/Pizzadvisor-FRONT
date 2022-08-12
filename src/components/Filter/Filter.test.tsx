import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import Filter from "./Filter";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Filter component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 5 list items", () => {
      const expectedLength = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getAllByRole("listitem");

      expect(expectedButton).toHaveLength(expectedLength);
    });
  });
  describe("When the user clicks on the input elements", () => {
    test("Then the dispatch should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const allInputText = screen.getByLabelText("All");
      const margheritaInputText = screen.getByLabelText("Margherita");
      const cheeseInputText = screen.getByLabelText("4 Cheese");
      const hamMushroomsInputText = screen.getByLabelText("Ham and Mushrooms");
      const diavolaInputText = screen.getByLabelText("Diavola");

      userEvent.click(allInputText);
      userEvent.click(margheritaInputText);
      userEvent.click(diavolaInputText);
      userEvent.click(hamMushroomsInputText);
      userEvent.click(cheeseInputText);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
