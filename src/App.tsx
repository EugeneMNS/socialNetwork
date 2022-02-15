import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {EmptyObject, Store} from "redux";
import {ProfileActionType, ProfilePageType} from "./redux/profile-reducer";
import {DialogsActionType, DialogsPageType} from "./redux/dialogs-reducer";
import {SidebarType} from './redux/sidebar-reducer';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import {UsersContainer} from "./components/Users/UsersContainer";

type StoreType =
    Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }, ProfileActionType | DialogsActionType>


type AppPropsType = {

}


export const App: React.FC<AppPropsType> = () => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className='wrapper-content'>
                <Route exact path={'/dialogs'} render={() => <DialogsContainer />}/>
                <Route path='/profile' render={() => <Profile />}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
            </div>
        </div>

    );
}








