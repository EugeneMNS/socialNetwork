import React from 'react'
import {UserType} from "../../redux/users-reducer"
import s from './Users.module.css'
import {v1} from "uuid"

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void

}
export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: v1(),
                    fullName: 'Gleb',
                    userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoAFIKgHQuF7JPyT4CVoAcThYkDC3TZPvNA&usqp=CAU',
                    followed: true,
                    status: 'i am a best',
                    location: {
                        cityName: 'Dnepr',
                        countryName: 'Ukrane'
                    }
                },
                {
                    id: v1(),
                    fullName: 'Olga',
                    userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AuCaCDS8eeLRXGL0pFD9cIddYuHc8AJoSA&usqp=CAU',
                    followed: true,
                    status: 'loved girl',
                    location: {
                        cityName: 'Dnepr',
                        countryName: 'Ukrane'
                    }

                },
                {
                    id: v1(),
                    fullName: 'Serik',
                    userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoAFIKgHQuF7JPyT4CVoAcThYkDC3TZPvNA&usqp=CAU',
                    followed: true,
                    status: 'i am a good man',
                    location: {
                        cityName: 'Dnepr',
                        countryName: 'Ukrane'
                    }

                },
                {
                    id: v1(),
                    fullName: 'Dimich',
                    userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AuCaCDS8eeLRXGL0pFD9cIddYuHc8AJoSA&usqp=CAU',
                    followed: false,
                    status: 'Verry big motivator',
                    location: {
                        cityName: 'Minsk',
                        countryName: 'Belarus'
                    }

                },
                {
                    id: v1(),
                    fullName: 'Viktor',
                    userPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoAFIKgHQuF7JPyT4CVoAcThYkDC3TZPvNA&usqp=CAU',
                    followed: false,
                    status: 'do it',
                    location: {
                        cityName: 'Minsk',
                        countryName: 'Belarus'
                    }

                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id} className={s.userContainer}>
                    <div>
                        <div>
                            {u.fullName}
                        </div>
                        <img className={s.avatar} src={u.userPhoto} />
                        <div className={s.button}>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>FOLLOW</button>
                                : <button onClick={() => props.follow(u.id)}>UNFOLLOW</button>}

                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div>
                            My status:
                            {`\t ${u.status}`}
                        </div>
                        <div className={s.userLocation}>
                            <div>
                                City:
                                {u.location.cityName}
                            </div>
                            <div>
                                Country:
                                {u.location.countryName}
                            </div>


                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}