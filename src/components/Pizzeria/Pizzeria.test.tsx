import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Pizzeria from "./Pizzeria";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a Pizzeria component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 1 heading and 1 image", () => {
      const pizzeria = {
        name: "ciccio",
        address: "carrer ciccio",
        image: "",
        timetable: "15:00-23:00",
        owner: "53454354323646362362",
        specialty: "Margherita",
        id: "1",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pizzeria pizzeria={pizzeria} />
          </Provider>
        </BrowserRouter>
      );

      const expectedHeading = screen.getByRole("heading");

      expect(expectedHeading).toBeInTheDocument();
    });
    describe("When the users clicks on the delete image", () => {
      test("Then the dispatch should be invoked", () => {
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
              <Pizzeria pizzeria={pizzeria} />
            </Provider>
          </BrowserRouter>
        );

        const deleteImage = screen.getByAltText("Circle X to delete pizzeria");

        userEvent.click(deleteImage);

        expect(mockDispatch).toHaveBeenCalled();
      });
    });
    describe("When the users clicks on the info image", () => {
      test("Then it should navigate to the Details Page", () => {
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
              <Pizzeria pizzeria={pizzeria} />
            </Provider>
          </BrowserRouter>
        );

        const infoImage = screen.getByAltText(
          "Circle Info to navigate to pizzeria details page"
        );

        userEvent.click(infoImage);

        expect(mockedUsedNavigate).toHaveBeenCalled();
      });
    });
  });
});
