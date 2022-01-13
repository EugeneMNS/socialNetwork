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
import {StoreType} from "./redux/Store";

type AppPropsType = {
    state: StateType
    store: StoreType
}

export const App: React.FC<AppPropsType> = ({state, store}) => {
                                            
    return (


        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className='wrapper-content'>
                <Route exact path={'/dialogs'} render={() => <Dialogs state={state.dialogsPage}
                                                                     store= {store}/>}/>
                <Route path='/profile' render={() => <Profile state={state.profilePage}
                                                              store={store}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
            </div>
        </div>

    );
}





