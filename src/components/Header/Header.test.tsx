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

describe("Given a header", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading and 2 buttons", () => {
      const expectedButtons = 2;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading");
      const expectedButton = screen.getAllByRole("button");

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedButton).toHaveLength(expectedButtons);
    });
  });
  describe("When the user clicks on the logout button", () => {
    test("Then the dispatch should be invoked", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const logoutButton = screen.getByRole("button", { name: "LOGOUT" });

      userEvent.click(logoutButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
