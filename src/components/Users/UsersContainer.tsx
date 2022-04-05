import React, {ComponentType} from 'react'
import {
    follow,
    followSuccess,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    unfollowSuccess,

    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType, UserType[]> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    changeCurrentPage = (page: number) => {
       this.props.getUsers(this.props.pageSize, page)
    }

    getUnfollowCallback=(userId: number)=>{
        this.props.unfollow(userId)
    }
    getFollowCallback = (userId: number)=>{
        this.props.follow(userId)
    }

    render() {


        return (
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
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
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleFollowingProgress: (userId: number, isFetching: boolean)=>void
    getUsers:(pageSize:number, currentPage: number)=>void
    follow: (userId:number)=>void
    unfollow: (userId: number)=>void
}

export default compose<ComponentType>(
 connect<MapStateToPropsType,MapDispatchToPropsType,{}, AppStateType>(
    MapStateToProps,{getUsers, unfollow, follow,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingProgress,
    }),
 withAuthRedirect
)
 (UsersContainer)