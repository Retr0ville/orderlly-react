import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/styles/App.css";
import "./assets/styles/bootstrap.min.css";
import "./assets/styles/font-awesome.min.css";
import PcList from "./pages/PcList";
import SmartphoneList from "./pages/SmartphoneList";
import SmartphoneAccessoryList from "./pages/SmartphoneAccessoryList";
import PcAccessoryList from "./pages/PcAccessoryList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pcs">
          <PcList />
        </Route>
        <Route path="/pc-accessories">
          <PcAccessoryList />
        </Route>
        <Route path="/smartphone-accessories">
          <SmartphoneAccessoryList />
        </Route>
        <Route path="/smartphones">
          <SmartphoneList />
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <Home />
    // </div>
    // <div className="container">
    //   <p>The one who remains</p>
    //   <code>'ello Guvnor</code> <i class="fa fa-codepen" aria-hidden="true"></i>
    // </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
