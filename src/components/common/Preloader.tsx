import React from "react"
import preloader from '../../assets/images/preload.gif'
import s from './Preloader.module.css'

type PreloaderPropsType = {

}

export const Preloader: React.FC<PreloaderPropsType> = () => {

    return (
        <div className={s.preloaderStyle}>
            <img src={preloader}/>
        </div>
    )
}