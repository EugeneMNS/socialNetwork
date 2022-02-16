import React from 'react'
import {
    FollowAC,
    SetCurrentPageAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    ToggleIsFetchingAC,
    UnFollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import Users from "./Users";
import axios from "axios";

type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType


type ResponseType = {
    items: UserType []
    totalCount: number
    error: string
}

class UsersContainer extends React.Component<UsersContainerType, UserType[]> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })

    }

    changeCurrentPage = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return (
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   changeCurrentPage={this.changeCurrentPage}
            />
        )
    }
}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    currentPage: number
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

type MapDispatchToPropsType = {
    follow: (iserId: number) => void
    unfollow: (iserId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
const MapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(UnFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(SetCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }
}
export default connect<MapStateToPropsType,MapDispatchToPropsType,{}, AppStateType>
(MapStateToProps, MapDispatchToProps)(UsersContainer)