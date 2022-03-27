import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import {profileApi} from "../api/api";
import {toggleIsFetching, ToggleIsFetchingType} from "./users-reducer";

export const ADD_POST = 'ADD-POST'
export const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'


export type MessageType = {
    id: number
    message: string
    likesCount: number
}

type PhotosType = {
    small: string
    large: string
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfilePageType = {
    posts: Array<MessageType>
    textMessage: string
    profile: UserProfileInfoType | null
}

export type UserProfileInfoType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ProfileActionType = AddPostType | ChangeTextMessageType | SetUsersProfileInfoType


const initialState: ProfilePageType = {
    posts: [
        {
            id: 1,
            message: 'Hello, it is my message!',
            likesCount: 11
        },
        {
            id: 2,
            message: 'Hi. I am write message too!',
            likesCount: 2

        },
        {
            id: 3,
            message: `Don't forget for me, please!`,
            likesCount: 15
        }
    ],
    textMessage: '',
    profile: null as UserProfileInfoType | null
}

export const profileReducer = (state:ProfilePageType = initialState, action: ProfileActionType): ProfilePageType => {

    switch (action.type) {
        case (ADD_POST):

            const newPost = {
                id: 4,
                message: state.textMessage,
                likesCount: 19
            }

            state = {...state, posts: [...state.posts, newPost]}
            state.textMessage = ''
            return state


        case (CHANGE_TEXT_MESSAGE):

            state = {...state, textMessage: action.text}
            return state
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state

    }
}

type AddPostType = {type: typeof ADD_POST}
export const addPost = (): AddPostType => ({
    type: ADD_POST
})

type ChangeTextMessageType= {
    type: typeof CHANGE_TEXT_MESSAGE,
    text: string

}
export const changeTextMessage = (text: string): ChangeTextMessageType => ({
    type: CHANGE_TEXT_MESSAGE,
    text: text
})

type SetUsersProfileInfoType = {
    type: typeof SET_USER_PROFILE,
    profile: UserProfileInfoType | null
}

export const setUserProfileInfo = (profile: UserProfileInfoType | null): SetUsersProfileInfoType => ({
    type: SET_USER_PROFILE,
    profile
})

type ThunkType = ThunkAction<void, AppStateType, undefined, ProfileActionType>
export const getUserProfile = (userId: number): ThunkType =>(dispatch) =>{
    profileApi.getUserProfile(userId)
        .then((data:any)=>{
            dispatch(setUserProfileInfo(data))
        })
}