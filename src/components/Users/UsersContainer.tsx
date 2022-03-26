import React from 'react'
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import Users from "./Users";
import {usersApi} from "../../api/api";
import users from "./Users";

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


type ResponseType = {
    items: UserType []
    totalCount: number
    error: string
}

class UsersContainer extends React.Component<UsersContainerPropsType, UserType[]> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.pageSize,this.props.currentPage)
            .then((data: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })

    }

    changeCurrentPage = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        usersApi.getUsers(this.props.pageSize,page)
            .then((data: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    getFollowCallback=(userId: number)=>{
        this.props.toggleFollowingProgress(userId, true)
        usersApi.getFollow(userId)
            .then((data:any)=>{
                if (data.resultCode===0){
                    this.props.follow(userId)
                }
                this.props.toggleFollowingProgress(userId, false)
        })
    }

    getUnfollowCallback=(userId: number)=>{
        this.props.toggleFollowingProgress(userId, true)
        usersApi.getUnfollow(userId)
            .then((data:any)=>{
                if (data.resultCode===0){
                    this.props.unfollow(userId)
                }
                this.props.toggleFollowingProgress(userId,false)
            })
    }

    render() {


        return (
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   changeCurrentPage={this.changeCurrentPage}
                   getFollowCallback={this.getFollowCallback}
                   getUnfollowCallback={this.getUnfollowCallback}
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
    followingInProgress: Array<number>
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}

type MapDispatchToPropsType = {
    follow: (iserId: number) => void
    unfollow: (iserId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (userId: number, isFetching: boolean)=>void
}

export default connect<MapStateToPropsType,MapDispatchToPropsType,{}, AppStateType>(
    MapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress,
    }
)(UsersContainer)