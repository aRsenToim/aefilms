import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import filmsReducer from './reducers/filmsReducer';
import UserReducer from './reducers/UserReducer';
import pageReducer from "./reducers/pageReducer";

const reducers = combineReducers({
    filmsPage: filmsReducer,
    UserPage: UserReducer,
    Page: pageReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store;

export default store