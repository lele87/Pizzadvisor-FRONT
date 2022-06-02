import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Pizzeria from "./Pizzeria";

describe("Given a Pizzeria component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 1 heading and 1 image", () => {
      const pizzeria = {
        name: "ciccio",
        address: "carrer ciccio",
        image: "",
        timetable: "15:00-23:00",
        owner: "53454354323646362362",
        specialty: ["Margherita", "Marinara", "Capricciosa"],
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pizzeria pizzeria={pizzeria} />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading");
      const expectedImage = screen.getByRole("img");

      expect(expectedHeading).toBeInTheDocument();
      expect(expectedImage).toBeInTheDocument();
    });
  });
});
