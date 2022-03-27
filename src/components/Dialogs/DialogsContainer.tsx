import React from 'react'
import {
    addDialogsTextActionCreate,
    DialogItemType,
    DialogsTextsType,
    updateDialogsMessageActionCreate
} from "../../redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    dialogItems: Array<DialogItemType>
    dialogTexts: Array<DialogsTextsType>
    newMessage: string
    isAuth: boolean
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogItems: state.dialogsPage.dialogItems,
        dialogTexts: state.dialogsPage.dialogTexts,
        newMessage: state.dialogsPage.newMessage,
        isAuth: state.auth.isAuth,
    }
}

type MapDispatchToPropsType = {
    addMessage: () => void
    onChangeMessage: (text: string) => void
}
const MapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {

    return {
        addMessage: () => {
            dispatch(addDialogsTextActionCreate())
        },

        onChangeMessage: (text: string) => {
            dispatch(updateDialogsMessageActionCreate(text))
        }

    }
}


export const DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    MapStateToProps, MapDispatchToProps)(Dialogs)