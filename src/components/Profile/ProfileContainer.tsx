import React, {ComponentType} from "react";
import {AppStateType} from "../../redux/store";
import {Profile} from "./Profile";
import {
    changeUserProfileStatus,
    getUserProfile,
    getUserProfileStatus,
    getUserStatus,
    UserProfileInfoType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux"


type PropsType = {
    userId:string | undefined
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PropsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
        this.props.getUserProfileStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                                     status={this.props.status}
                                     changeUserProfileStatus={this.props.changeUserProfileStatus}/>
        )
    }
}

type MapStateToPropsType = {
    profile: UserProfileInfoType | null
    status: string
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return   {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserProfileStatus: (userId: number) => void,
    changeUserProfileStatus: (status: string) => void,

}

export default  compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
        MapStateToProps, {getUserProfile, getUserProfileStatus, changeUserProfileStatus}),
    withRouter,
    withAuthRedirect
    )
(ProfileContainer)