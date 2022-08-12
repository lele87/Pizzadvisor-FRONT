import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Header from "./Header";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a header", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading and 2 buttons", () => {
      const expectedListItem = 4;
      const expectedHeading = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const menuHeader = screen.getAllByRole("listitem");
      const menuHeading = screen.getAllByRole("heading");

      expect(menuHeading).toHaveLength(expectedHeading);
      expect(menuHeader).toHaveLength(expectedListItem);
    });
  });
  describe("When the user clicks on the logout link", () => {
    test("Then the dispatch should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logoutLink = screen.getByRole("link", { name: "Logout" });

      userEvent.click(logoutLink);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
  describe("When the user clicks on the create pizzeria link", () => {
    test("Then the dispatch should be called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const addPizzeriaLink = screen.getByRole("link", {
        name: "Add pizzeria",
      });

      userEvent.click(addPizzeriaLink);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
