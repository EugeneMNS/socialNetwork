const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: UsersType = {
    users: [],
    pageSize: 99,
    totalUsersCount: 50,
    currentPage: 5,
    isFetching: true,
}

type ActionType =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType

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
                users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage:action.currentPage
            }
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount:action.totalUsersCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state,
                isFetching:action.isFetching
            }
        default:
            return state
    }

}

type FollowACType = { type: typeof FOLLOW, userId: number }
export const FollowAC = (userId: number): FollowACType => ({
    type: FOLLOW,
    userId
})

type UnFollowACType = { type: typeof UNFOLLOW, userId: number }
export const UnFollowAC = (userId: number): UnFollowACType => ({
    type: UNFOLLOW,
    userId
})

type SetUsersACType = { type: typeof SET_USERS, users: Array<UserType> }
export const SetUsersAC = (users: Array<UserType>): SetUsersACType => ({
    type: SET_USERS,
    users
})

type SetCurrentPageACType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const SetCurrentPageAC = (currentPage: number): SetCurrentPageACType=>({
    type: SET_CURRENT_PAGE,
    currentPage
})

type SetTotalUsersCountACType = { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number }
export const SetTotalUsersCountAC = (totalCount: number): SetTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalCount
})

type ToggleIsFetchingACType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const ToggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})