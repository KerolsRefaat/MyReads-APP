import { render, screen } from "@testing-library/react";
import BookShelf from "../Components/BookShelf";
import { Provider } from "react-redux";
import store from "../store/store";
describe("BookShelf Testing Cases", () => {

  test("renders loading message when books are not provided", () => {
    render(
        <BookShelf
        books={[]}
        shelf={"Read"}
      />
    )    
    expect(screen.getByText("Loading Read shelf Books")).toBeInTheDocument();
  });

  test("renders books when provided", () => {
    const books = [
      { id: "1", title: "React Book 1", authors: ["Author 1"] },
      { id: "2", title: "React Book 2", authors: ["Author 2"] },
    ];

    render(<Provider store={store}> <BookShelf books={books} shelf="Read" /></Provider>);
    
    books.forEach(book => {
      expect(screen.getByText(book.title)).toBeInTheDocument();
    });
  });
});