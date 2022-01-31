import React from "react";
import s from './MyPosts.module.css'
import {addPostActionCreate, changeTextMessageActionCreate, MessageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../redux/store";
import {connect} from "react-redux";


type MapStateToPropsType = {
    posts: Array<MessageType>
    textMessage: string

}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        textMessage: state.profilePage.textMessage
    }
}

type MapDispatchToPropsType = {
    addPost: () => void
    onChangeText: (text: string) => void
}
const MapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreate())
        },
        onChangeText: (text: string) => {
            dispatch(changeTextMessageActionCreate(text))
        }
    }
}



export const MyPostsContainer = connect<MapStateToPropsType,MapDispatchToPropsType,{}, AppStateType>(
    MapStateToProps, MapDispatchToProps)(MyPosts)


