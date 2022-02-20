import React from "react";
import s from "./../../Profile.module.css";
import {UserProfileInfoType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";

type ProfileInfoPropsType={
    profile:UserProfileInfoType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType>= React.memo(({profile})=>{
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            {profile.fullName}
            <img src={profile.photos.large} alt=""/>
            <div>
                ava and my profile
            </div>
        </div>
    )
})
