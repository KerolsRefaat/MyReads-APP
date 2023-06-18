import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import BookList from "../Components/BookList";
import store from "../store/store";


describe("BookList tests", () => {


    test("rendering BookList test", () => {
        render(
            <Provider store={store}>
              <BookList />
            </Provider>
          );
          expect(screen.getByTestId("Currently Reading")).toBeInTheDocument();
          expect(screen.getByText("Want To Read")).toBeInTheDocument();
          expect(screen.getByText("Read")).toBeInTheDocument();
        });
 
  });
