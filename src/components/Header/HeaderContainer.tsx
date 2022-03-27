import React from 'react'

import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuthUserData} from './../../redux/auth-reducer'


type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData: () => void
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    MapStateToProps, {getAuthUserData})(HeaderContainer)