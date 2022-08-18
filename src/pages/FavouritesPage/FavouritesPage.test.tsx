import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import FavouritesPage from "./FavouritesPage";

describe("Given a FavouritesPage", () => {
  describe("When it's invoked", () => {
    test("Then it should render a Header component and a Navbar component", () => {
      const expectedNumberHeading = 7;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <FavouritesPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedListElements = screen.getAllByRole("listitem");

      expect(expectedListElements).toHaveLength(expectedNumberHeading);
    });
  });
});
