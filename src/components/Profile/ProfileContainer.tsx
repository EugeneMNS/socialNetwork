import React from "react";
import {AppStateType} from "../../redux/store";
import {Profile} from "./Profile";
import {getUserProfile,setUserProfileInfo, UserProfileInfoType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect,RouteComponentProps, withRouter} from "react-router-dom";
import {profileApi} from '../../api/api';

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
    }

    render() {
        if (this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: UserProfileInfoType | null
    isAuth:boolean
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return   {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void

}

const WithRouterProfileContainer = withRouter(ProfileContainer)
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    MapStateToProps, {getUserProfile})(WithRouterProfileContainer)