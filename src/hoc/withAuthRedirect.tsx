import {AppStateType} from "../redux/store";
import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType =>{
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Componet: ComponentType<T>){
    const RedirectComponent = (props: MapStateToPropsType) =>{
        let {isAuth, ...restProps}= props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Componet {...restProps as T}/>
    }
    const ConnectRedirectComponent = connect(MapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent
}