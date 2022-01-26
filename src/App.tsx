import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {ActionType, StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export const App: React.FC<AppPropsType> = ({state, dispatch}) => {
                                            
    return (


        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className='wrapper-content'>
                <Route exact path={'/dialogs'} render={() => <Dialogs state={state.dialogsPage}
                                                                     dispatch= {dispatch}/>}/>
                <Route path='/profile' render={() => <Profile state={state.profilePage}
                                                              dispatch={dispatch}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
            </div>
        </div>

    );
}





