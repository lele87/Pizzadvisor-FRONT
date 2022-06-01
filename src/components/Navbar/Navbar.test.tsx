import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navbar from "./Navbar";

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
});
