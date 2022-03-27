import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '22c76d3a-d364-4963-9ac6-fcd4ad3cce7b'
        }
    }
)
export type GetUsersResponceType = {

}
export const usersApi= {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    getFollow(userId: number) {
        return instance.post(
            `follow/${userId}`)

    },
    getUnfollow(userId: number) {
        return instance.delete(
            `follow/${userId}`
        )
    }
}
export const authApi={
    me(){
        return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
    }
}

export const profileApi={
    getUserProfile(userId: number){
        return instance.get(`profile/`+userId)
            .then(response=>response.data)
    }
}