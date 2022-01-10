import React, {ChangeEvent, LegacyRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post"
import {MessageType} from "../../../redux/MyState"

type MyPostPropsType = {
    messages: Array<MessageType>
    textMessage: string | undefined
    addPost: () => void
    changeTextMessage: (text: string | undefined) => void
}
export const MyPosts: React.FC<MyPostPropsType> = ({messages, textMessage, addPost, changeTextMessage}) => {
    const message = messages.map((m, i) => <Post key={i} message={m.message} likesCount={m.likesCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const clickPost = () => {
        addPost()
    }
    const onChangeText = () => {
        const text = newPostElement.current?.value
        changeTextMessage(text)
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
}