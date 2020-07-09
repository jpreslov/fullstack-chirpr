import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import Admin from "./views/Admin";
import Compose from "./views/Compose";

const App: React.FC<AppProps> = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/admin/:id">
            <Admin />
          </Route>
          <Route exact path="/compose">
            <Compose />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

interface AppProps {}

export default App;
