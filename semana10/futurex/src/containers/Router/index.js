import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from "../CreateTripPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";
import FormPage from "../FormPage";
import HomePage from '../HomePage';


export const routes = {
  home: "/",
  login: "/login",
  form: "/application-form",
  createTrip: "/trips/create",
  listTrips: "/trips/list",
  tripDetails: "/trips/details"
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.form} component={FormPage} />
        <Route exact path={routes.createTrip} component={CreateTripPage} />
        <Route exact path={routes.listTrips} component={ListTripsPage} />
        <Route exact path={routes.tripDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
