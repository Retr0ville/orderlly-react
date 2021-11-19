import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import "./assets/styles/App.css";
import "./assets/styles/bootstrap.min.css";
import "./assets/styles/font-awesome.min.css";
import ItemList from "./pages/itemList";
// import SmartphoneList from "./pages/SmartphoneList";
// import SmartphoneAccessoryList from "./pages/SmartphoneAccessoryList";
// import PcAccessoryList from "./pages/PcAccessoryList";
const history = createBrowserHistory();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={["/pcs", "/pc-accessories", "/smartphones", "/smartphone-accessories"]}>
          <ItemList url = {history.location.pathname} />
        </Route>
        {/* <Route path="/pc-accessories">
          <PcAccessoryList />
        </Route>
        <Route path="/smartphone-accessories">
          <SmartphoneAccessoryList />
        </Route>
        <Route path="/smartphones">
          <SmartphoneList />
        </Route> */}
        {/* <Route path="/pcs">
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
        </Route> */}
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
