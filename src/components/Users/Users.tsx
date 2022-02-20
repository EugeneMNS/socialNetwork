import React from 'react'
import {UserType} from "../../redux/users-reducer"
import s from './Users.module.css'
import {Preloader} from "../common/Preloader";
import userPhoto from '../../assets/images/users2.jpg'
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    changeCurrentPage: (pageNumber: number) => void
}

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

const Users: React.FC<UsersPropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {props.isFetching && <Preloader/>}
            <div>
                {pages.map(p => {
                    return (
                        <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                              onClick={() => props.changeCurrentPage(p)}>{p}</span>
                    )
                })}
            </div>
            )
            {
                props.users.map(u => <div key={u.id} className={s.userContainer}>
                    <div>
                        <div>
                            {u.name}
                        </div>
                        <NavLink to={'/profile'}>
                         <img className={s.avatar} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </NavLink>
                        <div className={s.button}>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>FOLLOW</button>
                                : <button onClick={() => props.follow(u.id)}>UNFOLLOW</button>}

                        </div>
                    </div>
                    <div className={s.userInfo}>

                        <div>
                            Country:
                            {`u.location.countryName`}
                        </div>
                        <div className={s.userLocation}>
                            <div>
                                City:
                                {'u.location.cityName'}
                            </div>
                            <div>
                                Country:
                                {'u.location.countryName'}
                            </div>


                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users