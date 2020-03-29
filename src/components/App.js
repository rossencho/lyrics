import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Front from "./Front";
import Lyrics from "./Lyrics";
import Navbar from "./Navbar";
import TrackContextProvider from "../contexts/TrackContext";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Router>
        <Switch>
          <TrackContextProvider>
            <Route exact path="/" component={Front} />
            <Route exact path="/track/:id" component={Lyrics} />
          </TrackContextProvider>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
