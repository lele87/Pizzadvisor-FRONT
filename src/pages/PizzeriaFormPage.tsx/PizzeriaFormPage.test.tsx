import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import PizzeriaFormPage from "./PizzeriaFormPage";

describe("Given a PizzeriaFormPage", () => {
  describe("When it's instantiated", () => {
    test.only("Then it should render 6 heading and a form", () => {
      const expectedNumberHeading = 6;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PizzeriaFormPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getAllByRole("heading");
      const form = screen.getByLabelText("Name");

      expect(form).toBeInTheDocument();
      expect(expectedHeading).toHaveLength(expectedNumberHeading);
    });
  });
});
