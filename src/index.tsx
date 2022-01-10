import React from 'react';
import {
    addDialogsText,
    addPost,
    changeTextMessage,
    state,
    StateType,
    subscribe,
    updateDialogsMessage
} from "./redux/MyState";

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";


const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}
                     addDialogsText={addDialogsText}
                     changeTextMessage={changeTextMessage}
                     updateDialogsMessage={updateDialogsMessage}
                />
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root'))
}


rerenderEntireTree()

subscribe(rerenderEntireTree)




