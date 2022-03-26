import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '4bbfb529-29e9-4c16-8345-eb48b7b9a01f'
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
    getAuthMe(){
        return instance.get('https://social-network.samuraijs.com/api/1.0/auth/me')
    }
}

export const profileApi={
    getUserProfile(userId: number){
        return instance.get(`profile/`+userId)
            .then(response=>response.data)
    }
}