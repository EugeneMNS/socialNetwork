import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ActionType,ProfilePageType} from '../../redux/state'

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfilePropsType> =React.memo( ({state, dispatch}) => {

    return (
        <div className={s.profile}>
            <img src={'https://www.captainbrianonthewater.com/wp-content/uploads/2012/03/download-13.jpg'} />
            <div>
ava and my profile
            </div>
            <MyPosts messages={state.messages} textMessage={state.textMessage}
                     dispatch={dispatch}/>
        </div>
    )
})
