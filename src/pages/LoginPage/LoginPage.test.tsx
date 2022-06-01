import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import LoginPage from "./LoginPage";

describe("Given a Login Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render an heading and a login form", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading");
      const form = screen.getByLabelText("Username");

      expect(form).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
