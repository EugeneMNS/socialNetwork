import React from 'react';
import {StateType, store} from './redux/Store';

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


const rerenderEntireTree = () => {
    const state= store.getState()

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} store={store}/>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root'))
}


rerenderEntireTree()






