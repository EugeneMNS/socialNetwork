const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
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

type FollowActionCreateType = { type: typeof FOLLOW, userId: number }
export const FollowActionCreate = (userId: number): FollowActionCreateType => ({
    type: FOLLOW,
    userId
})

type UnFollowActionCreateType = { type: typeof UNFOLLOW, userId: number }
export const UnFollowActionCreate = (userId: number): UnFollowActionCreateType => ({
    type: UNFOLLOW,
    userId
})

type SetUsersActionCreateType = { type: typeof SET_USERS, users: Array<UserType> }
export const SetUsersActionCreate = (users: Array<UserType>): SetUsersActionCreateType => ({
    type: SET_USERS,
    users
})