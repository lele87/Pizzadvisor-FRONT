import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navbar from "./Navbar";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a Navbar component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 li elements", () => {
      const expectedNumberLi = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );

      const expectedElement = screen.getAllByRole("listitem");

      expect(expectedElement).toHaveLength(expectedNumberLi);
    });
  });
  describe("When the user clicks on the Edit details button", () => {
    test("Then the navigate should be called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );

      const liElement = screen.getByAltText(
        "Redirect to create a pizzeria link plus"
      );

      userEvent.click(liElement);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
