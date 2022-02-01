import React from 'react'
import {FollowActionCreate, SetUsersActionCreate, UnFollowActionCreate, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: Array<UserType>
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

type MapDispatchToPropsType = {
    follow: (iserId: string) => void
    unfollow: (iserId: string) => void
    setUsers: (users: Array<UserType>) => void
}
const MapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(FollowActionCreate(userId))
        },
        unfollow: (userId: string) => {
            dispatch(UnFollowActionCreate(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersActionCreate(users))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType,MapDispatchToPropsType,{}, AppStateType>
(MapStateToProps, MapDispatchToProps)(Users)