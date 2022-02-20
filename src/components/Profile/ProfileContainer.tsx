import React from "react";
import {AppStateType} from "../../redux/store";
import {Profile} from "./Profile";
import {setUserProfileInfo, UserProfileInfoType} from "../../redux/profile-reducer";
import axios from "axios";
import {connect} from "react-redux";


type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    MapStateToProps, {setUserProfileInfo})(ProfileContainer)