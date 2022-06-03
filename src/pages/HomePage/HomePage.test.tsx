import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import HomePage from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a Header component with a heading and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: "Pizzadvisor",
      });
      const expectedButton = screen.getByRole("button", { name: "LOGOUT" });

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
    });
  });
});
