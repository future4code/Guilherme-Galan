import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import CreateTripPage from "../CreateTripPage";
import ListTripsPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";
import FormPage from "../FormPage";




const routes = {
  home: "/",
  form: "/application-form",
  createTrip: "/trips/create",
  listTrips: "/trips/list",
  tripsDetails: "/trips/details"
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={LoginPage} />
        <Route exact path={routes.form} component={FormPage} />
        <Route exact path={routes.createTrip} component={CreateTripPage} />
        <Route exact path={routes.listTrips} component={ListTripsPage} />
        <Route exact path={routes.tripsDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
