import DetailsPage from "./DetailsPage";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a DetailsPage component", () => {
  const pizzeria = {
    name: "ciccio",
    address: "carrer ciccio",
    image: "",
    timetable: "15:00-23:00",
    owner: "53454354323646362362",
    specialty: "Margherita",
    id: "1",
  };

  const userLoginAction = {
    type: "user/login",
    payload: {
      name: "ciccio",
      username: "ciccio",
      id: "53454354323646362362",
    },
  };

  store.dispatch(userLoginAction);

  render(
    <BrowserRouter>
      <Provider store={store}>
        <DetailsPage pizzeria={pizzeria} />
      </Provider>
    </BrowserRouter>
  );
  describe("When it's invoked", () => {
    test("Then it should render 7 heading and 1 image", () => {
      const expectedLength = 7;

      const expectedHeading = screen.getAllByRole("heading");

      expect(expectedHeading).toHaveLength(expectedLength);
    });
  });
  describe("When the user clicks on the Edit details button", () => {
    test("Then the navigate should be called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailsPage pizzeria={pizzeria} />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button", { name: "EDIT DETAILS" });

      userEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
