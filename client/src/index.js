import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import "./assets/styles/App.css";
import "./assets/styles/bootstrap.min.css";
import "./assets/styles/font-awesome.min.css";
import ItemList from "./pages/itemList";
import ItemDetail from "./pages/ItemDetail";
import Header from "./layout/header";
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
        <Route
          path={[
            "/pcs/:id",
            "/pc-accessories/:id",
            "/smartphones/:id",
            "/smartphone-accessories/:id",
          ]}
        >
          <ItemDetail url={history.location.pathname} />
        </Route>
        <Route
          path={[
            "/pcs",
            "/pc-accessories",
            "/smartphones",
            "/smartphone-accessories",
          ]}
        >
          <ItemList url={history.location.pathname} />
        </Route>
        <Route path={["*", "/404"]}>
          <Header />
          <div className="body">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1>404</h1>
                    <p>Page not found</p>
                    <p>This is not the page you are looking for...</p>
                    <p>
                      {" "}
                      <small>
                        Consider going
                        {" "}<a href="/">Home.</a>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
