import {combineReducers, createStore} from "redux";
import {profileReducer}  from "./profile-reducer"
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const reducers={
    profilePage:profileReducer,
    dialogsPage: dialogsReducer,
    sidebar:sidebarReducer
}

const store =createStore(combineReducers(reducers))

export default store