import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {StateType} from "./redux/MyState";

type AppPropsType = {
    state: StateType
    addPost: () => void
    addDialogsText: () => void
    changeTextMessage: (text: string | undefined) => void
    updateDialogsMessage: (text: string | undefined) => void
}

export const App: React.FC<AppPropsType> = ({
                                                state,
                                                addPost,
                                                addDialogsText,
                                                changeTextMessage,
                                                updateDialogsMessage
                                            }) => {
    return (


        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className='wrapper-content'>
                <Route exact path={'/dialogs'} render={() => <Dialogs state={state.dialogsPage}
                                                                      addDialogsText={addDialogsText}
                                                                      updateDialogsMessage={updateDialogsMessage}/>}/>
                <Route path='/profile' render={() => <Profile state={state.profilePage}
                                                              addPost={addPost}
                                                              changeTextMessage={changeTextMessage}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
            </div>
        </div>

    );
}





