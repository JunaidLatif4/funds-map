import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import User from "./User";

const reducers = combineReducers({
  user: User,
});

const token = localStorage.getItem("token");

const initialState = {
  user: {
    token: token ? token : "",
  },
};
const configureStore = createStore(reducers, initialState);

export default configureStore;
