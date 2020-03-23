import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tripList from './tripList';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tripList,
    
  });
