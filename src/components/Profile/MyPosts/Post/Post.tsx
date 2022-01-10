import React from "react";
import s from './../MyPosts.module.css'

type PostPropsType = {
    message: string | undefined
    likesCount: number
}

export const Post: React.FC<PostPropsType> = ({message, likesCount}) => {
    return (
        <div className={s.post}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxukAEfWgGFG2o--9YtkAS_kJjHN5PiIE7pQ&usqp=CAU'} />
            {message}
            <div>
                like: {likesCount}
            </div>
        </div>
    )
}