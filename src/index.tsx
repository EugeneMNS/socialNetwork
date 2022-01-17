import React from 'react';
import {StateType, store} from './redux/state';

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import { state } from './redux/MyState';


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
store.subscriber(rerenderEntireTree)


