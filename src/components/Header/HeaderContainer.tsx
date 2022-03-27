import React from 'react'

import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Header} from "./Header";
import axios from "axios";
import {setAuthUserData} from './../../redux/auth-reducer'
import {authApi} from "../../api/api";

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authApi.getAuthMe()
            .then((data: any) => {

                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }

            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth

    }
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null) => void
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    MapStateToProps, {setAuthUserData})(HeaderContainer)