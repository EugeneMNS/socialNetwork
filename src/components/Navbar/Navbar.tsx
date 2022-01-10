import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarType} from '../../redux/MyState'
import s from './Navbar.module.css'

type NavbarPropsType = {
    state: SidebarType
}
export const Navbar: React.FC<NavbarPropsType> = ({state}) => {

    const sidebarItems = state.friends.map(i => <SidebarUser key={i.id} name={i.name} src={i.src}/>)

    return (
        <div className={s.navbar}>
            <div className={s.blockNavlink}>
                <NavLink to='/profile' className={s.item} activeClassName={s.active} >PROFILE</NavLink>
                <NavLink to='/dialogs' className={s.item} activeClassName={s.active} >DIALOGS</NavLink>
                <NavLink to='/music' className={s.item} activeClassName={s.active} >MUSIC</NavLink>
                <NavLink to='/news' className={s.item} activeClassName={s.active} >NEWS</NavLink>

            </div>
            <div className={s.sidebar}>
                {sidebarItems}
            </div>
        </div>
    )
}

type SidebarPropsType = {
    name: string
    src: string
}
const SidebarUser: React.FC<SidebarPropsType> = ({name, src}) => {

    return <div className={s.friend}>

        <img src={src} />
        <div>{name}</div>
    </div>
}
