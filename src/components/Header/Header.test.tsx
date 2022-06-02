import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Header from "./Header";

describe("Given a header", () => {
  describe("When it's invoked", () => {
    test("Then it should render a heading and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading");
      const expectedButton = screen.getByRole("button");

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
    });
  });
});
