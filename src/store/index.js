import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
  customers: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
