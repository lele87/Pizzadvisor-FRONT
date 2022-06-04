import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import PizzeriaFormPage from "./PizzeriaFormPage";

describe("Given a PizzeriaFormPage", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading and a form", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PizzeriaFormPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading");
      const form = screen.getByLabelText("Name");

      expect(form).toBeInTheDocument();
      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
