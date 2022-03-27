import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login"


type AppPropsType = {

}


export const App: React.FC<AppPropsType> = () => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />
            <div className='wrapper-content'>
                <Route exact path={'/dialogs'} render={() => <DialogsContainer />}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
            </div>
        </div>

    );
}








