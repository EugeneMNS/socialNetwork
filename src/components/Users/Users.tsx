import React from 'react'
import {UserType} from "../../redux/users-reducer"
import s from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/users2.jpg'


type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

class Users extends React.Component<UsersPropsType, UserType[]> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}
        &page=${this.props.currentPage}`)
            .then((response: any) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    changeCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}
        &page=${page}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <div>
                <div>
                    {pages.map(p=>{
                        return(
                            <span key={p} className={this.props.currentPage===p ? s.selectedPage : ``}
                                  onClick={()=>this.changeCurrentPage(p)}>{p}</span>
                        )
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id} className={s.userContainer}>
                        <div>
                            <div>
                                {u.name}
                            </div>
                            <img className={s.avatar} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                            <div className={s.button}>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>FOLLOW</button>
                                    : <button onClick={() => this.props.follow(u.id)}>UNFOLLOW</button>}

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
}

export default Users