import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import {SidebarContainer} from "../Sidebar/SidebarContainer";

type NavbarPropsType = {}
export const Navbar: React.FC<NavbarPropsType> = React.memo((props) => {


    return (
        <div className={s.navbar}>
            <div className={s.blockNavlink}>
                <NavLink to='/profile' className={s.item} activeClassName={s.active}>PROFILE</NavLink>
                <NavLink to='/dialogs' className={s.item} activeClassName={s.active}>DIALOGS</NavLink>
                <NavLink to='/users' className={s.item} activeClassName={s.active}>USERS</NavLink>
                <NavLink to='/music' className={s.item} activeClassName={s.active}>MUSIC</NavLink>
                <NavLink to='/news' className={s.item} activeClassName={s.active}>NEWS</NavLink>

            </div>
            <div className={s.sidebar}>
                <SidebarContainer/>
            </div>
        </div>
    )
})

