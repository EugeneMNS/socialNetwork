import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import  store  from './redux/store';


const rerenderEntireTree = () => {
    const state= store.getState()

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root'))
}


rerenderEntireTree()
store.subscribe(rerenderEntireTree)


