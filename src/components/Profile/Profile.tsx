import React from 'react'
import s from './Profile.module.css'
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {


}

export const Profile: React.FC<ProfilePropsType> = React.memo(() => {

    return (
        <div className={s.profile}>
            <img src={'https://www.captainbrianonthewater.com/wp-content/uploads/2012/03/download-13.jpg'}/>
            <div>
                ava and my profile
            </div>
            <MyPostsContainer />
        </div>
    )
})
