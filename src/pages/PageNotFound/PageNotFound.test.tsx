import { Provider } from "react-redux";
import store from "../../redux/store";

import { BrowserRouter } from "react-router-dom";
import reactTestRenderer from "react-test-renderer";
import PageNotFound from "./PageNotFound";

describe("Given a PageNotFound Page", () => {
  describe("When it's instantiated", () => {
    test("Then it should render an image and a button", () => {
      const pageNotFound = reactTestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <PageNotFound />
          </Provider>
        </BrowserRouter>
      ).toJSON;

      expect(pageNotFound).toMatchSnapshot();
    });
  });
});
