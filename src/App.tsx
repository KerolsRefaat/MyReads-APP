import React from "react";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import SearchPage from "./Components/SearchPage";
import Header from "./Components/Header";
import { booksSliceActions } from "./store/slices/booksSlice";
import BookList from "./Components/BookList";
import Button from "./Components/Button";


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
          <div className="list-books-content">
            <Header/>
             <BookList />
             <Button/>
            </div>
          }
        ></Route>
       
        <Route path="/search" element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;