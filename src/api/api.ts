import axios, {AxiosResponse} from 'axios';
import {UserType} from "../redux/users-reducer";
import {UserProfileInfoType} from "../redux/profile-reducer";

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '22c76d3a-d364-4963-9ac6-fcd4ad3cce7b'
        }
    }
)
export type ResponseType<T={}> = {
            data: T
            resultCode: 0 | 1 | 10
            messages: string[]
}
type UsersResponseType={
    item: UserType[]
    totalCount: number
    error: string
}
export const usersApi= {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get<UsersResponseType>(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    getFollow(userId: number) {
        return instance.post<ResponseType>(
            `follow/${userId}`)

    },
    getUnfollow(userId: number) {
        return instance.delete<ResponseType>(
            `follow/${userId}`
        )
    }
}
export const authApi= {
    me() {
        return instance.get<ResponseType<{
            id: number, email: string, login: string
        }>>('auth/me')
            .then(response => response.data)
    },
    setLogin(payload: any) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {...payload})
            .then(res => res.data)
    },
    deleteLogin() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(res => res.data)

    }
}

export const profileApi={
    getUserProfile(userId: number) {
        return instance.get<UserProfileInfoType>(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId: number) {
        let pr = instance.get<string>(`profile/status/${userId}`)
            .then(res => res.data)
        return pr
    },
    changeUserStatus(status:string){
        return instance.put<ResponseType>(`profile/status/`, {status})
            .then(response => response.data)
    }
}