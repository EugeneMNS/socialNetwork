import React, {ChangeEvent} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'
import {ActionType,addDialogsTextActionCreate,DialogsPageType, updateDialogsMessageActionCreate} from "../../redux/dialogs-reducer";

type DialogsItemPropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogsItemPropsType> = ({id, name}) => {
    return (

        <NavLink className={s.item} activeClassName={s.active} to={'/dialogs/' + id}>{name}</NavLink>


    )
}

type MessagePropsType = {
    message: string | undefined
}

const Message: React.FC<MessagePropsType> = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = React.memo(({state, dispatch}) => {

    const dialogsItems = state.dialogItems.map( d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const dialogsTexts = state.dialogTexts.map( (t,i) => <Message key={i} message={t.message}/>)
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        dispatch(addDialogsTextActionCreate())
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>)=>{
    const text =e.currentTarget.value
        dispatch(updateDialogsMessageActionCreate(text))
    }
    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogItem}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {dialogsTexts}

                <div className={s.textarea}>
                    <textarea  value={state.newMessage} onChange={onChangeMessage}/>
                </div>
                <button onClick={addMessage}>add message</button>

            </div>

        </div>
    )
})