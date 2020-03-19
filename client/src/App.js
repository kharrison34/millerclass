import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavbar from "./components/Globals/AppNavbar";

//pages
import Schedule from "./components/Pages/Schedule";
import TournamentChampions from "./components/Pages/TournamentChampions";
import Rules from "./components/Pages/Rules";
import Sponsors from "./components/Pages/Sponsors";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Fragment>
            <AppNavbar />
            <Switch>
              <Route exact path="/Schedule" component={Schedule} />
              <Route
                exact
                path="/TournamentChampions"
                component={TournamentChampions}
              />
              <Route exact path="/Rules" component={Rules} />
              <Route exact path="/Sponsors" component={Sponsors} />
            </Switch>
          </Fragment>
        </Router>
      </>
    </div>
  );
}

export default App;
