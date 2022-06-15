import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import LoadingSpinner from "./LoadingSpinner";

describe("Given a Loading Spinner Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a svg element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoadingSpinner />
          </Provider>
        </BrowserRouter>
      );

      const svgElement = screen.getByTestId("spinner").firstChild;

      expect(svgElement).toBeInTheDocument();
    });
  });
});
