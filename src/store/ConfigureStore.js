import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import User from "./User";
import Demat from "./Demat";
import Bank from "./Bank";

const reducers = combineReducers({
  user: User,
  demat: Demat,
  bank: Bank,
});

const token = localStorage.getItem("token");
const initialState = {
  user: {
    token: token ? token : null,
  },
};
const configureStore = createStore(reducers, initialState);

export default configureStore;
