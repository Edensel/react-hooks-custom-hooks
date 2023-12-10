import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import ArticlePage from "./ArticlePage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/articles/:id">
          <ArticlePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
