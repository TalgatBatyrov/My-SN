import { combineReducers, createStore } from "redux";
import dialogsReducer from "../dialogsReducer";

const redusers = combineReducers({
    dialogsPage: dialogsReducer
})

const store = createStore(redusers)

export default store