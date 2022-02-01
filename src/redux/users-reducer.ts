import {v1} from 'uuid';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type LocationType = {
    cityName: string
    countryName: string
}
export type UserType = {
    id: string
    fullName: string
    userPhoto: string
    followed: boolean
    status: string
    location: LocationType
}
type UsersType = {
    users: Array<UserType>
}

const initialState: UsersType = {
    users: []
}

type ActionType = FollowActionCreateType | UnFollowActionCreateType | SetUsersActionCreateType

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }

}

type FollowActionCreateType = { type: typeof FOLLOW, userId: string }
export const FollowActionCreate = (userId: string): FollowActionCreateType => ({
    type: FOLLOW,
    userId
})

type UnFollowActionCreateType = { type: typeof UNFOLLOW, userId: string }
export const UnFollowActionCreate = (userId: string): UnFollowActionCreateType => ({
    type: UNFOLLOW,
    userId
})

type SetUsersActionCreateType = { type: typeof SET_USERS, users: Array<UserType> }
export const SetUsersActionCreate = (users: Array<UserType>): SetUsersActionCreateType => ({
    type: SET_USERS,
    users
})