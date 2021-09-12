import React from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import LoadingPage from "./LoadingPage";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Route path="/" exact component={LoadingPage} />
            <Route path="/profile" exact component={Header} />
            <Route path="/profile" exact component={Content} />
            <Route path="/profile" exact component={Footer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
