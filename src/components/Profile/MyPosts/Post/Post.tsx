import React from "react";
import s from './../MyPosts.module.css'
import avatar from './../../../../assets/images/users3.png'

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostPropsType> =React.memo( ({message, likesCount}) => {
    return (
        <div className={s.post}>
            <img src={avatar} />
            {message}
            <div>
                like: {likesCount}
            </div>
        </div>
    )
})