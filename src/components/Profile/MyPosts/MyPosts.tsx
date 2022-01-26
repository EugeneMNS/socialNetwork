import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post"
import {ActionType, addPostActionCreate,changeTextMessageActionCreate, MessageType} from "../../../redux/profile-reducer"

type MyPostPropsType = {
    messages: Array<MessageType>
    textMessage: string | undefined
    dispatch: (action: ActionType) => void
}
export const MyPosts: React.FC<MyPostPropsType> = React.memo(({messages, textMessage, dispatch}) => {
    const message = messages.map((m, i) =>{
        return <Post key={i} message={m.message} likesCount={m.likesCount}/>
    })
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const clickPost = () => {
        dispatch(addPostActionCreate())
    }
    const onChangeText=(e: ChangeEvent<HTMLTextAreaElement>)=>{
        const text = e.currentTarget.value
        dispatch(changeTextMessageActionCreate(text))
    }
    return (
        <div className={s.myPost}>
            <div className={s.messageForm}>
                <div>
                    <textarea ref={newPostElement} value={textMessage} readOnly={false} onChange={onChangeText}/>
                </div>
                <div>
                    <button onClick={clickPost}>add post</button>
                </div>
            </div>
            {message}

        </div>
    )
})