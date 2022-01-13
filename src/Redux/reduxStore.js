import { combineReducers, createStore } from "redux";
import dialogsReducer from "../dialogsReducer";
import profileReducer from "../profileReducer";
import usersReducer from "../usersReducer";

const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    profilePage: profileReducer
})

const store = createStore(redusers)

export default store