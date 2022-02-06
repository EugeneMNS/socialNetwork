import React from 'react'
import {FollowActionCreate, SetUsersActionCreate, UnFollowActionCreate, UserType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import Users from "./Users";

type MapStateToPropsType = {
    users: Array<UserType>
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

type MapDispatchToPropsType = {
    follow: (iserId: number) => void
    unfollow: (iserId: number) => void
    setUsers: (users: Array<UserType>) => void
}
const MapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(FollowActionCreate(userId))
        },
        unfollow: (userId: number) => {
            dispatch(UnFollowActionCreate(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersActionCreate(users))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType,MapDispatchToPropsType,{}, AppStateType>
(MapStateToProps, MapDispatchToProps)(Users)