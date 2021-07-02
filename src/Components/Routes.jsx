import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Chip from "../Pages/Chip";
import Home from "../Pages/Home";
import Specialty from "../Pages/Specialty";
import Bread from "../Pages/Bread";
import More from "../Pages/More";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* //define routes here */}
          <Route exact path="/" component={Home} />
          <Route exact path="/chip" component={Chip} />
          <Route exact path="/specialty" component={Specialty} />
          <Route exact path="/bread" component={Bread} />
          <Route exact path="/more" component={More} />
          <Route
            path="/"
            render={() => (
              <div>
                <img src="https://letsdishrecipes.com/wp-content/uploads/2019/09/404-error-logo.jpg" />
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
