import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";

import PizzeriaList from "./PizzeriaList";

describe("Given a PizzeriaList component", () => {
  describe("When it's instanciatedd", () => {
    test("Then it should create one ul element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PizzeriaList />
          </Provider>
        </BrowserRouter>
      );
      const listOfGames = screen.getByRole("list");

      expect(listOfGames).toBeInTheDocument();
    });
  });
});
