import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../views/pages/Home/Container";
import NotFound from "../views/pages/NotFound/Container";
import MovieDetail from "../views/pages/MovieDetail/Container";
import MovieDetailComingSoon from "../views/pages/MovieDetailComingSoon/Container";
import SelectSeat from "../views/pages/SelectSeat/Container";
import History from "../views/pages/History/Container"

class RouterConfig extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/index" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route exact path="/movie/comingsoon/:id" component={MovieDetailComingSoon} />
          <Route exact path="/movie/selectseat/:id/:category" component={SelectSeat} />
          <Route exact path="/movie/comingsoon/selectseat/:id/:category" component={SelectSeat} />

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
