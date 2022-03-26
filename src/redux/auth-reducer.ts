const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'


export type AuthDataType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}


const initialState: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

type ActionType = SetAuthUserDataType
export const authReducer = (state: AuthDataType = initialState, action: ActionType): AuthDataType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login}
} as const)
type SetAuthUserDataType = ReturnType<typeof setAuthUserData>