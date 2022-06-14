import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import reactTestRenderer from "react-test-renderer";
import PageNotFound from "./PageNotFound";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a PageNotFound Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render an image and a button", () => {
      const pageNotFound = reactTestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <PageNotFound />
          </Provider>
        </BrowserRouter>
      ).toJSON;

      expect(pageNotFound).toMatchSnapshot();
    });
  });
  describe("When the user clicks on the go back homepage button", () => {
    test("Then it should navigate to Homepage", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PageNotFound />
          </Provider>
        </BrowserRouter>
      );

      const goHomePageButton = screen.getByRole("button");

      userEvent.click(goHomePageButton);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
