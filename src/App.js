import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";
import LayoutContainer from "./components/LayoutContainer";

import PredictiveAnalyst from "./components/PredictiveAnalyst";
import MarketingAnalyst from "./components/MarketingAnalyst";
//import SupplyChain from "./components/SupplyChain";
//import DataEngineer from "./components/DataEngineer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <LayoutContainer>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route
              path="/kusari-portal/predictive-analyst"
              render={props => <PredictiveAnalyst {...props} />}
            />
            <Route
              path="/kusari-portal/marketing-analyst"
              render={props => <MarketingAnalyst {...props} />}
            />
            {/* <Route
              path="/kusari-portal/supply-chain"
              render={props => <SupplyChain {...props} />}
            />
            <Route
              path="/kusari-portal/data-engineer"
              render={props => <DataEngineer {...props} />}
            />*/}
          </Switch>
        </LayoutContainer>
      </React.Fragment>
    );
  }
}
export default App;
