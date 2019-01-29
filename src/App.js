import React from "react";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "./store";

const loading = () => <h1>Loading</h1>;

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading
});

const LoadableSearch = Loadable({
  loader: () => import("./SearchParams"),
  loading
});

const LoadableResults = Loadable({
  loader: () => import("./Results"),
  loading
});

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearch path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
