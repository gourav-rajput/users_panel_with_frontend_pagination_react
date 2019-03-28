import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import HomeReducer from "./reducers/Home";

const Reducers =  combineReducers({
  home: HomeReducer
})

// Creating and exporting the global store of app
export default createStore( 
  Reducers, 
  {}, 
  applyMiddleware(ReduxThunk)
);

