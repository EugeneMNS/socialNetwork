import React from "react";
import {AppStateType} from "../../redux/store";
import {Profile} from "./Profile";
import {setUserProfileInfo, UserProfileInfoType} from "../../redux/profile-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PropsType = {
    userId:string | undefined
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PropsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '1';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response: any) => {

                this.props.setUserProfileInfo(response.data)

            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: UserProfileInfoType | null
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return   {
        profile: state.profilePage.profile
    }
}

type MapDispatchToPropsType = {
    setUserProfileInfo: (profile: UserProfileInfoType) => void

}

const WithRouterProfileContainer = withRouter(ProfileContainer)
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    MapStateToProps, {setUserProfileInfo})(WithRouterProfileContainer)