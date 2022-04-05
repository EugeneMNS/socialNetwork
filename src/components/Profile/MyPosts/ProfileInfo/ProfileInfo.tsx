import React from "react";
import s from "./../../Profile.module.css";
import {UserProfileInfoType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import avatarka from "../../../../assets/images/avatarka.jpg";
import ProfileStatus from "../ProfileInfo/ProfileStatus";

type ProfileInfoPropsType={
    profile:UserProfileInfoType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType>= React.memo(({profile})=>{
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.imgBlock}>
                {profile.photos.large? <img src={profile.photos.large}/>
                : <img src={avatarka}/>}
            </div>

            <div className={s.infoBlock}>
                <h3>{profile.fullName}</h3>
                <ProfileStatus status={'hi'}/>
                <div>{profile.lookingForAJobDescription}</div>
                <div>status</div>

                ava and my profile
            </div>

        </div>
    )
})
