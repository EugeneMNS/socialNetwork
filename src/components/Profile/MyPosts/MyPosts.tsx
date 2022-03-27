import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from './MyPosts/Post';
import {MessageType} from "../../../redux/profile-reducer";


type MyPostPropsType = {
    posts: Array<MessageType>
    textMessage: string
    addPost: () => void
    onChangeText: (text: string) => void
}


export const MyPosts: React.FC<MyPostPropsType> = React.memo(({
                                                                  posts,
                                                                  textMessage,
                                                                  onChangeText,
                                                                  addPost
                                                              }) => {
    const postsMessages = posts.map((p, i) => {
        return <Post key={i} message={p.message} likesCount={p.likesCount}/>
    })


    const clickPost = () => {
        addPost()
    }
    const ChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        onChangeText(text)
    }
    return (
        <div className={s.myPost}>
            <div className={s.messageForm}>
                <div>
                    <textarea value={textMessage} onChange={ChangeText}/>
                </div>
                <div>
                    <button onClick={clickPost}>add post</button>
                </div>
            </div>
            {postsMessages}

        </div>
    )
})
