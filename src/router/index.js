import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../views/pages/Home/Container";
import NotFound from "../views/pages/NotFound/Container";
import MovieDetail from "../views/pages/MovieDetail/Container";
import MovieDetailComingSoon from "../views/pages/MovieDetailComingSoon/Container";

class RouterConfig extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/index" component={Home} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route exact path="/movie/comingsoon/:id" component={MovieDetailComingSoon} />
          
          <Route path="*" component={NotFound} />
          {/* <AuthorizedRoute 
              path='/app'
              component={}
              authority
            /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterConfig;
